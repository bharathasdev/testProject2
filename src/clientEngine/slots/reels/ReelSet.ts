import DisplayObject from "../../core/display/DisplayObject";
import ReelSymbol from "./ReelSymbol";
import Stage from "../../core/graphics/Stage";
import Utils from "../../core/utils/Utils";
import GameConfig from '../../../GameConfig';
import ReelEvents from '../../core/events/ReelEvents';
import ReelsetEvents from '../../core/events/ReelsetEvents';
import Listener from '../../core/events/Listener';
import Reel from "./Reel";

/**
 * This class is responsible to build the reelset with reels
  */
export default class Reelset extends DisplayObject{


    private backgroundColor:string = null; //0x1099bb

    /** Number of the reels in the Reelset */
    private numberOfReels:number = 5;

    /** Reelset width. Default is 500.*/
    private containerWidth:number = 500;
    /** Reelset Height. Default is 400.*/
    private containerHeight:number = 400;
    /** Reelset reel's stopOrder. This descript in which order the reel has to be stopped. Default value is [0, 1, 2, 3, 4]*/
    private reelStopOrder = [ 0, 1, 2, 3, 4];
    /** Reelset reel's startOrder. This descript in which order the reel has start. Default value is [0, 1, 2, 3, 4].*/
    private reelStartOrder = [ 0, 1, 2, 3, 4];
    
    private selectable = null;
    private hitArea = null;
    /** this sets the delay between each reel to start spin. default value is [0, 200, 400, 600, 800]. To start all reels 
    * at the same time you can set the array to [0, 0, 0, 0, 0]. Each value in the array represent the reel by index
    */
    private interReelSpinDelay = [0, 200, 400, 600, 800 ];
    /** this sets the delay between each reel to stop spin. default value is [0, 200, 400, 600, 800]. To stop all reels 
    * at the same time you can set the array to [0, 0, 0, 0, 0]. Each value in the array represent the reel by index
    */
    private interReelStopDelay = [0, 200, 400, 600, 800 ];

    /** this property hold the total list of visible symbols within the aperture from all the reels
    */
    private apertureSymbols = [];
    /** this property hold the total list of extra symbols hidden on Top of the reels
    */
    private symbolsOnTop = [];
    /** this property hold the total list of extra symbols hidden at the Bottom of the reels
    */
    private symbolsAtBottom = [];

    /** this describes the number of symbols on the top. This is also known as offApertureSymbols
     * The default value is 2, which means the reel strip will have 2 extra symbols on top of the first row. which can be only seen during ramp down / up.
    */
    private numberOfRowsOnTop = 2;
    /** this describes the number of symbols at the Bottom. This is also known as offApertureSymbols
    * The default value is 2, which means the reel strip will have 2 extra symbols on top of the first row. which can be only seen during ramp down / up.
    */
    private numberOfRowsAtBottom = 2;
    /** this describes the number of symbols in view also known as Aperture symbols.
    * The default value is 4, which means the reel strip will have 2 extra symbols on top of the first row. which can be only seen during ramp down / up.
    */
    private numberOfRowsInView = 4;
    
    private stopCounter = 0;

    private reelSpinStartCount = 0;
    private reelSpinFinishCount = 0;

    private stopPositionOffset = 0;

    /** this sets the stop positions as an array
    */
    private stopPositions = [0,0,0,0,0];

    /** The below property will make sure the reels will stop only after the previous reel is stopped
    * when using slow down and anticipation this property has to be set to true
    * the below propperty will have impact on interReelStop Timmings and Slow down functionality of the reels
    */
    private waitForPreviousReelToStop:boolean = true; 

    /** This property controls how to read and populate the reels
    * we can build the reels by reading values left to right(Forwards) or right to left(Backwards)
    */
    static REEL_STRIP_READ_VALUES_BACKWARDS:boolean = true; 

    private isSpinning:boolean = false;



