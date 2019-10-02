import GameConfig from '../../GameConfig';
import DisplayObject from "../core/display/DisplayObject";
import TextDisplay from "../core/display/TextDisplay";
import Button from "../core/display/Button";
import ReelSymbol from "./reels/ReelSymbol";
import Utils from "../core/utils/Utils";
import Reelset from "./reels/Reelset";
import ControlPanel from "./controlPanel/ControlPanel";
import Listener from '../core/events/Listener';
import ControlPanelEvents from '../core/events/ControlPanelEvents';
import WinlinesManager from '../slots/winlines/winlinesManager';
import ReelsetEvents from '../core/events/ReelsetEvents';
import WinlineEvents from '../slots/events/WinlineEvents';
import BrowserEvents from '../core/events/BowserEvents';
import Tweener from '../core/utils/tween/Tweener';
import Stage from '../core/graphics/Stage';
import Wheel from '../../game/bonus/wof/wheel';
import MockData from '../../mockData/MockData';

export default class SlotScreen {

    private gameContainerConfig = null;
    private stage = null;
    public static screenComponents = {};
    private reelsetsArray = [];
    private controlPanel = null;
    private currentReelset = null;
    private currentWinlinesManager = null;
    private baseGameReelset = null;
    private gameFinished = true;

    private winData = [];
    private wheelOfFortune = null;

   
    constructor() {

    }

    public init() {
        this.stage = Stage.getStage();
        this.gameContainerConfig = GameConfig.getConfig().render.gameContainer;

        let gameContainer = new DisplayObject({id:"GameContainer"});
        gameContainer.init();
        this.stage.addChild(gameContainer.node);
        SlotScreen.screenComponents['gameContainer'] = gameContainer;

        let slotScreenContainer = new DisplayObject({id:"SlotScreen"});
        slotScreenContainer.init();


        SlotScreen.screenComponents['slotScreenContainer'] = slotScreenContainer;
        gameContainer.addChild(slotScreenContainer);

        //this.setupBackGrounds();
        this.setupScreenComponents();
        this.setupReelSets();
        this.setupReelsetWinlinesManager();
       
        this.setupControlPanel();
        this.setupEventListener();
        
        this.swichCurrentReelsetTo(this.baseGameReelset);

        this.setUpWheelOfFortuneBonus();
        this.setupOverlaySymbols();
        
    }


    public resumeGameFromTopBar() {
        
    }

    public enter() {
        /*
        if(inGip)
        {
            startReelSpinning
        }
        else
        {

        }*/

        this.animatePotMeters();
        this.wheelOfFortune.startWheel();

    }

    public setupScreenComponents()
    {
        Utils.autoGenerateObjectsFromConfig(this.gameContainerConfig.slotScreen, this, SlotScreen.screenComponents , "slotScreenContainer");
    }

    public setupEventListener() {

        Listener.addEventListener(BrowserEvents.ORIENTATION_CHANGE_TO_LANDSCAPE, ()=>{this.onChangeToLandscape(this)}, false);
        Listener.addEventListener(BrowserEvents.ORIENTATION_CHANGE_TO_PORTRAIT, ()=>{this.onChangeToPortrait(this)}, false);

        Listener.addEventListener(ControlPanelEvents.SPIN_BUTTON_CLICKED, (p)=>{this.onSpinButtonClicked(p)});
        Listener.addEventListener(ControlPanelEvents.AUTOPLAY_BUTTON_CLICKED, (p)=>{this.onAutoPlayButtonClicked(p)});
        Listener.addEventListener(ControlPanelEvents.TURBO_BUTTON_CLICKED, (p)=>{this.onTurboButtonClicked(p)});
        Listener.addEventListener(ControlPanelEvents.STAKE_BUTTON_CLICKED, (p)=>{this.onStakeButtonClicked(p)});
        Listener.addEventListener(ControlPanelEvents.GAMBLE_BUTTON_CLICKED, (p)=>{this.onGambleButtonClicked(p)});
        Listener.addEventListener(ControlPanelEvents.SOUND_BUTTON_CLICKED, (p)=>{this.onSoundButtonClicked(p)});
        Listener.addEventListener(ControlPanelEvents.SETTINGS_BUTTON_CLICKED, (p)=>{this.onSettingsButtonClicked(p)});
        Listener.addEventListener(ControlPanelEvents.MENU_BUTTON_CLICKED, (p)=>{this.onMenuButtonClicked(p)});

        Listener.addEventListener(ReelsetEvents.REELSET_SPIN_START, (p)=>{this.onReelsetSpinStart(p)});
        Listener.addEventListener(ReelsetEvents.REELSET_SPIN_FINISH, (p)=>{this.onReelsetSpinFinish(p)});

        Listener.addEventListener(WinlineEvents.WINLINE_ANIMATION_START, (p)=>{this.winlineShown(p)});
        Listener.addEventListener(WinlineEvents.WINLINE_ALL_ANIMATION_FINISH, (p)=>{this.allwinlineAnimationFinish(p)});

        Listener.addEventListener(WinlineEvents.WINLINE_SPAGHETTI_START, (p)=>{this.winlinesSpaghettiShown(p)});
        Listener.addEventListener(WinlineEvents.WINLINE_SPAGHETTI_FINISH, (p)=>{this.winlinesSpaghettiFinished(p)});

        

    }

