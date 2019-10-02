//import PIXI from 'route/to/pixi';
export default class PixiViewManager 
{


    private deviceResMan= DeviceResolutionManager
    private scaleFactors = {'lowRes': 1, 'fullHD': 2.25};         
    private renderer=null;
    private scaleFactor=null;
    constructor(DeviceResolutionManager)
    {  
        this.deviceResMan = DeviceResolutionManager
        this.scaleFactors={'lowRes': 1, 'fullHD': 2.25};         
        this.renderer=null;
        this.scaleFactor=null;
        this.initRenderer();
    }
    private initRenderer()
    {
        this.assignScaleFactor();
        //All stuff related with initialising the renderer related with your project...
        this.renderer = PIXI.autoDetectRenderer(
            window.innerWidth,    
            window.innerHeight, 
            {
             'autoResize': true,
             'transparent': true,
             'antialias': true,
             'roundPixels': true,
             'resolution': window.devicePixelRatio
            }
        );
      //More related code to follow...
    }
  
    private assignScaleFactor()
    {
        if(this.deviceResMan.checkDeviceResolution())
        {
            this.scaleFactor=this.scaleFactors['fullHD'];
        }
        else
        {
            this.scaleFactor=this.scaleFactors['lowRes'];
        }
    }
}