    // default reel data
    private reelConfigData = {
        
        //"id":"reel1",
        "x":200,
        "y":35,
        "numOfSymbolsTop":2,
        "numOfSymbolsBottom":2,
        "numberOfSymbolsinView":4,
        "reelWidth":280,
        "reelHeight":875,
        "symbolWidth":120 * 2,
        "symbolHeight":220,
        "spacingBetweenSymbols":0,
        "stopPositionOffset":0,
        "target_StopSpeed":1,
        "reelStartEasingDuration":2,
        "reelStopEasingDuration":1,
        "startDelay":0,
        "stopDelay":0,
        "maxReelSpinSpeed":30,
        "spinSpeed":30,
        "backgroundFillColor":"0x000000",
        "backgroundX":-72,//-137,
        "backgroundY":-125,
        "slowDownMultiplier":1.5, // 1 to 1.7
        "enableBounceAtStop":true,
        "symbolsOffsetX":0,
        "symbolsOffsetY":-590, // to adjust / nudge the reels without affecting anyother alignemnt
        "maskData":{"x":-138, "y":-250, "width":280, "height":855},
        //"maskData":{"x":134, "y":0, "width":280, "height":850},
        //"debugMode":true
    }

    /** This holds the reference of all the reels as an Array */
    private reels = [];
    /** This holds the X position for all the reels */
    private reelsXPos = [];
    /** This holds the Y position for all the reels */
    private reelsYPos = [];
    /** This holds the offset X position for all the reels */
    private offsetX = [];
    /** This holds the offset Y position for all the reels */
    private offsetY = [];
    /** This is the displayobject which is container for the reelset */
    private container = null;
    /** This enables the debug mode which will be easier to build/adjust the reelset */
    private debugMode = null;
    /** This controls the winlines and win behaviour for the reelset. Each reel set must have a win manager. A win manager can be shared across the reelset or can have a dedicated win manager. The will be useful when you have different shaped winlines and needs different winline behaviour for basegame, bonus and free spins */
    private winManager = null;

   
    /**
    * Constructor method you can pass an configObject as initData with bundle of  properties to create the reelset
    * @param initData - object which holds settings to create the reelset
    * 
    * Usage:
    * 
    *  Sample Data Object
    * ```typescript
    * "reelsetConfig":{
    *    "scale":0.5,
    *    "reelsetWidth":1600, 
    *    "reelsetHeight":920,
    *    //"backgroundColor":null, //0x1099bb
    *    "numberOfReels": 5,
    *    "defaultStopPositions":[5, 5, 5, 5, 5],
    *    "reelStopOrder":[ 0, 1, 2, 3, 4],        
    *    "reelStartOrder":[ 0, 1, 2, 3, 4],          
    *    "interReelSpinDelay":[0, 200, 400, 600, 800 ],
    *    "interReelStopDelay":[150, 150, 150, 150, 150 ],     
    *    "numberOfRowsOnTop":2,
    *    "numberOfRowsAtBottom":2,
    *    "numberOfRowsInView":4,
    *    "id":"mainReelset",
    *    "reelsXPos":[213, 511, 804, 1103, 1400],
    *    "reelsYPos":[300, 300, 300, 300, 300],
    *    "offsetX":[0, 0, 0, 0, 0],
    *    "offsetY":[5, 5, 5, 5, 5],
    *    "stopPositionOffset":0, // this can be used to fudge the reel Stop Position
    *    "debugMode":false,
    *    "reelConfigData":{
    *        "scale":0.5,
    *        "reelWidth":280,
    *        "reelHeight":875,
    *        "symbolWidth":240,
    *        "symbolHeight":220,
    *        "spacingBetweenSymbols":0, // Space between symbols
    *        "targetStopSpeed":5, // least speed that reel can spin
    *        "reelStartEasingDuration":5,
    *        "reelStopEasingDuration":1,
    *        "maxReelSpinSpeed":50, // max Reel Spin Speed, this can be the same as spin speed
    *        "spinSpeed":50, // reelspin speed
    *        "backgroundFillColor":"0x000000", // fill color for the Reels background
    *        "backgroundX":-72,// to adjust the fill for the reels,
    *        "backgroundY":-125, // to adjust the fill for the reels,
    *        "slowDownMultiplier":1.5, // rate of slow down 1 to 1.7
    *        "enableBounceAtStart":true,
    *        "enableSlowStartReel":true,
    *        "enableBounceAtStop":true, // enables the bounce at stop
    *        "symbolsOffsetX":0, // to adjust / nudge the reels without affecting anyother alignemnt
    *        "symbolsOffsetY":-590, // to adjust / nudge the reels without affecting anyother alignemnt
    *        "maskData":{"x":-138, "y":-250, "width":280, "height":855}, // Aperture view size relative to each reel
    *        "reelStartEaseFunction":" Back.easeIn.config(1.2)",
    *        "reelStopEaseFunction":"Bounce.easeOut",
    *        //"debugMode":true // Draws  the fill for the reels and reelsets. This can be used to setup the reels Aperture view size relative to each reel
    *
    *    },
    *    "lom":{
    *        "landscape":{
    *            x:92, 
    *            y:32,
    *            'scale':0.5
    *        },
    *        "portrait":{
    *            'x':58,
    *            'y':347,
    *            'scale':0.29
    *        }
    *    },
    *
    *
    *    
    *},
    *   // TRY PLAYING WITH THESE METHODS TO UNDERSTAND HOW IT AFFECTS THE IMPACT ON REELS' SPIN
    *   this.myReelSet = new Reelset(reelsetConfig);
    *   stage.addChild(this.myReelSet.node); 
    *   this.myReelSet.setScale(0.5, 0.5);
    *   this.myReelSet.setXY(92, 32);
    *   this.myReelSet = new Reelset(reelsetConfig);
    *   //settings for right to left
    *   this.myReelSet.setReelStartOrder([4, 3, 2, 1, 0]);
    *   this.myReelSet.setInterReelSpinDelay([0, 200, 400, 600, 800]); // always in ascending order works based on the start reel order
    *   this.myReelSet.setReelStopOrder([4, 3, 2, 1, 0]);
    *   this.myReelSet.setInterReelStopDelay([0, 1000, 1000, 1000, 1000]);// always in ascending order works based on the start reel order
    *   
    *   // settings for left to right
    *   this.myReelSet.setReelStartOrder([0, 1, 2, 3, 4]);
    *   this.myReelSet.setInterReelSpinDelay([0, 200, 400, 600, 800 ]);
    *
    *
    *   this.myReelSet.setReelStopOrder([0, 1, 2, 3, 4]);
    *   this.myReelSet.setInterReelStopDelay([0, 1000, 1000, 1000, 1000]);
    *
    *   //this.myReelSet.setReelSlowDown([false, false, false, false, true]);
    *   this.myReelSet.setReelSlowDown([false, false, true, false, true]);
    *   //this.myReelSet.setReelSlowDownByReel(3, true);
    *   //this.myReelSet.setReelSlowDownByReel(4, true); 
    *
    *
    *
    *   // when there is a reel slow down
    *   //when there is an anticipation in the game the reels can't stop at the same time        
    *   this.myReelSet.setReelStartOrder([2, 4 ,3, 1, 0]);
    *   this.myReelSet.setInterReelSpinDelay([0, 200, 400, 600, 800 ]);
    *   this.myReelSet.setReelStopOrder([2,4,3,1,0]);
    *   this.myReelSet.setInterReelStopDelay([0, 0, 0, 0, 0]); // for all the reels to stop at the same time
    *
    *   this.myReelSet.setReelSlowDown([false, false, false, false, true]); // mesthod 1 to enable reel slow down
    *
    *
    *   // reelIndex, slowdown set to true, speed modifier, number of symbols to fudge
    *   //!!!!In the above last parameter you should use positive values like "5" for forward reading and negative values like -5 for backward value reading
    *   this.myReelSet.setReelSlowDownByReel(4, true, 1, 5); // recommended method 2 to take full control of reel slow down with reel by reel basis
    * 
    *  // using the methods from reelset
    *  console.log("List of Aperture symbol in reel 0"+ this.myReelSet.getReelByIndex(0).getApertureSymbols());
    *  console.log("List of symbol in the Reelset:", this.myReelSet.getApertureSymbols());
    *  console.log("onReelsetSpinFinish Top Symbols:", this.myReelSet.getSymbolsOnTop());
    *  console.log("Returns Bottom Symbols:", this.myReelSet.getSymbolsAtBottom());
    *  console.log("return symbol name by position:", this.myReelSet.getSymbolByPosition(18));
    * 
    * 
    *  console.log("onReelsetSpinFinish", this.myReelSet.getApertureSymbols());
    *  console.log("onReelsetSpinFinish Top Symbols", this.myReelSet.getSymbolsOnTop());
    *  console.log("onReelsetSpinFinish Bottom Symbols", this.myReelSet.getSymbolsAtBottom());
    *
    *
    *  // The below lines of code explain the way to access the symbols by position from the reelset 
    *  // and triggerring various animation from and on the symbols
    *
    *  // playing landing animation
    *  this.myReelSet.getSymbolByPosition(18).playLandingAnimation();
    *
    *
    *   // playing move animation
    *  this.myReelSet.getSymbolByPosition(18).playMoveAnimation();
    *
    *
    *   // playing a win animation
    *   this.myReelSet.getSymbolByPosition(18).playWinAnimation();
    *
    *   // playing a different animation on a symbol from the same atlas
    *   this.myReelSet.getSymbolByPosition(18).playAnimationById("ten");
    *
    *
    *   // playing a different animation on a symbol from a different atlas
    *   // 1. set the static animation for a symbol by a symbolname from different atlas. This will rebuild the symbol to assign new atlas
    *   // 2. now you can play the animation from the new atlas
    *   this.myReelSet.getSymbolByPosition(18).setStaticAnimation("teddy"); // Symbol Name as parameter
    *   this.myReelSet.getSymbolByPosition(18).playAnimationById("star_win"); // Animation name as parameter
    * 
    * ```
    */

