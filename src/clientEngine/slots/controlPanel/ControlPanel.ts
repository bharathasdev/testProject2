import SlotScreen from '../SlotScreen';
import Listener from '../../core/events/Listener';
import ControlPanelEvents from '../../core/events/ControlPanelEvents';
export default class ControlPanel{

    private barLow = null;
    private barTop = null;
    private spinButton = null;
    private autoPlayButton = null;
    private settingsButton = null;
    private menuButton = null;
    private stakeButton = null;
    private gambleButton = null;
    private soundButton = null;
    private turboButton = null;

    constructor(initData)
    {
        
        //this.init();
    }

    private init()
    {
        this.setupButtons();
        this.setupEvents();
        this.setupCallBack();
    }

    private setupButtons()
    {
        this.barLow = SlotScreen.screenComponents.barLow;
        this.barTop = SlotScreen.screenComponents.barTop;
        
        this.spinButton = SlotScreen.screenComponents.spinButton; 
        this.autoPlayButton = SlotScreen.screenComponents.autoplayButton;
        this.settingsButton = SlotScreen.screenComponents.settingsButton;
        this.menuButton = SlotScreen.screenComponents.menuButton;
        this.stakeButton = SlotScreen.screenComponents.stakeButton;
        this.soundButton = SlotScreen.screenComponents.soundButton;

        this.gambleButton = SlotScreen.screenComponents.gambleButton;
        this.turboButton = SlotScreen.screenComponents.turboButton;

        this.spinButton.enable();
        this.autoPlayButton.enable();
        this.settingsButton.enable();
        this.menuButton.enable();
        this.stakeButton.enable();
        this.soundButton.enable();
        this.gambleButton.enable();
        this.turboButton.enable();
               
    }

    private setupCallBack()
    {
        this.spinButton.setClickCallback(()=>{this.onSpinButtonClicked()});
        this.autoPlayButton.setClickCallback(()=>{this.onAutoPlayButtonClicked()});
        //this.settingsButton.setClickCallback(()=>{this.onTurboButtonClicked()});
        this.stakeButton.setClickCallback(()=>{this.onStakeButtonClicked()});
        this.gambleButton.setClickCallback(()=>{this.onGambleButtonClicked()});
        
        this.settingsButton.setClickCallback(()=>{this.onSettingsButtonClicked()});
        this.menuButton.setClickCallback(()=>{this.onMenuButtonClicked()});

        this.soundButton.setClickCallback(()=>{this.onSoundButtonClicked()});
        this.turboButton.setClickCallback(()=>{this.onTurboButtonClicked()});


    }

    private setupEvents()
    {
        Listener.registerEvent(ControlPanelEvents.SPIN_BUTTON_CLICKED);
        Listener.registerEvent(ControlPanelEvents.AUTOPLAY_BUTTON_CLICKED);
        Listener.registerEvent(ControlPanelEvents.TURBO_BUTTON_CLICKED);
        Listener.registerEvent(ControlPanelEvents.STAKE_BUTTON_CLICKED);
        Listener.registerEvent(ControlPanelEvents.GAMBLE_BUTTON_CLICKED);

        Listener.registerEvent(ControlPanelEvents.SOUND_BUTTON_CLICKED);
        Listener.registerEvent(ControlPanelEvents.SETTINGS_BUTTON_CLICKED);
        Listener.registerEvent(ControlPanelEvents.MENU_BUTTON_CLICKED);
    }

    private onSpinButtonClicked()
    {
        console.log(" Spin Button Clicked ----- ");
        Listener.dispatchEvent(ControlPanelEvents.SPIN_BUTTON_CLICKED, {target:{ id:this.id}}); 
    }

    private onAutoPlayButtonClicked()
    {
        console.log("Autoplay Button Clicked ----- ");
        Listener.dispatchEvent(ControlPanelEvents.AUTOPLAY_BUTTON_CLICKED, {target:{ id:this.id}}); 
    }

    private onTurboButtonClicked()
    {
        console.log("Turbo Button Clicked ----- ");
        Listener.dispatchEvent(ControlPanelEvents.TURBO_BUTTON_CLICKED, {target:{ id:this.id}});    
    }

    private onStakeButtonClicked()
    {
        console.log("Stake Button Clicked ----- ");
        Listener.dispatchEvent(ControlPanelEvents.STAKE_BUTTON_CLICKED, {target:{ id:this.id}});    
    }

    private onGambleButtonClicked()
    {
        console.log("Gamble Button Clicked ----- ");
        Listener.dispatchEvent(ControlPanelEvents.GAMBLE_BUTTON_CLICKED, {target:{ id:this.id}});     
    }

    private onSoundButtonClicked()
    {
        console.log("Sound Button Clicked ----- ");
        Listener.dispatchEvent(ControlPanelEvents.SOUND_BUTTON_CLICKED, {target:{ id:this.id}});   
    }

    private onSettingsButtonClicked()
    {
        console.log("Settings Button Clicked ----- ");
        Listener.dispatchEvent(ControlPanelEvents.SETTINGS_BUTTON_CLICKED, {target:{ id:this.id}});    
    }

    private onMenuButtonClicked()
    {
        console.log("Menu Button Clicked ----- ");
        Listener.dispatchEvent(ControlPanelEvents.MENU_BUTTON_CLICKED, {target:{ id:this.id}});
    }



}