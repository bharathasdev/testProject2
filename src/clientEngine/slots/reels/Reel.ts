import DisplayObject from "../../core/display/DisplayObject";
import ReelSymbol from "./ReelSymbol";
import Stage from "../../core/graphics/Stage";
import Utils from "../../core/utils/Utils";
import ReelEvents from '../../core/events/ReelEvents';
import Listener from '../../core/events/Listener';
import SymbolsDictionary from '../../slots/dataCollection/SymbolsDictionary';
import Reelset from './Reelset';

    
/**
 * This base class is responsible to build a reel with use of Symbols
 */


export default class Reel extends DisplayObject{


    private symbolsContainer = null;
    /** The numOfSymbolsTop property sets the number of Symbols to on top of first row. 
     * These symbols will not be in aperature. The default and recommended value is 2. 
     * Changing these will have an impact on the symbols in view and might see some some unexpected reults. You might need to move the reel vertical position to see the correct results*/
    private numOfSymbolsTop:number = 2; //recommended 2
    /** The numOfSymbolsBottom property sets the number of Symbols below the bottom row. 
     * These symbols will not be in aperature. The default and recommended value is 2. 
     * Changing these will have an impact on the symbols in view and might see some some unexpected reults. You might need to move the reel vertical position to see the correct results*/
    private numOfSymbolsBottom:number = 2; //recommended 2

    /** The numberOfSymbolsinView property determines the number of visible symbol in the row with in the reel aperture.
     * The default and recommended value is 4. this can be altered based on the game design.
     * Changing these will have an impact on the symbols in view and might see some some unexpected reults. You might need to move the reel vertical position to see the correct results*/
    private numberOfSymbolsinView:number = 4;
    private totalSymbolsInReel:number = 0;

    /** The reelIndex is an index of a reel starts frpm 0. The first reel will have an index of 0 */
    public reelIndex:number = -1;
    /** The reelWidth determines the width of the reel. The default value is 130. */
    private reelWidth:number = 130;
    
    /** The reelHeight determines the height of the reel. The default value is 700. */
    private reelHeight:number = 700;
    /** The spacingBetweenSymbols determines the spacing between the symbols in the reel. The default value is 0. */
    private spacingBetweenSymbols = 0;
    /** The symbolHeight determines the height of the symbol in the reel. The default value is 120. */
    private symbolHeight:number = 120;
    /** The symbolWidth determines the width of the symbol in the reel. The default value is 120. */
    private symbolWidth:number = 120;
    /** This the mask drawn on the reels to reveal the visible portion of the reel. The reel will have extra symbols on top, actual symbols in the middle and extra symbols at the bottom. */
    private maskData = {"x":0, "y":0, "width":100, "height":400};
    /** This is the y Position of the symbol */  
    private symbolYPos = 0; 
    /** This array containes all the symbols in the reel */  
    private symbols = [];
    /** This is the background fill color for the reels */  
    private backgroundFillColour = null; // 0x1099bb
    /** This is the background x position */
    private backgroundX = 0;
    /** This is the background y position */
    private backgroundY = 0;
    /** This is the background width */
    private backgroundWidth = 120;
    /** This is the background height */
    private backgroundHeight = 120;

    /** This is the symbol's X offset */
    private symbolsOffsetX:Number = 0;// to adjust / nudge the reels without affecting anyother alignment
    /** This is the symbol's Y offset */
    private symbolsOffsetY:Number = 0;// to adjust / nudge the reels without affecting anyother alignment

    // Reel States

    /** FLAG to check whether the reel is in Init state. Never spun before */
    static INIT_STATE = 'init_state';
    /** FLAG to check whether the reel is in Stopped state */
    static STOPPED_STATE = 'stopped_state';
    /** FLAG to check whether the reel is in starting state */
    static STARTING_STATE = 'starting_state';
    /** FLAG to check whether the reel is in spinning state */
    static SPINNING_STATE = 'spinning_state';
    /** FLAG to check whether the reel is in stopping state */
    static STOPPING_STATE = 'stopping_state';

    /** This reveals the current state of the Reel */
    private currentState = Reel.INIT_STATE;

    private bottomIconID = 4;

    private PIXITicker = null;
    
      
    
    private topIconReelstripIndex:number = 1;

    private stopPositionOffset:number = 0;

    
    // Tween settings for the reels

    /** This is the current reelspin speed */
    private currentSpeed:number = 0;

    private startSpinSpeedObject = {};
    private startSpinSpeedTweenMax = null;
    /** This is the easing duration at the reelspin start */
    private reelStartEasingDuration = 2;    

    private maxReelSpinSpeed = 30;

    /** This is the reel start delay */
    private startDelay = 0;

    private bounceAndStopTween = null;

    /** This enables/disables the bounce at the start of the reel. The default value is true. */
    private enableBounceAtStart = true;
    /** This enables/disables the bounce at the stop of the Tween. The default value is true. */
    private enableBounceAtStop:boolean = true;
    
    /** This readyToStop flag has to be or set to true to stop the reels */
    private readyToStop:boolean = true;
    private stopSpinSpeedObject = {};
    private stopSpinSpeedTweenMax = null;

    /** This is the duration for the ease during the end of the reel spin. longer the duration is you need to add more extra symbols before stop */
    private reelStopEasingDuration = 3; 
    private targetStopSpeed = 1;
    private stopDelay = 0;

