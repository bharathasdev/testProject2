export default class AssetsDictionary{

   
    static Graphics:any[] = [];
    static Sounds:any[] = [];
    static Fonts:any[] = [];
    static AtlasData:any[] = [];
    static SpineAnim:any[] = [];

    private me = null;

    constructor()
    {
        this.me = this;
    }

    static getGraphic(name)
    {
        return this.Graphics[name];
    }

    static getSound(name)
    {
        return this.Sounds[name];
    }

    static getFont(name)
    {
        return this.Fonts[name];
    }

    static getAtlas(name)
    {
        return this.AtlasData[name];
    }

    static getSpineAnim(name)
    {
        return this.SpineAnim[name];
    }
   

}