import GameConfig from './../../../GameConfig';
export default class SymbolsDictionary{

    public static symbolsData = null;
    public static dictionary = [];

    public static instance = null;
    
    
    
    private constructor()
    {
        
    }
   

    static createDictionary()
    {
        let symbolsList = null;
        //SymbolsDictionary.instance = new SymbolsDictionary();
        this.symbolsData = GameConfig.getConfig().symbolsConfig.symbolsData;
        symbolsList = SymbolsDictionary.symbolsData.symbols;

        this.dictionary =  Object.assign({}, ...symbolsList);
        
    }

    static getSymbolsDictionary()
    {
        return this.dictionary;
    }

}