import GameEvent from '../../core/events/GameEvent';
export default class WinlineEvents extends GameEvent{

    static  WINLINE_SPAGHETTI_START:string = "WINLINE_SPAGHETTI_START";
    static  WINLINE_SPAGHETTI_FINISH:string = "WINLINE_SPAGHETTI_FINISH";

    static  WINLINE_ANIMATION_START:string = "WINLINE_ANIMATION_START";
    static  WINLINE_ANIMATION_FINISH:string = "WINLINE_ANIMATION_FINISH";

    static  WINLINE_ALL_ANIMATION_FINISH:string = "WINLINE_ALL_ANIMATION_FINISH";
      
}