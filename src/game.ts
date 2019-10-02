console.log(' App ');


import Stage from './clientEngine/core/graphics/Stage';
import Utils from './clientEngine/core/utils/Utils';

import TextDisplay from './clientEngine/core/display/TextDisplay';
import Assetloader from './clientEngine/core/loader/AssetsLoader';

import Resizer from './clientEngine/core/utils/Resizer';
import OrientationManager from './clientEngine/core/utils/OrientationManager';
import BrowserEvents from './clientEngine/core/events/BowserEvents';
import DeviceResolutionManager from './clientEngine/core/managers/DeviceResolutionManager';

import Listener from './clientEngine/core/events/Listener';
//import ReelSymbol from '../ slots/reels/ReelSymbol';

import ReelEvents from './clientEngine/core/events/ReelEvents';
import ReelsetEvents from './clientEngine/core/events/ReelsetEvents';
import GameConfig from './GameConfig';
import SymbolsDictionary from './clientEngine/slots/dataCollection/SymbolsDictionary';

import SlotScreen from './clientEngine/slots/SlotScreen';
import LoadingScreen from './clientEngine/slots/LoadingScreen';

import SuperDisplayObject from './clientEngine/core/display/SuperDisplayObject';


import B from './clientEngine/core/test/B';



export default class App{

    private initObj = null;
    private DOM = null;
    public static PIXICoreView = null; // native PIXI View(App.view) lives here - new PIXI.Application();

    private gameInfo = null;
    private wrapperInitialized = false;
    private initResponseReceived = false;
    private gameResizer = null;
    private myRefMovieClipLandScape = null;
    private myRefMovieClipPortrait = null;
    private controlPanel = null;
    private basicText = null;
     
    

    private layoutOrientationManager:OrientationManager = null;
    

    constructor(initObj, DOMContainer)
    {
        this.DOM = DOMContainer;
        this.initObj = Utils.checkNullUndefined(initObj, null);
    };

    public init(initObj)
    {
        console.log("App initiated");
    
        this.setup();
    };

    private setup()
    {
        this.initStage();
        this.setupManagers();
        
        
        this.initAssetLoading();

        SymbolsDictionary.createDictionary();
        

        Utils.blockParentPageScroll();
        this.initializeResizer();
        this.setupEventListener();   
        
         
    }

    

    private initStage()
    {
        let stageConfig = {
            "backgroundColor" : GameConfig.getConfig().screen.backgroundColor, 
            "resolution": GameConfig.getConfig().screen.resolution, 
            "width":GameConfig.getConfig().screen.width, //990, 
            "height":GameConfig.getConfig().screen.height, //576,
            "antialias":GameConfig.getConfig().screen.antialias,
            "autoResize":GameConfig.getConfig().screen.autoResize
        };

        App.PIXICoreView = Stage.getPIXIInstance(stageConfig);
        this.DOM.appendChild(App.PIXICoreView);
        console.log(Stage.getStage());
        console.log(Stage.getView());

       

        console.log("Reading mainConfig:", GameConfig.getConfig().autoplay.enabled);

        DeviceResolutionManager.checkDeviceResolution();

        
       
    }

    private initializeResizer()
    {
        this.gameResizer = new Resizer();
        this.gameResizer.initialize();
    }

    private setupEventListener()
    {
        Listener.addEventListener(BrowserEvents.ORIENTATION_CHANGE_TO_LANDSCAPE, ()=>{this.onChangeToLandscape(this)}, false);
        Listener.addEventListener(BrowserEvents.ORIENTATION_CHANGE_TO_PORTRAIT, ()=>{this.onChangeToPortrait(this)}, false);

        //Listener.addEventListener(SpineEvents.SPINE_ANIMATION_START, (p)=>{this.spineAnimationStart(p)});
        //Listener.addEventListener(SpineEvents.SPINE_ANIMATION_FINISH, (p)=>{this.onSpineAnimationFinish(p)});


        //Listener.addEventListener(ReelSymbolEvents.SYMBOL_ANIMATION_START, (p)=>{this.onSymbolAnimationStart(p)});
        //Listener.addEventListener(ReelSymbolEvents.SYMBOL_ANIMATION_FINISH, (p)=>{this.onSymbolAnimationFinish(p)});

        Listener.addEventListener(ReelEvents.REEL_SPIN_START, (p)=>{this.onReelSpinStart(p)});
        Listener.addEventListener(ReelEvents.REEL_SPIN_FINISH, (p)=>{this.onReelSpinFinish(p)});

        Listener.addEventListener(ReelsetEvents.REELSET_SPIN_START, (p)=>{this.onReelsetSpinStart(p)});
        Listener.addEventListener(ReelsetEvents.REELSET_SPIN_FINISH, (p)=>{this.onReelsetSpinFinish(p)});

        /*
        Listener.addEventListener('SpineReady', (p)=>{
            console.log('SpineReady2:This is big bang listener yo!', p);
        });*/

        window.addEventListener('resize', function(e) {
            this.gameResizer.onBrowserResize(e);
        }.bind(this), false);

        /*
        window.addEventListener("orientationchange", function() {
            console.log("the orientation of the device is now " + screen.orientation.angle);
        });*/

  
    }

