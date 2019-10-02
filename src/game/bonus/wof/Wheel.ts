import RotateTween from './../../../clientEngine/core/utils/tween/RotateTween';
import TweenFunctions from './../../../clientEngine/core/utils/tween/TweenFunctions'
import Utils from './../../../clientEngine/core/utils/Utils';
import Stage from "../../../clientEngine/core/graphics/Stage";
import SlotScreen from '../../../clientEngine/slots/SlotScreen';
export default class Wheel{
    
    private wheelBonusContainer = null;
   
    private startSpinSpeedObject = null;
    private startSpinSpeedTweenMax = null;

    private stopSpinSpeedObject = null;
    private stopSpinSpeedTweenMax = null;

    private wheelStartEasingDuration = null;
    private startEasingStopPosition = 720;
    private startOffset = 0;//5;
    private targetPositionToStop = 0; //this.startEasingStopPosition +1200;
    private origPositionToStop = 0;
    private rangeOffset = 8;
    private currentSpinSpeed = 0.2;
    private topSpinSpeed = 5;
    private leastSpinSpeed = 0.2;
    
    /** This set the ease function for the start of the spin. */
    private reelStartEaseFunction = Sine.easeIn; //Back.easeIn.config(1.2); 
    /** This set the ease function for the stop of the spin. */
    private reelStopEaseFunction =  Sine.easeOut; //Linear.easeNone; //
    private speedMultiplier = 2;
    
    private currentState = null;
    private PIXITicker = null;
    private wheelPayout:string = null;


    // Reel States

    /** FLAG to check whether the Wheel is in Init state. Never spun before */
    static INIT_STATE = 'init_state';
    /** FLAG to check whether the Wheel is in Stopped state */
    static STOPPED_STATE = 'stopped_state';
    /** FLAG to check whether the Wheel is in starting state */
    static STARTING_STATE = 'starting_state';
    /** FLAG to check whether the Wheel is in spinning state */
    static SPINNING_STATE = 'spinning_state';
    /** FLAG to check whether the reel is in stopping state */
    static STOPPING_STATE = 'stopping_state';

    private initStopPosition = 0;
    
    private startEasingDuration = 2000;
    private stopEasingDuration = 2000;
    private wheelSpinDuration = 8000;

    private segmentToStop = 0;

    private screen = null;
    private segmentToStopIndex = 0;

    private countDown = 0;

    private wheelData = {
        "x50":[20],
        "x1000":[19],
        "x200":[18],
        "x500":[17],
        "x150":[16],
        "x400":[6, 15],
        "x700":[14],
        "x100":[13],
        "x1500":[12],
        "x300":[11],
        "x2500":[10],
        "x800":[8],
        "x250":[7],        
        "x1200":[5],
        "x600":[1],
        "x2000":[3],

    }

    private wheelStopAngles = {
        "1":0,
        "2":14.89,
        "3":32.6,
        "4":49.8,
        "5":67.60,
        "6":85.9,
        "7":104.2,
        "8":123.18,
        "9":140.37,
        "10":158.70,
        "11":176.47,
        "12":194.23,
        "13":211.99,        
        "14":248.66,
        "15":265.85,
        "16":284.18,
        "17":302.52,
        "18":319.71,
        "19":338.045,
        //"20":360.963,
        "20":392.47,
    }


    constructor(initData)
    {
        console.log("Init Data"+ initData);
        this.wheelBonusContainer = initData.bonusContainer;
        this.screen = initData.screen;
    }

    public init(){
        this.PIXITicker = Stage.getTicker();
        this.setupTween();
    }

    public setupTween()
    {
        this.startSpinSpeedObject = {value:0};
        this.startSpinSpeedTweenMax = new TweenMax(this.startSpinSpeedObject, this.startEasingDuration/1000, {
            value:this.topSpinSpeed, 
            ease:this.reelStartEaseFunction,
            paused:true,        
            onUpdate:() =>{this.updateReelStartSpinSpeed();}
        });
   
        this.stopSpinSpeedObject = {value:this.topSpinSpeed};
        this.stopSpinSpeedTweenMax = new TweenMax(this.stopSpinSpeedObject, this.stopEasingDuration/1000, {
            value:this.leastSpinSpeed, 
            paused:true,        
            onUpdate:() =>{this.updateReelStopSpinSpeed();}
        });
       
    }

    public setWheelPayout(payout)
    {
        this.wheelPayout = payout;
    }

    public startWheel()
    {

        
        this.reset();
        this.payoutValue = "x400";
      
        this.segmentToStopIndex =  this.getIndexByPayout(this.payoutValue);

        var stopAngle = this.wheelStopAngles[this.segmentToStopIndex];
         

        this.setStopPosition(stopAngle);
        this.setWheelPayout(this.payoutValue);
        
        this.wheelBonusContainer.setRotation(Utils.degreeToRadian(32.6));
      
        this.startSpinSpeedTweenMax.restart(true);
        this.currentState = Wheel.STARTING_STATE;        
        this.PIXITicker.add(
            this.update, this
        );

        setTimeout(()=>{this.stopSpin(); }, this.wheelSpinDuration);
       
        
        
    }

    public startReelFinish()
    {
        //this.stopSpinSpeedTweenMax.restart(true);
    }

    public setStopPosition(pos:number)
    {
        this.origPositionToStop = pos - this.startOffset;
        this.targetPositionToStop = pos - this.startOffset;
    }

    
    public getIndexByPayout(payout)
    {
        var segmentToStop = this.wheelData[payout]; 

        var segmentIndex = 0;
        if(segmentToStop.length === 2)
        {
            segmentIndex = segmentToStop[Utils.getRandomIntInclusive(0, 1)];
        }
        else
        {
            segmentIndex = segmentToStop[0];
        }
        
        return segmentIndex;
    }


