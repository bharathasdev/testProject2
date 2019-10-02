import DisplayObject from '../../core/display/DisplayObject'
import SpineDisplay from "../../core/display/SpineDisplay";
import Listener from '../../core/events/Listener';
import ReelSymbolEvents from '../../core/events/ReelSymbolEvents';
import SymbolsDictionary from '../dataCollection/SymbolsDictionary';

export default class ReelSymbol extends DisplayObject{

    
    private symbolIndex:number = null;
    private symbolName:string = null;
    private isBonus:boolean = false;
    private isWild:boolean = false;
    private fadeDuringSpin:boolean = false;
    private symbolSpines:any = [];
    private symbolSpine:any = null;
    
    private symbolPosition = -1;


    
    private symbolData = null;
    private spinesDataForSymbols = null;
    private staticAnimation:string = null; // Default State
    private moveAnimation:string = null; // Visual state during Move
    private landingAnimation:string = null; // when the symbol Lands
    private playLandingAnim:boolean = false;
    private winAnimation:string = null; // to play the win Animation

    private parentReel = null;
    private dictionary:object = null;
    
    private static SYMBOL_REST_STATE:number = 0;
    private static SYMBOL_SPINNING_STATE:number = 1;
    private static SYMBOL_STOPPING_STATE:number = 2;
    private static SYMBOL_ANIMATION_STATE:number = 3;

    private symbolState = 0; // 0 - Rest, 1 - Spin,  2 - Playing Animation

    constructor(initData:object)
    {
        //console.log("--- Constructor from Symbol ----");
        super(initData);
        //this.symbolSpine2 = null;
        this.id = this.id+"Symbol";
        
        //this.initData = initData;
        if(initData.symbolName === null || initData.symbolName === undefined)
        {
            //Utils.throwError( "Trying to create Symbol without Symbol name ", 1);
            //return;
        }

        this.dictionary = SymbolsDictionary.getSymbolsDictionary();
        this.parentReel = initData.reel;
        //this.symbolIndex = this.initData.id;
        //this.symbolName = this.initData.symbolName;
        //this.symbolPosition = this.initData.position;

        //this.staticAnimation = this.initData.staticAnimation;
        //this.moveAnimation = this.initData.moveAnimation;
        //this.landingAnimation = this.initData.landingAnimation;
        //this.winAnimation = this.initData.winAnimation;

        this.symbolData = initData;

        this.spinesDataForSymbols = this.symbolData.spines;
   
        
    }

    public init()
    {
        
        super.init();
        this.setup();
        this.setupEvents();
    }

    protected setup()
    {
        
        
        // we are creating a symbol(which has PixiSprite  ) and adding creating SpineDisplay(which has Spine as a node) as a child


        let spineData = {"x":0, "y":0}; 
        
        //let spineData = {...this.initData, ...tmpObj};
        //mergedLayoutData = {...this.initData, ...SpineData};
        if(this.symbolData.spines.length == 1)
        {
            // In case we have all the symbols in one Spine
            spineData.assets = this.initData.spines;
            this.symbolSpine = new SpineDisplay(spineData,  ()=>{this.onSymbolAnimationStart("hi")}, ()=>{this.onSymbolAnimationFinish("hi")});
            this.symbolSpine.init();
            this.symbolSpines.push(symbolSpine);
            this.addChild(symbolSpine);
        }
        else
        {
            // We have symbols and animations split into multiple spines
            for(let i = 0; i < this.spinesDataForSymbols.length; i++)
            {
                spineData.assets = this.initData.spines[i];
                this.symbolSpine = new SpineDisplay(spineData,  ()=>{this.onSymbolAnimationStart("hi")}, ()=>{this.onSymbolAnimationFinish("hi")});
                this.symbolSpine.init();
                this.symbolSpines.push(this.symbolSpine);
                this.addChild(this.symbolSpine);
            }
        }
       
    }

    public setupEvents()
	{
	    Listener.registerEvent(ReelSymbolEvents.SYMBOL_ANIMATION_START);
		Listener.registerEvent(ReelSymbolEvents.SYMBOL_ANIMATION_FINISH);
		
	}

    public onSymbolAnimationStart(){

        //console.log("Reel Symbol Animation Started..." + this.symbolPosition);
        Listener.dispatchEvent(ReelSymbolEvents.SYMBOL_ANIMATION_START, {target:{ "data":this }});
    }
    
    public onSymbolAnimationFinish(){

        //console.log("Reel Symbol Animation finished..." +  this.symbolPosition);
        Listener.dispatchEvent(ReelSymbolEvents.SYMBOL_ANIMATION_FINISH, {target:{ "data":this }});
    }

