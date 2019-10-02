import BrowserEvents from '../events/BowserEvents'
export default class OrientationManager{

    private windowWidth:number = null;
    private windowHeight:number = null;
    private windowX:number = null;
    private windowY:number = null;

    constructor()
    {
        this.setupEventListener();
    }

    private setupEventListener()
    {
        document.addEventListener(BrowserEvents.BROWSER_RESIZED, this.onBrowserResize, false);

    }

    private onBrowserResize(e)
    {
        this.windowX = e.target.newX;
        this.windowY = e.target.newY;
        this.windowWidth = e.target.newWidth;
        this.windowHeight = e.target.newHeight;
        if( this.windowWidth >= this.windowHeight  )
        {
            //console.log("Game is in Landscape");    
        }
        else if(this.windowWidth < this.windowHeight )
        {
            //console.log("Game is in Portrait");    
        }
    
        console.log("Browser resized from Orientation Manager");
    }

}