    /** This set the ease function for the start of the spin. */
    private reelStartEaseFunction = Back.easeIn.config(1.2); 
    /** This set the ease function for the stop of the spin. */
    private reelStopEaseFunction =  Sine.easeOut; //Linear.easeNone; //
    private offsetSymbolsToPassBeforeStop = 0;

    /** This is very important parameter to add when the reel has to be slow down and decelerating for long time. we need need to add  more extra symbols to achieve smoother stop */
    private NoofSymbolToAddForSlowDown  = 0;
    /** This enables the slow start for the reel.*/
    private enableSlowStartReel:boolean = true;

    /** This enables the slow stop for the reel.*/
    private enableSlowStopReel:boolean = false;

    /** This adjust the reelstop slow down factor by multplier.*/
    private slowDownMultiplier:number = 1.0;

    /** This can be useful when the reels are setup initially.*/
    private debugMode:boolean = false;

    /** This will hold the list of symbols in view */
    private symbolsInView = [];
    /** This will hold the list of extra symbols on top of first. These symbols will not be in the view */
    private symbolsOnTop = [];
    /** This will hold the list of extra symbols at the bottom of the last row. These symbols will not be in the view */
    private symbolsAtBottom = [];

    /** This hold the list of symbols during spin and at the end of the spin */
    private lastSymbols = [];


       
       

    /** This hold the data of the complete list of symbols in the reel strip. */
    private reelStripLength = 0;
    /** This sets the stopo position for the reel */
    private stopPosition = 7;
    
   
    private iconOffset = 0;

    private stoppingRequest = false;

    private symbolsList = [ "wild", "star", "teddy", "ace", "king", "ten", "jack", "queen", "bonus"]; // this should come from the server

    //private symbolsList = [  "wof", "king", "queen", "ten", "jack"];
    private reelStrip = [0,1,2,3,4,5,6,7, 0,1,2,3,4,5,6,7, 0,1,2,3,4,5,6,7]; // this should come from the server
    private reelStrip = [8,0,1,2,3,4,5,6,7, 8, 0,1,2,3,4,5,6,7, 8, 0,1,2,3,4,5,6,7]; // this should come from the server
    private stopBounceDistance:number = 30;

    // _win, _move, _stop

    constructor(initData:object){
        
        
        super(initData);

        

        this.numOfSymbolsTop = Utils.checkNullUndefined(this.initData.numOfSymbolsTop, this.numOfSymbolsTop); 
        this.numOfSymbolsBottom = Utils.checkNullUndefined(this.initData.numOfSymbolsBottom, this.numOfSymbolsBottom); 
        this.numberOfSymbolsinView = Utils.checkNullUndefined(this.initData.numberOfSymbolsinView, this.numberOfSymbolsinView); 

        this.symbolsOffsetX = Utils.checkNullUndefined(this.initData.symbolsOffsetX, this.symbolsOffsetX); // to adjust / nudge the reels without affecting anyother alignment
        this.symbolsOffsetY = Utils.checkNullUndefined(this.initData.symbolsOffsetY, this.symbolsOffsetY);  // to adjust / nudge the reels without affecting anyother alignment

        this.reelWidth = Utils.checkNullUndefined(this.initData.reelWidth, this.reelWidth); 

        this.reelHeight = Utils.checkNullUndefined(this.initData.reelHeight, this.reelHeight); 
        this.symbolHeight = Utils.checkNullUndefined(this.initData.symbolHeight, this.symbolHeight);
        this.symbolWidth = Utils.checkNullUndefined(this.initData.symbolWidth, this.symbolWidth);
        this.spacingBetweenSymbols = Utils.checkNullUndefined(this.initData.spacingBetweenSymbols, this.spacingBetweenSymbols);

        this.stopPositionOffset = Utils.checkNullUndefined(this.initData.stopPositionOffset, this.stopPositionOffset);

        this.targetStopSpeed = Utils.checkNullUndefined(this.initData.targetStopSpeed, this.targetStopSpeed);

        this.reelStartEasingDuration = Utils.checkNullUndefined(this.initData.reelStartEasingDuration, this.reelStartEasingDuration);

        this.reelStopEasingDuration = Utils.checkNullUndefined(this.initData.reelStopEasingDuration, this.reelStopEasingDuration);

        this.startDelay = Utils.checkNullUndefined(this.initData.startDelay, this.startDelay);
        this.stopDelay = Utils.checkNullUndefined(this.initData.stopDelay, this.stopDelay);

        this.maxReelSpinSpeed = Utils.checkNullUndefined(this.initData.spinSpeed, this.maxReelSpinSpeed);

        this.reelStrip = Utils.checkNullUndefined(this.initData.reelStrip, this.reelStrip);


        this.backgroundFillColour = Utils.checkNullUndefined(this.initData.backgroundFillColor, null);
        this.backgroundX = Utils.checkNullUndefined(this.initData.backgroundX, this.backgroundX);
        this.backgroundY = Utils.checkNullUndefined(this.initData.backgroundY, this.backgroundY);
        this.backgroundWidth = this.reelWidth;
        this.backgroundHeight = this.reelHeight;


        
        this.enableBounceAtStart = Utils.checkNullUndefined(this.initData.enableBounceAtStart, this.enableBounceAtStart);
        this.enableBounceAtStop = Utils.checkNullUndefined(this.initData.enableBounceAtStop, this.enableBounceAtStop);
    

        this.enableSlowStartReel = Utils.checkNullUndefined(this.initData.enableSlowStartReel, this.enableSlowStartReel);

        // Do we really need this when we create reels. I am not sure. reel slown will happen based on the spin results 
        // So this will be set in the runtime through method setReelSlowDownByReel. Example - setReelSlowDownByReel(4, true, 1, 5);
        //this.enableSlowStopReel = Utils.checkNullUndefined(this.initData.enableSlowStopReel, this.enableSlowStopReel);

        this.slowDownMultiplier = Utils.checkNullUndefined(this.initData.slowDownMultiplier, this.slowDownMultiplier);

        

        this.reelStartEaseFunction = Utils.checkNullUndefined(this.initData.reelStartEaseFunction, this.reelStartEaseFunction);// default - Back.easeIn.config(1.2)

        this.stopBounceDistance = Utils.checkNullUndefined(this.initData.stopBounceDistance, this.stopBounceDistance);// default - Back.easeIn.config(1.2)
        

        if(!this.enableBounceAtStart)
        {
            this.reelStartEaseFunction = Linear.easeNone;
        }

        this.maskData = Utils.checkNullUndefined(this.initData.maskData, this.maskData);

        this.debugMode = Utils.checkNullUndefined(this.initData.debugMode, this.debugMode);

        this.reelStopEaseFunction = Utils.checkNullUndefined(this.initData.reelStopEaseFunction, this.reelStopEaseFunction);// default - Back.easeIn.config(1.2)

                     
        this.totalSymbolsInReel = this.numOfSymbolsTop + this.numberOfSymbolsinView + this.numOfSymbolsBottom;
        this.bottomIconID = this.totalSymbolsInReel -1;


        
        
    }

