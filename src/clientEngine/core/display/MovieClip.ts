import AssetsDictionary from '../loader/AssetsDictionary';
import DisplayObject from './DisplayObject';

export default class MovieClip extends DisplayObject{

    //private initData = null;
    
    constructor(initData)
    {
        //this.initData = initData;
        super(initData);
        
    }

    
    public init()
    {

        super.init();
        let spriteSheet = null;
        var animName = this.initData.assets[0];
        if(AssetsDictionary.getAtlas(animName) !== undefined)
        {
            //texture = AssetsDictionary.getAtlas(this.initData.assets[0]).spritesheet;
            spriteSheet = AssetsDictionary.getAtlas(animName).spritesheet; //assetsLibrary.atlasData[animName].spritesheet;
            var frames = spriteSheet.animations[animName];
            //this.node = new PIXI.extras.AnimatedSprite(texture.animations[this.initData.assets[0]]);
            this.node = new PIXI.extras.AnimatedSprite(frames);
            
        }
        else
        {
            console.log("Error! Asset not found in Asset Dictionary: " + animName);
        }
       
        this.node.name = this.id;
        this.setXY(this.initData.x, this.initData.y);
        //sprite.anchor.set(0.5);
        //sprite.scale(new PIXI.Point(0.5, 0.5));
    }

    /*
    
    private playAnimation(animName)
    {
        let animatedCapguyFrames =  AssetsDictionary.AtlasData[animName].data.animations[animName];

        var frames = [];

        for (var i = 1; i < animatedCapguyFrames.length-1; i++) {
            var val = i < 10 ? '0' + i : i;

            // magically works since the spritesheet was loaded with the pixi loader
            frames.push(PIXI.Texture.from('./assets/atlasData/'+animName+"_"+ val + '.png'));
        }

        // create an AnimatedSprite (brings back memories from the days of Flash, right ?)
        var anim = new PIXI.AnimatedSprite(frames);

        anim.x = 100+300; //app.screen.width / 2;
        anim.y = 100+400; //app.screen.height / 2-100;
        anim.anchor.set(0.5);
        anim.animationSpeed = 0.1;
        
        anim.play();
        if(this.animationContainer)
        {
            this.animationContainer.node.addChild(anim);
        }
    }*/



    public getAnimations()
    {

    }

    public playAnimationById(animName:string, speedModifier:number = 1, loop:number )
    {

    }

    public play()
    {
        this.node.play();
    }

    public setLoop(pVal)
    {
        this.node.loop = pVal;
    }

    public isPlaying()
    {
        this.node.playing;
    }

    public setAnimationSpeed(pVal)
    {
        this.node.animationSpeed = pVal;
    }

    
    public gotoAndStop(pval)
    {
        this.node.gotoAndStop(pVal);
    }

    public gotoAndPlay(pval)
    {
        this.node.gotoAndPlay(pVal);
    }

    public stop()
    {
        this.node.stop();
    }

    private onComplete()
    {
        
    }

  
    public reset()
    {
        
    }
    
}