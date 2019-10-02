import Tweener from './Tweener';
export default class FadeTween extends Tweener{

    //private targetObjects = null;
    constructor(initData)
    {
        //this.targetObjects = initData.targetObjects;
        super(initData);
    }

       
    public start(delay:number = -1)
    {
        this.targetObjects = this.initData.targetObjects;
        super.start(delay);
    }
    private internalUpdateCallback()
    {
        //console.log("updateCallback1 X:"+ this.tweenDataFadeObj.x);
        //console.log("updateCallback1 Y:"+ this.tweenDataFadeObj.y);
        //this.targetObjects[0].setAlpha(this.tweenTargetObj.target);

        this.targetObjects.map((p)=>{
            p.setAlpha(this.tweenTargetObj.target);
        });//;

        if(this.updateCallback)
        {
            this.updateCallback(this.tweenTargetObj.target); 
        }
        
        //this.targetObjects.forEach(this.updateObjects);
    }
}

    
