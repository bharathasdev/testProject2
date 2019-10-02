import GameEvent from './GameEvent';
export default class BrowserEvents extends GameEvent{

    static  ORIENTATION_CHANGE_TO_PORTRAIT:string = "ORIENTATION_CHANGE_TO_PORTRAIT";
    static  ORIENTATION_CHANGE_TO_LANDSCAPE:string = "ORIENTATION_CHANGE_TO_LANDSCAPE";

    static BROWSER_RESIZED:string = "BROWSER_RESIZED";

       
}