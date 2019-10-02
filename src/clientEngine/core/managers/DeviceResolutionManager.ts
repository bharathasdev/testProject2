export default class DeviceResolutionManager
{
    //minimumScreenResolutionWidthToLoadFullHD     
    static minFullHDWidth=1024;
    
    //screenResolutionWidthForHDReady        
    static HDReadyWidth=1280;
    //screenResolutionWidthForFullHD
    static fullHDWidth=1920;
    //minimumPixelRatioForFullHD
    static minFullHDPxRatio=2;

    constructor()
    {
        
    }

    static checkDeviceResolution()
    {
        console.log('Screen resolution: '+screen.width+' x '+screen.height);
        console.log('Platform: '+navigator.platform);
        console.log('Pixel ratio: '+window.devicePixelRatio);
        
       let resolutionToUse = "x2";
       // FullHD atlas will be loaded on devices whose base resolution is greater than 1024px width and its pixel ratio (density) is greater than 1 (https://mydevice.io/devices/)
      // In the case of computer screens which normally have a pixel ratio of 1, it will be checked if the base resolution is HDReady or FullHD to load the fullHD atlas
      if(((screen.width>=this.minFullHDWidth || screen.height>=this.minFullHDWidth) && window.devicePixelRatio >= this.minFullHDPxRatio) ||
          (screen.width>=this.HDReadyWidth || screen.height>=this.HDReadyWidth))
        {
            resolutionToUse = "x4";
        }
       
        return resolutionToUse;
    }
}