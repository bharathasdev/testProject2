import GameEvent from "./GameEvent";

export default class Listener{

    public static EVENTS = {};
    constructor()
    {

    }

    public static registerEvent(eventName)
    {
        var event = new GameEvent(eventName)
        Listener.EVENTS[eventName] = event;
    }

    public static dispatchEvent(eventName, eventArgs)
    {
        Listener.EVENTS[eventName].callbacks.forEach(callback =>{
            //console.log("Hello", eventArgs)
            callback(eventArgs);
        });
    }

    public static regiserAndDispatchEvent(eventName, eventArgs)
    {
        this.registerEvent(eventName);
        this.dispatchEvent(eventName, eventArgs)
    }


    
    public static addEventListener(eventName, callback)
    {
        if(Listener.EVENTS[eventName])
        {
            Listener.EVENTS[eventName].registerCallback(callback);
        }
        else
        {
            console.log(" *** "+ eventName + " Event not registered.....");
        }
        
    }


}