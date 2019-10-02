import Utils from '../Utils';
import TweenFunctions from './TweenFunctions'
import Tweener from './Tweener';
export default class MoveTween extends Tweener{

    private startValue = {"x":0, "y":0};
    private endValue = {"x":0, "y":0};
   
    constructor(initData)
    {

        // tween the element with ID of "myID"
        // TweenMax.to("#myID", 2, {backgroundColor:"#ff0000", width:"50%", top:"100px", ease:Power2.easeInOut});
 
        // or you can do more advanced selecting like all the elements with the class "myClass" like this: 
        // TweenMax.to(".myClass", 2, {boxShadow:"0px 0px 20px red", color:"#FC0"});

        // TweenMax.to([obj1, obj2, obj3], 1, {opacity:0.5, rotation:45});

        // var tween = new TweenMax(myObject, 2, {width:200, height:150});

        super(initData);
        this.startValue = Utils.checkNullUndefined(this.initData.startValue, this.startValue);
        this.endValue = Utils.checkNullUndefined(this.initData.endValue, this.endValue);
        
        

       this.tweenTargetObj = {"x":this.startValue.x, "y":this.startValue.y};

        this.tweenMaxObj = new TweenMax(this.tweenTargetObj, this.duration, {
            x:this.endValue.x, 
            y:this.endValue.y,
            paused:true,
            ease: this.easingFunction,
            repeat:this.numLoops,
            repeatDelay:this.repeatDelay,
            yoyo:this.loopForwardAndReverse,
            data:this.customData,
            onStart:() => {this.internalStartCallback();},
            onUpdate:() =>{this.internalUpdateCallback();},
            onComplete:() =>{this.internalCompleteCallback();}
        });

        
    }

    
    
    
    private internalUpdateCallback()
    {
        //console.log("updateCallback1 X:"+ this.tweenDataFadeObj.x);
        //console.log("updateCallback1 Y:"+ this.tweenDataFadeObj.y);
        //this.targetObjects[0].setXY(this.tweenTargetObj.x,this.tweenTargetObj.y);
        this.targetObjects.map((p)=>{
            p.setXY(this.tweenTargetObj.x,this.tweenTargetObj.y)
        });//;

        if(this.updateCallback)
        {
            this.updateCallback(this.tweenTargetObj.x,this.tweenTargetObj.y); 
        }
        
        //this.targetObjects.forEach(this.updateObjects);
    }

    
}