    public animatePotMeters()
    {
      

        var potData = {
            silverPot:{
                currentValue:0,
                targetValue:75
            },
            goldPot:{
                currentValue:0,
                targetValue:100
            },
            bronzePot:{
                currentValue:0,
                targetValue:50
            }
        }
        var initData1 = {
            "startValue":potData.goldPot.currentValue,
            "endValue":potData.goldPot.targetValue,
            "duration":1000,
            "updateCallback":this.updateGoldPotMeterCallBack,
            "numLoops":1,
            "delay":1000,
        }


        var initData2 = {
            "startValue":potData.silverPot.currentValue,
            "endValue":potData.silverPot.targetValue,
            "duration":1000,
            "updateCallback":this.updateSliverPotMeterCallBack,
            "numLoops":1,
            "delay":1000,
        }

        var initData3 = {
            "startValue":potData.bronzePot.currentValue,
            "endValue":potData.bronzePot.targetValue,
            "duration":1000,
            "updateCallback":this.updateBronzePotMeterCallBack,
            "numLoops":1,
            "delay":1000
        }
        var myTween1 = new Tweener(initData1);
        var myTween2 = new Tweener(initData2);
        var myTween3 = new Tweener(initData3);
        myTween1.start();
        myTween2.start();
        myTween3.start();
       
    }

    private updateGoldPotMeterCallBack(val)
    {
        SlotScreen.screenComponents.goldPotText.setText(val.toFixed(2));
    }

    private updateSliverPotMeterCallBack(val)
    {
        SlotScreen.screenComponents.silverPotText.setText(val.toFixed(2));
    }

    private updateBronzePotMeterCallBack(val)
    {
        SlotScreen.screenComponents.bronzePotText.setText(val.toFixed(2));
    }

    private onChangeToLandscape(p)
    {
        SlotScreen.screenComponents.screenCover.show();
        if(GameConfig.getConfig().game.playableInLandscape)
        {
            SlotScreen.screenComponents.screenCover.hide();
        }

       
    }

    private onChangeToPortrait(p)
    {
        SlotScreen.screenComponents.screenCover.show();
        if(GameConfig.getConfig().game.playableInPortrait)
        {
            SlotScreen.screenComponents.screenCover.hide();
        }
    }
    
    private onSpinButtonClicked(p)
    {
        console.log("Slotscreen Spin Button Clicked ----- ");

       
        if(!this.currentReelset.isSpinning  && this.gameFinished)
        {
            this.gameFinished = false
            this.disableControlPanel();
            this.startSpin();
        }
        
        
    }

    private onAutoPlayButtonClicked()
    {
        console.log(" Autoplay Button Clicked ----- "); 
    }

    private onTurboButtonClicked()
    {
        console.log(" Turbo Button Clicked ----- ");   
    }

    private onStakeButtonClicked()
    {
        console.log(" Stake Button Clicked ----- ");   
    }

    private onGambleButtonClicked()
    {
        console.log(" Gamble Button Clicked ----- ");     
    }

    private onSoundButtonClicked()
    {
        console.log(" Sound Button Clicked ----- ");   
    }

    private onSettingsButtonClicked()
    {
        console.log("Settings Button Clicked ----- ");    
    }

    private onMenuButtonClicked()
    {
        console.log("Menu Button Clicked ----- ");    
    }

    private setUpWheelOfFortuneBonus()
    {
        var initData = {};
        initData.screen = this;
        
        initData.bonusContainer = SlotScreen.screenComponents['wheelBonus'];
        this.wheelOfFortune = new Wheel(initData);
        this.wheelOfFortune.init();
       
        console.log("Helloooo:"+ SlotScreen.screenComponents['wofTickerAnim'].getAnimations());

        
        
        //SlotScreen.screenComponents['wofTickerAnim'].playAnimationById("01_Slow", 5);
        //SlotScreen.screenComponents['wofTickerAnim'].setSpeed(0.1);
    }

