import DisplayObject from '../display/DisplayObject';
import ImageDisplay from '../display/ImageDisplay';
import TextDisplay from '../display/TextDisplay';
import SuperDisplayObject from '../display/SuperDisplayObject';
import Button from '../display/Button';
import ReelSymbol from '../../slots/reels/ReelSymbol';
import SpineDisplay from '../display/SpineDisplay';
import GameConfig from '../../../GameConfig';
export default class Utils{

    // Types / Classes that can be created from the config.
    // Any new classes (object type) added to the src,should be added here
    static classesDictionary = {
        "DisplayObject":DisplayObject,
        "ImageDisplay":ImageDisplay,
        "TextDisplay":TextDisplay,
        "Button":Button,
        "ReelSymbol":ReelSymbol,
        "SpineDisplay":SpineDisplay,
        "SuperDisplayObject":SuperDisplayObject
    }

    static autoID = 100;
    static checkNullUndefined(param:any, defaultValue:any)
    {
        //if(param && typeof param !== 'undefined')
        if(typeof param !== 'undefined')
        {
            return param;
        }
        else
        {
            return defaultValue;
        }
    }

    static blockParentPageScroll()
    {
        // 2017 recommended event
        document.body.addEventListener("wheel", function(event){
            // latest  chrome 73.0.3683.103  - crashes here. 
            //event.preventDefault()
        }, false);

        // Before 2017, IE9, Chrome, Safari, Opera
        document.body.addEventListener("mousewheel", function(event){
            event.preventDefault()
        }, false);

        // Old versions of Firefox
        document.body.addEventListener("DOMMouseScroll", function(event){
            event.preventDefault()
        }, false);
    }

    static generateAutoID():string
    {
        return "AI"+this.autoID++;
    }

    static throwError(str:string , type:number = 3):string
    {
        if(type === 1)
        {
            console.log("Error: FATAL " + str);
            return "Error: FATAL" + str;
        }
        else if(type === 2)
        {
            console.log("Error: Asset load " + str);
            return "Error: Asset load" + str;

        }
        else if(type === 3)
        {
            console.log("Error: Invalid data : " + str);
            return "Error: Invalid data : " + str;
        }
    }

    static log(str:string):string
    {
        if(GameConfig.debug.printToConsole)
        {
            console.log("Error: FATAL " + str);
        }                      
    }

    static degreeToRadian(deg:number):number
    {
         return deg * Math.PI/180;
        
    }

    static radianToDegree(radian:number):number
    {
        return  (radian * 180)/Math.PI; 
        
    }

    static isMobileDevice():boolean {
        return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
    };
     

    static autoGenerateObjectsFromConfig(config, target, masterComponentsArray, key){
       
                      
       
        let parentNamesArray = [key]; //["slotScreenContainer"];
        let parentName = key;//"slotScreenContainer";
        let currentPropertyName = null;
        let lastPropertyName = null;
        let initData = null;
        var strClassName = null;
        var parentObj = null;
        var objToAddToScene = null;
        
        var obj = {};
        function eachRecursive(obj, scope)
        {
            
           
            for (var i in obj)
            {
                
                currentPropertyName = i;
                console.log("currentPropertyName:"+ currentPropertyName);
                console.log("lastPropertyName:"+ lastPropertyName);

                
                //if(i == "type")                            
                if(obj[i].hasOwnProperty("type"))
                {
                    strClassName = obj[i].type;
                    initData = obj[i];
                    
                    initData.id = Utils.checkNullUndefined(initData.id, currentPropertyName); 
                    objToAddToScene = new Utils.classesDictionary[strClassName](initData); //new [strClassName]();
                    objToAddToScene.init();
                    masterComponentsArray[i] = objToAddToScene;
                    parentObj = masterComponentsArray[parentName];

                    if(objToAddToScene.node)
                    {
                        parentObj.addChild(objToAddToScene);
                    }
                    else
                    {
                        parentObj.addChild(objToAddToScene);
                    }
                    

                    console.log("create Object ID:"+ currentPropertyName + " of Type:"+ obj[i].type + " to a parent " +  parentName);
                }

                if(obj[i].hasOwnProperty("children"))
                {
                    parentName = currentPropertyName;
                    parentNamesArray.push(parentName);
                }

                
                if(i == "children")
                {
                    console.log("Parent..."+ parentName + "::::::" + i + " i "+  obj[i]);
                    lastPropertyName = currentPropertyName;
                    eachRecursive(obj[i], scope);
                    console.log("End of Children Iteration");
                    parentNamesArray.pop();
                    parentName = parentNamesArray[parentNamesArray.length -1];

                }
                else
                {
                    
                    if( !Array.isArray(obj[i]) && typeof(obj[i]) === "object" )
                    {
                        lastPropertyName = currentPropertyName;
                        eachRecursive(obj[i], scope);
                        console.log("End of OBJECT Iteration");
                        //parentName = i;
                    }
                    
                    
                }

                lastPropertyName = currentPropertyName;
            }
            
        }

        eachRecursive(config, target);
        
    }

    static isEmpty(obj) {
        for(var prop in obj) {
          if(obj.hasOwnProperty(prop)) {
            return false;
          }
        }
      
        return JSON.stringify(obj) === JSON.stringify({});
    }

    static getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
    }

    static getRamdon(){
        return Math.random();
    }

}