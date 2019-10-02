import  DisplayObject  from "./DisplayObject";
import Utils from "../utils/Utils";
//const DisplayObject = require("displayObject");

export default class TextDisplay extends DisplayObject{

    //private stage = Stage.getStage();
    
    private align:string = 'left';//'left', 'center' or 'right'

    private dropShadow:boolean = false;
    private dropShadowAlpha:number = 1;
    private dropShadowAngle:number = Math.PI / 6;
    private dropShadowBlur:number =  0;
    private dropShadowColor:string = '#000000';
    private dropShadowDistance:number = 5;

    private fill:any = '#FFFFFF';// ['#ffffff', '#00ff99']; // gradient - string | Array.<string> 

    private fontFamily:string =  'Arial';
    private fontSize:number =  36;
    private fontStyle:string =  'italic'; //'normal', 'italic' or 'oblique'
    private fontWeight:string =  'bold'; //'normal', 'bold', 'bolder', 'lighter' and '100', '200', '300', '400', '500', '600', '700', 800' or '900'

    private leading:number = 0;
    private letterSpacing:number = 0;
    private lineHeight:number = null;
    private lineJoin:string = 'miter'; // //"miter" (creates a sharp corner), "round" (creates a round corner) or "bevel" (creates a squared corner).

    private miterLimit:number = 10;

    private padding:number = 0;

    
    protected strokeColor = "0x000000";
    private strokeThickness:number = 0;
        
    
    private wordWrap:boolean = true;
    private wordWrapWidth:number = 440;
    private text = "";
    //private node = null;
    
      
    
    
    public constructor(initData){
 
        super(initData);
        
        this.align = Utils.checkNullUndefined(this.initData.align, this.align);
        this.dropShadow = Utils.checkNullUndefined(this.initData.dropShadow, this.dropShadow);
        this.dropShadowAlpha = Utils.checkNullUndefined(this.initData.dropShadowAlpha, this.dropShadowAlpha);
        this.dropShadowAngle = Utils.checkNullUndefined(this.initData.dropShadowAngle, this.dropShadowAngle);
        this.dropShadowBlur = Utils.checkNullUndefined(this.initData.dropShadowBlur, this.dropShadowBlur);
        this.dropShadowColor = Utils.checkNullUndefined(this.initData.dropShadowColor, this.dropShadowColor);
        this.dropShadowDistance = Utils.checkNullUndefined(this.initData.dropShadowDistance, this.dropShadowDistance);

        this.fill = Utils.checkNullUndefined(this.initData.fill, this.fill);
        this.fontFamily = Utils.checkNullUndefined(this.initData.fontFamily, this.fontFamily);
        this.fontSize = Utils.checkNullUndefined(this.initData.fontSize, this.fontSize);
        this.fontStyle = Utils.checkNullUndefined(this.initData.fontStyle, this.fontStyle);
        this.fontWeight = Utils.checkNullUndefined(this.initData.fontWeight, this.fontWeight);

        this.leading = Utils.checkNullUndefined(this.initData.align, this.leading);
        this.letterSpacing = Utils.checkNullUndefined(this.initData.letterSpacing, this.letterSpacing);
        this.lineHeight = Utils.checkNullUndefined(this.initData.lineHeight, this.lineHeight);
        this.lineJoin = Utils.checkNullUndefined(this.initData.lineJoin, this.lineJoin);
        this.miterLimit = Utils.checkNullUndefined(this.initData.miterLimit, this.miterLimit);

        this.padding = Utils.checkNullUndefined(this.initData.padding, this.padding);

       
        this.strokeColor = Utils.checkNullUndefined(this.initData.strokeColor, this.strokeColor);
        this.strokeThickness = Utils.checkNullUndefined(this.initData.strokeThickness, this.strokeThickness);

        this.wordWrap = Utils.checkNullUndefined(this.initData.wordWrap, this.wordWrap);
        this.wordWrapWidth = Utils.checkNullUndefined(this.initData.wordWrapWidth, this.wordWrapWidth);

        this.text = Utils.checkNullUndefined(this.initData.text, this.text);
       

        
    }

    public init()
    {
        super.init();  
        this.createTextField();

        this.setupBasicProperties();
   
    }

