import BowserEvents from '../events/BowserEvents';
import Listener from '../events/Listener';
import GameConfig from '../../../GameConfig';
export default class Resizer{

  
	private gameWidth = 990;
	private gameHeight = 576;

	private safeWidth = 990;
	private safeHeight = 576;

	private availableWindowWidth = null;
	private availableWindowHeight = null;


	private newGameX = 0; 
	private newGameY = 0;
	private newGameWidth = 0; 
	private newGameHeight = 0; 
	
	private browserWindow = null;
	private contentToResize = null;
	static CURRENT_ORIENTATION:string = "";
	static ORIENTATION_CHANGED = true;



	//private static instance = new Resizer();


	constructor()
	{
		//this.browserWindow = initData.browserWindow;
		//this.contentToResize = initData.contentToResize;
	}


	
	public initialize()
	{
		let self = this;
		
		this.browserWindow = window;
		this.contentToResize = document.getElementsByTagName("canvas")[0];
		this.gameWidth = GameConfig.getConfig().screen.width;
		this.gameHeight = GameConfig.getConfig().screen.height;

		this.safeWidth = GameConfig.getConfig().screen.width; //990;
		this.safeHeight = GameConfig.getConfig().screen.height; //576;
		
		this.setupEvents();
		this.scrollToTop();
		

		this.availableWindowWidth = this.browserWindow.innerWidth;
		this.availableWindowHeight = this.browserWindow.innerHeight;

		

				
		this.checkPortraitOrLandscape();
		

	}

	public setupEvents()
	{
		Listener.registerEvent(BowserEvents.BROWSER_RESIZED);
		Listener.registerEvent(BowserEvents.ORIENTATION_CHANGE_TO_LANDSCAPE);
		Listener.registerEvent(BowserEvents.ORIENTATION_CHANGE_TO_PORTRAIT);

		
	}


	private scrollToTop()
	{

		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	}

	private checkPortraitOrLandscape(force)
	{
		let newOrientation:string = "LANDSCAPE";
		let event = null
		this.availableWindowWidth = this.browserWindow.innerWidth;
		this.availableWindowHeight = this.browserWindow.innerHeight;
		//Resizer.ORIENTATION_CHANGED = false;
		if(force)
		{
			Resizer.CURRENT_ORIENTATION = "";
		}
		
		if(this.availableWindowWidth  >= this.availableWindowHeight)
		{
			this.gameWidth =  GameConfig.getConfig().screen.width;
			this.gameHeight =  GameConfig.getConfig().screen.height;

			this.safeWidth =  GameConfig.getConfig().screen.width; //990;
			this.safeHeight =  GameConfig.getConfig().screen.height; //576;
			console.log("Game is in Landscape"); 
			this.calculateNewDimensions();
			newOrientation = "LANDSCAPE";
			if(Resizer.CURRENT_ORIENTATION !== newOrientation)
			{
				Resizer.ORIENTATION_CHANGED = true;
				Resizer.CURRENT_ORIENTATION = newOrientation;
				//event = new CustomEvent(BowserEvents.ORIENTATION_CHANGE_TO_LANDSCAPE, {target:{ newX:this.newGameX, newY:this.newGameY, newWidth: this.newGameWidth, newHeight:this.newGameHeight  }});
				//document.dispatchEvent(event);

				Listener.dispatchEvent(BowserEvents.ORIENTATION_CHANGE_TO_LANDSCAPE, {target:{ newX:this.newGameX, newY:this.newGameY, newWidth: this.newGameWidth, newHeight:this.newGameHeight  }});
			}
			//this.calculateDimensionForLandscape();
		}
		else 
		{
			this.gameWidth = 576;
			this.gameHeight = 990;

			this.safeWidth = 576; //990;
			this.safeHeight = 990; //576;

			console.log("Game is in Portrait"); 
			this.calculateNewDimensions();
			newOrientation = "PORTRAIT";
			if(Resizer.CURRENT_ORIENTATION !== newOrientation)
			{
				Resizer.ORIENTATION_CHANGED = true;
				Resizer.CURRENT_ORIENTATION = newOrientation;
				//event = new CustomEvent(BowserEvents.ORIENTATION_CHANGE_TO_PORTRAIT, {target:{ newX:this.newGameX, newY:this.newGameY, newWidth: this.newGameWidth, newHeight:this.newGameHeight  }});
				//document.dispatchEvent(event);

				Listener.dispatchEvent(BowserEvents.ORIENTATION_CHANGE_TO_PORTRAIT, {target:{ newX:this.newGameX, newY:this.newGameY, newWidth: this.newGameWidth, newHeight:this.newGameHeight  }});
			}
			//this.calculateDimensionForPortrait();
		}

		
		this.resizeContent();
		
	}

	private calculateDimensionForLandscape()
	{
		
	}

	private calculateDimensionForPortrait()
	{

	}


	private calculateNewDimensions()
	{
		this.availableWindowWidth = this.browserWindow.innerWidth;
		this.availableWindowHeight = this.browserWindow.innerHeight;

		if (this.gameHeight / this.gameWidth > this.availableWindowHeight / this.availableWindowWidth) 
		{
			if (this.safeHeight / this.gameWidth > this.availableWindowHeight / this.availableWindowWidth)
			{
				// A
				this.newGameHeight = this.availableWindowHeight * this.gameHeight / this.safeHeight;
				this.newGameWidth = this.newGameHeight * this.gameWidth / this.gameHeight;
			} else {
				// B
				this.newGameWidth = this.availableWindowWidth;
				this.newGameHeight = this.newGameWidth * this.gameHeight / this.gameWidth;
			}
		} 
		else 
		{
			if (this.gameHeight / this.safeWidth > this.availableWindowHeight / this.availableWindowWidth) 
			{
				// C
				this.newGameHeight = this.availableWindowHeight;
				this.newGameWidth = this.newGameHeight * this.gameWidth / this.gameHeight;
			} else {
				// D
				this.newGameWidth = this.availableWindowWidth * this.gameWidth / this.safeWidth;
				this.newGameHeight = this.newGameWidth * this.gameHeight / this.gameWidth;
			}
		}

		this.newGameX = (this.availableWindowWidth - this.newGameWidth) / 2;
		this.newGameY = (this.availableWindowHeight - this.newGameHeight) / 2;

	}

	private resizeContent()
	{

		this.contentToResize.style.width = this.newGameWidth + "px";
		this.contentToResize.style.height = this.newGameHeight + "px";
		this.contentToResize.style.margin = this.newGameY + "px " + this.newGameX + "px";
		
	}

	public onBrowserResize()
	{
		console.log("onBrowserResize....");

		this.scrollToTop();
	

		this.availableWindowWidth = this.browserWindow.innerWidth;
		this.availableWindowHeight = this.browserWindow.innerHeight;
						
		this.checkPortraitOrLandscape();
		//this.initialize();
		//let event = new CustomEvent(BowserEvents.BROWSER_RESIZED, {target:{ newX:this.newGameX, newY:this.newGameY, newWidth: this.newGameWidth, newHeight:this.newGameHeight  }});
		//document.dispatchEvent(event);

		Listener.dispatchEvent(BowserEvents.BROWSER_RESIZED, {target:{ newX:this.newGameX, newY:this.newGameY, newWidth: this.newGameWidth, newHeight:this.newGameHeight  }});
	}
};