    public constructor(initData){
        super(initData);

        //"width":1600, "height":920
        this.containerWidth = Utils.checkNullUndefined(this.initData.reelsetWidth, this.reelsetWidth); // used only for the debug purpose
        this.containerHeight = Utils.checkNullUndefined(this.initData.reelsetHeight, this.reelsetHeight); // used only for the debug purpose

        this.numberOfReels = Utils.checkNullUndefined(this.initData.numberOfReels, this.numberOfReels); 
        this.reelStopOrder = Utils.checkNullUndefined(this.initData.reelStopOrder, this.reelStopOrder); 
        this.reelStartOrder = Utils.checkNullUndefined(this.initData.reelStartOrder, this.reelStartOrder); 

        this.interReelSpinDelay = Utils.checkNullUndefined(this.initData.interReelSpinDelay, this.interReelSpinDelay);
        this.interReelStopDelay = Utils.checkNullUndefined(this.initData.interReelStopDelay, this.interReelStopDelay);

        this.reelsXPos = Utils.checkNullUndefined(this.initData.reelsXPos, this.reelsXPos); 
        this.reelsYPos = Utils.checkNullUndefined(this.initData.reelsYPos, this.reelsYPos); 
        this.offsetX = Utils.checkNullUndefined(this.initData.offsetX, this.offsetX);
        this.offsetY = Utils.checkNullUndefined(this.initData.offsetY, this.offsetX);

        // passing data into reels config from reelsetconfig
        
        this.reelConfigData = Utils.checkNullUndefined(this.initData.reelConfigData, this.reelConfigData);

        this.numberOfRowsOnTop = Utils.checkNullUndefined(this.initData.numberOfRowsOnTop, this.numberOfRowsOnTop);
        this.reelConfigData.numOfSymbolsTop = this.numberOfRowsOnTop;

        this.numberOfRowsAtBottom = Utils.checkNullUndefined(this.initData.numberOfRowsAtBottom, this.numberOfRowsAtBottom);
        this.reelConfigData.numOfSymbolsBottom = this.numberOfRowsAtBottom;

        this.numberOfRowsInView = Utils.checkNullUndefined(this.initData.numberOfRowsInView, this.numberOfRowsInView);
        this.reelConfigData.numberOfSymbolsinView = this.numberOfRowsInView;

        this.stopPositionOffset = Utils.checkNullUndefined(this.initData.stopPositionOffset, this.stopPositionOffset);
        this.reelConfigData.stopPositionOffset = this.stopPositionOffset;
       
        this.debugMode = Utils.checkNullUndefined(this.initData.debugMode, this.debugMode);

        this.reelConfigData.debugMode = this.debugMode;
       
    }

