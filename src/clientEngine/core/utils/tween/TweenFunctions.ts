export default class TweenFunctions{
    static  EASE_NONE:string = Power0.easeNone;
    static  EASE_LINEAR:string = Power0.easeNone;

    static  EASE_OUT_QUAD:string = Power1.easeOut;
    static  EASE_IN_QUAD:string = Power1.easeIn;
    static  EASE_INOUT_QUAD:string = Power1.easeInOut;

    static  EASE_OUT_CUBIC:string = Power2.easeOut;
    static  EASE_IN_CUBIC:string = Power2.easeIn;
    static  EASE_INOUT_CUBIC:string = Power2.easeInOut;

    static  EASE_OUT_QUART:string = Power3.easeOut;
    static  EASE_IN_QUART:string = Power3.easeIn;
    static  EASE_INOUT_QUART:string = Power3.easeInOut;

    static  EASE_OUT_QUINT:string = Power4.easeOut;
    static  EASE_IN_QUINT:string = Power4.easeIn;
    static  EASE_INOUT_QUINT:string = Power4.easeInOut;


    static  EASE_OUT_BACK:string = Back.easeOut.config(1.7);
    static  EASE_IN_BACK:string = Back.easeIn.config(1.7);
    static  EASE_INOUT_BACK:string = Back.easeInOut.config(1.7);

    static  EASE_OUT_ELASTIC:string = Elastic.easeOut.config(1, 0.3);
    static  EASE_IN_ELASTIC:string = Elastic.easeIn.config(1, 0.3);
    static  EASE_INOUT_ELASTIC:string = Elastic.easeInOut.config(1, 0.3);

    static  EASE_OUT_BOUNCE:string = Bounce.easeOut;
    static  EASE_IN_BOUNCE:string = Bounce.easeIn;
    static  EASE_INOUT_BOUNCE:string = Bounce.easeInOut;

    static  EASE_OUT_EXPO:string = Expo.easeOut;
    static  EASE_IN_EXPO:string = Expo.easeIn;
    static  EASE_INOUT_EXPO:string = Expo.easeInOut;

    static  EASE_OUT_SINE:string = Sine.easeOut;
    static  EASE_IN_SINE:string = Sine.easeIn;
    static  EASE_INOUT_SINE:string = Sine.easeInOut;

      
    
}