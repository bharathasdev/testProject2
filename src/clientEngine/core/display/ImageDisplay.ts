import AssetsDictionary from '../loader/AssetsDictionary'
import DisplayObject from './DisplayObject';

export default class ImageDisplay extends DisplayObject{

    //private initData = null;
    
    constructor(initData)
    {
        //this.initData = initData;
        super(initData);
        
        
    }

    
    public init()
    {

        super.init();
     
        let texture = null;
        if(AssetsDictionary.getGraphic(this.initData.assets[0]) !== undefined)
        {
            texture = AssetsDictionary.getGraphic(this.initData.assets[0]).texture;
            let sprite = new PIXI.Sprite(texture);
            this.node = sprite;
           
        }
        else
        {
            console.log("Error! Asset not found in Asset Dictionary: "+ this.initData.assets[0])
        }
        
        this.node.name = this.id;
        this.setupBasicProperties();
        //this.setXY(this.initData.x, this.initData.y)
        //sprite.anchor.set(0.5);
        //sprite.scale(new PIXI.Point(0.5, 0.5));
    }


    public reApplyProperties(newData)
    {
        super.reApplyProperties(newData);
        this.setTexture(newData.assets[0])
    }
    
    public setTexture(asset)
    {
        
        let texture = null;

        super.setTexture(asset);
        
        texture = AssetsDictionary.getGraphic(asset).texture;
        this.node.texture = texture;
    }

    
}