    /*
    public autoGenerateObjectsFromConfig() {
       
    
                    
       
        let parentNamesArray = ["slotScreenContainer"];
        let parentName = "slotScreenContainer";
        let currentPropertyName = null;
        let lastPropertyName = null;
        let initData = null;
        var strClassName = null;
        var parentObj = null;
        var objToAddToScene = null;
        
        var obj = {};
        function eachRecursive(obj, scope)
        {
            
           
            for (var i in obj)
            {
                
                currentPropertyName = i;
                console.log("currentPropertyName:"+ currentPropertyName);
                console.log("lastPropertyName:"+ lastPropertyName);

                
                //if(i == "type")                            
                if(obj[i].hasOwnProperty("type"))
                {
                    strClassName = obj[i].type;
                    initData = obj[i];
                    
                    initData.id = Utils.checkNullUndefined(initData.id, currentPropertyName); 
                    objToAddToScene = new scope.classesDictionary[strClassName](initData); //new [strClassName]();
                    SlotScreen.screenComponents[i] = objToAddToScene;
                    parentObj = SlotScreen.screenComponents[parentName];

                    if(objToAddToScene.node)
                    {
                        parentObj.addChild(objToAddToScene);
                    }
                    else
                    {
                        parentObj.addChild(objToAddToScene);
                    }
                    

                    console.log("create Object ID:"+ currentPropertyName + " of Type:"+ obj[i].type + " to a parent " +  parentName);
                }

                if(obj[i].hasOwnProperty("children"))
                {
                    parentName = currentPropertyName;
                    parentNamesArray.push(parentName);
                }

                
                if(i == "children")
                {
                    console.log("Parent..."+ parentName + "::::::" + i + " i "+  obj[i]);
                    lastPropertyName = currentPropertyName;
                    eachRecursive(obj[i], scope);
                    console.log("End of Children Iteration");
                    parentNamesArray.pop();
                    parentName = parentNamesArray[parentNamesArray.length -1];

                }
                else
                {
                    
                    if( !Array.isArray(obj[i]) && typeof(obj[i]) === "object" )
                    {
                        lastPropertyName = currentPropertyName;
                        eachRecursive(obj[i], scope);
                        console.log("End of OBJECT Iteration");
                        //parentName = i;
                    }
                    
                    
                }

                lastPropertyName = currentPropertyName;
            }
            
        }

        eachRecursive(this.gameContainerConfig.slotScreen, this);
        
    }
    */

    public setupGameLogo() {

    }


    public setupControlPanel() {
        this.controlPanel = new ControlPanel();
        this.controlPanel.init();
    }

    public setupBalanceBar() {

    }

    
    public setupOverlaySymbols()
    {
        /*
        let apertureSymbols = this.baseGameReelset.getApertureSymbols();
        var reel = null;
        var xPos = 0;
        var yPos = 0;
        for(var i= 0; i< this.baseGameReelset.reels.length; i++)
        {
            reel = this.baseGameReelset.reels[i];
            var noOfSymbols = reel[i].apertureSymbols.length;
            xPos = reel.getX();
            for(var j= 0; j< noOfSymbols; j++)
            {
                yPos = 
                symbolObj = reel[i].createSymbol(j);
                SlotScreen.screenComponents..addChild(symbolObj);
            }

        }
        
        
        //this.reelStripLength = this.reelStrip.length

        //this.setupMask();
        */

        
    }


    public setupReelSets() {

        var reelsetConfig = GameConfig.getConfig().reelsetConfig;
      
        // creates Base Game Reelset
        this.baseGameReelset = new Reelset(reelsetConfig);
        this.baseGameReelset.init();


        this.currentReelset = this.baseGameReelset;

        var reelsetContainer = SlotScreen.screenComponents["reelsBacking"];
        
        reelsetContainer.addChild(this.currentReelset);
        //this.currentReelset.setScale(0.5, 0.5) 

        //this.currentReelset.setXY(92, 32);
        this.reelsetsArray.push(this.currentReelset);
        this.currentReelset.setApertureSymbols(); 
       
    }

    private setupReelsetWinlinesManager(){
               
        var initData = GameConfig.getConfig().winlinesManagerConfig.baseGameReelSet;
        initData.reelset = this.currentReelset;
        let baseGameWinManager = new WinlinesManager(initData);
        baseGameWinManager.hideAllWinlines();

        // Assigns win Manager to the reelset
        this.baseGameReelset.setWinManager(baseGameWinManager);
        

    }

    private swichCurrentReelsetTo(reelset){

        this.currentReelset = reelset;
        this.currentWinlinesManager = this.currentReelset.getWinManager();
        this.currentWinlinesManager.setCurrentReelset(this.currentReelset);
        
        
    }

    public startSpin() {

        //this.currentReelset.setReelSlowDown([false, false, true, false, true]);
        //this.currentReelset.setReelSlowDownByReel(4, true); 
        this.currentReelset.startSpin();
        
        setTimeout(()=>{this.stopSpin(); }, GameConfig.getConfig().reelsetConfig.minimumSpinTime);
    }