    /** @hidden */
    public init()
    {
       
        super.init();
        this.setup();
      
  
    }

    /** @hidden */
    public setup()
    {
        
        this.PIXITicker = Stage.getTicker();
        if(this.backgroundFillColour)
        {
            this.setupReelBackground();
        }
        this.setupReel();
        this.setupTweens();
        this.setupEvents();
        
    }

    /** @hidden */
    public setupTweens()
    {
        
        this.startSpinSpeedObject = {value:0};
        this.startSpinSpeedTweenMax = new TweenMax(this.startSpinSpeedObject, this.reelStartEasingDuration, {
            value:this.maxReelSpinSpeed, 
            paused:true,
            ease:this.reelStartEaseFunction,
            onStart:() => {this.spinStartTweenStart();},
            onUpdate:() =>{this.updateReelStartSpinSpeed();}
        });

        
        //this.targetStopSpeed = 5;
        this.stopSpinSpeedObject = {value:this.maxReelSpinSpeed};
        this.stopSpinSpeedTweenMax = new TweenMax(this.stopSpinSpeedObject, this.reelStopEasingDuration, {
            value:this.targetStopSpeed, 
            paused:true,        
            onUpdate:() =>{this.updateReelStopSpinSpeed();}
        });

        
        
    }

    /** @hidden */
    private spinStartTweenStart()
    {
        Listener.dispatchEvent(ReelEvents.REEL_SPIN_START, {target:{ id:this.id, reel:this}});
    }

    
    /** @hidden */
    public setupEvents()
    {
        Listener.registerEvent(ReelEvents.REEL_SPIN_START);
		Listener.registerEvent(ReelEvents.REEL_SPIN_FINISH);
    
    }

    /** @hidden */
    public setupReelBackground()
    {
        
        let fillData = {
            "x":this.backgroundX,
            "y":this.backgroundY,
            "width":this.backgroundWidth,
            "height":this.backgroundHeight,
            "fillColor":this.backgroundFillColour,

        }

        this.backgroundFill = new DisplayObject(fillData);
        this.backgroundFill.init();
        this.addChild(this.backgroundFill);
    }

    /** @hidden */
    public setupReel()
    {
        this.symbolsContainer = new DisplayObject();
        this.symbolsContainer.init();
        
        this.addChild(this.symbolsContainer);
        let symbolObj = null
        for(let i =0; i <this.totalSymbolsInReel; i++ )
        {
            this.symbolsContainer.id = "SymbolsContainer_Reel"+ i;
            symbolObj = this.createSymbol(i, this);
            this.symbolsContainer.addChild(symbolObj);
            this.symbolsContainer.setXY(this.symbolsOffsetX, this.symbolsOffsetY); // to adjust / nudge the reels without affecting anyother alignment
         
            symbolObj.setY(this.symbolYPos); 

            
            symbolObj.setStaticAnimation(this.symbolsList[this.reelStrip[i]], true);

            this.symbolYPos = this.symbolYPos + this.symbolHeight + this.spacingBetweenSymbols;
            
            this.symbols.push(symbolObj);
        }
        
        this.reelStripLength = this.reelStrip.length

        this.setupMask();

        
    }
    

    

    /** @hidden */
    public setupMask()
    {
        const graphics = new PIXI.Graphics();
        
        graphics.beginFill(0xFF3300); // color for the Mask
        graphics.drawRect(this.maskData.x, this.maskData.y, this.maskData.width, this.maskData.height);
        graphics.endFill();
        this.node.addChild(graphics);
        if(!this.debugMode)
        {
            this.node.mask = graphics;
        }
              
        
    }
    
