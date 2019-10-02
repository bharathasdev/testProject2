import Utils from '../Utils';
import TweenFunctions from './TweenFunctions'
import Tweener from './Tweener';
export default class ScaleTween extends Tweener{

   
    
    constructor(initData)
    {
        super(initData);
    }
    
    
    
    private internalUpdateCallback()
    {
        //console.log("updateCallback1 X:"+ this.tweenDataFadeObj.x);
        //console.log("updateCallback1 Y:"+ this.tweenDataFadeObj.y);
        //this.targetObjects[0].setScale(this.tweenTargetObj.target);

        this.targetObjects.map((p)=>{
            p.setScale(this.tweenTargetObj.target);
        });//;

        if(this.updateCallback)
        {
            this.updateCallback(this.tweenTargetObj.target); 
        }
        
        //this.targetObjects.forEach(this.updateObjects);
    }

    
}