    /**
    * @ignore
    */
    public init()
    {
        super.init();
        this.setup();
    }

    
    public setupEvents()
    {
        Listener.registerEvent(ReelsetEvents.REELSET_SPIN_START);
		Listener.registerEvent(ReelsetEvents.REELSET_SPIN_FINISH);
    }

    private setupEventListeners()
    {
        Listener.addEventListener(ReelEvents.REEL_SPIN_START, (p)=>{this.onReelSpinStart(p)});
        Listener.addEventListener(ReelEvents.REEL_SPIN_FINISH, (p)=>{this.onReelSpinFinish(p)});
    }

    private setupTweens()
    {

    }

    private setup()
    {
        let containerData = { "id":"ReelsContainer", "x":0, "y":0 };
        if(this.debugMode)
        {
           containerData.alpha = 0.5;
           containerData.fillColor = "0x00FF00";
           containerData.width = this.containerWidth;
           containerData.height = this.containerHeight;

        }

        this.container = new DisplayObject(containerData);
        this.container.init();

        this.addChild(this.container);
        this.createReels();
        this.setupEvents();
        this.setupEventListeners();
        
    }

    private createReels()
    {
        

        for(let i = 0; i <this.numberOfReels; i++ )
        {
            this.reelConfigData.id = "Reel"+i;
            let reelObj = new Reel(this.reelConfigData);
            reelObj.init();

            this.reels.push(reelObj );
            this.container.addChild(reelObj);
            reelObj.reelIndex = i;
            reelObj.setXY(this.reelsXPos[i]+ this.offsetX[i], this.reelsYPos[i]+ this.offsetY[i])
            reelObj.setStartDelay(this.interReelSpinDelay[i]); // converting milliseconds to decimals. Ex - 200ms to 0.2sec and so on
            reelObj.stopReelAtPos(this.initData.defaultStopPositions[i]); // converting milliseconds to decimals. Ex - 200ms to 0.2sec and so on
            //interReelStopDelay
        }
    }

