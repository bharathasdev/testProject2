import ImageDisplay from './ImageDisplay';
export default class Button extends ImageDisplay{

    private selectable = false;
    
    private states = [
        
    ]

    constructor(initData)
    {
        
        super(initData)
        //this.anchor = [0.5, 0.5];
        //this.setAnchor(0.5);
    }

    public init()
    {

        super.init();
    }

    // changes the visual state of the button to Active and kills the interaction
    public setActiveAndSelectable()
    {

    }

    // changes the visual state of the button to Inactive State and kills the interaction
    public setInActiveAndUnSelectable()
    {

    }

    public enable()
    {
        this.clickable(true);
    }

    public disable()
    {
        this.clickable(false);
    }

    public onClick()
    {

    }

    public onMouseOver()
    {

    }

    public onMouseRollOut()
    {

    }

}