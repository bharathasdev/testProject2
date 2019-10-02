import AssetsDictionary from './AssetsDictionary';
import GameConfig from '../../../GameConfig';

export default class Assetloader{

    //List of files to load
    private assets = {}

    private callBackFunction = null;

    private  assetsLibrary = {
        "graphics":[],
        "audio":[],
        "fonts":[],
        "atlasData":[],
        "spine":[]
    }

    private loader = null; 

    private loadingText = null;
    private animationContainer = null;
    private graphicsBaseURL:string = null;

    private soundsBaseURL:string = null;

    static me = null;

    //constructor(assetsConfigData, callback, textField:TextDisplay = null, animContainer:DisplayObject = null)
    constructor(initData)
    {
        this.assets = initData.assetsList;

        this.graphicsBaseURL = this.assets.graphicsBaseURL;
        this.soundsBaseURL = this.assets.soundsBaseURL;
        this.spinesBaseURL =  this.assets.spinesBaseURL;
        this.atlasBaseURL =  this.assets.atlasBaseURL;
        this.fontsBaseURL = this.assets.fontsBaseURL;
        
        
        Assetloader.me = this;
        this.callBackFunction = initData.loadCompleteCallback;
        this.init(initData.textObj, initData.animationContainer);

        
        

    }

    private init(textField, animContainer)
    {
        
    
        this.loadingText = textField;
        this.animationContainer = animContainer;
        //    this.loader = new PIXI.Loader(); V5
        this.loader = PIXI.loader;
        
        this.loadAssets();

    }

    private loadAssets()
    {
        
        this.loadImages();
        this.loadSounds();
        
        this.loadAtlasData();
        this.loadSpines();
        this.setupCallBacks();
    }

    private setupCallBacks()
    {
        this.loader.on("progress", this.handleLoadProgress, this) ;
        this.loader.on("load", this.handleLoadComplete);
        this.loader.on("error", this.handleLoadError);
        //this.loader.load(); // this is a final callback

        this.loader.load(this.allAssetsLoadComplete); // this is a final callback
    }


    private loadImages()
    {
        // Add to the PIXI loader for images
        for (let name in this.assets.graphics) {
            this.loader.add(name, this.graphicsBaseURL + GameConfig.getConfig().debug.forceRes +"/"+ this.assets.graphics[name]);
        }
    }

    private loadSounds()
    {
        // Add to the PIXI loader for sounds
        for (let name in this.assets.sounds) {
            this.loader.add(name, this.soundsBaseURL  + this.assets.sounds[name]);
        }
    }

    private loadAtlasData()
    {
        for (let name in this.assets.atlasData) {
            this.loader.add(name, this.atlasBaseURL + GameConfig.getConfig().debug.forceRes +"/"+  this.assets.atlasData[name]);
        }
    }

    private loadSpines()
    {
        for (let name in this.assets.spines) {
            this.loader.add(name, this.spinesBaseURL + GameConfig.getConfig().debug.forceRes +"/"+  this.assets.spines[name]);
        }
    }


    
    // adding event Listeners
    private handleLoadProgress(loader, resource ) {
        console.log(loader.progress + "% loaded");
        if(Assetloader.me.loadingText)
        {
            Assetloader.me.loadingText.setText(Math.round(loader.progress) + "% loaded");
        }
    }

    private  handleLoadComplete(loader, resource) {
        console.log("asset loaded " + resource.name);

        //load Type 1 XHR / Json
        //load Type 2 Image
        //load Type 3 Audio
        //load Type 4 Video
        if(resource.loadType === 1)
        {
            if(resource.spineData)
            {
                AssetsDictionary.SpineAnim[resource.name]  = resource;
            }
            else
            {
                AssetsDictionary.AtlasData[resource.name]  = resource;
            }
        }
        if(resource.loadType === 2)
        {
            AssetsDictionary.Graphics[resource.name]  = resource;
        }
        else if(resource.loadType === 3)
        {
            AssetsDictionary.Sounds[resource.name]  = resource;
        }
        else if(resource.loadType === 5)
        {
            AssetsDictionary.Fonts[resource.name]  = resource;
        }
        console.log("Assets library", Assetloader.me.assetsLibrary);
    }

    private handleLoadError(loader, resource) {
        console.log("load error");
    }

    private AllAssetsReadyToUse()
    {
        console.log("From Asset Loader - AllAssetsReadyTouse");
        this.callBackFunction();
    }

    private  allAssetsLoadComplete(loader, resource) {
        console.log("All the assets loading complete");
        Assetloader.me.AllAssetsReadyToUse();
        //Assetloader.me.playAnimation("capguy");
    }

    
}