    private resetPropertiesBeforeStart()
    {
        this.apertureSymbols = [];
        this.symbolsOnTop = [];
        this.symbolsAtBottom = [];

        this.stopPositions = [];
        this.stopCounter = 0;

        this.reelSpinStartCount = 0;
        this.reelSpinFinishCount = 0;
    }

    public setWinManager(winManager)
    {
        this.winManager = winManager;
    }

    public getWinManager()
    {
        return this.winManager;
    }


    public removeWinManager()
    {
        this.winManager = null;
    }

    /**
    * This method starts spinnning the Reelset
    * 
    */

    public startSpin()
    {
        this.isSpinning = true;
        this.resetPropertiesBeforeStart();
        for(let i = 0; i <this.numberOfReels; i++ )
        {
            if(this.reelStartOrder[i] || this.reelStartOrder[i] === 0)
            {
                this.reels[this.reelStartOrder[i]].startSpin();
            }
            
           
            
        }
    }

    /**
    * This method stops the Reelset
    * 
    */
    public stopSpin()
    {
        this.stopCounter = 0;
        if(this.waitForPreviousReelToStop)
        {
            this.triggerReelStopByIndex(0);
        }
        else
        {
            this.triggerStop();
        }
        
    }

    /**
    * This method set the stop Position as an Array for all reels the Reelset
    * @param stopPosArr array with values for reels in case of 5 reels - [0, 5, 6, 7, 8]
    */
    public setStopPositions(stopPosArr)
    {
        this.stopPositions = stopPosArr;
        
        for(let i = 0; i< this.numberOfReels; i++)
        {
            this.reels[i].setReelStopPos(this.stopPositions[i]);
        }
        
    }

    /**
    * This method sets the order to start the reels as as an Array for all reels the Reelset
    * @param arrStart array with reel Index default [ 0, 1, 2, 3, 4] first reel(0) starts first.
    * value of [2,3,4,1,0] - The reelIndex of 2  will start first and 0 will start last
    */
    public setReelStartOrder(arrStart)
    {
        this.reelStartOrder =  arrStart;
         
    }

    /**
    * This method sets the order to stop the reels as an Array for all reels the Reelset
    * @param arrStop array with reel Index default [ 0, 1, 2, 3, 4] first reel(0) stops first.
    * value of [2,3,4,1,0] - The reelIndex of 2  will stop first and 0 will stop last
    */
    public setReelStopOrder(arrStop)
    {
        this.reelStopOrder = arrStop;
    }

    /**
    * This method sets the start delay for each reel spin as an array
    * @param delayArray array of delay in milliseconds
    * value of [0, 200, 400, 600, 800] - delay for the first reel is 0 and the last reel is 800
    */
    public setInterReelSpinDelay(delayArray)
    {
        this.interReelSpinDelay =  delayArray;
        for(let i = 0; i <this.numberOfReels; i++ )
        {
            this.reels[this.reelStartOrder[i]].setStartDelay(this.interReelSpinDelay[i]);
        }
         
    }

