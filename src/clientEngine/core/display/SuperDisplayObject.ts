import DisplayObject from "./DisplayObject";
import ImageDisplay from "./ImageDisplay";
import SpineDisplay from "./SpineDisplay";


export default class SuperDisplayObject extends DisplayObject{

    private frames = [];
    //private initData = {};

    private currentIndex = 0;
    private totalNumberOfFrames = 0;

    constructor(initData){

        super(initData);

        /*
        this.initData = {
            "id":"Bharath",
            "type":"SuperDisplayObject",
            "currentFrameIndex":1,
            "frames":[
                {"type":"ImageDisplay", "asset":"bgMain"}, 
                {"type":"ImageDisplay", "asset":"bgFS"}, 
                {"type":"ImageDisplay", "asset":"bgGsg"}, 
                {"type":"ImageDisplay", "asset":"bgSil"},
                {"type":"SpineDisplay", "asset":"wofClicker"},
            ]
        }
        */
    
    }

    public init()
    {
        super.init();
        this.node = new PIXI.Container();
        this.currentIndex = this.initData.currentFrameIndex;
        this.node.name = this.id;
        var imgObj = null;
        for(let i=0; i < this.initData.frames.length; i++)
        {
            console.log(this.initData.frames[i].type);
            if(this.initData.frames[i].type === "ImageDisplay")
            {
                imgObj = new ImageDisplay({"assets":[this.initData.frames[i].asset]});
                imgObj.init();
                
                imgObj.hide();
            }
            else
            {
                imgObj = new SpineDisplay({"assets":[this.initData.frames[i].asset]});
                imgObj.init();
                imgObj.hide();
                
            }


            this.addChild(imgObj);
            this.frames.push(imgObj);
        }
        this.frames[this.currentIndex].show();
        this.setupBasicProperties();
    }

    private gotoFrame(index)
    {
        this.frames[this.currentIndex].hide();
        this.frames[index].show();
        this.currentIndex = index;
        return this.frames[index];
        
    }
    
    private getCurrentFrame()
    {
        return this.frames[this.currentIndex];
    }

    private getCurrentFrameIndex()
    {
        return this.currentIndex;
    }


    public getAnimations()
    {
        
        let currentObj = this.frames[this.currentIndex];
        if(currentObj instanceof SpineDisplay)
        {
            return currentObj.getAnimations();
        }
        else
        {
            return "No Animation";
        }
        
    }


    public playAnimationById(animName:string, loop:number)
    {
        let currentObj = this.frames[this.currentIndex];
        if(currentObj instanceof SpineDisplay)
        {
            return currentObj.playAnimationById(animName, loop);
        }
        else
        {
            return "No Animation Available";
        }
    }
    
}