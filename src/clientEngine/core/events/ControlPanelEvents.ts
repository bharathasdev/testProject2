import GameEvent from './GameEvent';
export default class ControlPanelEvents extends GameEvent{

    static  SPIN_BUTTON_CLICKED:string = "SPIN_BUTTON_CLICKED";
    static  AUTOPLAY_BUTTON_CLICKED:string = "AUTOPLAY_BUTTON_CLICKED";    
    static  TURBO_BUTTON_CLICKED:string = "TURBO_BUTTON_CLICKED";
    static  STAKE_BUTTON_CLICKED:string = "STAKE_BUTTON_CLICKED";
    static  GAMBLE_BUTTON_CLICKED:string = "GAMBLE_BUTTON_CLICKED";

    static  SOUND_BUTTON_CLICKED:string = "SOUND_BUTTON_CLICKED";
    static  SETTINGS_BUTTON_CLICKED:string = "SETTINGS_BUTTON_CLICKED";
    static  MENU_BUTTON_CLICKED:string = "MENU_BUTTON_CLICKED";
      
}