    /**
    * This method sets the delay between each reel stop as an array
    * @param delayArray array of delay in milliseconds
    * value of [150, 150, 150, 150, 150] - delay for the first reel is 150 and the last reel is 800
    */
    public setInterReelStopDelay(delayArray)
    {
        this.interReelStopDelay = delayArray;
        for(let i = 0; i <this.numberOfReels; i++ )
        {
            this.reels[this.reelStartOrder[i]].setStopDelay(this.interReelStopDelay[i]);
        }
    }


    /**
    * This method sets the slow down as an array
    * @param arrSlowDown array of slow down 
    * value of [false, false, true, false, true] - will slow down the middle and the  last reel 
    */
    public setReelSlowDown(arrSlowDown=[false, false, false, false, false])
    {
        for(let i = 0; i <this.numberOfReels; i++ )
        {
            this.reels[i].setReelSlowDown(arrSlowDown[i]);
        }
    }

    /** @hidden */
    private setReelSlowDownMultiplier(arrMultiplier = [1, 1, 1, 1, 1])
    {
        for(let i = 0; i <this.numberOfReels; i++ )
        {
            if(arrMultiplier[i])
            {
                this.reels[i].setReelSlowDownMultiplier(arrMultiplier[i]);
            }
            
        }
    }


    // returns the reel by Index usually values range from ( 0 to 4) ;
    /**
    * This method gets the reelIndex by index
    * @param reelIndex this takes index start from 0
    */
    public getReelByIndex(reelIndex:number)
    {
        return this.reels[reelIndex];
    }

    /**
    * This method sets the reel slowDown by reel the reelIndex by index
    * @param index this takes reel index as parameter to slowdown
    * @param value takes true or false - enable and disable the reel slowdown
    * @param slowDownMultiplier this takes the multiplier as value
    * @param extraSymbolsToAdd this requires and controls the extra symbols to add to acheive a smooth slow down
    * This parameter  should be positive values like "5" if Reelset.REEL_STRIP_READ_VALUES_BACKWARDS is set to false  and negative values like -5, if Reelset.REEL_STRIP_READ_VALUES_BACKWARDS is set to true.
    * Refer [[Reelset.REEL_STRIP_READ_VALUES_BACKWARDS]]  which will have impact 
    * 
    * ``` typescript
    * 
    
    *   this.myReelSet.setReelSlowDownByReel(4, true, 1, 5); // recommended method 2 to take full control of reel slow down with reel by reel basis
    * ```
    */
    public setReelSlowDownByReel(index:number, value:boolean, slowDownMultiplier:number, extraSymbolsToAdd:number = 10)
    {
        let reel =  this.getReelByIndex(index);
        reel.setReelSlowDown(value);
        reel.setReelSlowDownMultiplier(slowDownMultiplier);
        reel.setExtraSybolsForReelSlowDown(extraSymbolsToAdd);
    }

    public setApertureSymbols()
    {
        for(let reelIndex = 0; reelIndex <this.numberOfReels; reelIndex++ )
        {
            this.apertureSymbols.push(this.reels[reelIndex].getApertureSymbols());
        }
    }

    /**
    * This method returns the array of symbols in aperture visible symbol 
    * @returns a list of symbols in the aperture
    */

    public getApertureSymbols()
    {
        return this.apertureSymbols;
    }

    /**
    * This method returns the array of symbols on the top of the first row
    * @returns a list of non visible symbols on the top of the first row
    */
    public getSymbolsOnTop()
    {
                
        for(let reelIndex = 0; reelIndex <this.numberOfReels; reelIndex++ )
        {
            this.symbolsOnTop.push(this.reels[reelIndex].getSymbolsOnTop());
        }
        
        return this.symbolsOnTop;
    }

    /**
    * This method returns the array of symbols at the bottom of the last row 
    * @returns a list of non visible symbols at the bottom of the last row 
    */
    public getSymbolsAtBottom()
    {
               
        for(let reelIndex = 0; reelIndex <this.numberOfReels; reelIndex++ )
        {
            this.symbolsAtBottom.push(this.reels[reelIndex].getSymbolsAtBottom());
        }
        
        return this.symbolsAtBottom;
    }

