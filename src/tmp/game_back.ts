console.log(' App ');

import DisplayObject from './clientEngine/core/display/DisplayObject';
import Stage from './clientEngine/core/graphics/Stage';
import Utils from './clientEngine/core/utils/Utils';
import ImageDisplay from './clientEngine/core/display/ImageDisplay';
import Button from './clientEngine/core/display/Button';
import TextDisplay from './clientEngine/core/display/TextDisplay';
import Assetloader from './clientEngine/core/loader/AssetsLoader';
import MovieClip from './clientEngine/core/display/MovieClip';
import SpineDisplay from './clientEngine/core/display/SpineDisplay';
import Resizer from './clientEngine/core/utils/Resizer';
import OrientationManager from './clientEngine/core/utils/OrientationManager';
import BrowserEvents from './clientEngine/core/events/BowserEvents';
import DeviceResolutionManager from './clientEngine/core/managers/DeviceResolutionManager';
import utils from '../src-js/core/utils/utils';
import Listener from './clientEngine/core/events/Listener';
import ReelSymbol from './slots/reels/ReelSymbol';
import SpineEvents from './clientEngine/core/events/SpineEvents';
import ReelSymbolEvents from './clientEngine/core/events/ReelSymbolEvents';
import ReelEvents from './clientEngine/core/events/ReelEvents';
import ReelsetEvents from './clientEngine/core/events/ReelsetEvents';
import Reel from './slots/reels/Reel';
import Reelset from './slots/reels/Reelset';
import GameConfig from './GameConfig';
import SymbolsDictionary from './slots/dataCollection/SymbolsDictionary';
import MoveTween from './clientEngine/core/utils/tween/MoveTween';
import FadeTween from './clientEngine/core/utils/tween/FadeTween';
import ScaleTween from './clientEngine/core/utils/tween/ScaleTween';
import RotateTween from './clientEngine/core/utils/tween/RotateTween';
import TweenFunctions from './clientEngine/core/utils/tween/TweenFunctions';
import ControlPanel from './slots/controlPanel/ControlPanel';


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
        
        this.initializeResizer();
        this.initAssetLoading();

        SymbolsDictionary.createDictionary();
        

        Utils.blockParentPageScroll();

    
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


    private spineAnimationStart(evt)
    {
        console.log("spineAnimationStart.................", evt);
    }


    private onSpineAnimationFinish(evt)
    {
        console.log("onSpineAnimationFinish.................", evt);
    }


    private onSymbolAnimationStart(evt)
    {
        console.log(" symbolAnimation Start from game...", evt.target.data);
    }


    private onSymbolAnimationFinish(evt)
    {
        console.log(" symbolAnimation finish from game...", evt.target.data);
    }



    private onChangeToLandscape(e)
    {
        
        let renderer = Stage.getRenderer();
        renderer.autoResize = true;
        renderer.resize(GameConfig.getConfig().screen.width, GameConfig.getConfig().screen.height);

        // if(this.myRefMovieClipPortrait)
        // {
        //     this.myRefMovieClipPortrait.hide();
            
        // }

        // if(this.myRefMovieClipLandScape)
        // {
        //     this.myRefMovieClipLandScape.show();
        // }
       
        //this.myRefMovieClip = new ImageDisplay(data);

        //this.myRefMovieClip.updateTransform();

      

        //Stage.getView().style.width = '990px';
        //Stage.getView().style.height = '576px';

        //var stage = new PIXI.Stage(0x667788);	var renderer = PIXI.autoDetectRenderer(400, 300);document.body.appendChild(renderer.view);// resize rendererrenderer.view.style.width = '800px';renderer.view.style.height = '600px';﻿
    }

    private onChangeToPortrait(e)
    {
        
        let renderer = Stage.getRenderer();
        renderer.autoResize = true;
        renderer.resize(GameConfig.getConfig().screen.height, GameConfig.getConfig().screen.width);

       
        
        

        //this.myRefMovieClip.updateTransform();

       
        
        // if(this.myRefMovieClipLandScape)
        // {
        //     this.myRefMovieClipLandScape.hide();
        // }

        // this.myRefMovieClipPortrait.show();

        //this.myRefMovieClip.texture = 

        //Stage.getView().style.width = '576px';
       // Stage.getView().style.height = '990px'
    }

    private initAssetLoading()
    {
        /*
        // Text Field creation and Usage
        var data = {
            fontFamily: 'Arial',
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
            text:"Success!......"
        }

        var myDisplay = new TextDisplay(data);
        var stage = Stage.getStage();
        stage.addChild(myDisplay.node);*/
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
            
            var data = {
                x:37, 
                y:30,
                'assets':["mainPanel"],
                
               }
            var myMainPanel = new ImageDisplay(data);
            var stage = Stage.getStage();        
            //stage.addChild(myMainPanel.node);

            var data = {
                x:101, 
                y:55,
                'assets':["reelFrame"]
               }
            var myMovieClip = new ImageDisplay(data);
            var stage = Stage.getStage();        
           //stage.addChild(myMovieClip.node);

            
            var data = {
                x:0, 
                y:0,
                'assets':["title"]
               }
            var myMovieClip = new MovieClip(data);
            var stage = Stage.getStage();        
            //stage.addChild(myMovieClip.node);
            myMovieClip.play();
            myMovieClip.setAnimationSpeed(0.2);
            myMovieClip.setAnchor(0);
            myMovieClip.setScale(0.5, 0.5);
            myMovieClip.node.position.set(1, 0.5);
            myMovieClip.setScale(0.2, 0.2);
            
            
            this.setupMc();
            this.setupEventListener();
            this.setUpTween2();
            this.createControlPanel();
            //this.gameResizer.checkPortraitOrLandscape();

            
        }
        
    }

    private setupMc()
    {
        
        // Image Container - Start
        var data = {
            'Type':"ImageDisplay",
            //'anchor':0.5,
            'scale':0.5,
            'x':0,
            'y':0,
            'assets':["bgMain"],
            "lom":{
                "landscape":{
                    'assets':["bgMain"],
                    'scale':0.5,
                },
                "portrait":{
                    'assets':["bgMain"],
                    //'anchor':0.5,
                    'scale':0.5,
                    'x':0,
                    'y':0
                }
            }
        }
           
        this.myRefMovieClipLandScape = new ImageDisplay(data);
        var stage = Stage.getStage();   
                
        stage.addChild(this.myRefMovieClipLandScape.node);
        
        this.myRefMovieClipLandScape.show();

        // Image Container - End

        
        // Spine Ace - End

        var symbolData = {
            "id":"reel1",
            "symbolName":"king",
            "index":1,
            "position":10,
            "x":350,
            "y":-10,
            "alpha":1,
            'assets':["symbolRoyals"],
            "staticAnimation":"king",
            "winAnimation":"king_win",
            "stopAnimation":"king_stop",
            "moveAnimation":"king_move",
            "landingAnimation":"king_move",
            "lom":{
                "landscape":{
                    x:350, 
                    y:-150,
                },
                "portrait":{
                    'x':58,
                    'y':347,
                    'scale':0.29
                }
            },
        }

        /*
        this.aceSymbol = new ReelSymbol(symbolData);
        //this.aceSymbol.setAlpha(0.3);
        //this.aceSymbol.show();
        this.aceSymbol.setScale(0.5, 0.5);
        this.aceSymbol.playStaticAnimation();

        this.aceSymbol.playWinAnimation();

        this.aceSymbol.setXY(700, 350);
    
        stage.addChild(this.aceSymbol.node);

        */

       var reelsetConfig = GameConfig.getConfig().reelsetConfig;
      
        this.myReelSet = new Reelset(reelsetConfig);
        stage.addChild(this.myReelSet.node);
        this.myReelSet.setScale(0.5, 0.5) 

        this.myReelSet.setXY(92, 32);

        /*
        //settings for right to left
        this.myReelSet.setReelStartOrder([4, 3, 2, 1, 0]);
        this.myReelSet.setInterReelSpinDelay([0, 200, 400, 600, 800]); // always in ascending order works based on the start reel order
        

        this.myReelSet.setReelStopOrder([4, 3, 2, 1, 0]);
        this.myReelSet.setInterReelStopDelay([0, 1000, 1000, 1000, 1000]);// always in ascending order works based on the start reel order
        
        */
        
        

        
        // settings for left to right

          

        //this.myReelSet.setReelSlowDown([false, false, true, false, true]);
        //this.myReelSet.setReelSlowDownMultiplier([null, null, 0.5, null, 0.5]);
        //this.myReelSet.setReelSlowDownByReel(2, true, 0.5);
        //this.myReelSet.setReelSlowDownByReel(4, true, 0.5);
        

        
        /*
        
        // starts from the middle and stops from left to right
        this.myReelSet.setReelStartOrder([2, 3, 1, 4, 0]);
        this.myReelSet.setInterReelSpinDelay([0, 400, 600, 800, 1200]);
        
        this.myReelSet.setReelStopOrder([4, 2, 0, 1, 3]);
        this.myReelSet.setInterReelStopDelay([2000, 2000, 2000, 2000, 2000]);
        */
        
        

        
        // when there is no need for reel slow down
        /*
        this.myReelSet.setReelStartOrder([0, 1, 2, 3, 4]);
        this.myReelSet.setInterReelSpinDelay([0, 200, 400, 600, 800 ]);
        this.myReelSet.setReelStopOrder([0, 1, 2, 3, 4]);
        this.myReelSet.setInterReelStopDelay([0, 0, 0, 0, 0]); // for all the reels to stop at the same time
        this.myReelSet.setInterReelStopDelay([1000, 1000, 1000, 1000, 1000]); // for all the reels to stop at the same time
        this.myReelSet.setReelSlowDown([false, false, false, false, false]);
        */

        // when there is a reel slow down
        //when there is an anticipation in the game the reels can't stop at the same time        
        this.myReelSet.setReelStartOrder([0, 1, 2, 3, 4]);
        this.myReelSet.setInterReelSpinDelay([0, 200, 400, 600, 800 ]);
        this.myReelSet.setReelStopOrder([0, 1, 2, 3, 4]);
        this.myReelSet.setInterReelStopDelay([0, 0, 0, 0, 0]); // for all the reels to stop at the same time
        
        this.myReelSet.setReelSlowDown([false, false, false, false, true]); // method 1 to enable reel slow down
        this.myReelSet.setReelSlowDownByReel(4, true, 1, 10);
   

        // reelIndex, slowdown set to true, slowDown multiplier, number of symbols to fudge
        //this.myReelSet.setReelSlowDownByReel(4, true, 1, 5); // recommended method 2 to take full control of reel slow down with reel by reel basis
        
  




        var data = {
            'Type':"DisplayObject",
            //'anchor':0.5,
            //'scale':0.5,
            'x':100,
            'y': 0,
            "width":100,
            "height":60,
            "fillColor":"0xFF0000",
            "clickCallBack":()=>{this.stopReels()},
            "allowClick":true
        }

        this.myButton = new DisplayObject(data);

        
        
   
               
        stage.addChild(this.myButton.node);


        var data = {
            'type':"ImageDisplay",
            //'anchor':0.5,
            //'scale':0.5,
            'x':200,
            'y': 300,
            "assets":["spinButton"],
            "alpha":1,
            "width":100,
            "height":60,
            "fillColor":"0x00FF00",
            "clickCallBack":()=>{this.startSpin()},
            "allowClick":true
        }

        this.spinButton = new Button(data);
   
        

        //this.mySprite.addChild(this.myButton.node);
               
        stage.addChild(this.spinButton.node);
        this.spinButton.setAnchor(0.5);
        this.spinButton.setScale(0.25);
        //this.myButton.setPivotPoint(0.5 , 0.5);
        

        //      this.mySprite.addChild(this.myButton);
        //      this.myButton.clickable(false);
      
    
    }

    private createControlPanel()
    {
        var data = GameConfig.getConfig().render.gameContainer.controlPanel;
        this.controlPanel = new ControlPanel(data);
        var stage = Stage.getStage(); 
        stage.addChild(this.controlPanel.node);
    }

    
    private startSpin()
    {

        this.animate();
        //this.myReel0.setStartDelay(5);
        // this.myReel1.setStartDelay(0.2);
        // this.myReel2.setStartDelay(0.4);
        // this.myReel3.setStartDelay(0.6);
        // this.myReel4.setStartDelay(0.8);

        //this.myReelSet.startSpin();
        // this.myReel1.startSpin();

        // this.myReel2.startSpin();
        // this.myReel3.startSpin();
        // this.myReel4.startSpin();

        
        //this.myReel.stopSpin();
        console.log("Start Reels");
    }

    private stopReels()
    {
        var stop1 = 16;// Math.floor(Math.random() * 21);
        var stop2 = 12;// Math.floor(Math.random() * 23);
        var stop3 = 5;// Math.floor(Math.random() * 23);
        var stop4 = 7;// Math.floor(Math.random() * 23);
        var stop5 = 1;//Math.floor(Math.random() * 23);
       
        this.myReelSet.setStopPositions([stop1, stop2, stop3, stop4, stop5]);
        //this.myReelSet.setReelSlowDownByReel(4, true);
        this.myReelSet.stopSpin();

        
        
        
        // this.myReel1.stopSpin();
        // this.myReel2.stopSpin();
        // this.myReel3.stopSpin();
        // this.myReel4.stopSpin();
        console.log("Stop Reels");
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


    private finishEarly()
    {
        
    }
    private onReelsetSpinFinish(p)
    {
        //this.myReelSet.reels[0].stopReelAtPos(0);
        console.log("Bharath:!"+ this.myReelSet.getReelByIndex(0).getApertureSymbols());
        console.log("onReelsetSpinFinish -----");

        console.log("onReelsetSpinFinish", this.myReelSet.getApertureSymbols());
        console.log("onReelsetSpinFinish Top Symbols", this.myReelSet.getSymbolsOnTop());
        console.log("onReelsetSpinFinish Bottom Symbols", this.myReelSet.getSymbolsAtBottom());

          /*
        // playing landing animation
        this.myReelSet.getSymbolByPosition(18).playLandingAnimation();
      
        
        // playing move animation
        this.myReelSet.getSymbolByPosition(18).playMoveAnimation();
        
        
        // playing a win animation
        this.myReelSet.getSymbolByPosition(18).playWinAnimation();

       
        
        
        // playing a different animation on a symbol from the same atlas
        this.myReelSet.getSymbolByPosition(18).playAnimationById("ten");
        */
       
        // playing a different animation on a symbol from a different same atlas
        // 1. set the static animation for a symbol from different AudioTrackList, the will rebuild the symbol to assign new atlas
        // 2. now you can play the animation from the new atlas
        //this.myReelSet.getSymbolByPosition(18).setStaticAnimation("teddy");
        //this.myReelSet.getSymbolByPosition(18).playAnimationById("ace");

    }

    private setUpTween2()
    {
        var initData = {
            "startValue":{"x":0, "y":0},
            "endValue":{"x":500, "y":500},
            "duration":2,
            "startCallback":()=>{ this.moveStart(); },
            "updateCallback":(x, y)=>{ this.moveUpdate(x, y); },
            "endCallback":()=>{ this.moveComplete(); },
            "targetObjects":[this.spinButton, this.myButton],
            "paused":false,
            "easingFunction":TweenFunctions.EASE_INOUT_BACK
        
        }
        this.myMoveTween = new MoveTween(initData);

        var initData = {
            "startValue":0,
            "endValue":1,
            "duration":10,
            "startCallback":()=>{ this.fadeStart(); },
            "updateCallback":(p)=>{ this.fadeUpdate(p); },
            "endCallback":()=>{ this.fadeComplete(); },
            "targetObjects":[this.spinButton],
            "numLoops":4,
            "paused":false,
            "easingFunction":TweenFunctions.EASE_INOUT_BACK
        
        }
        this.myFadeTween = new FadeTween(initData);

        var initData = {
            "startValue":0,
            "endValue":1,
            "duration":10,
            "startCallback":()=>{ this.scaleStart(); },
            "updateCallback":(p)=>{ this.scaleUpdate(p); },
            "endCallback":()=>{ this.scaleComplete(); },
            "targetObjects":[this.spinButton],
            "numLoops":1,
            "paused":false,
            //"easingFunction":TweenFunctions.EASE_INOUT_BACK
        
        }
        
        
        this.myScaleTween = new ScaleTween(initData);

        var initData = {
            "startValue":0,
            "endValue":360,
            "duration":10,
            "startCallback":()=>{ this.rotateStart(); },
            "updateCallback":(p)=>{ this.rotateUpdate(p); },
            "endCallback":()=>{ this.rotateComplete(); },
            "targetObjects":[this.spinButton],
            "numLoops":1,
            "loopForwardAndReverse":true,
            "delayBetweenLoop":2,
            "paused":false,
            //"easingFunction":TweenFunctions.EASE_INOUT_BACK
        
        }
        
        
        this.myRotateTween = new RotateTween(initData);
    }

    private animate()
    {
      
       
        this.myMoveTween.start();       
        this.myFadeTween.start();       
        this.myScaleTween.start();        
        this.myRotateTween.start();
        
    }


    private moveStart()
    {
        console.log("move Start....");
    }

    private moveUpdate(x:number, y:number)
    {
        console.log("move update...."+ x);
    }


    private moveComplete()
    {
        console.log("move Complete....");
    }

    

    private fadeStart()
    {
        console.log("fade Start....");
    }

    private fadeUpdate(val:number)
    {
        console.log("fade update...."+ val);
    }


    private fadeComplete()
    {
        console.log("fade Complete....");
    }



    private scaleStart()
    {
        console.log("scale Start....");
    }

    private scaleUpdate(val:number)
    {
        console.log("scale update...."+val);
    }


    private scaleComplete()
    {
        console.log("scale Complete....");
    }

    private rotateStart()
    {
        console.log("rotate Start....");
    }

    private rotateUpdate(val:number)
    {
        console.log("rotate update...."+ val);
    }


    private rotateComplete()
    {
        console.log("rotate Complete....");
    }


    



};