    /** @hidden */
    public setupDefaultState()
    {
        for(let i =0; i <this.totalSymbolsInReel; i++ )
        {
            this.symbols[i].playStaticAnimation();
        }
    }


    // we can fudge the stop positon by offest value
    // Might be useful when we do rewind and stepping backwards or forwards
    private setStopPositionOffset(pval)
    {
        this.stopPositionOffset = pval;
    }

    /** @hidden */
    private createSymbol(index)
    {
        let symbol = null;
        let symbolData = null;

        // symbols are created from the Data based on Symbol Dictionary
        symbolData = SymbolsDictionary.symbolsData;
        symbolData.id = this.initData.id +"_Symbol"+index;
        symbolData.reel = this;

        symbol = new ReelSymbol(symbolData);
        symbol.init();
        
        return symbol;
    }

    /**
    * This method set the reel strip with symbols for the reel
    * @param reelStripArray - strip array with reel symbols
    */
    public setReelStrip(reelStripArray)
    {
        this.reelStrip = reelStripArray;
        this.reelStripLength = this.reelStrip.length;
    }

    /**
    * This method set the extraSymbols to achieve smoother reel Slow down
    * Refer [[Reelset.setReelSlowDownByReel]] recommended way to  access this method
    * ``` Typescript
    * // Usage from Reelset :
    *  this.myReelSet.setReelSlowDownByReel(4, true, 1, 5);
    * ```
    * @param val - Number of extra symbols to add
    */
    public setExtraSybolsForReelSlowDown(val:number = 0)
    {
        this.NoofSymbolToAddForSlowDown = val
    }

    /**
    * This method set the stop position value
    * @param pos - Position to stop the reel
    */
    public setReelStopPos(pos:number = 0)
    {
        this.stopPosition = pos;
    }

    /**
    * This method stops the reel at the stop position
    * @param pos - stop position as a parameter
    */
    public stopReelAtPos(pos)
    {
        let symbolIndex = null;
        this.stopPosition = pos;
       
        this.topIconReelstripIndex = this.getNormalizedIndex(this.stopPosition + 1, this.reelStripLength);
        this.symbols.forEach((icon, index) => {
             
            if(Reelset.REEL_STRIP_READ_VALUES_BACKWARDS)
            {
                symbolIndex = this.getNormalizedSymbol(this.topIconReelstripIndex - index);
            }
            else
            {
                symbolIndex = this.getNormalizedSymbol(this.topIconReelstripIndex + index);
            }
            

            this.symbols[index].setStaticAnimation(this.symbolsList[this.reelStrip[symbolIndex]], true);
        });
        this.currentState = Reel.STOPPED_STATE;
        this.setFinalSymbolsInit();
    }

    /**
    * This set the reel slow down multipler 
    * @param value - Slow down multiplier. good range of values are from 0.5 to 1.5.
    * The result may vary based on various factors.
    * recommended way to set the slowDown multiplier is through Reelset.setReelSlowDownByReel
    * Refer [[Reelset.setReelSlowDownByReel]] recommended way to  access this method
    */
    public setReelSlowDownMultiplier(value:number)
    {
        this.slowDownMultiplier = value;
    }
    

    public resetPropertiesBeforeSpin()
    {
        
        
        this.stoppingRequest = false;
        this.currentSpeed = 0;
        this.symbolsOnTop = [];
        this.symbolsInView = [];
        this.symbolsAtBottom = [];
    }
    
    /**
    * This starts the Spinning of the Reel the reel 
    */
    public startSpin()
    {
        
        this.currentState = Reel.STARTING_STATE;
        this.resetPropertiesBeforeSpin();
        this.PIXITicker.add(
            this.update, this
        )
     
              
        if(this.enableSlowStartReel)
        {
            
            TweenMax.set(this.startSpinSpeedObject, {"value":0});
            this.startSpinSpeedTweenMax.delay(this.startDelay)
            this.startSpinSpeedTweenMax.restart(true);
        }
        else
        {
            this.currentSpeed = this.maxReelSpinSpeed;
        }
        
        this.applyAlphaForSymbolsAtStartOfSpin();
        this.spinning();
    }

    private applyAlphaForSymbolsAtStartOfSpin()
    {
        this.symbols.forEach((icon, index) => {
            icon.symbolState = 1;
            if(icon.fadeDuringSpin)
            {
                icon.applySpinAlpha();
            }
            
        });
    }


    /**
    * This stops the Spinning of the Reel the reel 
    */
    public stopSpin()
    {
        //this.speedObject ={ value:30};

        if(this.readyToStop)
        {
       
            //console.log("*********************** Reel " + this.reelIndex + " STOP SPIN!");
            this.currentSpeed = this.maxReelSpinSpeed;
            
            
            this.stopPosition = this.stopPosition + this.stopPositionOffset;
            this.stoppingRequest = true;

            if(this.enableSlowStopReel)
            {
                TweenMax.set(this.stopSpinSpeedObject, {"value": this.maxReelSpinSpeed});
                this.stopSpinSpeedTweenMax.delay(this.stopDelay); 
                this.stopSpinSpeedTweenMax.restart(true);
            }

        }
    
       
        
        //this.stopSpinSpeedTweenMax.progress(0).play();
    }