    /**
    * This method gets Row and Col and it takes position as input
    * @param position - index as position
    * @returns an array [row, col]
    */
    public getRowColByPosition(position)
    {
        let col = position % this.numberOfReels;
        let row = Math.floor(position/this.numberOfReels);
        return  [row, col]
    }

    
    /**
    * This method returns the symbol based on the position
    * @param position - index as position
    * @returns the symbol on the position
    */
    public getSymbolByPosition(position)
    {
        let coordinates = this.getRowColByPosition(position);
        let rowIndex = coordinates[0];
        let reelIndex = coordinates[1];

        return this.apertureSymbols[reelIndex][rowIndex];
    }
    

    /**
    * @hidden
    */
    private triggerStop()
    {
        if(this.stopCounter <= (this.numberOfReels-1))
        {
            setTimeout(()=>{ 
                             
                this.reels[this.reelStopOrder[this.stopCounter]].stopSpin();
                this.stopCounter++
                this.triggerStop();

            }, this.interReelStopDelay[this.stopCounter]);
        }
        else
        {
            console.log("All done")
        }
        
    }

    /**
    * @hidden
    */
    private triggerReelStopByIndex(pIndex)
    {
        if(this.stopCounter <= (this.numberOfReels-1))
        {  /*
            this.reels[this.reelStopOrder[pIndex]].stopSpin();
            this.stopCounter++;
          */
            // DO WE NEEED A TIME OUT OR DELAY BETWEEN THE REELS,
            //  IF THE REELS ARE WAITING FOR THE PREVIOUS REEL TO STOP ????
            setTimeout(()=>{ 
                
                this.reels[this.reelStopOrder[pIndex]].stopSpin();
                this.stopCounter++;

            }, this.interReelStopDelay[this.stopCounter]);
            
        }
    }



    private onReelSpinStart(p)
    {
        console.log("------ onReelSpinStart from Reelset--------"+  p.target.id);
        if(this.reelSpinStartCount === 0)
        {
            Listener.dispatchEvent(ReelsetEvents.REELSET_SPIN_START, {target:{ id:this.id, reelset:this}}); 
        }
        this.reelSpinStartCount++;
    }

    private onReelSpinFinish(p)
    {
        console.log("------ onReelSpinFinish from Reelset --------" + p.target.reel.reelIndex);
        let reel = p.target.reel;
        //this.playLandingAnimation(reel);
        this.reelSpinFinishCount++;
        if(this.waitForPreviousReelToStop)
        {
            this.triggerReelStopByIndex(this.reelSpinFinishCount);
        }
        if(this.reelSpinFinishCount === this.numberOfReels)
        {   
            this.isSpinning = false;
            this.setApertureSymbols();
            Listener.dispatchEvent(ReelsetEvents.REELSET_SPIN_FINISH, {target:{ id:this.id, reelset:this}}); 

           
        }
    }

    /*
    private playLandingAnimation(reel)
    {
        let apertureSymbols = reel.getApertureSymbols();
        for(let k = 0; k < apertureSymbols.length; k++)
        {
            apertureSymbols[k].playLandingAnimation(1);
        }
        
    }*/
    
}


//------------------------------------

// USAGE

//-----------------------------------

 /*
       {

            "reelsetWidth":1600, 
            "reelsetHeight":920,
            //"backgroundColor":null, //0x1099bb
            "numberOfReels": 5,        
            "reelStopOrder":[ 0, 1, 2, 3, 4],        
            "reelStartOrder":[ 0, 1, 2, 3, 4],          
            "interReelSpinDelay":[0, 200, 400, 600, 800 ],
            "interReelStopDelay":[0, 200, 200, 200, 200 ],     
            "numberOfRowsOnTop":2,
            "numberOfRowsAtBottom":2,
            "numberOfRowsInView":4,
            "id":"mainReelset",
            "reelsXPos":[213, 511, 804, 1103, 1400],
            "reelsYPos":[300, 300, 300, 300, 300],
            "offsetX":[0, 0, 0, 0, 0],
            "offsetY":[5, 5, 5, 5, 5],
            "stopPositionOffset":0, // this can be used to fudge the reel Stop Position
            "debugMode":false,
            "reelConfigData":{
                 //"id":"reel1",
                //"x":200,
                //"y":35,
                //"numOfSymbolsTop":3,
                //"numOfSymbolsBottom":3,
                //"numberOfSymbolsinView":4,
                "reelWidth":280,
                "reelHeight":875,
                "symbolWidth":240,
                "symbolHeight":220,
                "spacingBetweenSymbols":0, // Space between symbols
                //"stopPositionOffset":0, // this can be used to fudge the reel Stop Position
                "target_StopSpeed":1,
                "reelStartEasingDuration":2,
                "reelStopEasingDuration":1,
                //"startDelay":0, // Start Delay for the reel
                //"stopDelay":0, // Stop delay for the reel will 
                "maxReelSpinSpeed":50, // max Reel Spin Speed, this can be the same as spin speed
                "spinSpeed":20, // reelspin speed
                "backgroundFillColor":"0x000000", // fill color for the Reels background
                "backgroundX":-72,// to adjust the fill for the reels,
                "backgroundY":-125, // to adjust the fill for the reels,
                "enableSlowStopReel":false, // enables the reel slowDown abd stop
                "slowDownMultiplier":1.5, // rate of slow down 1 to 1.7
                "enableBounceAtStop":true, // enables the bounce at stop
                "symbolsOffsetX":0, // to adjust / nudge the reels without affecting anyother alignemnt
                "symbolsOffsetY":-590, // to adjust / nudge the reels without affecting anyother alignemnt
                "maskData":{"x":-138, "y":-250, "width":280, "height":855}, // Aperture view size relative to each reel
                //"debugMode":true // Draws  the fill for the reels and reelsets. This can be used to setup the reels Aperture view size relative to each reel

            },
            "lom":{
                "landscape":{
                    x:92, 
                    y:32,
                    'scale':0.5
                },
                "portrait":{
                    'x':58,
                    'y':347,
                    'scale':0.29
                }
            },


            
        }
*/

