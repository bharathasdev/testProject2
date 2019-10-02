export default class GameEvent{
    private eventName = ""
    private callbacks = [];

    constructor(name:string)
    {

        this.eventName = name;
    }

    public registerCallback(callback)
    {
        this.callbacks.push(callback);
    }
}