    /**
    * This defines the tween bounce and stop implemntation for the reel during stop.
    * refer [[Reel.enableBounceAtStop]] this has to be set to true
    */
    private setupBounceAndStopTween()
    {
        let yPos = 0;
        let time = 500;
        var symbolNodes = [];

        for(var i = 0; i < this.symbols.length; i++)
        {
            symbolNodes.push(this.symbols[i].node)
        }

       
        this.bounceAndStopTween = new TweenMax(symbolNodes, 0.5, 
            { ease: this.reelStopEaseFunction, y: "+="+this.stopBounceDistance, "paused":true, repeat: 1, yoyo:true, 
            //onUpdate:(p) =>{this.onStartBounceUpdate(p)}, 
            onComplete:() =>{this.onStopBounceComplete()}, 
            onCompleteParams:["param1","param2"]  
        });
    }


    /**
    * This triggers the bounce tween the reel during stop.
    * refer [[Reel.enableBounceAtStop]] this has to be set to true
    */
    
    public reelBounceAtStop()
    {
        if(this.enableBounceAtStop)
        {
            this.setupBounceAndStopTween();
            this.bounceAndStopTween.play();
        }
        
    }

    /**
    * This dispatches the reel Spin finish event
    */
    private dispatchReelSpinFinishEvent()
    {
        Listener.dispatchEvent(ReelEvents.REEL_SPIN_FINISH, {target:{ id:this.id, reel:this}});
    }
   
    public onStopBounceComplete()
    {
        //console.log("onStopBounceComplete..........");
        this.dispatchReelSpinFinishEvent();
        
    }

   
    public updateReelStartSpinSpeed()
    {
        this.currentSpeed = this.startSpinSpeedObject.value;
        //console.log("updateReelSpinSpeed.........."+ this.startSpinSpeedObject.value);
    }

    public updateReelStopSpinSpeed()
    {
        this.currentSpeed = this.stopSpinSpeedObject.value * this.slowDownMultiplier;
        console.log("updateReel Stop Speed..........ID:"+ this.reelIndex+ "Value"+ this.stopSpinSpeedObject.value);
    }

    /**
    * This internal method implements the logic to spin and stop the reels with forward reading the values from the reel strip
    * this function reads values in forward direction during the reel spin from the reelstrip
    * Example:" strip is - [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 
    * reel symbols will be in the order 4, 5, 6, 7, 8, 9
    */
    private spinningWithForwardValues()
    {
       
        //console.log("Spinning.........."+ this.currentSpeed);
        let yPos = 0;
        
        
        this.symbols.forEach((icon, index) => {
            //icon.y += this.currentSpeed;
            icon.setY(icon.getY()+this.currentSpeed);
            icon.symbolState = 1;
        });

        this.iconOffset += this.currentSpeed;
        

        if (this.iconOffset > (this.symbolHeight + this.spacingBetweenSymbols) ) {

            
            //this.symbols[this.bottomIconID].setY(this.symbols[this.bottomIconID].getY() - ( (this.symbolHeight+this.spacingBetweenSymbols)) *5);

            yPos = this.symbols[this.bottomIconID].getY() - ( (this.symbolHeight + this.spacingBetweenSymbols) * this.totalSymbolsInReel);

            ////console.log("Helllo" + yPos);
            this.symbols[this.bottomIconID].setY(yPos);
            if (this.stoppingRequest) {

                //this.topIconReelstripIndex = this.getNormalizedIndex((this.stopPosition - this.numberOfSymbolsinView + this.numOfSymbolsBottom -1), this.reelStripLength);

                if(!this.enableSlowStopReel)
                {
                    this.NoofSymbolToAddForSlowDown  = 0;
                }
               

                this.topIconReelstripIndex = this.getNormalizedIndex((this.stopPosition + this.numberOfSymbolsinView +this.NoofSymbolToAddForSlowDown +this.numOfSymbolsBottom -1), this.reelStripLength);

                // the below line dictates the distance to stop but fudging the reel position
                //this.topIconReelstripIndex = this.getNormalizedIndex(this.stopPosition - (this.numOfSymbolsTop + this.numOfSymbolsBottom  + this.offsetSymbolsToPassBeforeStop), this.reelStripLength);
                this.currentState = Reel.STOPPING_STATE;
            } else {
                this.topIconReelstripIndex = this.getNormalizedIndex(--this.topIconReelstripIndex, this.reelStripLength);
            }

            //console.log(" topIconReelstripIndex:"+ this.topIconReelstripIndex);
            ////console.log(" this.bottomIconID 1:"+ this.bottomIconID);
            ////console.log("Normalised Symbol Index:"+ this.getNormalizedSymbol(this.topIconReelstripIndex));

            var symbolIndex = this.getNormalizedSymbol(this.topIconReelstripIndex);

            //console.log("Helllo Symbol To Show Spinning:" + this.symbolsList[symbolIndex] + "::: symbolIndex:"+ symbolIndex);

            this.updateSymbolState(symbolIndex);

            
            
            //this.symbols[this.bottomIconID].index = this.getNormalizedSymbol(this.topIconReelstripIndex);
            this.bottomIconID = this.getNormalizedIndex(--this.bottomIconID, this.totalSymbolsInReel);
            this.iconOffset = (this.iconOffset % (this.symbolHeight + this.spacingBetweenSymbols));

            ////console.log("Icon Offset:"+this.iconOffset);
        }

        
    }

