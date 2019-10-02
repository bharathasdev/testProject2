//import * as PIXI from '../../lib/pixi';
console.log("Stage..........")
export default class Stage {
  private static instance: Stage;

  static PIXIApp = null;
  private static node = null;
  private static tmpStage: any;

  private constructor() { }
  
  static getPIXIInstance(config) {
    if (!Stage.instance) {
      Stage.instance = new Stage();
      Stage.PIXIApp = new PIXI.Application(config);
      
      //Stage.PIXIApp = PIXI.autoDetectRenderer(config);
    
    }
    return Stage.PIXIApp.view;
  }

  // Returns original Pixi Stage object
  static getStage(){
  
    //this.tmpStage = null;
    //this.tmpStage = Stage.PIXIApp.stage
    return Stage.PIXIApp.stage;
  }

  // Returns original Pixi View object
  static getView()
  {
    return Stage.PIXIApp.view; 
  }

  static getTicker()
  {
    return Stage.PIXIApp.ticker; 
  }

  static getRenderer(){
    return Stage.PIXIApp.renderer;
  };

}