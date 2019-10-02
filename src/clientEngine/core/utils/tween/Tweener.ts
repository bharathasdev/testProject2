import Utils from '../Utils';
import TweenFunctions from './TweenFunctions'
export default class Tweener{

    private startValue = 0;
    private endValue = 0;
    private duration:number = 0;
    private startCallback = null;
    private updateCallback = null;
    private endCallback = null;
    private targetObjects = [];
    private paused:boolean = false;
    private numLoops:number = 1;
    private loopForwardAndReverse = false;
    private startDelay = 0;
    private repeatDelay = 0;

    private tweenTargetObj = {};
    private easingFunction = TweenFunctions.EASE_NONE;
    private customData = null;
    
    
    constructor(initData)
    {

        // tween the element with ID of "myID"
        // TweenMax.to("#myID", 2, {backgroundColor:"#ff0000", width:"50%", top:"100px", ease:Power2.easeInOut});
 
        // or you can do more advanced selecting like all the elements with the class "myClass" like this: 
        // TweenMax.to(".myClass", 2, {boxShadow:"0px 0px 20px red", color:"#FC0"});

        // TweenMax.to([obj1, obj2, obj3], 1, {opacity:0.5, rotation:45});

        // var tween = new TweenMax(myObject, 2, {width:200, height:150});

        this.initData = initData;
        this.startDelay = Utils.checkNullUndefined(this.initData.delay, this.startDelay);
        this.startValue = Utils.checkNullUndefined(this.initData.startValue, this.startValue);
        this.endValue = Utils.checkNullUndefined(this.initData.endValue, this.endValue);
        this.duration = Utils.checkNullUndefined(this.initData.duration/1000, this.duration/1000);
        this.startCallback = Utils.checkNullUndefined(this.initData.startCallback, this.startCallback);
        this.updateCallback = Utils.checkNullUndefined(this.initData.updateCallback, this.updateCallback);
        this.completeCallback = Utils.checkNullUndefined(this.initData.endCallback, this.endCallback);
        this.targetObjects = Utils.checkNullUndefined(this.initData.targetObjects, this.targetObjects);
        this.paused = Utils.checkNullUndefined(this.initData.paused, this.paused);
        this.numLoops = Utils.checkNullUndefined(this.initData.numLoops, this.numLoops) - 1;
        this.loopForwardAndReverse = Utils.checkNullUndefined(this.initData.loopForwardAndReverse, this.loopForwardAndReverse);
        this.repeatDelay = Utils.checkNullUndefined(this.initData.delayBetweenLoop, this.repeatDelay);
        this.customData = Utils.checkNullUndefined(this.initData.customData, this.customData);

        this.easingFunction = Utils.checkNullUndefined(this.initData.easingFunction, this.easingFunction);
        

        this.tweenTargetObj = {"target":this.startValue};

        this.tweenMaxObj = new TweenMax(this.tweenTargetObj, this.duration, {
            "target":this.endValue, 
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

    
    public start(delay:number = -1)
    {
        if(delay === -1)
        {
            this.tweenMaxObj.delay(0);
        }    
        else if(delay === 0)
        {
            this.tweenMaxObj.delay(this.startDelay/1000);
        }
        else
        {
            this.tweenMaxObj.delay(delay/1000);

        }
        
        this.tweenMaxObj.restart(true);
    }

    public reverse()
    {
        return this.tweenMaxObj.reverse();
    }


    public isActive()
    {
        return this.tweenMaxObj.isActive()
    }

    public setDuration(duration:number)
    {
        return this.tweenMaxObj.totalDuration(duration/1000);
    }

    public getDuration()
    {
        return this.tweenMaxObj.totalDuration();
    }
    public finishEarly()
    {
        this.tweenMaxObj.progress(1);
    }

    public stop()
    {
        this.tweenMaxObj.pause();
    }

    public getData()
    {
        return this.tweenMaxObj.customData;
    }

  
    private internalStartCallback()
    {
        if(this.startCallback)
        {
            this.startCallback();
        }
        
    }
    
    
    private internalUpdateCallback()
    {
        
        //this.targetObjects[0].setRotation(Utils.degreeToRadian(this.tweenTargetObj.target));

        if(this.updateCallback)
        {
            this.updateCallback(this.tweenTargetObj.target); 
        }
        
    }

    private internalCompleteCallback()
    {
        
        if(this.completeCallback)
        {
            this.completeCallback();
        }
    }

}