    private setupManagers()
    {
        console.log("setupManagers.................");
    }


    
    private onChangeToLandscape(e)
    {
        
        let renderer = Stage.getRenderer();
        renderer.autoResize = true;
        renderer.resize(GameConfig.getConfig().screen.width, GameConfig.getConfig().screen.height);
      
    }

    private onChangeToPortrait(e)
    {
        
        let renderer = Stage.getRenderer();
        renderer.autoResize = true;
        renderer.resize(GameConfig.getConfig().screen.height, GameConfig.getConfig().screen.width);

    }

    private initAssetLoading()
    {
      
        let assetsConfig = GameConfig.getConfig().assets;

        let initData = {
            "assetsList":assetsConfig,
            "loadCompleteCallback":()=>{this.onAssetsLoadingComplete()},
            "textObj":null,
            "animationContainer":null
        }

        var assetsLoader = new Assetloader(initData);
    }

    public onAssetsLoadingComplete2()
    {
        console.log("From App - AllAssetsReadyTouse");
    }

    
    public onAssetsLoadingComplete()
    {
        console.log("From App - AllAssetsReadyTouse");

        this.wrapperInitialized = true;
        this.initResponseReceived = true;
        if(this.wrapperInitialized === true && this.initResponseReceived === true)
        {

            this.initialiseSlotScreen(this);
            this.initialiseLoadingScreen(this);
            
        }
        
    }


    public initialiseLoadingScreen(parent)
    {
        this.loadingScreen = new LoadingScreen(parent);
        this.loadingScreen.init();
        this.gameResizer.checkPortraitOrLandscape(true);

        /*
        var data = {
            fontFamily: 'Arial',
            align:'center',
            fontSize: 50,
            fontStyle: 'italic',
            fontWeight: 'bold',
            fill: '#FFFFFF',// ['#ffffff', '#00ff99'], // gradient
            stroke: '#FF0000',
            strokeThickness: 1,
            dropShadow: false,
            dropShadowColor: '#000000',
            dropShadowBlur: 2,
            dropShadowAngle: Math.PI / 6,
            dropShadowDistance: 2,
            wordWrap: true,
            wordWrapWidth: 100,
            text:"Success!......",
            x:0,
            y:600
        }

        if(!this.basicText)
        {
            this.basicText = new TextDisplay(data);
        }
        
        //basicText.x = 50;
        //basicText.y = 100;



        //var tmpSprite = new PIXI.Sprite();

        //tmpSprite.addChild(this.basicText.node);
        Stage.getStage().addChild(this.basicText.node);*/
        
    }

    public onLoadingScreenFinish()
    {
        this.slotScreen.enter();
    }
    public initialiseSlotScreen(parent)
    {
        this.slotScreen = new SlotScreen(parent);
        this.slotScreen.init();
        this.gameResizer.checkPortraitOrLandscape(true);

        var data = {
            fontFamily: 'Arial',
            "id":"SampleText1",
            align:'right',
            fontSize: 50,
            fontStyle: 'italic',
            fontWeight: 'bold',
            fill: '#FFFFFF',// ['#ffffff', '#00ff99'], // gradient
            stroke: '#FF0000',
            strokeThickness: 1,
            dropShadow: false,
            dropShadowColor: '#000000',
            dropShadowBlur: 2,
            dropShadowAngle: Math.PI / 6,
            dropShadowDistance: 2,
            wordWrap: true,
            wordWrapWidth: 600,
            text:"BALANCE: £100.00",
            x:0,
            y:0
        }

        if(!this.basicText)
        {
            this.basicText = new TextDisplay(data);
            this.basicText.init();
        }

        this.basicText.setAnchorPoint(0.5, 0.5);
        this.basicText.setScale(0.75);       
      
        Stage.getStage().addChild(this.basicText.node);

        //var myA = new A();
        //console.log("Object myA created");
        var myB = new B();
        console.log("Object myB created");
        myB.method1();

        /*
        var mySuperDisplay = new SuperDisplayObject();
        mySuperDisplay.init();
        Stage.getStage().addChild(mySuperDisplay.node);
        mySuperDisplay.gotoFrame(3);
        console.log("Super Display"+ mySuperDisplay.getAnimations());
        mySuperDisplay.playAnimationById("01_Slow", 10)
        Stage.getStage().removeChild(mySuperDisplay.node);*/
        //this.basicText.addChild(mySuperDisplay.node);
        
    }



    private onReelSpinStart(p)
    {
        console.log("onReelSpinStart -----");
    }

    private onReelSpinFinish(p)
    {
        console.log("onReelSpinFinish -----");
    }


    private onReelsetSpinStart(p)
    {
        console.log("onReelsetSpinStart -----");
    }


   
    private onReelsetSpinFinish(p)
    {
        //this.myReelSet.reels[0].stopReelAtPos(0);
        console.log("Bharath:!"+ this.myReelSet.getReelByIndex(0).getApertureSymbols());
        console.log("onReelsetSpinFinish -----");

        console.log("onReelsetSpinFinish", this.myReelSet.getApertureSymbols());
        console.log("onReelsetSpinFinish Top Symbols", this.myReelSet.getSymbolsOnTop());
        console.log("onReelsetSpinFinish Bottom Symbols", this.myReelSet.getSymbolsAtBottom());


    }


};