    private reset()
    {
        let totalNumberOfSegmentsInWheel = 20;
        let segment = null;
        for(var i=1; i <= totalNumberOfSegmentsInWheel; i++ )
        {
            segment = SlotScreen.screenComponents["wofSEG"+i+"BG1"];
            segment.gotoFrame(0);
        }
        
    }



    /** @hidden */
    private spinStartTweenStart()
    {
        //Listener.dispatchEvent(ReelEvents.REEL_SPIN_START, {target:{ id:this.id, reel:this}});
    }


   

    public updateReelStartSpinSpeed()
    {
        this.currentSpinSpeed = this.startSpinSpeedObject.value;// * this.slowDownMultiplier;
        
        console.log("updateReel Start Speed..........ID:"+ this.currentSpinSpeed);
    }

    public updateReelStopSpinSpeed()
    {
        this.currentSpinSpeed = this.stopSpinSpeedObject.value;// * this.slowDownMultiplier;
        
        console.log("updateReel Stop Speed..........ID:"+ this.currentSpinSpeed);
    }

    private update()
    {
        //console.log("Stopping update:"+ this.stopSpinSpeedTweenMax.progress());
     
        switch (this.currentState) {
            case Wheel.STOPPED_STATE:
                this.PIXITicker.remove(
                    this.update, this
                );
                break;
            case Wheel.STARTING_STATE:  // should use easing start effect
                this.spinning();
                this.currentState = Wheel.SPINNING_STATE; 
                /*
                if (this.currentSpeed >= 5)
                {
                    this.currentSpeed = 5;
                                       
                    //EventBus.getInstance().dispatch(Config.EVENTS.REEL_STARTING_COMPLETE);
                }*/
                break;
            case Wheel.SPINNING_STATE:
                this.spinning();
                break;
            case Wheel.STOPPING_STATE:  // should use easing stop effect
                this.stopping();
                break;
        }

    }

    private spinning()
    {
        var currentAngle =  Utils.radianToDegree(this.wheelBonusContainer.getRotation());
        this.wheelBonusContainer.setRotation(Utils.degreeToRadian((currentAngle+(this.currentSpinSpeed * this.speedMultiplier))));
    }

    private stopSpin()
    {
        //var segmentIndex =  this.getIndexByPayout("x50");


        let extraSymbolsArray = [30, 25, 20, 35, 40 ];
        let index = Utils.getRandomIntInclusive(0, 4);
        let numberOfExtraSymbols = extraSymbolsArray[index];

        let easeDuration = numberOfExtraSymbols * 150; // [4500, 3750, 3000, 5250, 6000]
        this.stopSpinSpeedTweenMax.duration(easeDuration/1000);
        this.currentState = Wheel.STOPPING_STATE;
        console.log("Number of Extra segments to Move:"+numberOfExtraSymbols  );

        // Start Offset

        var rangeOffset = this.rangeOffset; 
        var offset = 0;

        if(Utils.getRandomIntInclusive(1, 2) === 1)
        {
            offset = -(Utils.getRandomIntInclusive(0, 5));

        }
        else
        {
            offset = Utils.getRandomIntInclusive(0, 5)
        }
        
        this.targetPositionToStop = this.targetPositionToStop; //+ offset;

        // End Offset
        
        
        this.initStopPosition = this.targetPositionToStop - (numberOfExtraSymbols *  18);
        console.log("init StopPosition:"+ this.initStopPosition );

        console.log("oriignal target StopPosition:"+ this.targetPositionToStop);
        this.stopSpinSpeedTweenMax.restart(true);
        this.wheelBonusContainer.setRotation(Utils.degreeToRadian(this.initStopPosition));
        //this.stopping();
    }


    private stopping()
    {
        var currentAngle = Utils.radianToDegree(this.wheelBonusContainer.getRotation());
        var angle = 0
       
        if(currentAngle > this.targetPositionToStop-(20*3))
        {
            this.countDown++;
            console.log("stopping"+ this.countDown);
            SlotScreen.screenComponents["wofSEG"+(this.getNormalissedIndex(this.segmentToStopIndex+1)) +"BG1"].gotoFrame(1);
            SlotScreen.screenComponents["wofSEG"+(this.getNormalissedIndex(this.segmentToStopIndex+2)) +"BG1"].gotoFrame(1);
            SlotScreen.screenComponents["wofSEG"+(this.getNormalissedIndex(this.segmentToStopIndex)) +"BG1"].gotoFrame(1);
            SlotScreen.screenComponents["wofSEG"+(this.getNormalissedIndex(this.segmentToStopIndex-1)) +"BG1"].gotoFrame(1);
        }        
        if(currentAngle > this.targetPositionToStop)
        {
            console.log("stopped"+ this.countDown);
            this.currentState = Wheel.STOPPED_STATE;
        }
        else
        {
            angle = currentAngle+this.currentSpinSpeed;
            console.log("Angle Stopping:"+angle);
            console.log("Angle Current Spin Speed:"+ this.currentSpinSpeed);
            this.wheelBonusContainer.setRotation(Utils.degreeToRadian(angle));
        }
        
        
    }

    private getNormalissedIndex(pval)
    {
        var res = pval;
        var noOfsegments  = 20;
        if(pval > noOfsegments)
        {
            res = pval - noOfsegments;
        }
        else if(pval < 1)
        {
            res = pval - noOfsegments;
        }
        return res;
    }
}