    public setSymbolName(val:string)
    {
        this.symbolName = val;
    }

    public getSymbolName()
    {
        return this.symbolName;
    }

    public setSymbolIndex(val:number)
    {
        this.symbolIndex = val;
    }

    public getSymbolIndex()
    {
        return this.symbolIndex;
    }

    public setSymbolPositon(val:number)
    {
        this.symbolPosition = val;
    }

    public getSymbolPositon()
    {
        return this.symbolPosition;
    }

  
    public setIsBonus(val:boolean)
    {
        this.isBonus = val;
    }

    public getIsBonus()
    {
        return this.isBonus;
    }

    public setIsWild(val:boolean)
    {
        this.isWild = val;
    }

    public getIsWild()
    {
        return this.isWild;
    }
      
    public setFadeDuringSpin(val:boolean)
    {
        this.fadeDuringSpin = val;
    }

    public getFadeDuringSpin()
    {
        return this.fadeDuringSpin;
    }


    public applySpinAlpha()
    {
        this.symbolSpine.setAlpha(this.symbolData.spinFadeAlpha);
    }

    private buildSymbolBySymbolName(symbolName:string)
    {
        for(let j = 0; j < this.spinesDataForSymbols.length; j++)
        {
            this.symbolSpines[j].hide();
            this.symbolSpines[j].hide();
            this.symbolSpines[j].hide();
            this.symbolSpines[j].hide();
        }
        
        // The below lines get the data/properties of symbol from Symbol Dictionary
        // and replaces all the properties with the data
        // to play the appropriate spine to animation to play

        // !! this portion has to be updated whenever there is an addition of properties to the symbol.

        var data = this.dictionary[symbolName];
        var altlasId = data.atlasId;
        this.symbolSpine = this.symbolSpines[altlasId];
        this.symbolSpine.show();
        
        this.symbolName = data.name;
        this.symbolIndex = data.index;
        this.staticAnimation = data.staticImg;
        this.moveAnimation = data.moveAnimation;
        this.winAnimation = data.winAnimation;
        this.landingAnimation = data.landingAnimation;
       
        
        this.playLandingAnim = data.playLandingAnimation?data.playLandingAnimation:false;
        this.fadeDuringSpin = data.fadeDuringSpin?data.fadeDuringSpin:false;
        this.isWild = data.isWild?data.isWild:false;

        if(this.symbolState === ReelSymbol.SYMBOL_SPINNING_STATE)
        {
            if(this.fadeDuringSpin)
            {
                this.applySpinAlpha();
            }
        }
        else
        {
            this.symbolSpine.setAlpha(1.0);
        }
        this.isBonus = data.isBonus;
        return this.symbolSpine;
    }

    public getSpine()
    {
        return this.symbolSpine;
    }
     

    public setStaticAnimation(symbolName:string, playInstant:boolean = false)
    {
        this.buildSymbolBySymbolName(symbolName);
        console.log("************* Symbol Name*1: *RI*"+ this.parentReel.reelIndex+ " --- " +this.symbolName );

        this.parentReel.updateLastSymbols(this);
        if(playInstant)
        {
            this.playStaticAnimation();
        }
    }

    public setStaticAnimationByAnimName(animName:string, playInstant:boolean = false)
    {
        this.staticAnimation = animName;
        if(playInstant)
        {
            this.playStaticAnimation();
        }
    }


    private playStaticAnimation(numLoop:number = 0)
    {
        
        this.symbolSpine.playAnimationById(this.staticAnimation, numLoop);
    }

    public setMoveAnimation(animName:string)
    {
        this.moveAnimation = animName;
    }

    public playAnimationById(animName:string, numLoop:number = 0)
    {
        this.symbolSpine.playAnimationById(animName, numLoop);
    }

    public playMoveAnimation(numLoop:number = 0)
    {
        this.symbolSpine.playAnimationById(this.moveAnimation, numLoop);
    }

    public setLandingAnimation(animName:string)
    {
        this.landingAnimation = animName;
    }

    public playLandingAnimation(numLoop:number = 1)
    {
        if(this.playLandingAnim)
        {
            this.symbolSpine.playAnimationById(this.landingAnimation, numLoop);
        }
        
    }

    public setWinAnimation(animName:string)
    {
        this.winAnimation = animName;
    }

    public playWinAnimation(numLoop:number = 0)
    {
        this.symbolSpine.playAnimationById(this.winAnimation, numLoop);
    }

    // if the symbol animation is stopped it will go back to the ststic state
    public stopAnimation()
    {
        this.playStaticAnimation();
    }

    public updateState(symbolName:string)
    {
        this.buildSymbolBySymbolName(symbolName);
    }
   
};