/*
this.myReelSet = new Reelset(reelsetConfig);
stage.addChild(this.myReelSet.node);
this.myReelSet.setScale(0.5, 0.5) 

this.myReelSet.setXY(92, 32);


//settings for right to left
this.myReelSet.setReelStartOrder([4, 3, 2, 1, 0]);
this.myReelSet.setInterReelSpinDelay([0, 200, 400, 600, 800]); // always in ascending order works based on the start reel order


this.myReelSet.setReelStopOrder([4, 3, 2, 1, 0]);
this.myReelSet.setInterReelStopDelay([0, 1000, 1000, 1000, 8000]);// always in ascending order works based on the start reel order

*/


/*
// settings for left to right
this.myReelSet.setReelStartOrder([0, 1, 2, 3, 4]);
this.myReelSet.setInterReelSpinDelay([0, 200, 400, 600, 800 ]);


this.myReelSet.setReelStopOrder([0, 1, 2, 3, 4]);
this.myReelSet.setInterReelStopDelay([100, 250, 400, 550, 700]);

*/

/*

// starts from the middle and stops from left to right
this.myReelSet.setReelStartOrder([2, 3, 1, 4, 0]);
this.myReelSet.setInterReelSpinDelay([0, 400, 600, 800, 1200]);

this.myReelSet.setReelStopOrder([4, 2, 0, 1, 3]);
this.myReelSet.setInterReelStopDelay([2000, 2000, 2000, 2000, 2000]);

*/

/*


var reelConfig = {
            //"id":"reel1",
            "x":200,
            "y":35,
            "numOfSymbolsTop":2,
            "numOfSymbolsBottom":2,
            "numberOfSymbolsinView":4,
            "reelWidth":130,
            "reelHeight":900,
            "symbolWidth":120,
            "sybolHeight":120,
            "spacingBetweenSymbols":0,
            "stopPositionOffset":0,
            "target_StopSpeed":1,
            "reelStartEasingDuration":2,
            "reelStopEasingDuration":1,
            "startDelay":0,
            "stopDelay":0,
            "maxReelSpinSpeed":30,
            "spinSpeed":30,
            "backgroundFillColor":"0x000000",
            "backgroundX":-35,
            "backgroundY":-150,
            "enableSlowStopReel":true,
            "slowDownMultiplier":1.5,
            "enableBounceAtStop":true,
          
            
        }



  
       this.myReel0 = new Reel(reelData);
       //this.myReel.setScale(0.5, 0.5);
       //this.myReel0.setXY(200, 35);
       //this.myReel0.setY(35);
       this.myReel0.setStartDelay(1000);
       //this.myReel.setY(-135);
       

       stage.addChild(this.myReel0.node);

       /*
        this.myReel1 = new Reel(reelData);
        //this.myReel.setScale(0.5, 0.5);
        this.myReel1.setXY(350, 35);
        this.myReel1.setStartDelay(0.5);
        //this.myReel.setY(-135);




        */