    private  createTextField()
    {
        /*
        let style = new PIXI.TextStyle({
            "align":this.align,
            "dropShadow": this.dropShadow, //true,
            "dropShadowAlpha": this.dropShadowAlpha, //true,
            "dropShadowAngle": this.dropShadowAngle, //Math.PI / 6,
            "dropShadowBlur": this.dropShadowBlur, //4,
            "dropShadowColor": this.dropShadowColor, // '#000000',
            "dropShadowDistance": this.dropShadowDistance, //6,
            
            "fill": this.fill, //['#ffffff', '#00ff99'], // gradient
            "fontFamily": this.fontFamily,// 'Arial',
            "fontSize": this.fontSize, //36,
            "fontStyle": this.fontStyle, // 'italic',
            "fontWeight": this.fontWeight, //'bold',
            
            "leading":this.leading,
            "letterSpacing":this.letterSpacing,
            "lineHeight":this.lineHeight,
            "lineJoin":this.lineJoin,
            "miterLimit":this.miterLimit,
            
            "padding":this.padding,
            
            "stroke": this.strokeColor, //'#4a1850',
            "strokeThickness": this.strokeThickness,// 5,
            "wordWrap": this.wordWrap, //true,
            "wordWrapWidth": this.wordWrapWidth, //440
        });
        */
     
       let style = new PIXI.TextStyle({
            fontFamily: this.fontFamily,
            fontSize: this.fontSize,
            align:this.align,
            fontStyle: this.fontStyle,
            fontWeight: this.fontWeight,
            fill: this.fill, // gradient
            stroke: this.strokeColor,
            strokeThickness: this.strokeThickness,
            dropShadow: this.dropShadow,
            dropShadowColor: this.dropShadowColor,
            dropShadowBlur: this.dropShadowBlur,
            dropShadowAngle: this.dropShadowAngle,
            dropShadowDistance: this.dropShadowDistance,
            wordWrap: this.wordWrap,
            wordWrapWidth: this.wordWrapWidth,
        });

     

        // Method 1 
        //this.node = new PIXI.Sprite();
        //this.node.addChild(new PIXI.Text(this.text, style));

        // method 2

        this.node = new PIXI.Text(this.text, style);
        this.node.name = this.id;
        
    }

    public updateStyle(styleObj)
    {

        // Style Obj
        
        var styleObj  = {
            "align":this.align,
            "dropShadow": this.dropShadow, //true,
            "dropShadowAlpha": this.dropShadowAlpha, //true,
            "dropShadowAngle": this.dropShadowAngle, //Math.PI / 6,
            "dropShadowBlur": this.dropShadowBlur, //4,
            "dropShadowColor": this.dropShadowColor, // '#000000',
            "dropShadowDistance": this.dropShadowDistance, //6,
            
            "fill": this.fill, //['#ffffff', '#00ff99'], // gradient
            "fontFamily": this.fontFamily,// 'Arial',
            "fontSize": this.fontSize, //36,
            "fontStyle": this.fontStyle, // 'italic',
            "fontWeight": this.fontWeight, //'bold',
            
            "leading":this.leading,
            "letterSpacing":this.letterSpacing,
            "lineHeight":this.lineHeight,
            "lineJoin":this.lineJoin,
            "miterLimit":this.miterLimit,
            
            "padding":this.padding,
            
            "stroke": this.strokeColor, //'#4a1850',
            "strokeThickness": this.strokeThickness,// 5,
            "wordWrap": this.wordWrap, //true,
            "wordWrapWidth": this.wordWrapWidth, //440
        }
        

        /*
        let styleObj = {
            "dropShadow": true,
            "dropShadowBlur": 8,
            "dropShadowDistance": 2,
            "fill": [
                "#ff8000",
                "yellow",
                "#ff8040"
            ],
            "fillGradientStops": [
                0.4,
                0.5,
                0.7
            ],
            "fontSize": 91,
            "fontWeight": "bold",
            "strokeThickness": 6
        }
        */

        

        this.node.style = styleObj;
    }

    public setText(pstr)
    {
        this.node.text = pstr;
    }


        
    public getText() 
    {
                  
        return this.node.text;
       
    }

    public setTextFillColor(color)
    {
        if(color)
        {
            let colorStyleObj = { "fill":color };
            let currentStyle = this.node.style;
            this.node.style = { ...currentStyle, ...colorStyleObj}; 
        }
    }

    public setFontSize(fontSize) 
    {
        if(fontSize)
        {   
            let styleObj = { "fontSize":fontSize };
            let currentStyle = this.node.style;
            this.node.style = { ...currentStyle, ...styleObj}; 

        }
    }

    
    public getFontSize() 
    {
                  
        return this.node.style.fontSize;
       
    }

    public setTextStroke(strokeColor, strokeThickness) 
    {
        let colorStyleObj = {};
        let thicknessStyleObj = {};
        if(strokeColor)
        {
            colorStyleObj = { "stroke":strokeColor };
        }
        if(strokeThickness)
        {
            thicknessStyleObj = { "strokeThickness":strokeThickness };
        }
        
        let currentStyle = this.node.style;
        this.node.style = { ...currentStyle, ...colorStyleObj, ...thicknessStyleObj}; 
    }
    
    private setBackGroundColor(color)
    {

    }

    public getStyle():object
    {

        return this.node.style;
    }

    public cloneStyle():object
    {

        return this.node.clone();
    }

    public resetStyle()
    {

        this.node.reset();
    }

    public setAnchorPoint( x = 0, y = 0,)
    {
        if(arguments.length === 1)
        {
            this.node.anchor.set(x , x)
        }
        else if(arguments.length === 2)
        {
            this.node.anchor.set(x , y)
        }
        
    }

    public setScale(x:number = 1)
    {
        this.node.scale.set(x);        
    }


    


}