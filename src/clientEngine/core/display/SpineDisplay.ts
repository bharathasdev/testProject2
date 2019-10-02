
import AssetsDictionary from '../loader/AssetsDictionary'
import MovieClip from './MovieClip';
import Listener from '../events/Listener';
import SpineEvents from '../events/SpineEvents';

export default class SpineDisplay extends MovieClip{

    static trackIndex = 0;
    constructor(initData, startCallBack=null, finishCallBack=null){
        
        super(initData);
        this.startCallBack = startCallBack;
        this.finishCallBack = finishCallBack;

    }
    
    
    public init()
    {
       
        //super.init();
        var animName = Array.isArray(this.initData.assets)?this.initData.assets[0]:this.initData.assets;
        if(AssetsDictionary.getSpineAnim(animName) !== undefined)
        {
            
            let spineData = AssetsDictionary.getSpineAnim(animName).spineData;

            let spineAnim = new PIXI.spine.Spine(spineData);
            this.node = spineAnim;
            this.node.name = this.id;
            //SpineDisplay.trackIndex = 0;
            this.setXY(this.initData.x, this.initData.y);
        }
        else
        {
            console.log("Error! Asset not found in Asset Dictionary: "+ animName);
        }
       
        
        this.getAnimations();
        this.setupEvents();
        this.setupEventListeners();
    }

    public setupEvents()
    {
        Listener.registerEvent(SpineEvents.SPINE_ANIMATION_START);// creates event;
        Listener.registerEvent(SpineEvents.SPINE_ANIMATION_FINISH);// creates event;
    }
  
    public setupEventListeners()
    {
        
        this.node.state.addListener({
            event: (entry, event)=>this.onAnyEvent(entry, event),
            complete: (entry)=>this.complete(entry),
            start:(entry)=>this.onAnimationStart(entry),
            end: (entry)=>this.onAnimationEnd(entry),
            dispose: (entry)=>this.onDispose(entry),
            interrupted: (entry)=>this.onInterrupted(entry),
            
            //dispose: function(entry) { console.log('animation was disposed at '+entry.trackIndex) },
            //interrupted: function(entry) { console.log('animation was interrupted at '+entry.trackIndex) }
        });

              
    }

    public onAnyEvent(entry, event)
    {
        //console.log('on onAny Event is set at '+entry);
        //console.log('onAny '+event);
    }

    public complete(entry) 
    { 
        //console.log('track '+entry.trackIndex+' completed '+entry.loopsCount()+' times') 
        //console.log('************ '+entry.animation.name);
        if(this.finishCallBack)
        {
            this.finishCallBack();
        }
        Listener.dispatchEvent(SpineEvents.SPINE_ANIMATION_FINISH, {target:entry});
    }

    public onAnimationStart(entry)
    {
        //console.log('on Start animation is set at '+entry.trackIndex);
        //console.log('************ '+entry.animation.name);
        if(this.startCallBack)
        {
            this.startCallBack();
        }
        Listener.dispatchEvent(SpineEvents.SPINE_ANIMATION_START, {target:entry});
    }

 
    public onAnimationEnd(entry)
    {
        //console.log('on onAnimation End is set at '+entry.trackIndex);
        //console.log('************ '+entry.animation.name);
        //Listener.dispatchEvent(SpineEvents.SPINE_ANIMATION_FINISH, {target:entry});
    }

    public onDispose(entry)
    {
        //console.log('on Dispose animation is set at '+entry.trackIndex)
    }

    public onInterrupted(entry)
    {
        //console.log('on Interrupted animation is set at '+entry.trackIndex)
    }

   

    public getAnimations()
    {
        let animationsObj = this.node.spineData.animations;
        let animLength = animationsObj.length;
        let listOfAnims = [];
        
        for(let i = 0; i< animLength; i++)
        {
            listOfAnims.push(animationsObj[i].name);
        }

        return listOfAnims;
    }

    public playAnimationById(animName:string, loop:number = 0)
    {
        SpineDisplay.trackIndex++;
        this.node.state.setAnimation(SpineDisplay.trackIndex, animName, loop);
   
    }

    // queAnimationById(["walk", "jump"]])
    public queAnimationById(animArray)
    {
        let animName = null;
        for(let i = 0; i<animArray.length; i++ )
        {
            animName = animArray[i];
            if(i === 0)
            {
                this.node.state.setAnimation(0, animName);    
            }
            else 
            {
                this.node.state.addAnimation(0, animName, true);
            }
            
        }
   
    }

    public setSpeed(speed)
    {
        this.node.timeScale = speed;        
    }

    public setSkinByName(newSkinName:string)
    {
        this.node.skeleton.setSkinByName(newSkinName);
        this.node.skeleton.setSlotsToSetupPose();
    }

    
    
    
}

