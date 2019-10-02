import GameConfig from '../../../GameConfig';
import SlotScreen from '../SlotScreen';
import ReelSymbol from '../reels/ReelSymbol'
import Listener from '../../core/events/Listener';
import WinlineEvents from '../events/WinlineEvents';
import Tweener from '../../core/utils/tween/Tweener';
import MockData from '../../../mockData/MockData';

export default class WinlinesManager{

    private initData = null;
    private winlines = null;
    private winlinesPatternDefinition = [];
    private reelset = null;
    private activeWinline = null;

    private masterSymbolCoordinates = [];
    private winSymbolAnimationOverlays = [];

    private overlayWinSymbolAnimationContainer = [];

    private useOverlayWinSymbolAnimations = false;

  /*
    private winData = {
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
    }
    */

    private winData = MockData.winData;
    



    constructor(initData)
    {
        this.initData = initData;
        this.currentReelset = initData.reelset;
        this.init();
    }

    private init()
    {

        this.winlines = []
        this.winBoxes = [];     
        this.winlinesPatternDefinition = this.initData.winlinesPatternDefinition;
        this.useOverlayWinSymbolAnimations = this.initData.useOverlayWinSymbolAnimations;
        this.overlayWinSymbolAnimationContainer = SlotScreen.screenComponents.winAnimationContainer;
        
        this.setupWinlines();
        this.setupWinBoxes();
        this.hideAllWinboxes();
        if(this.useOverlayWinSymbolAnimations)
        {
            this.setupWinSymbolAnimationOverlays();
        }
        
        this.setupEvents();
        
    }

 
    public setupEvents()
    {
        Listener.registerEvent(WinlineEvents.WINLINE_SPAGHETTI_START);
        Listener.registerEvent(WinlineEvents.WINLINE_SPAGHETTI_FINISH);
        Listener.registerEvent(WinlineEvents.WINLINE_ANIMATION_START);
        Listener.registerEvent(WinlineEvents.WINLINE_ANIMATION_FINISH);
        Listener.registerEvent(WinlineEvents.WINLINE_ALL_ANIMATION_FINISH);
        
    }

    private setupWinlines()
    {
        for(let i = 0; i < this.initData.maxNumberOfWinlines; i++)
        {
            this.winlines.push(SlotScreen.screenComponents["winline" + i]);
        }
    }

    private setupWinBoxes()
    {
        for(let i = 0; i < this.initData.maxWinboxesPerWinline; i++)
        {
            this.winBoxes.push(SlotScreen.screenComponents["winBox" + i]);
        }
    }


    public setupWinSymbolAnimationOverlays()
    {
        var symbol = null;
        var reelIndex = 0;
        var rowIndex = 0;
        var boxXPos = 0;
        var boxYPos = 0;
        var symbol2 = null;

        var totalNumberOfSymbols = GameConfig.getConfig().reelsetConfig.numberOfReels * GameConfig.getConfig().reelsetConfig.numberOfRowsInView;
    
        for(let symbolPos = 0; symbolPos <  totalNumberOfSymbols; symbolPos++)
        {
            symbol = this.currentReelset.getSymbolByPosition(symbolPos)
            reelIndex = symbolPos % 5;
            rowIndex = Math.floor(symbolPos/5);
            
            boxXPos = this.currentReelset.reels[reelIndex].getX();
            boxYPos = this.currentReelset.getSymbolByPosition(symbolPos).getY();
            this.masterSymbolCoordinates.push([boxXPos, boxYPos]);
            console.log("symbolPos "+ symbolPos + " X Pos:"+ boxXPos);
            console.log("symbolPos "+ symbolPos + " Y Pos:"+ boxYPos);

            // Creation of Duplicate symbols for Animations

            symbol.initData.id = "winSymbol_"+symbolPos
            symbol2 = new ReelSymbol(symbol.initData);
            symbol2.init();
            //this.aceSymbol.setAlpha(0.3);
            //this.aceSymbol.show();

            symbol2.setStaticAnimation(symbol.symbolName);
            symbol2.setMoveAnimation(symbol.moveAnimation);
            symbol2.setWinAnimation(symbol.winAnimation);
            
            symbol2.playStaticAnimation();
            symbol2.hide();
    
   
            symbol2.setXY(boxXPos, boxYPos);
            this.overlayWinSymbolAnimationContainer.addChild(symbol2);
            this.winSymbolAnimationOverlays.push(symbol2);
               
        }
                
    }

    private setCurrentReelset(reelset)
    {
        this.currentReelset = reelset;
    }

    