    public stopSpin()
    {

        var stop1 = Math.floor(Math.random() * 21);
        var stop2 = Math.floor(Math.random() * 21);
        var stop3 = Math.floor(Math.random() * 21);
        var stop4 = Math.floor(Math.random() * 21);
        var stop5 = Math.floor(Math.random() * 21);
        var stopPosArr = [stop1, stop2, stop3, stop4, stop5];

        //stopPosArr = [0, 0, 0, 0, 0]
        this.currentReelset.setStopPositions(stopPosArr);

        this.currentReelset.stopSpin();
        
    }

    public sendPlayRequest() {

    }

    public onPlayResponse() {

        // if(checkForPreModifiers())
        // {
        //     showPreMofifier()
        // }



    }

    public preModifiersComplete() {
        // this.stopSpin(0)
    }

    
    private onReelsetSpinStart(p)
    {
        console.log("onReelsetSpinStart -----");
    }


    public onReelsetSpinFinish(p) {
        // if{checkForPostModifiers())
        // {
        //     checkForPostModifiersComplete

        // }

        //var apetureSymbols = this.currentReelset.getApertureSymbols();
        this.checkForPostModifiersComplete();

    }

    public checkForPostModifiersComplete()
    {
        
        //if(Utils.isEmpty(this.currentWinlinesManager.winData))
        if(Utils.isEmpty(MockData.winData))
        {
            console.log("No wins....");
            this.winAnimationsCompleted();
        }
        else
        {
            this.processWinnings();
        }
        
    }


    public isWinSpin() {

    }

    public wonBonus() {

    }

    public wonFreeSpins() {

    }


    public processWinnings()
    {
        if(MockData.winData.hasBonusWin)
        {
            this.processBonus();
        }
        else
        {
            if(GameConfig.getConfig().reelsetConfig.showWinlinesSpaghetti)
            {
                this.showWinlinesSpaghetti();
            }
            else
            {
                this.showWinlines();
            }
        }
        
        
    }


    public showWinlinesSpaghetti()
    {
        this.currentWinlinesManager.showWinlinesSpaghetti();
    }

    public showWinlines()
    {
        /*
        this.currentWinlinesManager.winData = {
            "totalWin":25,
            "baseGameWin":25,
            "bonusWin":0,
            "winlines":[
                {
                    "lineId":5,
                    "numWinSymbols":4,
                    "win":2,
                    "payoutIndex":14
    
                },
                
                {
                    "lineId":8,
                    "numWinSymbols":3,
                    "win":5,
                    "payoutIndex":14
                },
                {
                    "lineId":11,
                    "numWinSymbols":3,
                    "win":7,
                    "payoutIndex":14
                },
                {
                    "lineId":18,
                    "numWinSymbols":4,
                    "win":11,
                    "payoutIndex":28
                }
            ]
        }*/
        this.currentWinlinesManager.showWinlines();
    }



    private winlinesSpaghettiShown(p)
    {
        console.log(" Slot Screen - winlinesSpaghettiShown ------ " );
    }

    public winlinesSpaghettiFinished(p) {
        
        console.log(" Slot Screen - winlinesSpaghettiFinished ------ " );
    }

    public winlineShown(p) {
        console.log(" Slot Screen winlineShown ------ " );
        var winlineData = p.target.data;
        var winlineId = winlineData.lineId;
        var win = winlineData.win;
        console.log("Winline "+ winlineId + " pays "+  win);
    }
    

    public allwinlineAnimationFinish() {

        console.log(" showWinlineFinished ------ " );
         // if(there is any bonus Win)
        // {
        //     this.processBonus();
        // }
        // else
        // {
        //     this.winAnimationsCompleted();
        // }
        SlotScreen.screenComponents.winAnimationContainer.hide();
        //this.currentWinlinesManager.hideAllOverlayWinAnimation();
        this.currentWinlinesManager.hideAllWinboxes();
        this.currentWinlinesManager.hideAllWinlines();
        this.winAnimationsCompleted();
       
    }

    


    public processBonus() {

    }


    public enterFreeSpins() {

    }

    public exitFreeSpins() {

    }


    public winAnimationsCompleted() {
        this.gameFinish()
    }

    public gameFinish() {
        this.sendCloseRequest();
    }

    public sendCloseRequest() {
        this.onCloseResponse();
    }


    public onCloseResponse() {

        this.enableControlPanel();
        this.gameFinished = true;
    }

    public enableControlPanel() {
        console.log( "enableControlPanel " );
    }

    public disableControlPanel() {
        console.log( "disableControlPanel " );
    }


    public initHelp() {

    }

   
    public showHelp() {

    }

    public hideHelp() {

    }
}