    private spinning()
    {
        if(Reelset.REEL_STRIP_READ_VALUES_BACKWARDS)
        {
            this.spinningWithBackWardValues();
        }
        else
        {
            this.spinningWithForwardValues();
        }
    }


    /**
    * This internal method implements the logic to spin and stop the reels with backward direction reading during the reel spin from the reelstrip
    * this function reads values in backward direction during the reel spin from the reelstrip
    * Example:" strip is - [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 
    * reel symbols will be in the order 8, 7 , 6 , 5 , 4
    */
    
    private spinningWithBackWardValues()
    {
       
        //console.log("Spinning.........."+ this.currentSpeed);
        let yPos = 0;
        
        
        this.symbols.forEach((icon, index) => {
            //icon.y += this.currentSpeed;
            icon.setY(icon.getY()+this.currentSpeed);
            icon.symbolState = 1;
        });

        this.iconOffset += this.currentSpeed;
        

        if (this.iconOffset > (this.symbolHeight + this.spacingBetweenSymbols) ) {

            
            //this.symbols[this.bottomIconID].setY(this.symbols[this.bottomIconID].getY() - ( (this.symbolHeight+this.spacingBetweenSymbols)) *5);

            yPos = this.symbols[this.bottomIconID].getY() - ( (this.symbolHeight + this.spacingBetweenSymbols) * this.totalSymbolsInReel);

            ////console.log("Helllo" + yPos);
            this.symbols[this.bottomIconID].setY(yPos);
            if (this.stoppingRequest) {

                if(!this.enableSlowStopReel)
                {
                    this.NoofSymbolToAddForSlowDown  = 0;
                }

                // the below line dictates the distance to stop but fudging the reel position
                this.topIconReelstripIndex = this.getNormalizedIndex((this.stopPosition - this.numberOfSymbolsinView + this.NoofSymbolToAddForSlowDown + this.offsetSymbolsToPassBeforeStop-1 ), this.reelStripLength);
                this.currentState = Reel.STOPPING_STATE;
            } 
            else 
            {
                this.topIconReelstripIndex = this.getNormalizedIndex(++this.topIconReelstripIndex, this.reelStripLength);
            }

            //console.log(" topIconReelstripIndex:"+ this.topIconReelstripIndex);
            ////console.log(" this.bottomIconID 1:"+ this.bottomIconID);
            ////console.log("Normalised Symbol Index:"+ this.getNormalizedSymbol(this.topIconReelstripIndex));

            var symbolIndex = this.getNormalizedSymbol(this.topIconReelstripIndex);

            //console.log("Helllo Symbol To Show Spinning:" + this.symbolsList[symbolIndex] + "::: symbolIndex:"+ symbolIndex);

            this.updateSymbolState(symbolIndex);
            
            //this.symbols[this.bottomIconID].index = this.getNormalizedSymbol(this.topIconReelstripIndex);
            this.bottomIconID = this.getNormalizedIndex(--this.bottomIconID, this.totalSymbolsInReel);
            this.iconOffset = (this.iconOffset % (this.symbolHeight + this.spacingBetweenSymbols));

            ////console.log("Icon Offset:"+this.iconOffset);
        }

        
    }

    /** @hidden **/
    // this will store the last  stopping(7) symbols for the reel
    public updateLastSymbols(symbol:ReelSymbol)
    {
        this.lastSymbols.push(symbol);
        let totalSymbols = this.numOfSymbolsTop + this.numberOfSymbolsinView + this.numOfSymbolsBottom
        if(this.lastSymbols.length > totalSymbols)
        {
            this.lastSymbols.shift();
        }
    }

    /** This method sets the visual state of the symbol which is also called Static state by setting the static animation */
    public updateSymbolState(pSymbolIndex)
    {
        this.symbols[this.bottomIconID].setStaticAnimation(this.symbolsList[pSymbolIndex] , true);
        this.symbolsContainer.addChildAt(this.symbols[this.bottomIconID], pSymbolIndex);

        
        
    }

    /** This internal method triggers stopping */
    private stopping()
    {
        if(Reelset.REEL_STRIP_READ_VALUES_BACKWARDS)
        {
            this.stoppingWithBackwardValues();
        }
        else
        {
            this.stoppingWithForwardValues();
        }
    }

    /**
    * This internal method reads values in backward direction based on the stop position from the reelstrip
    * "Example:" strip is - [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] if the game wants to read 3 values from the stop position of 5. 
    *  then the result will be 3, 4, 5
    */
   