    public showWinlinesSpaghetti()
    {
        /*
        this.winData = {
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

        // spaghetti totalwin Countup Animation - start
        let countupStartValue = 0;
        let countupEndValue = this.winData.totalWin;
        let countUpDuration = GameConfig.getConfig().reelsetConfig.spaghettiCountupDuration/1000;

        this.startSpaghettiCountupAnim(countupStartValue, countupEndValue, countUpDuration);
        // spaghetti totalwin Countup Animation - end



        var winValue = this.winData.totalWin;
        this.setWinText(winValue.toFixed(2));
        Listener.dispatchEvent(WinlineEvents.WINLINE_SPAGHETTI_START, {target:{ "data":this.winData }});
        var winlineData = null;
        var spaghettiDuration = GameConfig.getConfig().reelsetConfig.spaghettiDuration;
        for(var i = 0; i < this.winData.winlines.length; i++)
        {
            winlineData = this.winData.winlines[i];            
            this.showWinlineByIndex(winlineData.lineId);
        }

        setTimeout(()=>{this.winlinesSpaghettiFinished(); }, spaghettiDuration);

    }

    public winlinesSpaghettiFinished()
    {
        
        this.hideAllWinlines();

        Listener.dispatchEvent(WinlineEvents.WINLINE_SPAGHETTI_FINISH, {target:{ "data":this.winData }});
        this.showWinlines();
    }


    public startSpaghettiCountupAnim(startValue, endValue, duration) {

        SlotScreen.screenComponents.winCountupTextContainer.show();
        SlotScreen.screenComponents.winCountupText.setText("");
        var initData = {
            "startValue":startValue,
            "endValue":endValue,
            "duration":duration,
            "updateCallback":this.spaghettiCountupupdateCallBack,
            "finishCallback":this.spaghettiCountupFinishCallBack,
            "numLoops":1
        }
        var myTween = new Tweener(initData);
        myTween.start();
    }

    public spaghettiCountupupdateCallBack(val) {
        console.log(val);                            
        SlotScreen.screenComponents.winCountupText.setText(val.toFixed(2));
    }

    public spaghettiCountupFinishCallBack(val) {
        console.log("Spaghetti countup animation finished.....");
        SlotScreen.screenComponents.winCountupTextContainer.hide();
    }

    public showWinText(){
        SlotScreen.screenComponents.winCountupText.setText("");
        SlotScreen.screenComponents.winCountupTextContainer.show();
    }

    public hideWinText(){
        SlotScreen.screenComponents.winCountupText.setText("");
        SlotScreen.screenComponents.winCountupTextContainer.hide();
    }

    public setWinText(val){
        SlotScreen.screenComponents.winCountupText.setText(val);
        SlotScreen.screenComponents.winCountupTextContainer.show();
    }

    public showWinlines() {
        var data = null;
       
        if(this.winData.winlines.length > 0)
        {
            //SlotScreen.screenComponents.winAnimationContainer.show();
            data = this.winData.winlines.shift();
            this.showWinline(data);
        }
        else
        {
            this.showWinlineFinished();
        }
    }

    public showWinline(winlineData) {

        Listener.dispatchEvent(WinlineEvents.WINLINE_ANIMATION_START, {target:{ "data":winlineData }});
        this.hideAllWinboxes();
        var interWinlineDelay = GameConfig.getConfig().reelsetConfig.interWinlineDelay;
        var winlineId =  winlineData.lineId;
        var numSymbols =  winlineData.numWinSymbols;
        var winValue =  winlineData.win;
        this.setWinText(winValue.toFixed(2));
        console.log("showWinline Line ID:" +winlineId + " winValue:"+ winValue + " Num Symbols:"+ numSymbols );
        this.showWinlineAndWinBox(winlineId, numSymbols);
        setTimeout(()=>{this.showWinlines(); }, interWinlineDelay);
    }

    public showWinlineFinished() {

        console.log(" showWinlineFinished ------ " );
        this.hideWinText();
        /*
        if(morethan 1)
        {
            this.showNextWinline()
        }
        else
        {
            this.AllWinlesCompleted()
        }*/

        Listener.dispatchEvent(WinlineEvents.WINLINE_ALL_ANIMATION_FINISH, {target:{ "data":this }});
        
    }

    private getWinlineByIndex(index)
    {
        return this.winlines[index];
    }

    // Draws the winline by Index and now Win box and no symbol animation
    public showWinlineByIndex(index)
    {
        
        var winline = this.getWinlineByIndex(index);
        winline.show();
        //this.animateWinlineById(index, numSymbolsToAnimate);
       
    }

    // Draws the winline by Index and now Win box and no symbol animation
    public showWinlineAndWinBox(index, numSymbolsToAnimate)
    {
        this.overlayWinSymbolAnimationContainer.show();
        if(this.activeWinline)
        {
            this.activeWinline.hide();
        }
        
        if(GameConfig.getConfig().reelsetConfig.showWinlines)
        {

            var winline = this.getWinlineByIndex(index);
            this.activeWinline = winline;
            winline.show();
         }
        this.animateWinlineById(index, numSymbolsToAnimate);
       
    }

