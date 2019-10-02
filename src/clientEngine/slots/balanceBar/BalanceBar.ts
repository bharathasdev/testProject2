
import Stage from '../../core/graphics/Stage';
import GameConfig from '../../../GameConfig';
import DisplayObject from "../../core/display/DisplayObject";
import Utils from "../../core/utils/Utils";
import FadeTween from '../../core/utils/tween/FadeTween';

export default class BalanceBar {

    public static screenComponents = {};
    public LoadingScreenContainer = null;
    public stage = null;
    constructor(){

    }

    public init(){
        this.stage = Stage.getStage();
        this.gameContainerConfig = GameConfig.getConfig().render.gameContainer;

        this.LoadingScreenContainer = new DisplayObject({id:"LoadingScreen"});
        this.stage.addChild(this.LoadingScreenContainer.node);
        LoadingScreen.screenComponents['LoadingScreenContainer'] = this.LoadingScreenContainer;

        this.setupScreenComponents();
        this.setupEventListener();
             
    }

    public setupScreenComponents()
    {
        Utils.autoGenerateObjectsFromConfig(this.gameContainerConfig.loadingScreen, this, LoadingScreen.screenComponents , "LoadingScreenContainer");
    }

    public setupEventListener() {

        LoadingScreen.screenComponents.loadingBackGroundLandscape.clickable(true);
        LoadingScreen.screenComponents.loadingBackGroundLandscape.setClickCallback((p)=>{this.playButtonClicked(p)});

        LoadingScreen.screenComponents.loadingBackGroundPortrait.clickable(true);
        LoadingScreen.screenComponents.loadingBackGroundPortrait.setClickCallback((p)=>{this.playButtonClicked(p)});
        
    }

    public playButtonClicked(p) {
        console.log("playButtonClicked");      
        LoadingScreen.screenComponents.loadingBackGroundLandscape.clickable(false); 
        LoadingScreen.screenComponents.loadingBackGroundPortrait.clickable(false);

        var initData1 = {
            "startValue":1,
            "endValue":0,
            "duration":500,
            "numLoops":1,
            "targetObjects":[this.LoadingScreenContainer],
            "endCallback":()=>{this.removeFadeFinished();}
        }

        var myTween1 = new FadeTween(initData1);
        myTween1.start();
        
        
        //LoadingScreen.screenComponents.loadingBackGroundLandscape.hide();
        //LoadingScreen.screenComponents.loadingBackGroundPortrait.hide();
    }

    public removeFadeFinished(p) {
        this.stage.removeChild(this.LoadingScreenContainer.node);
    }


}