    private stoppingWithBackwardValues()
    {
        let yPos = 0;
        ////console.log("Stopping:"+ this.stopSpinSpeedTweenMax.progress());
        this.symbols.forEach((icon, index) => {
            icon.setY(icon.getY()+this.currentSpeed);
            icon.symbolState = 2;
        });
        this.iconOffset += this.currentSpeed;
        if (this.iconOffset > (this.symbolHeight + this.spacingBetweenSymbols)) {
            

            yPos = this.symbols[this.bottomIconID].getY() - ( (this.symbolHeight + this.spacingBetweenSymbols) * this.totalSymbolsInReel);

            
            this.symbols[this.bottomIconID].setY(yPos);

            
            this.topIconReelstripIndex = this.getNormalizedIndex(++this.topIconReelstripIndex, this.reelStripLength);
            
            

            var symbolIndex = this.getNormalizedSymbol(this.topIconReelstripIndex);

            console.log("Stopping this.topIconReelstripIndex:" + this.topIconReelstripIndex);
            console.log("Helllo Symbol To Show Stopping:" + this.symbolsList[symbolIndex] + "::: symbolIndex:"+ symbolIndex);
            
            this.updateSymbolState(symbolIndex);
            //this.symbols[this.bottomIconID].setStaticAnimation(this.symbolsList[symbolIndex] , true);

            this.bottomIconID = this.getNormalizedIndex(--this.bottomIconID, this.totalSymbolsInReel);
            this.iconOffset = this.iconOffset % (this.symbolHeight + this.spacingBetweenSymbols);
            
            //if (this.topIconReelstripIndex === this.getNormalizedIndex((this.stopPosition + 2), this.reelStripLength)) {
            if (this.topIconReelstripIndex === this.getNormalizedIndex((this.stopPosition+this.numOfSymbolsTop), this.reelStripLength)) {
                let ind = this.getNormalizedIndex(this.bottomIconID, this.totalSymbolsInReel);
                for (let i = (this.totalSymbolsInReel - 1); i >= 0; i--) {
                    this.symbols[ind].setY((this.symbolHeight + this.spacingBetweenSymbols) * i);
                    this.symbols[ind].symbolState = 0;
                    ind = this.getNormalizedIndex(--ind, this.totalSymbolsInReel);
                }

                this.stoppingRequest = false;
                this.currentState = Reel.STOPPED_STATE;
                //this.stopSpinSpeedTweenMax.progress(0);
                //EventBus.getInstance().dispatch(Config.EVENTS.REEL_STOPPED_COMPLETE);
                //console.log("Complete STOPPPPPPPPPP!:" + this.topIconReelstripIndex);

                this.setFinalSymbols()
                if(this.enableBounceAtStop)
                {
                    this.reelBounceAtStop();
                }
                else
                {
                    this.dispatchReelSpinFinishEvent();
                }
                
            }
        }
    }
   
    /**
    *   This internal method reads values in forward direction based on the stop position from the reelstrip
    *   "Example:" strip is - [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] if the game wants to read 3 values from the stop position of 5. 
    *   then the result will be 5, 6, 7
    */
    private stoppingWithForwardValues()
    {
        let yPos = 0;
        ////console.log("Stopping:"+ this.stopSpinSpeedTweenMax.progress());
        this.symbols.forEach((icon, index) => {
            icon.setY(icon.getY()+this.currentSpeed);
            icon.symbolState = 2;
        });
        this.iconOffset += this.currentSpeed;
        if (this.iconOffset > (this.symbolHeight + this.spacingBetweenSymbols)) {
            

            yPos = this.symbols[this.bottomIconID].getY() - ( (this.symbolHeight + this.spacingBetweenSymbols) * this.totalSymbolsInReel);

            
            this.symbols[this.bottomIconID].setY(yPos);

            
            this.topIconReelstripIndex = this.getNormalizedIndex(--this.topIconReelstripIndex, this.reelStripLength);
            
            

            var symbolIndex = this.getNormalizedSymbol(this.topIconReelstripIndex)

            console.log("Stopping this.topIconReelstripIndex:" + this.topIconReelstripIndex);
            console.log("Helllo Symbol To Show Stopping:" + this.symbolsList[symbolIndex] + "::: symbolIndex:"+ symbolIndex);

            this.updateSymbolState(symbolIndex);
            //this.symbols[this.bottomIconID].setStaticAnimation(this.symbolsList[symbolIndex] , true);

            this.bottomIconID = this.getNormalizedIndex(--this.bottomIconID, this.totalSymbolsInReel);
            this.iconOffset = this.iconOffset % (this.symbolHeight + this.spacingBetweenSymbols);
            
            //if (this.topIconReelstripIndex === this.getNormalizedIndex((this.stopPosition + 2), this.reelStripLength)) {
            if (this.topIconReelstripIndex === this.getNormalizedIndex((this.stopPosition-this.numOfSymbolsTop), this.reelStripLength)) {
                let ind = this.getNormalizedIndex(this.bottomIconID, this.totalSymbolsInReel);
                for (let i = (this.totalSymbolsInReel - 1); i >= 0; i--) {
                    this.symbols[ind].setY((this.symbolHeight + this.spacingBetweenSymbols) * i);
                    this.symbols[ind].symbolState = 0;
                    ind = this.getNormalizedIndex(--ind, this.totalSymbolsInReel);
                }

                this.stoppingRequest = false;
                this.currentState = Reel.STOPPED_STATE;
                
                this.setFinalSymbols()
                if(this.enableBounceAtStop)
                {
                    this.reelBounceAtStop();
                }
                else
                {
                    this.dispatchReelSpinFinishEvent();
                }

                this.playlandingAnimationForSymbols();
                
            }
        }
    }