    private hideWinlineByIndex(index)
    {
        var winline = this.getWinlineByIndex(index);
        winline.hide();
        
    }

 

    private hideWinlines(arr)
    {
        for(var i = 0; i<arr.length; i++)
        {
            this.winlines[arr[i]].hide();
        }
        
    }


    private showAllWinlines()
    {
        for(var i = 0; i<this.winlines.length; i++)
        {
            this.winlines[i].show();
        }
        
    }

    private hideAllWinlines()
    {
        for(var i = 0; i<this.winlines.length; i++)
        {
            this.winlines[i].hide();
        }
        
    }

    private hideAllWinboxes()
    {
        for(var i = 0; i < this.winBoxes.length; i++)
        {
            this.winBoxes[i].hide();
        }
        
    }

    

    private animateWinlineById(index, numSymbolsToAnimate)
    {
        
        this.playSymbolAnimation(index, numSymbolsToAnimate);      
    }

    private playSymbolAnimation(index, numSymbolsToAnimate)
    {
            
        // playing landing animation
        //this.currentReelset.getSymbolByPosition(18).playLandingAnimation();
      
        
        // playing move animation
        //this.currentReelset.getSymbolByPosition(18).playMoveAnimation();
        
        var symbols = this.winlinesPatternDefinition[index];
        var symbolPos = -1;
        var boxYPos = 0;
        var boxXPos = 0;
        var symbol = null;
        var symbol2 = null;

        // playing a win animation
        for(var i = 0; i <numSymbolsToAnimate; i++ )
        {
            symbolPos = symbols[i]
            symbol = this.currentReelset.getSymbolByPosition(symbolPos)
            symbol.show();
            symbol.playWinAnimation();

            if(this.useOverlayWinSymbolAnimations)
            {
                symbol2 = this.winSymbolAnimationOverlays[symbolPos];
                symbol2.show();                
                
                //symbol2.updateState(symbol.symbolName);
    
                symbol2.setStaticAnimation(symbol.symbolName);
                //symbol2.setMoveAnimation(symbol.moveAnimation);
                symbol2.setWinAnimation(symbol.winAnimation);
                symbol2.playWinAnimation();
            }
           

           
            console.log("Symbol Pos X:"+ this.currentReelset.getSymbolByPosition(symbolPos).getX());
            console.log("Symbol Pos Y:"+ this.currentReelset.getSymbolByPosition(symbolPos).getY());
            boxXPos = this.currentReelset.reels[i].getX();
            boxYPos = this.currentReelset.getSymbolByPosition(symbolPos).getY();


            if(GameConfig.getConfig().reelsetConfig.showWinBoxes)
            {
               
                this.winBoxes[i].setX(boxXPos);
                this.winBoxes[i].setY(boxYPos);
                this.winBoxes[i].show();
            }
            else
            {
                this.winBoxes[i].hide();
            }
            
        }
        
    }

    private reApplyProperties(index, numSymbolsToAnimate)
    {

         // playing landing animation
        //this.currentReelset.getSymbolByPosition(18).playLandingAnimation();
      
        
        // playing move animation
        //this.currentReelset.getSymbolByPosition(18).playMoveAnimation();
        
        var symbols = this.winlinesPatternDefinition[index];
        var symbolPos = -1;
        var boxYPos = 0;
        var boxXPos = 0;
        var symbol = null;
        var symbol2 = null;

        // playing a win animation
        for(var i = 0; i <numSymbolsToAnimate; i++ )
        {
            symbolPos = symbols[i]
            symbol = this.currentReelset.getSymbolByPosition(symbolPos)
                     
           
            console.log("Symbol Pos X:"+ this.currentReelset.getSymbolByPosition(symbolPos).getX());
            console.log("Symbol Pos Y:"+ this.currentReelset.getSymbolByPosition(symbolPos).getY());
            boxXPos = this.currentReelset.reels[i].getX();
            boxYPos = this.currentReelset.getSymbolByPosition(symbolPos).getY();


            if(GameConfig.getConfig().reelsetConfig.showWinBoxes)
            {
               
                this.winBoxes[i].setX(boxXPos);
                this.winBoxes[i].setY(boxYPos);
                this.winBoxes[i].show();
            }
            else
            {
                this.winBoxes[i].hide();
            }
            
        }
    }

    private hideAllOverlayWinAnimation()
    {
        for(let i=0; i < this.winSymbolAnimationOverlays.length; i++)
        {
            this.winSymbolAnimationOverlays[i].hide();
        }
        
    }
}