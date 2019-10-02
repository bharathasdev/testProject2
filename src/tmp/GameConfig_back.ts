export default class GameConfig{

    private constructor()
    {
        
    }
    static getConfig(){
        return {
            "game":{
                "name":"devGame",
                "version":"0.1.0",
                "client":"innov8",
                "owner":"innov8"
            },
            "screen":{
                "highres":true,
                "viewPortScaling":"letterBox"
            },
            "debug":{
                "printToConsole":true,
                "fspMeter":true,
                "disableAudio":true
            },
            "autoplay":{
                "enabled":false,
                "options":[10, 20, 30, 50]
            },
            "controlPanel":{
                "spinButton":true,
                "Autoplay":false,
                "settingsButton":true,
                "balanceBar":false,
                "stakeSelector":true,
                "InfoButton":false
            },
            "assets": {
                "baseurl":"",
                "sounds":{

                    "loop1": './assets/sounds/bad1.mp3',
                    "loop2": './assets/sounds/bad2.mp3',
                    "loop3": './assets/sounds/bad3.mp3',
                    "loop4": './assets/sounds/bad4.mp3' 
        
                },
                "graphics":{
                   "bunny": './assets/images/bunny.png',
                   "jerry": './assets/images/jerry.jpg',
                   "reelstrip": './assets/images/reels_reelemin.jpg',
                   "tom": './assets/images/tom.png',
                   "screenShotLandscape": './assets/images/BaseGame/showTime.png',
                   "showTimePortrait": './assets/images/BaseGame/showTimePortrait.png',
        
                   "reelFrame":'./assets/images/BaseGame/main_front.png',
                   "mainPanel":'./assets/images/BaseGame/main_panel.png',
                   "spinButton":'./assets/images/BaseGame/spinButton.png',
                    //reelSymbols:'./assets/images/BaseGame/reddit_icons_small.png',
                },
                
                "atlasData":{
                    "capguy":'./assets/atlasData/capGuy.json',
                    "title":'./assets/images/BaseGame/Animating/PixiTitleAnim.json',
                },
                "spine":{
                   "symbolRoyals":'./assets/spine/symbols/symbol_royals/s_royals.json',
                   "symbolWild":'./assets/spine/symbols/symbol_wild/s_wild.json',
                   "symbolWof":'./assets/spine/symbols/symbol_wof/s_WoF.json',
                   "symbolBig":'./assets/spine/symbols/symbol_big/s_big.json',
                   "winShine":'./assets/spine/symbols/winShine/winShine.json',
                   "spineBoy":'./assets/spine/spineBoy/spineboy.json',
                }
            },
            "symbolsConfig":{
                "symbolsData":{
                    "spines":["symbolRoyals", "symbolWild", "symbolWof", "symbolBig"], // very important needs to be in correct order and the index has to be mentioned in the atlasId of appropriate symbols
                    "spinFadeAlpha":0.2, // alpha during spin
                    "symbolWidth":132,
                    "symbolHeight":132,

                    // the below order of symbols, name and index number should match the order name and index from Init Reponse
                    "symbols":[
                        {
                            "wild":{
                                "name":"wild",
                                "index":0,
                                "atlasId":1,
                                "staticImg":"wild",
                                "moveAnimation":"wild_stop",
                                "winAnimation":"wild_win",
                                "landingAnimation":"wild_stop",
                                "fadeDuringSpin":false,
                                "isWild":true
                            } 
                        },
                        {
                            "star":{
                                "name":"star",
                                "index":1,
                                "atlasId":3,
                                "staticImg":"star",
                                "moveAnimation":"star_stop",
                                "winAnimation":"star_win",
                                "landingAnimation":"star_stop",
                                "fadeDuringSpin":true,
                            } 
                        },
                        {
                            "teddy":{
                                "name":"teddy",
                                "index":2,
                                "atlasId":3,
                                "staticImg":"bear",
                                "moveAnimation":"bear_stop",
                                "winAnimation":"bear_win",
                                "landingAnimation":"bear_stop",
                                "fadeDuringSpin":true,
                            } 
                        },
                        {
                            "ace":{
                                "name":"ace",
                                "index":3,
                                "atlasId":0,
                                "staticImg":"ace",
                                "moveAnimation":"ace_stop",
                                "winAnimation":"ace_win",
                                "landingAnimation":"ace_stop",
                                "fadeDuringSpin":true,
                            } 
                        },
                        {
                            "king":{
                                "name":"king",
                                "index":4,
                                "atlasId":0,
                                "staticImg":"king",
                                "moveAnimation":"king_stop",
                                "winAnimation":"king_win",
                                "landingAnimation":"king_stop",
                                "fadeDuringSpin":true,

                            } 
                        },
                        {
                            "ten":{
                                "name":"ten",
                                "index":5,
                                "atlasId":0,
                                "staticImg":"ten",
                                "moveAnimation":"ten_stop",
                                "winAnimation":"ten_win",
                                "landingAnimation":"ten_stop",
                                "fadeDuringSpin":true,
                            } 
                        },
                        {
                            "jack":{
                                "name":"jack",
                                "index":6,
                                "atlasId":0,
                                "staticImg":"jack",
                                "moveAnimation":"jack_stop",
                                "winAnimation":"jack_win",
                                "landingAnimation":"jack_stop",
                                "fadeDuringSpin":true,
                            } 
                        },
                        {
                            "queen":{
                                "name":"queen",
                                "index":7,
                                "atlasId":0,
                                "staticImg":"queen",
                                "moveAnimation":"queen_stop",
                                "winAnimation":"queen_win",
                                "landingAnimation":"queen_stop",
                                "fadeDuringSpin":true,
                            } 
                        },
                        {
                            "bonus":{
                                "name":"bonus",
                                "index":8,
                                "atlasId":3,
                                "staticImg":"star",
                                "moveAnimation":"star_stop",
                                "winAnimation":"star_win",
                                "landingAnimation":"star_stop",
                                "isBonus":true,
                                "fadeDuringSpin":false,
                            } 
                        }
                    ]
                }
            },
            "reelsetConfig":{
                "scale":0.5,
                "reelsetWidth":1600, 
                "reelsetHeight":920,
                //"backgroundColor":null, //0x1099bb
                "numberOfReels": 5,
                "defaultStopPositions":[5, 5, 5, 5, 5],
                "reelStopOrder":[ 0, 1, 2, 3, 4],        
                "reelStartOrder":[ 0, 1, 2, 3, 4],          
                "interReelSpinDelay":[0, 200, 400, 600, 800 ],
                "interReelStopDelay":[150, 150, 150, 150, 150 ],     
                "numberOfRowsOnTop":2,
                "numberOfRowsAtBottom":2,
                "numberOfRowsInView":4,
                "id":"mainReelset",
                "reelsXPos":[213, 511, 804, 1103, 1400],
                "reelsYPos":[300, 300, 300, 300, 300],
                "offsetX":[0, 0, 0, 0, 0],
                "offsetY":[5, 5, 5, 5, 5],
                "stopPositionOffset":0, // this can be used to fudge the reel Stop Position
                "debugMode":false,
                "reelConfigData":{
                    "scale":0.5,
                    "reelWidth":280,
                    "reelHeight":875,
                    "symbolWidth":240,
                    "symbolHeight":220,
                    "symbolsOffsetX":0, // to adjust / nudge the reels without affecting anyother alignemnt
                    "symbolsOffsetY":-590, // to adjust / nudge the reels without affecting anyother alignemnt
                    "maskData":{"x":-138, "y":-250, "width":280, "height":855}, // Aperture view size relative to each reel
                    "spacingBetweenSymbols":0, // Space between symbols
                    "backgroundFillColor":"0x000000", // fill color for the Reels background
                    "backgroundX":-72,// to adjust the fill for the reels,
                    "backgroundY":-125, // to adjust the fill for the reels,
                                    
                    "maxReelSpinSpeed":65, // max Reel Spin Speed, this can be the same as spin speed
                    "spinSpeed":65, // reelspin speed

                    "enableSlowStartReel":true, // enable or disable the accleration at the start of the spin
                    "enableBounceAtStart":true,// enableSlowStartReel should be true to have a bounce at the start
                    "reelStartEasingDuration":1, // duration to accelerate
                    "reelStartEaseFunction":Back.easeIn.config(1.2), // ramp start setting
                    
                    "reelStopEasingDuration":3, // number of seconds the ease to happen - longer the duration is need to add more extra symbols. Recommended to adjust/play through  myReelSet.setReelSlowDownByReel(4, true, 1, 5); 
                    "targetStopSpeed":5, // least speed that reel can spin during the slow down. when reel comes to complete slow down theis denotes the target speed. Recommended to adjust/play through  myReelSet.setReelSlowDownByReel(4, true, 1, 5); 
                    "enableBounceAtStop":true, // enables the bounce at stop
                    "stopBounceDistance":30, // distance to bounce at stop

                    //"debugMode":true // Draws  the fill for the reels and reelsets. This can be used to setup the reels Aperture view size relative to each reel
    
                },
                "lom":{
                    "landscape":{
                        x:92, 
                        y:32,
                        'scale':0.5
                    },
                    "portrait":{
                        'x':58,
                        'y':347,
                        'scale':0.29
                    }
                },
    
    
                
            },
    
            "render": {
                "gameContainer":{

                }
            },
            "build": {
                "internal":true,
                "test-server":false,
                "deploymentServer":false
            },
            "gamePhrases":{

                "MSG_loading":"Loading. Please wait...",
                "MSG_SPIN":"PRESS THE SPIN BUTTON TO PLAY ",
                "MSG_BALANCE":"BALANCE:",
                "MSG_STAKE":"STAKE",
                "MSG_TOTAL_WIN":"TOTAL WIN:",
                "MSG_BIG_WIN":"BIG WIN",
                "MSG_CONGRATULATIONS":"CONGRATULATIONS!",
                "MGS_YOU_WON":"YOU HAVE WON"

            }
        }
    }
}