    private setFinalSymbolsInit()
    {
        this.symbolsOnTop = [];
        this.symbolsInView = [];
        this.symbolsAtBottom = [];
       
 
        for(let i = 0; i < this.numOfSymbolsBottom; i++)
        {
            this.symbolsAtBottom.push(this.lastSymbols[i]);
            
        }
        //this.symbolsAtBottom.reverse();
                
        for(let j = this.numOfSymbolsTop; j < (this.numOfSymbolsTop + this.numberOfSymbolsinView); j++)
        {
            this.symbolsInView.push(this.lastSymbols[j]);
        }
        //this.symbolsInView.reverse();

        for(let k = (this.numOfSymbolsTop + this.numberOfSymbolsinView); k < (this.numOfSymbolsTop + this.numberOfSymbolsinView + this.numOfSymbolsBottom); k++)
        {
            this.symbolsOnTop.push(this.lastSymbols[k]);
        }
        
        //this.symbolsOnTop.reverse();
        //return this.symbols;
    }


    /**
    * This internal method sets the final result of symbols after the reel psin is finished
    */
    private setFinalSymbols()
    {
        this.symbolsOnTop = [];
        this.symbolsInView = [];
        this.symbolsAtBottom = [];
       
 
        for(let i = 0; i < this.numOfSymbolsBottom; i++)
        {
            this.symbolsAtBottom.push(this.lastSymbols[i]);
            
        }
        this.symbolsAtBottom.reverse();
                
        for(let j = this.numOfSymbolsTop; j < (this.numOfSymbolsTop + this.numberOfSymbolsinView); j++)
        {
            this.symbolsInView.push(this.lastSymbols[j]);
            this.lastSymbols[j].playLandingAnimation(1);
        }
        this.symbolsInView.reverse();

        for(let k = (this.numOfSymbolsTop + this.numberOfSymbolsinView); k < (this.numOfSymbolsTop + this.numberOfSymbolsinView + this.numOfSymbolsBottom); k++)
        {
            this.symbolsOnTop.push(this.lastSymbols[k]);
        }
        
        this.symbolsOnTop.reverse();
        //return this.symbols;
    }

    /**
    * This method returns the aperture symbol in view for the reel
    * @return the list of symbols in the view for the reel
    */
    public getApertureSymbols()
    {
        return this.symbolsInView;
    }

    /**
    * This method returns the list of hidden symbols on top of the first row
    * @return the list of hidden symbols on top of the first row
    */
    public getSymbolsOnTop()
    {
        return this.symbolsOnTop;
    }

    /**
    * This method returns the list of hidden symbols at the Bottom of the last row
    * @return the list of hidden symbols  at the Bottom of the last row
    */
    public getSymbolsAtBottom()
    {
        return this.symbolsAtBottom;
    }

    /**
    * This method sets the delay for the start of the reel spin
    * recommended way to use this is through [[Reelset.setInterReelSpinDelay]]
    * @param delay - takes the delay in the format of milli seconds
    * 
    */
    public setStartDelay(delay:number)
    {
        this.startDelay = delay/1000;
        this.startSpinSpeedTweenMax.delay(delay/1000); // converting milliseconds to decimals. Ex - 200ms to 0.2sec and so on
    }

    /**
    * This method sets the delay for the stop of the reel spin
    * recommended way to use this is through [[Reelset.setInterReelStopDelay]]
    * @param delay - takes the delay in the format of milli seconds
    */
    public setStopDelay(delay:number)
    {
        this.stopDelay = delay/1000;
        this.stopSpinSpeedTweenMax.delay(delay/1000); // converting milliseconds to decimals. Ex - 200ms to 0.2sec and so on
    }

    
    /**
    * This method enable the slow stop for the reel
    * @param value - true/false to enable/disable
    */
    public setReelSlowDown(value:boolean)
    {
        this.enableSlowStopReel = value;
    }


    /**
    * This internal update method is a important method which is attached to the Core PIXI.TIcker.
    * This method will start firing for every frame once the spin is triggerred.
    * the based on the state this will come to stop,
    * THIS METHOD IS RESPONSIBLE FOR THE SPINNINNG, STOPPING THE REELS AND RENDERING THE SYMBOL ON SCREEN
    */
    private update()
    {
        //console.log("Stopping update:"+ this.stopSpinSpeedTweenMax.progress());
     
        switch (this.currentState) {
            case Reel.STOPPED_STATE:
                this.PIXITicker.remove(
                    this.update, this
                );
                break;
            case Reel.STARTING_STATE:  // should use easing start effect
                this.spinning();
                if (this.currentSpeed >= this.maxReelSpinSpeed)
                {
                    this.currentSpeed = this.maxReelSpinSpeed;
                    this.currentState = Reel.SPINNING_STATE;                    
                    //EventBus.getInstance().dispatch(Config.EVENTS.REEL_STARTING_COMPLETE);
                }
                break;
            case Reel.SPINNING_STATE:
                this.spinning();
                break;
            case Reel.STOPPING_STATE:  // should use easing stop effect
                this.stopping();
                break;
        }

    }

    /**
    * This internal method return looped index after the length
    * if the the length is 32, the index is 34, it will return 1(where 33 become 0 and 34 becomes 1)
    */
    private getNormalizedIndex(index:number, length:number) 
    {
        while (index >= length) {
            index = index - length;
        }
        while (index < 0) {
            index = index + length;
        }
        return index;
    }

    /**
    * This internal method returns symbol based on the normalised looped index from the reel Strip
    * if the the length is 32, the index is 34, it will return a symbol from position 1(where 33 become 0 and 34 becomes 1)
    */
    private getNormalizedSymbol(index) 
    {
        index = this.getNormalizedIndex(index, this.reelStrip.length);
        return this.reelStrip[index];
    }
}


