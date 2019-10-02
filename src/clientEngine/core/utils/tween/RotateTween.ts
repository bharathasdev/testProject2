import Utils from '../Utils';
import TweenFunctions from './TweenFunctions'
import Tweener from './Tweener';
export default class RotateTween extends Tweener{

    constructor(initData)
    {
        super(initData);
        this.targetObjects = this.initData.targetObjects;
    }
    
    
    private internalUpdateCallback()
    {
        //console.log("updateCallback1 X:"+ this.tweenDataFadeObj.x);
        //console.log("updateCallback1 Y:"+ this.tweenDataFadeObj.y);
        //this.targetObjects[0].setRotation(Utils.degreeToRadian(this.tweenTargetObj.target));

        this.targetObjects.map((p)=>{
            p.setRotation(Utils.degreeToRadian(this.tweenTargetObj.target));
        });//;

        if(this.updateCallback)
        {
            this.updateCallback(this.tweenTargetObj.target); 
        }
        
        //this.targetObjects.forEach(this.updateObjects);
    }

    
}