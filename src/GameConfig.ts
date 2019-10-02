import { DisplayObject } from "../src-js/core/display/displayObject";

export default class GameConfig {

    private constructor() {

    }
    static getConfig() {
        return {
            "game": {
                "name": "devGame",
                "version": "0.1.0",
                "client": "innov8",
                "owner": "innov8",
                "distribution":"web",
                "operator":"greenTube",
                "platform":"GCM",
                "playableInPortrait":true,
                "playableInLandscape":true,
            },
            "screen": {
                "highres": true,
                "viewPortScaling": "letterBox",
                "backgroundColor": 0x1099bb,
                "resolution": window.devicePixelRatio || 1,
                "width": 1920, //990, 
                "height": 1080, //576,
                "antialias": true,
                "autoResize": true,               
            },
            "debug": {
                "enabled": true,
                "printToConsole": true,
                "fspMeter": true,
                "disableAudio": true,
                "forceRes": "original", // original - default / x2
            },
            "autoplay": {
                "enabled": false,
                "options": [10, 20, 30, 50]
            },
            "controlPanel": {
                "spinButton": true,
                "Autoplay": false,
                "settingsButton": true,
                "balanceBar": false,
                "stakeSelector": true,
                "InfoButton": false
            },
            "assets": {
                "graphicsBaseURL": "./assets/web/images/",
                "soundsBaseURL": "./assets/web/sounds/",
                "spinesBaseURL": "./assets/web/spines/",
                "atlasBaseURL": "./assets/web/atlasData/",
                "fontsBaseURL": "./assets/web/fonts/",

                "sounds": {
                    "loop1": 'bad1.mp3',
                    "loop2": 'bad2.mp3',
                    "loop3": 'bad3.mp3',
                    "loop4": 'bad4.mp3'
                },
                "graphics": {

                    /*
                    "bunny": 'images/bunny.png',
                    "jerry": 'images/jerry.jpg',
                    "reelstrip": 'images/reels_reelemin.jpg',
                    "tom": 'images/tom.png',
                    //"screenShotLandscape": 'images/BaseGame/showTime.png',
                    "showTimePortrait": 'images/BaseGame/showTimePortrait.png',


        
                    //"reelFrame":'images/BaseGame/main_front.png',
                   
                    //"spinButton":'images/BaseGame/spinButton.png',
                    //reelSymbols:'images/BaseGame/reddit_icons_small.png',
                    */

                   "loadingPortrait":'loading/splash_p.png',
                   "loadingLandscape":'loading/splash_l.png',
                  
                    //WEB
                    // Backgrounds
                    //"mainPanel":'main_panel.png',
                    "bgMain": 'bg_main.png',
                    "bgFS": 'bg_fs.png',
                    "bgGsg": 'bg_gsg.png',
                    "bgSil": 'bg_sil.png',

                    // base game
                    "mainPanel": "baseGame/main_panel.png",
                    "bigMoneyTitle": "baseGame/bm_title.png",
                    "bigMoneyOutro": "baseGame/BM_outro.png",
                    
                    "bigWin": "baseGame/bw_m_bw.png",
                    "megaWin": "baseGame/bw_mega.png",
                    "bigWinShine": "baseGame/bw_shine.png",
                    "superWin": "baseGame/bw_super.png",
                    "cashWin": "baseGame/cashWin.png",

                    "gsgIntro": "baseGame/gsg_Intro.png",
                    "reelFrame": "baseGame/main_front.png",
                    "gameTitle1": "baseGame/title_l.png",
                    "gameTitle2": "baseGame/title_p.png",

                    // pots
                    "bronzePot": "baseGame/m_bronze.png",
                    "silverPot": "baseGame/m_silver.png",
                    "goldPot": "baseGame/m_gold.png",

                    "youWon": "baseGame/m_outro.png",
                    "reelShadow": "baseGame/reelShad.png",

                    "mSmall": "baseGame/m_small.png",
                    "mSpins": "baseGame/m_spins.png",
                    "mWinnings": "baseGame/m_winnings.png",
                    //"reelShadow": "baseGame/reelShad.png",

                    "spinButton": 'controlPanel/b_spin.png',
                    "autoButton": 'controlPanel/b_auto.png',
                    "gambleButton": 'controlPanel/b_gamble.png',
                    "spinButtonShadow": 'controlPanel/b_spinPanel.png',
                    "stakeButton": 'controlPanel/b_stake.png',
                    "turboButton": 'controlPanel/b_turbo.png',
                    "xPanel": 'controlPanel/b_xPanel.png',
                    "uiMenuButton": 'controlPanel/ui_b_menu.png',
                    "settingsButton": 'controlPanel/ui_b_settings.png',
                    "shareButton": 'controlPanel/ui_b_share.png',
                    "uiSound": 'controlPanel/ui_b_sound.png',
                    "barLow": 'controlPanel/ui_barLow.png',
                    "barTop": 'controlPanel/ui_barTop.png',

                    //winLines

                    "winBox": 'baseGame/winlines/win_box.png',
                    "winLineShort": 'baseGame/winlines/win_line0.png',
                    "winLineStraight": 'baseGame/winlines/win_line1.png',
                    "winLineDown": 'baseGame/winlines/win_line2.png',
                    "winLineUp": 'baseGame/winlines/win_line3.png',

                 
                    // WOF
                    "wof": 'bonus/wof/wof.png',
                    "wofFrame": 'bonus/wof/wof_frame.png',
                    "wof50": 'bonus/wof/wof_0050.png',
                    "wof100": 'bonus/wof/wof_0100.png',
                    "wof150": 'bonus/wof/wof_0150.png',
                    "wof200": 'bonus/wof/wof_0200.png',
                    "wof250": 'bonus/wof/wof_0250.png',
                    "wof300": 'bonus/wof/wof_0300.png',
                    "wof400": 'bonus/wof/wof_0400.png',
                    "wof500": 'bonus/wof/wof_0500.png',
                    "wof600": 'bonus/wof/wof_0600.png',
                    "wof700": 'bonus/wof/wof_0700.png',
                    "wof800": 'bonus/wof/wof_0800.png',
                    "wof1000": 'bonus/wof/wof_1000.png',
                    "wof1200": 'bonus/wof/wof_1200.png',
                    "wof1500": 'bonus/wof/wof_1500.png',
                    "wof2000": 'bonus/wof/wof_2000.png',
                    "wof2500": 'bonus/wof/wof_2500.png',
                    "wofMystery": 'bonus/wof/wof_mystery.png',

                    // WOF seg a
                    "wofSEGA": 'bonus/wof/wof_segA.png',
                    "wofSEGB": 'bonus/wof/wof_segB.png',
                    "wofSEGC": 'bonus/wof/wof_segC.png',
                    "wofSEGD": 'bonus/wof/wof_segD.png',
                    "wofSEGE": 'bonus/wof/wof_segE.png',
                    "wofSEGF": 'bonus/wof/wof_segF.png',
                    "wofSEGG": 'bonus/wof/wof_segG.png',
                    "wofSEGH": 'bonus/wof/wof_segH.png',
                    "wofPEGS": 'bonus/wof/wof_pegs.png',
                    "wofPEGSShadow": 'bonus/wof/wof_pegsShad.png',

                    "wofArrowTop": 'bonus/wof/wof_arrow_top.png',
                    "wofArrow": 'bonus/wof/wof_arrow.png',

                    "wofQuestion": 'bonus/wof/wof_segAQuestion.png',



   
                    //"reelFrame": 'bg_main.png',

                    // BAse Game
                },
                "atlasData": {
                    //"capguy":'capGuy.json',
                    //"title":'BaseGame/Animating/PixiTitleAnim.json',
                },
                "spines": {
                    "symbolRoyals": 'symbols/symbol_royals/s_royals.json',
                    "symbolWild": 'symbols/symbol_wild/s_wild.json',
                    "symbolWof": 'symbols/symbol_wof/s_WoF.json',
                    "symbolBig": 'symbols/symbol_big/s_big.json',
                    "winShine": 'symbols/winShine/winShine.json',
                    "spineBoy": 'spineBoy/spineboy.json',
                    "wofClicker": 'wof_clicker/wof_clicker.json',
                    "wofMysteryAdd": 'wof_mysteryAdd/wof_mysteryAdd.json',
                }
            },
            "symbolsConfig": {
                "symbolsData": {
                    "spines": ["symbolRoyals", "symbolWild", "symbolWof", "symbolBig"], // very important needs to be in correct order and the index has to be mentioned in the atlasId of appropriate symbols
                    "spinFadeAlpha": 0.2, // alpha during spin
                    "symbolWidth": 132,
                    "symbolHeight": 132,
                    // the below order of symbols, name and index number should match the order name and index from Init Reponse
                    "symbols": [
                        {
                            "wild": {
                                "name": "wild",
                                "index": 0,
                                "atlasId": 1,
                                "staticImg": "wild",
                                "moveAnimation": "wild_stop",
                                "winAnimation": "wild_win",
                                "landingAnimation": "wild_stop",
                                "playLandingAnimation":false,
                                "isWild": true,
                                "isBonus": false,
                                "fadeDuringSpin": false,
                            }
                        },
                        {
                            "star": {
                                "name": "star",
                                "index": 1,
                                "atlasId": 3,
                                "staticImg": "star",
                                "moveAnimation": "star_stop",
                                "winAnimation": "star_win",
                                "landingAnimation": "star_stop",
                                "playLandingAnimation":false,
                                "isWild": false,
                                "isBonus": false,
                                "fadeDuringSpin": true,
                            }
                        },
                        {
                            "teddy": {
                                "name": "teddy",
                                "index": 2,
                                "atlasId": 3,
                                "staticImg": "bear",
                                "moveAnimation": "bear_stop",
                                "winAnimation": "bear_win",
                                "landingAnimation": "bear_stop",
                                "playLandingAnimation":false,
                                "isWild": false,
                                "isBonus": false,
                                "fadeDuringSpin": true,
                            }
                        },
                        {
                            "ace": {
                                "name": "ace",
                                "index": 3,
                                "atlasId": 0,
                                "staticImg": "ace",
                                "moveAnimation": "ace_stop",
                                "winAnimation": "ace_win",
                                "landingAnimation": "ace_stop",
                                "playLandingAnimation":false,
                                "isWild": false,
                                "isBonus": false,
                                "fadeDuringSpin": true,
                            }
                        },
                        {
                            "king": {
                                "name": "king",
                                "index": 4,
                                "atlasId": 0,
                                "staticImg": "king",
                                "moveAnimation": "king_stop",
                                "winAnimation": "king_win",
                                "landingAnimation": "king_stop",
                                "playLandingAnimation":false,
                                "isWild": false,
                                "isBonus": false,
                                "fadeDuringSpin": true,

                            }
                        },
                        {
                            "ten": {
                                "name": "ten",
                                "index": 5,
                                "atlasId": 0,
                                "staticImg": "ten",
                                "moveAnimation": "ten_stop",
                                "winAnimation": "ten_win",
                                "landingAnimation": "ten_stop",
                                "playLandingAnimation":false,
                                "isWild": false,
                                "isBonus": false,
                                "fadeDuringSpin": true,
                            }
                        },
                        {
                            "jack": {
                                "name": "jack",
                                "index": 6,
                                "atlasId": 0,
                                "staticImg": "jack",
                                "moveAnimation": "jack_stop",
                                "winAnimation": "jack_win",
                                "landingAnimation": "jack_stop",
                                "playLandingAnimation":false,
                                "isWild": false,
                                "isBonus": false,
                                "fadeDuringSpin": true,
                            }
                        },
                        {
                            "queen": {
                                "name": "queen",
                                "index": 7,
                                "atlasId": 0,
                                "staticImg": "queen",
                                "moveAnimation": "queen_stop",
                                "winAnimation": "queen_win",
                                "landingAnimation": "queen_stop",
                                "playLandingAnimation":false,
                                "isWild": false,
                                "isBonus": false,
                                "fadeDuringSpin": true,
                            }
                        },
                        {
                            "bonus": {
                                "name": "bonus",
                                "index": 8,
                                "atlasId": 2,
                                "staticImg": "00_wof_static",
                                "moveAnimation": "00_wof_static",
                                "winAnimation": "01_wof_loop",
                                "landingAnimation": "01_wof_loop",
                                "playLandingAnimation":true,
                                "isWild": false,
                                "isBonus": true,
                                "fadeDuringSpin": false,
                            }
                        }
                    ]
                }
            },
            "winlinesManagerConfig":{
                "baseGameReelSet":{
                    "Id":"baseGameWinManager",
                    "maxWinboxesPerWinline":5,
                    "maxNumberOfWinlines":20,
                    "useOverlayWinSymbolAnimations":true,
                    "winlinesPatternDefinition":[
                        [0, 1, 2, 3, 4],
                        [15, 16, 17, 18, 19],
                        [5, 6, 7, 8, 9],
                        [10, 11, 12, 13, 14],
                        [0, 1, 2, 8, 14],
            
                        [15, 16, 17, 13, 9],
                        [15, 16, 12, 8, 4],
                        [0, 1, 7, 13, 19],
                        [5, 11, 12, 13, 19],
                        [10, 6, 7, 8, 4],
            
                        [5, 11, 17, 13, 9],
                        [10, 6, 2, 8, 14],
                        [5, 1, 2, 3, 9],
                        [10, 16, 17, 18, 9],
                        [5, 6, 12, 18, 19],
            
                        [10, 11, 7, 3, 4],
                        [0, 6, 12, 18, 14],
                        [15, 11, 7, 3, 9],
                        [0, 6, 7, 8, 4],
                        [15, 11, 12, 13, 19]
    
                    ],
                    "winboxGraphics":[
                        "winBox0",
                        "winBox1",
                        "winBox2",
                        "winBox3",
                        "winBox4"
                    ],
                    "winlinesGraphics":[
                        "winline0",
                        "winline1",
                        "winline2",
                        "winline3",
                        "winline4",
                        "winline5",
                        "winline6",
                        "winline7",
                        "winline8",
                        "winline9",
                        "winline10",
                        "winline11",
                        "winline12",
                        "winline13",
                        "winline14",
                        "winline15",
                        "winline16",
                        "winline17",
                        "winline18",
                        "winline19"
                    ]
                }
        
            },
            "reelsetConfig": {
                x: 0,
                y: 0,
                "reelsetWidth": 1600,
                "reelsetHeight": 920,
                //"backgroundColor":null, //0x1099bb
                "numberOfReels": 5,
                "defaultStopPositions": [6, 5, 5, 5, 5],
                "reelStopOrder": [0, 1, 2, 3, 4],
                //"reelStopOrder": [4, 3, 2, 1, 0],
                "reelStartOrder": [0, 1, 2, 3, 4],
                //"reelStartOrder": [4, 3, 2, 1, 0],
                "interReelSpinDelay": [0, 100, 200, 300, 400],
                "interReelStopDelay": [0, 0, 0, 0, 0],
                "minimumSpinTime":800,
                "spaghettiDuration":2000,
                "interWinlineDelay":1000,
                "showWinlinesSpaghetti":true,
                "spaghettiCountupDuration":1000,
                "showWinlines":true,
                "showWinBoxes":true,
                "numberOfRowsOnTop": 2,
                "numberOfRowsAtBottom": 2,
                "numberOfRowsInView": 4,
                "id": "mainReelset",
                "reelsXPos": [411, 641, 872, 1103, 1333],
                "reelsYPos": [300, 300, 300, 300, 300],
                "offsetX": [0, 0, 0, 0, 0],
                "offsetY": [5, 5, 5, 5, 5],
                "stopPositionOffset": 0, // this can be used to fudge the reel Stop Position
                "debugMode": false,
                "reelConfigData": {
                    
                    "reelWidth": 206,
                    "reelHeight": 875,
                    "symbolWidth": 206,
                    "symbolHeight": 170,
                    "symbolsOffsetX": 0, // to adjust / nudge the reels without affecting anyother alignemnt
                    "symbolsOffsetY": -420, // to adjust / nudge the reels without affecting anyother alignemnt
                    "maskData": { "x": -138, "y": -160, "width": 280, "height": 680 }, // Aperture view size relative to each reel
                    "spacingBetweenSymbols": 0, // Space between symbols
                    "backgroundFillColor": "0x000000", // fill color for the Reels background
                    "backgroundX": -50,// to adjust the fill for the reels,
                    "backgroundY": -125, // to adjust the fill for the reels,

                    "maxReelSpinSpeed": 50, // max Reel Spin Speed, this can be the same as spin speed
                    "spinSpeed": 50, // reelspin speed

                    "enableSlowStartReel": true, // enable or disable the accleration at the start of the spin
                    "enableBounceAtStart": true,// enableSlowStartReel should be true to have a bounce at the start
                    "reelStartEasingDuration": 1, // duration to accelerate
                    "reelStartEaseFunction": Back.easeIn.config(1.2), // ramp start setting

                    "reelStopEasingDuration": 3, // number of seconds the ease to happen - longer the duration is need to add more extra symbols. Recommended to adjust/play through  myReelSet.setReelSlowDownByReel(4, true, 1, 5); 
                    "targetStopSpeed": 5, // least speed that reel can spin during the slow down. when reel comes to complete slow down theis denotes the target speed. Recommended to adjust/play through  myReelSet.setReelSlowDownByReel(4, true, 1, 5); 
                    "enableBounceAtStop": true, // enables the bounce at stop
                    "stopBounceDistance": 30, // distance to bounce at stop

                    //"debugMode":true // Draws  the fill for the reels and reelsets. This can be used to setup the reels Aperture view size relative to each reel

                },
                "lom": {
                    "landscape": {
                        x: 92,
                        y: 102,
                      
                    },
                    "portrait": {
                        'x': 58,
                        'y': 347,
                        
                    }
                },
            },
            "render": {
                "gameContainer": {
                    "slotScreen":{
                        "backGround": {
                            "type": "ImageDisplay",
                            "id": "baseGameBG",
                            x: 0,
                            y: 0,
                            'assets': ["bgMain"],
                            "lom": {
                                "landscape": {
                                    x: 0,
                                    y: 0,
                                    'scale':1
                                },
                                "portrait": {
                                    'x': 0,
                                    'y': 0,
                                    'scale': 1
                                }
                            },
                        },
                        "wheelBonus":{
                            "type":"DisplayObject",
                            "x": 962,
                            "y": 1201,                            
                            "pivot":[1098, 1098],
                            "lom": {
                                "landscape": {
                                    x: 962,
                                    y: 1201,
                                    "scale": 1,
                                    
                                    
                                },
                                "portrait": {
                                    'x':543,
                                    'y': 794,
                                    "scale": 0.5,
                                }
                            },
                            "children":{
                                "wheelBG": {
                                    "type": "ImageDisplay",
                                    "id": "wheelBG",
                                    x: 0,
                                    y: 0,
                                    'assets': ["wof"],
                                    "lom": {
                                        "landscape": {
                                            x: 0,
                                            y: 0,
                                            
                                        },
                                        "portrait": {
                                            'x': 0,
                                            'y': 0,
                                           
                                            
                                        }
                                    },
                                },
                                "wheelvalues": {
                                    "type":"DisplayObject",
                                    "id": "wheelvalues",
                                    x: 0,
                                    y: 0,
                                    "children":{
                                        "wofSeg1":{
                                            "type":"DisplayObject",
                                            "id": "wofSeg1",
                                            x: 1098,
                                            y: 1084,
                                            rotation:0,
                                            //anchor:[158, 503],
                                            pivot:[158, 1007],
                                            "children":{
                                                "wofSEG1BG1":{
                                                    
                                                    "id": "wofSEG1BG1",
                                                    "type": "SuperDisplayObject",
                                                    x: 0,
                                                    y: 0,
                                                    "currentFrameIndex":1,
                                                    "frames":[
                                                        {"type":"ImageDisplay", "asset":"wofSEGA"}, 
                                                        {"type":"ImageDisplay", "asset":"wofQuestion"}, 
                                                        
                                                    ],
                                                    "lom": {
                                                        "landscape": {
                                                            x: 0,
                                                            y: 0,
                                                            anchor:[158, 503],
                                                            
                                                        },
                                                        "portrait": {
                                                            'x': 0,
                                                            'y': 0,
                                                            anchor:[158, 503],                                                        
                                                            
                                                        },
                                                    },
                                                    "children":{
                                                        "wofSEG1value":{
                                                            "type": "ImageDisplay",
                                                            "id": "wofSEG1value",
                                                            x: 64,
                                                            y: 78,
                                                            'assets': ["wof50"],
                                                            "lom": {
                                                                "landscape": {
                                                                    x: 64,
                                                                    y: 78,
                                                                    
                                                                },
                                                                "portrait": {
                                                                    'x': 64,
                                                                    'y': 78,
                                                                
                                                                }
                                                            },
                                                        },
                                                        
                                                    },

                                                },
                                               
                                            }

                                        },
                                        "wofSeg2":{
                                            "type":"DisplayObject",
                                            "id": "wofSeg2",
                                            x: 1098,
                                            y: 1084,
                                            rotation:0.32,
                                            //anchor:[158, 503],
                                            pivot:[158, 1007],
                                            "children":{
                                                "wofSEG2BG1":{
                                                   "type": "SuperDisplayObject",
                                                    x: 0,
                                                    y: 0,
                                                    "currentFrameIndex":1,
                                                    "frames":[
                                                        {"type":"ImageDisplay", "asset":"wofSEGB"}, 
                                                        {"type":"ImageDisplay", "asset":"wofQuestion"}, 
                                                        
                                                    ],
                                                    "lom": {
                                                        "landscape": {
                                                            x: 0,
                                                            y: 0,
                                                            anchor:[158, 503],
                                                            
                                                        },
                                                        "portrait": {
                                                            'x': 0,
                                                            'y': 0,
                                                            anchor:[158, 503],                                                        
                                                            
                                                        },
                                                    },
                                                    "children":{
                                                        "wofSEG2value":{
                                                            "type": "ImageDisplay",
                                                            "id": "wofSEG2value",
                                                            x: 64,
                                                            y: 78,
                                                            'assets': ["wof1000"],
                                                            "lom": {
                                                                "landscape": {
                                                                    x: 64,
                                                                    y: 78,
                                                                    
                                                                },
                                                                "portrait": {
                                                                    'x': 64,
                                                                    'y': 78,
                                                                
                                                                }
                                                            },
                                                        },
                                                        
                                                    },

                                                },
                                               
                                            }

                                        },
                                        "wofSeg3":{
                                            "type":"DisplayObject",
                                            "id": "wofSeg3",
                                            x: 1098,
                                            y: 1084,
                                            rotation:0.64,
                                            //anchor:[158, 503],
                                            pivot:[158, 1007],
                                            "children":{
                                                "wofSEG3BG1":{
                                                  
                                                    "id": "wofSEG3BG1",
                                                    "type": "SuperDisplayObject",
                                                    "x": 0,
                                                    "y": 0,
                                                    "currentFrameIndex":1,
                                                    "frames":[
                                                        {"type":"ImageDisplay", "asset":"wofSEGC"}, 
                                                        {"type":"ImageDisplay", "asset":"wofQuestion"}, 
                                                        
                                                    ],
                                                    "lom": {
                                                        "landscape": {
                                                            x: 0,
                                                            y: 0,
                                                            anchor:[158, 503],
                                                            
                                                        },
                                                        "portrait": {
                                                            'x': 0,
                                                            'y': 0,
                                                            anchor:[158, 503],                                                        
                                                            
                                                        },
                                                    },
                                                    "children":{
                                                        "wofSEG3value":{
                                                            "type": "ImageDisplay",
                                                            "id": "wofSEG3value",
                                                            x: 64,
                                                            y: 78,
                                                            'assets': ["wof200"],
                                                            "lom": {
                                                                "landscape": {
                                                                    x: 64,
                                                                    y: 78,
                                                                    
                                                                },
                                                                "portrait": {
                                                                    'x': 64,
                                                                    'y': 78,
                                                                
                                                                }
                                                            },
                                                        },
                                                        
                                                    },

                                                },
                                               
                                            }

                                        },
                                        "wofSeg4":{
                                            "type":"DisplayObject",
                                            "id": "wofSeg4",
                                            x: 1098,
                                            y: 1084,
                                            rotation:0.96,
                                            //anchor:[158, 503],
                                            pivot:[158, 1007],
                                            "children":{
                                                "wofSEG4BG1":{
                                                    
                                                    "id": "wofSEG4BG1",                                                   
                                                    "type": "SuperDisplayObject",
                                                    x: 0,
                                                    y: 0,
                                                    "currentFrameIndex":1,
                                                    "frames":[
                                                        {"type":"ImageDisplay", "asset":"wofSEGA"}, 
                                                        {"type":"ImageDisplay", "asset":"wofQuestion"}, 
                                                        
                                                    ],
                                                    "lom": {
                                                        "landscape": {
                                                            x: 0,
                                                            y: 0,
                                                            anchor:[158, 503],
                                                            
                                                        },
                                                        "portrait": {
                                                            'x': 0,
                                                            'y': 0,
                                                            anchor:[158, 503],                                                        
                                                            
                                                        },
                                                    },
                                                    "children":{
                                                        "wofSEG4value":{
                                                            "type": "ImageDisplay",
                                                            "id": "wofSEG4value",
                                                            x: 64,
                                                            y: 78,
                                                            'assets': ["wof500"],
                                                            "lom": {
                                                                "landscape": {
                                                                    x: 64,
                                                                    y: 78,
                                                                    
                                                                },
                                                                "portrait": {
                                                                    'x': 64,
                                                                    'y': 78,
                                                                
                                                                }
                                                            },
                                                        },
                                                        
                                                    },

                                                },
                                               
                                            }

                                        },
                                        "wofSeg5":{
                                            "type":"DisplayObject",
                                            "id": "wofSeg5",
                                            x: 1098,
                                            y: 1084,
                                            rotation:1.28,
                                            //anchor:[158, 503],
                                            pivot:[158, 1007],
                                            "children":{
                                                "wofSEG5BG1":{
                                                    "type": "SuperDisplayObject",
                                                    x: 0,
                                                    y: 0,
                                                    "currentFrameIndex":1,
                                                    "frames":[
                                                        {"type":"ImageDisplay", "asset":"wofSEGD"}, 
                                                        {"type":"ImageDisplay", "asset":"wofQuestion"}, 
                                                        
                                                    ],
                                                    "lom": {
                                                        "landscape": {
                                                            x: 0,
                                                            y: 0,
                                                            anchor:[158, 503],
                                                            
                                                        },
                                                        "portrait": {
                                                            'x': 0,
                                                            'y': 0,
                                                            anchor:[158, 503],                                                        
                                                            
                                                        },
                                                    },
                                                    "children":{
                                                        "wofSEG5value":{
                                                            "type": "ImageDisplay",
                                                            "id": "wofSEG5value",
                                                            x: 64,
                                                            y: 78,
                                                            'assets': ["wof150"],
                                                            "lom": {
                                                                "landscape": {
                                                                    x: 64,
                                                                    y: 78,
                                                                    
                                                                },
                                                                "portrait": {
                                                                    'x': 64,
                                                                    'y': 78,
                                                                
                                                                }
                                                            },
                                                        },
                                                        
                                                    },

                                                },
                                               
                                            }

                                        },
                                        "wofSeg6":{
                                            "type":"DisplayObject",
                                            "id": "wofSeg6",
                                            x: 1098,
                                            y: 1084,
                                            rotation:1.58,
                                            //anchor:[158, 503],
                                            pivot:[158, 1007],
                                            "children":{
                                                "wofSEG6BG1":{
                                                    "type": "SuperDisplayObject",
                                                    x: 0,
                                                    y: 0,
                                                    "currentFrameIndex":1,
                                                    "frames":[
                                                        {"type":"ImageDisplay", "asset":"wofSEGE"}, 
                                                        {"type":"ImageDisplay", "asset":"wofQuestion"}, 
                                                        
                                                    ],
                                                    "lom": {
                                                        "landscape": {
                                                            x: 0,
                                                            y: 0,
                                                            anchor:[158, 503],
                                                            
                                                        },
                                                        "portrait": {
                                                            'x': 0,
                                                            'y': 0,
                                                            anchor:[158, 503],                                                        
                                                            
                                                        },
                                                    },
                                                    "children":{
                                                        "wofSEG6value":{
                                                            "type": "ImageDisplay",
                                                            "id": "wofSEG6value",
                                                            x: 64,
                                                            y: 78,
                                                            'assets': ["wof400"],
                                                            "lom": {
                                                                "landscape": {
                                                                    x: 64,
                                                                    y: 78,
                                                                    
                                                                },
                                                                "portrait": {
                                                                    'x': 64,
                                                                    'y': 78,
                                                                
                                                                }
                                                            },
                                                        },
                                                        
                                                    },

                                                },
                                               
                                            }

                                        },
                                        "wofSeg7":{
                                            "type":"DisplayObject",
                                            "id": "wofSeg7",
                                            x: 1098,
                                            y: 1084,
                                            rotation:1.9,
                                            //anchor:[158, 503],
                                            pivot:[158, 1007],
                                            "children":{
                                                "wofSEG7BG1":{
                                                    "type": "SuperDisplayObject",
                                                    x: 0,
                                                    y: 0,
                                                    "currentFrameIndex":1,
                                                    "frames":[
                                                        {"type":"ImageDisplay", "asset":"wofSEGF"}, 
                                                        {"type":"ImageDisplay", "asset":"wofQuestion"}, 
                                                        
                                                    ],
                                                    "lom": {
                                                        "landscape": {
                                                            x: 0,
                                                            y: 0,
                                                            anchor:[158, 503],
                                                            
                                                        },
                                                        "portrait": {
                                                            'x': 0,
                                                            'y': 0,
                                                            anchor:[158, 503],                                                        
                                                            
                                                        },
                                                    },
                                                    "children":{
                                                        "wofSEG7value":{
                                                            "type": "ImageDisplay",
                                                            "id": "wofSEG7value",
                                                            x: 64,
                                                            y: 78,
                                                            'assets': ["wof700"],
                                                            "lom": {
                                                                "landscape": {
                                                                    x: 64,
                                                                    y: 78,
                                                                    
                                                                },
                                                                "portrait": {
                                                                    'x': 64,
                                                                    'y': 78,
                                                                
                                                                }
                                                            },
                                                        },
                                                        
                                                    },

                                                },
                                               
                                            }

                                        },
                                        "wofSeg8":{
                                            "type":"DisplayObject",
                                            "id": "wofSeg8",
                                            x: 1121,
                                            y: 1105,
                                            rotation:2.21,
                                            //anchor:[158, 503],
                                            pivot:[158, 1007],
                                            "children":{
                                                "wofSEG8BG1":{
                                                    "type": "SuperDisplayObject",
                                                    x: 0,
                                                    y: 0,
                                                    "currentFrameIndex":1,
                                                    "frames":[
                                                        {"type":"ImageDisplay", "asset":"wofSEGD"}, 
                                                        {"type":"ImageDisplay", "asset":"wofQuestion"}, 
                                                        
                                                    ],
                                                    "lom": {
                                                        "landscape": {
                                                            x: 0,
                                                            y: 0,
                                                            anchor:[158, 503],
                                                            
                                                        },
                                                        "portrait": {
                                                            'x': 0,
                                                            'y': 0,
                                                            anchor:[158, 503],                                                        
                                                            
                                                        },
                                                    },
                                                    "children":{
                                                        "wofSEG8value":{
                                                            "type": "ImageDisplay",
                                                            "id": "wofSEG8value",
                                                            x: 64,
                                                            y: 78,
                                                            'assets': ["wof100"],
                                                            "lom": {
                                                                "landscape": {
                                                                    x: 64,
                                                                    y: 78,
                                                                    
                                                                },
                                                                "portrait": {
                                                                    'x': 64,
                                                                    'y': 78,
                                                                
                                                                }
                                                            },
                                                        },
                                                        
                                                    },

                                                },
                                               
                                            }

                                        },
                                        "wofSeg9":{
                                            "type":"DisplayObject",
                                            "id": "wofSeg9",
                                            x: 1116,
                                            y: 1115,
                                            rotation:2.52,
                                            //anchor:[158, 503],
                                            pivot:[158, 1007],
                                            "children":{
                                                "wofSEG9BG1":{
                                                    "type": "SuperDisplayObject",
                                                    x: 0,
                                                    y: 0,
                                                    "currentFrameIndex":1,
                                                    "frames":[
                                                        {"type":"ImageDisplay", "asset":"wofSEGF"}, 
                                                        {"type":"ImageDisplay", "asset":"wofQuestion"}, 
                                                        
                                                    ],
                                                    "lom": {
                                                        "landscape": {
                                                            x: 0,
                                                            y: 0,
                                                            anchor:[158, 503],
                                                            
                                                        },
                                                        "portrait": {
                                                            'x': 0,
                                                            'y': 0,
                                                            anchor:[158, 503],                                                        
                                                            
                                                        },
                                                    },
                                                    "children":{
                                                        "wofSEG9value":{
                                                            "type": "ImageDisplay",
                                                            "id": "wofSEG9value",
                                                            x: 64,
                                                            y: 78,
                                                            'assets': ["wof1500"],
                                                            "lom": {
                                                                "landscape": {
                                                                    x: 64,
                                                                    y: 78,
                                                                    
                                                                },
                                                                "portrait": {
                                                                    'x': 64,
                                                                    'y': 78,
                                                                
                                                                }
                                                            },
                                                        },
                                                        
                                                    },

                                                },
                                               
                                            }

                                        },
                                        "wofSeg10":{
                                            "type":"DisplayObject",
                                            "id": "wofSeg10",
                                            x: 1109,
                                            y: 1120,
                                            rotation:2.83,
                                            //anchor:[158, 503],
                                            pivot:[158, 1007],
                                            "children":{
                                                "wofSEG10BG1":{
                                                    "type": "SuperDisplayObject",
                                                    x: 0,
                                                    y: 0,
                                                    "currentFrameIndex":1,
                                                    "frames":[
                                                        {"type":"ImageDisplay", "asset":"wofSEGC"}, 
                                                        {"type":"ImageDisplay", "asset":"wofQuestion"}, 
                                                        
                                                    ],
                                                    "lom": {
                                                        "landscape": {
                                                            x: 0,
                                                            y: 0,
                                                            anchor:[158, 503],
                                                            
                                                        },
                                                        "portrait": {
                                                            'x': 0,
                                                            'y': 0,
                                                            anchor:[158, 503],                                                        
                                                            
                                                        },
                                                    },
                                                    "children":{
                                                        "wofSEG10value":{
                                                            "type": "ImageDisplay",
                                                            "id": "wofSEG10value",
                                                            x: 64,
                                                            y: 78,
                                                            'assets': ["wof300"],
                                                            "lom": {
                                                                "landscape": {
                                                                    x: 64,
                                                                    y: 78,
                                                                    
                                                                },
                                                                "portrait": {
                                                                    'x': 64,
                                                                    'y': 78,
                                                                
                                                                }
                                                            },
                                                        },
                                                        
                                                    },

                                                },
                                               
                                            }

                                        },
                                        "wofSeg11":{
                                            "type":"DisplayObject",
                                            "id": "wofSeg11",
                                            x: 1109,
                                            y: 1120,
                                            rotation:3.154,
                                            //anchor:[158, 503],
                                            pivot:[158, 1007],
                                            "children":{
                                                "wofSEG11BG1":{
                                                    "id": "wofSEG11BG1",
                                                    "type": "SuperDisplayObject",
                                                    "x": 0,
                                                    "y": 0,
                                                    "currentFrameIndex":1,
                                                    "frames":[
                                                        {"type":"ImageDisplay", "asset":"wofSEGA"}, 
                                                        {"type":"ImageDisplay", "asset":"wofQuestion"}, 
                                                        
                                                    ],
                                                    "lom": {
                                                        "landscape": {
                                                            x: 0,
                                                            y: 0,
                                                            anchor:[158, 503],
                                                            
                                                        },
                                                        "portrait": {
                                                            'x': 0,
                                                            'y': 0,
                                                            anchor:[158, 503],                                                        
                                                            
                                                        },
                                                    },
                                                    "children":{                                                 
                                                 
                                                        "wofSEG11value":{
                                                            "type": "ImageDisplay",
                                                            "id": "wofSEG1value",
                                                            x: 64,
                                                            y: 78,
                                                            'assets': ["wof50"],
                                                            "lom": {
                                                                "landscape": {
                                                                    x: 64,
                                                                    y: 78,
                                                                    
                                                                },
                                                                "portrait": {
                                                                    'x': 64,
                                                                    'y': 78,
                                                                
                                                                }
                                                            },
                                                        },
                                                        
                                                    },

                                                },
                                               
                                            }

                                        },
                                        "wofSeg12":{
                                            "type":"DisplayObject",
                                            "id": "wofSeg12",
                                            x: 1097,
                                            y: 1120,
                                            rotation:3.46,
                                            //anchor:[158, 503],
                                            pivot:[158, 1007],
                                            "children":{
                                                "wofSEG12BG1":{
                                                    "type": "SuperDisplayObject",
                                                    x: 0,
                                                    y: 0,
                                                    "currentFrameIndex":1,
                                                    "frames":[
                                                        {"type":"ImageDisplay", "asset":"wofSEGH"}, 
                                                        {"type":"ImageDisplay", "asset":"wofQuestion"}, 
                                                        
                                                    ],
                                                    "lom": {
                                                        "landscape": {
                                                            x: 0,
                                                            y: 0,
                                                            anchor:[158, 503],
                                                            
                                                        },
                                                        "portrait": {
                                                            'x': 0,
                                                            'y': 0,
                                                            anchor:[158, 503],                                                        
                                                            
                                                        },
                                                    },
                                                    "children":{
                                                        "wofSEG12value":{
                                                            "type": "ImageDisplay",
                                                            "id": "wofSEG12value",
                                                            x: 64,
                                                            y: 78,
                                                            'assets': ["wof2500"],
                                                            "lom": {
                                                                "landscape": {
                                                                    x: 64,
                                                                    y: 78,
                                                                    
                                                                },
                                                                "portrait": {
                                                                    'x': 64,
                                                                    'y': 78,
                                                                
                                                                }
                                                            },
                                                        },
                                                        
                                                    },

                                                },
                                               
                                            }

                                        },
                                        "wofSeg13":{
                                            "type":"DisplayObject",
                                            "id": "wofSeg13",
                                            x: 1089,
                                            y: 1112,
                                            rotation:3.77,
                                            //anchor:[158, 503],
                                            pivot:[158, 1007],
                                            "children":{
                                                "wofSEG13BG1":{
                                                    "type": "SuperDisplayObject",
                                                    x: 0,
                                                    y: 0,
                                                    "currentFrameIndex":1,
                                                    "frames":[
                                                        {"type":"ImageDisplay", "asset":"wofSEGC"}, 
                                                        {"type":"ImageDisplay", "asset":"wofQuestion"}, 
                                                        
                                                    ],
                                                    "lom": {
                                                        "landscape": {
                                                            x: 0,
                                                            y: 0,
                                                            anchor:[158, 503],
                                                            
                                                        },
                                                        "portrait": {
                                                            'x': 0,
                                                            'y': 0,
                                                            anchor:[158, 503],                                                        
                                                            
                                                        },
                                                    },
                                                    "children":{
                                                        "wofSEG13value":{
                                                            "type": "ImageDisplay",
                                                            "id": "wofSEG13value",
                                                            x: 64,
                                                            y: 78,
                                                            'assets': ["wof200"],
                                                            "lom": {
                                                                "landscape": {
                                                                    x: 64,
                                                                    y: 78,
                                                                    
                                                                },
                                                                "portrait": {
                                                                    'x': 64,
                                                                    'y': 78,
                                                                
                                                                }
                                                            },
                                                        },
                                                        
                                                    },

                                                },
                                               
                                            }

                                        },
                                        "wofSeg14":{
                                            "type":"DisplayObject",
                                            "id": "wofSeg14",
                                            x: 1084,
                                            y: 1104,
                                            rotation:4.08,
                                            //anchor:[158, 503],
                                            pivot:[158, 1007],
                                            "children":{
                                                "wofSEG14BG1":{
                                                    
                                                    "id": "wofSEG14BG1",
                                                    "type": "SuperDisplayObject",
                                                    x: 0,
                                                    y: 0,
                                                    "currentFrameIndex":1,
                                                    "frames":[
                                                        {"type":"ImageDisplay", "asset":"wofSEGH"}, 
                                                        {"type":"ImageDisplay", "asset":"wofQuestion"}, 
                                                        
                                                    ],
                                                    "lom": {
                                                        "landscape": {
                                                            x: 0,
                                                            y: 0,
                                                            anchor:[158, 503],
                                                            
                                                        },
                                                        "portrait": {
                                                            'x': 0,
                                                            'y': 0,
                                                            anchor:[158, 503],                                                        
                                                            
                                                        },
                                                    },
                                                    "children":{
                                                        "wofSEG14value":{
                                                            "type": "ImageDisplay",
                                                            "id": "wofSEG15value",
                                                            x: 64,
                                                            y: 78,
                                                            'assets': ["wof800"],
                                                            "lom": {
                                                                "landscape": {
                                                                    x: 64,
                                                                    y: 78,
                                                                    
                                                                },
                                                                "portrait": {
                                                                    'x': 64,
                                                                    'y': 78,
                                                                
                                                                }
                                                            },
                                                        },
                                                        
                                                    },

                                                },
                                               
                                            }

                                        },
                                        "wofSeg15":{
                                            "type":"DisplayObject",
                                            "id": "wofSeg15",
                                            x: 1084,
                                            y: 1104,
                                            rotation:4.405,
                                            //anchor:[158, 503],
                                            pivot:[158, 1007],
                                            "children":{
                                                "wofSEG15BG1":{
                                                   
                                                    "id": "wofSEG15BG1",
                                                    "type": "SuperDisplayObject",
                                                    x: 0,
                                                    y: 0,
                                                    "currentFrameIndex":1,
                                                    "frames":[
                                                        {"type":"ImageDisplay", "asset":"wofSEGE"}, 
                                                        {"type":"ImageDisplay", "asset":"wofQuestion"}, 
                                                        
                                                    ],
                                                    "lom": {
                                                        "landscape": {
                                                            x: 0,
                                                            y: 0,
                                                            anchor:[158, 503],
                                                            
                                                        },
                                                        "portrait": {
                                                            'x': 0,
                                                            'y': 0,
                                                            anchor:[158, 503],                                                        
                                                            
                                                        },
                                                    },
                                                    "children":{
                                                        "wofSEG15value":{
                                                            "type": "ImageDisplay",
                                                            "id": "wofSEG15value",
                                                            x: 64,
                                                            y: 78,
                                                            'assets': ["wof250"],
                                                            "lom": {
                                                                "landscape": {
                                                                    x: 64,
                                                                    y: 78,
                                                                    
                                                                },
                                                                "portrait": {
                                                                    'x': 64,
                                                                    'y': 78,
                                                                
                                                                }
                                                            },
                                                        },
                                                        
                                                    },

                                                },
                                               
                                            }

                                        },
                                        "wofSeg16":{
                                            "type":"DisplayObject",
                                            "id": "wofSeg16",
                                            x: 1084,
                                            y: 1104,
                                            rotation:4.728,
                                            //anchor:[158, 503],
                                            pivot:[158, 1007],
                                            "children":{
                                                "wofSEG16BG1":{
                                                    
                                                    "id": "wofSEG16BG1",
                                                    "type": "SuperDisplayObject",
                                                    x: 0,
                                                    y: 0,
                                                    "currentFrameIndex":1,
                                                    "frames":[
                                                        {"type":"ImageDisplay", "asset":"wofSEGD"}, 
                                                        {"type":"ImageDisplay", "asset":"wofQuestion"}, 
                                                        
                                                    ],
                                                    "lom": {
                                                        "landscape": {
                                                            x: 0,
                                                            y: 0,
                                                            anchor:[158, 503],
                                                            
                                                        },
                                                        "portrait": {
                                                            'x': 0,
                                                            'y': 0,
                                                            anchor:[158, 503],                                                        
                                                            
                                                        },
                                                    },
                                                    "children":{
                                                        "wofSEG16value":{
                                                            "type": "ImageDisplay",
                                                            "id": "wofSEG16value",
                                                            x: 64,
                                                            y: 78,
                                                            'assets': ["wof400"],
                                                            "lom": {
                                                                "landscape": {
                                                                    x: 64,
                                                                    y: 78,
                                                                    
                                                                },
                                                                "portrait": {
                                                                    'x': 64,
                                                                    'y': 78,
                                                                
                                                                }
                                                            },
                                                        },
                                                        
                                                    },

                                                },
                                               
                                            }

                                        },
                                        "wofSeg17":{
                                            "type":"DisplayObject",
                                            "id": "wofSeg17",
                                            x: 1075,
                                            y: 1106,
                                            rotation:5.05,
                                            //anchor:[158, 503],
                                            pivot:[158, 1007],
                                            "children":{
                                                "wofSEG17BG1":{
                                                    "id": "wofSEG17BG1",
                                                    "type": "SuperDisplayObject",
                                                    x: 0,
                                                    y: 0,
                                                    "currentFrameIndex":1,
                                                    "frames":[
                                                        {"type":"ImageDisplay", "asset":"wofSEGE"}, 
                                                        {"type":"ImageDisplay", "asset":"wofQuestion"}, 
                                                        
                                                    ],
                                                    "lom": {
                                                        "landscape": {
                                                            x: 0,
                                                            y: 0,
                                                            anchor:[158, 503],
                                                            
                                                        },
                                                        "portrait": {
                                                            'x': 0,
                                                            'y': 0,
                                                            anchor:[158, 503],                                                        
                                                            
                                                        },
                                                    },
                                                    "children":{
                                                        "wofSEG17value":{
                                                            "type": "ImageDisplay",
                                                            "id": "wofSEG17value",
                                                            x: 64,
                                                            y: 78,
                                                            'assets': ["wof1200"],
                                                            "lom": {
                                                                "landscape": {
                                                                    x: 64,
                                                                    y: 78,
                                                                    
                                                                },
                                                                "portrait": {
                                                                    'x': 64,
                                                                    'y': 78,
                                                                
                                                                }
                                                            },
                                                        },
                                                        
                                                    },

                                                },
                                               
                                            }

                                        },
                                        "wofSeg18":{
                                            "type":"DisplayObject",
                                            "id": "wofSeg18",
                                            x: 1097,
                                            y: 1085,
                                            rotation:5.96,
                                            //anchor:[158, 503],
                                            pivot:[158, 1007],
                                            "children":{
                                                "wofSEG18BG1":{
                                                    
                                                    "id": "wofSEG18BG1",
                                                    "type": "SuperDisplayObject",
                                                    x: 0,
                                                    y: 0,
                                                    "currentFrameIndex":1,
                                                    "frames":[
                                                        {"type":"ImageDisplay", "asset":"wofSEGH"}, 
                                                        {"type":"ImageDisplay", "asset":"wofQuestion"}, 
                                                        
                                                    ],
                                                    "lom": {
                                                        "landscape": {
                                                            x: 0,
                                                            y: 0,
                                                            anchor:[158, 503],
                                                            
                                                        },
                                                        "portrait": {
                                                            'x': 0,
                                                            'y': 0,
                                                            anchor:[158, 503],                                                        
                                                            
                                                        },
                                                    },
                                                    "children":{
                                                        "wofSEG18value":{
                                                            "type": "ImageDisplay",
                                                            "id": "wofSEG18value",
                                                            x: 64,
                                                            y: 78,
                                                            'assets': ["wof600"],
                                                            "lom": {
                                                                "landscape": {
                                                                    x: 64,
                                                                    y: 78,
                                                                    
                                                                },
                                                                "portrait": {
                                                                    'x': 64,
                                                                    'y': 78,
                                                                
                                                                }
                                                            },
                                                        },
                                                        
                                                    },

                                                },
                                               
                                            }

                                        },
                                        "wofSeg19":{
                                            "type":"DisplayObject",
                                            "id": "wofSeg19",
                                            x: 1086,
                                            y: 1094,
                                            rotation:5.35,
                                            //anchor:[158, 503],
                                            pivot:[158, 1007],
                                            "children":{
                                                "wofSEG19BG1":{
                                                    
                                                    "id": "wofSEG19BG1",
                                                    "type": "SuperDisplayObject",
                                                    x: 0,
                                                    y: 0,
                                                    "currentFrameIndex":1,
                                                    "frames":[
                                                        {"type":"ImageDisplay", "asset":"wofSEGF"}, 
                                                        {"type":"ImageDisplay", "asset":"wofQuestion"}, 
                                                        
                                                    ],
                                                    "lom": {
                                                        "landscape": {
                                                            x: 0,
                                                            y: 0,
                                                            anchor:[158, 503],
                                                            
                                                        },
                                                        "portrait": {
                                                            'x': 0,
                                                            'y': 0,
                                                            anchor:[158, 503],                                                        
                                                            
                                                        },
                                                    },
                                                    "children":{
                                                        "wofSEG19value":{
                                                            "type": "ImageDisplay",
                                                            "id": "wofSEG19value",
                                                            x: 64,
                                                            y: 78,
                                                            'assets': ["wof100"],
                                                            "lom": {
                                                                "landscape": {
                                                                    x: 64,
                                                                    y: 78,
                                                                    
                                                                },
                                                                "portrait": {
                                                                    'x': 64,
                                                                    'y': 78,
                                                                
                                                                }
                                                            },
                                                        },
                                                        
                                                    },

                                                },
                                               
                                            }

                                        },
                                        "wofSeg20":{
                                            "type":"DisplayObject",
                                            "id": "wofSeg20",
                                            x: 1082,
                                            y: 1092,
                                            rotation:5.67,
                                            //anchor:[158, 503],
                                            pivot:[158, 1007],
                                            "children":{
                                                "wofSEG20BG1":{
                                                    
                                                    "id": "wofSEG20BG1",                                       
                                                    "type": "SuperDisplayObject",
                                                    x: 0,
                                                    y: 0,
                                                    "currentFrameIndex":1,
                                                    "frames":[
                                                        {"type":"ImageDisplay", "asset":"wofSEGE"}, 
                                                        {"type":"ImageDisplay", "asset":"wofQuestion"}, 
                                                        
                                                    ],
                                                    "lom": {
                                                        "landscape": {
                                                            x: 0,
                                                            y: 0,
                                                            anchor:[158, 503],
                                                            
                                                        },
                                                        "portrait": {
                                                            'x': 0,
                                                            'y': 0,
                                                            anchor:[158, 503],                                                        
                                                            
                                                        },
                                                    },
                                                    "children":{
                                                        "wofSEG20value":{
                                                            "type": "ImageDisplay",
                                                            "id": "wofSEG20value",
                                                            x: 64,
                                                            y: 78,
                                                            'assets': ["wof2000"],
                                                            "lom": {
                                                                "landscape": {
                                                                    x: 64,
                                                                    y: 78,
                                                                    
                                                                },
                                                                "portrait": {
                                                                    'x': 64,
                                                                    'y': 78,
                                                                
                                                                }
                                                            },
                                                        },
                                                        
                                                    },

                                                },
                                               
                                            }

                                        },
                                        "wofPEGSShadow": {
                                            "type": "ImageDisplay",
                                            "id": "wofPEGS",
                                            "x": 0,
                                            "y": 0,
                                            'assets': ["wofPEGSShadow"],
                                            "lom": {
                                                "landscape": {
                                                    x: 0,
                                                    y: 0,
                                                    
                                                },
                                                "portrait": {
                                                    'x': 0,
                                                    'y': 0,
                                                   
                                                    
                                                }
                                            },
                                        },
                                        "wofPEGS": {
                                            "type": "ImageDisplay",
                                            "id": "wofPEGS",
                                            "x": 0,
                                            "y": 0,
                                            'assets': ["wofPEGS"],
                                            "lom": {
                                                "landscape": {
                                                    x: 0,
                                                    y: 0,
                                                    
                                                },
                                                "portrait": {
                                                    'x': 0,
                                                    'y': 0,
                                                   
                                                    
                                                }
                                            },
                                        },
                                    }
                                },
                                
  
                            }

                        },
                        "wofFrame": {
                            "type": "ImageDisplay",
                            "id": "wofFrame",
                            x: 0,
                            y: 0,
                            'assets': ["wofFrame"],
                            "lom": {
                                "landscape": {
                                    x: 0,
                                    y: 0,
                                    
                                },
                                "portrait": {
                                    'x': -7,
                                    'y': 243,
                                    "scale":0.5
                                   
                                    
                                }
                            },

                        },
                        "wofArrow": {
                            "type": "ImageDisplay",
                            "id": "wofArrow",
                            x: 430,
                            y: 120,
                            'assets': ["wofArrow"],
                            "children":{
                                "wofArrowTop": {
                                    "type": "ImageDisplay",
                                    "id": "wofArrowTop",
                                    "x": 421,
                                    "y": 98,
                                    'assets': ["wofArrowTop"],
                                    "lom": {
                                        "landscape": {
                                            x: 0,
                                            y: 0,
                                            
                                        },
                                        "portrait": {
                                            'x': 8,
                                            'y': 20,
                                           
                                            
                                        }
                                    },
                                }
                            },
                            "lom": {
                                "landscape": {
                                    x: 0,
                                    y: 0,
                                    
                                },
                                "portrait": {
                                    'x': 421,
                                    'y': 98,
                                   
                                    
                                }
                            },

                        },
                        "wofTickerAnim":{
                            "type": "SpineDisplay",
                            "id":"wofTickerAnim",
                            "x": 513,
                            "y": 207,
                            'assets': ["wofClicker"],
                            "lom":{
                                "landscape": {
                                    x: 513,
                                    y: 207,
                                    
                                },
                                "portrait": {
                                    'x': 0,
                                    'y': 0,
                                   
                                    
                                }
                            }
                        },
                        /*
                        "wofMysteryAdd":{
                            "type": "SpineDisplay",
                            "id":"wofMysteryAdd",
                            "x": 513,
                            "y": 207,
                            'assets': ["wofMysteryAdd"],
                            "lom":{
                                "landscape": {
                                    x: 513,
                                    y: 207,
                                    
                                },
                                "portrait": {
                                    'x': 0,
                                    'y': 0,
                                   
                                    
                                }
                            }
                        },*/
                        "mainPanel": {
                            "type": "ImageDisplay",
                            "id": "mainPanel",
                            x: 268,
                            y: 182,
                            'assets': ["mainPanel"],
                            "lom": {
                                "landscape": {
                                    x: 268,
                                    y: 182,
                                    'scale':1
                                },
                                "portrait": {
                                    'x': -57,
                                    'y': 766,
                                    'scale':0.85
                                }
                            },
                        },
                        "reelsBacking": {
                            "type": "DisplayObject",
                            x: 0,
                            y: 0,
                            "lom": {
                                "landscape": {
                                    x: 0,
                                    y: 0,
                                    'scale':1
                                },
                                "portrait": {
                                    'x': -259,
                                    'y': 402,
                                    'scale': 0.85
                                }
                            },
                        },
                        "reelFrame": {
                            "type": "ImageDisplay",
                            "id": "reelFrame",
                            x: 333,
                            y: 223,
                            'assets': ["reelFrame"],
                            "lom": {
                                "landscape": {
                                    x: 333,
                                    y: 223,
                                    'scale':1
                                },
                                "portrait": {
                                    'x': -3,
                                    'y': 801,
                                    'scale': 0.85
                                }
                            },
                        },
                        "winlinesContainer": {
                            "type": "DisplayObject",
                            x: 493,
                            y: 328,
                            "lom": {
                                "landscape": {
                                    x: 493,
                                    y: 328,
                                    'scale':1
                                },
                                "portrait": {
                                    x: 132,
                                    y: 883,
                                    'scale':0.85
                                }
                            },
                            "children":{
                                "winline0":{
                                    "type": "DisplayObject",
                                    x: 0,
                                    y: 0,
                                    "children": {
                                        "winline0_0":{
                                            "type": "ImageDisplay",
                                            "x": -147,
                                            "y": -6,
                                            "assets": ["winLineShort"],
                                            //"anchor":[0.5, 0.5],
                                            "lom": {
                                                "landscape": {
                                                    x: -147,
                                                    y: -6,
                                                    'scale':1
                                                },
                                                "portrait": {
                                                    x: -147,
                                                    y: -6,
                                                    'scale':1
                                                }
                                            }

                                        },
                                        "winline0_1":{
                                            "type": "ImageDisplay",
                                            "x": 11,
                                            "y": -6,
                                            "assets": ["winLineStraight"],
                                            //"anchor":[0.5, 0.5],
                                            "lom": {
                                                "landscape": {
                                                    x: 11,
                                                    y: -6,
                                                    'scale':1
                                                },
                                                "portrait": {
                                                    x: 11,
                                                    y: -6,
                                                    'scale':1
                                                }
                                            }

                                        },
                                        "winline0_2":{
                                            "type": "ImageDisplay",
                                            "x": 242,
                                            "y": -6,
                                            "assets": ["winLineStraight"],
                                            //"anchor":[0.5, 0.5],
                                            "lom": {
                                                "landscape": {
                                                    x: 242,
                                                    y: -6,
                                                    'scale':1
                                                },
                                                "portrait": {
                                                    x: 242,
                                                    y: -6,
                                                    'scale':1
                                                }
                                            }

                                        },
                                        "winline0_3":{
                                            "type": "ImageDisplay",
                                            "x": 473,
                                            "y": -6,
                                            "assets": ["winLineStraight"],
                                            //"anchor":[0.5, 0.5],
                                            "lom": {
                                                "landscape": {
                                                    x: 473,
                                                    y: -6,
                                                    'scale':1
                                                },
                                                "portrait": {
                                                    x: 473,
                                                    y: -6,
                                                    'scale':1
                                                }
                                            }

                                        },
                                        "winline0_4":{
                                            "type": "ImageDisplay",
                                            "x": 703,
                                            "y": -6,
                                            "assets": ["winLineStraight"],
                                            //"anchor":[0.5, 0.5],
                                            "lom": {
                                                "landscape": {
                                                    x: 703,
                                                    y: -6,
                                                    'scale':1
                                                },
                                                "portrait": {
                                                    x: 703,
                                                    y: -6,
                                                    'scale':1
                                                }
                                            }

                                        },
                                        "winline0_5":{
                                            "type": "ImageDisplay",
                                            "x": 931,
                                            "y": -6,
                                            "assets": ["winLineShort"],
                                            //"anchor":[0.5, 0.5],
                                            "lom": {
                                                "landscape": {
                                                    x: 931,
                                                    y: -6,
                                                    'scale':1
                                                },
                                                "portrait": {
                                                    x: 931,
                                                    y: -6,
                                                    'scale':1
                                                }
                                            }

                                        }
                                    }
                                },
                                "winline1":{
                                    "type": "DisplayObject",
                                    x: 0,
                                    y: 493,
                                    "children": {
                                        "winline1_0":{
                                            "type": "ImageDisplay",
                                            "x": -147,
                                            "y": -6,
                                            "assets": ["winLineShort"],
                                            //"anchor":[0.5, 0.5],
                                            "lom": {
                                                "landscape": {
                                                    x: -147,
                                                    y: -6,
                                                    'scale':1
                                                },
                                                "portrait": {
                                                    x: -147,
                                                    y: -6,
                                                    'scale':1
                                                }
                                            }

                                        },
                                        "winline1_1":{
                                            "type": "ImageDisplay",
                                            "x": 11,
                                            "y": -6,
                                            "assets": ["winLineStraight"],
                                            //"anchor":[0.5, 0.5],
                                            "lom": {
                                                "landscape": {
                                                    x: 11,
                                                    y: -6,
                                                    'scale':1
                                                },
                                                "portrait": {
                                                    x: 11,
                                                    y: -6,
                                                    'scale':1
                                                }
                                            }

                                        },
                                        "winline1_2":{
                                            "type": "ImageDisplay",
                                            "x": 242,
                                            "y": -6,
                                            "assets": ["winLineStraight"],
                                            //"anchor":[0.5, 0.5],
                                            "lom": {
                                                "landscape": {
                                                    x: 242,
                                                    y: -6,
                                                    'scale':1
                                                },
                                                "portrait": {
                                                    x: 242,
                                                    y: -6,
                                                    'scale':1
                                                }
                                            }

                                        },
                                        "winline1_3":{
                                            "type": "ImageDisplay",
                                            "x": 473,
                                            "y": -6,
                                            "assets": ["winLineStraight"],
                                            //"anchor":[0.5, 0.5],
                                            "lom": {
                                                "landscape": {
                                                    x: 473,
                                                    y: -6,
                                                    'scale':1
                                                },
                                                "portrait": {
                                                    x: 473,
                                                    y: -6,
                                                    'scale':1
                                                }
                                            }

                                        },
                                        "winline1_4":{
                                            "type": "ImageDisplay",
                                            "x": 703,
                                            "y": -6,
                                            "assets": ["winLineStraight"],
                                            //"anchor":[0.5, 0.5],
                                            "lom": {
                                                "landscape": {
                                                    x: 703,
                                                    y: -6,
                                                    'scale':1
                                                },
                                                "portrait": {
                                                    x: 703,
                                                    y: -6,
                                                    'scale':1
                                                }
                                            }

                                        },
                                        "winline1_5":{
                                            "type": "ImageDisplay",
                                            "x": 931,
                                            "y": -6,
                                            "assets": ["winLineShort"],
                                            //"anchor":[0.5, 0.5],
                                            "lom": {
                                                "landscape": {
                                                    x: 931,
                                                    y: -6,
                                                    'scale':1
                                                },
                                                "portrait": {
                                                    x: 931,
                                                    y: -6,
                                                    'scale':1
                                                }
                                            }

                                        }
                                    }
                                },
                                "winline2":{
                                    "type": "DisplayObject",
                                    x: 0,
                                    y: 161,
                                    "children": {
                                        "winline2_0":{
                                            "type": "ImageDisplay",
                                            "x": -147,
                                            "y": -6,
                                            "assets": ["winLineShort"],
                                            //"anchor":[0.5, 0.5],
                                            "lom": {
                                                "landscape": {
                                                    x: -147,
                                                    y: -6,
                                                    'scale':1
                                                },
                                                "portrait": {
                                                    x: -147,
                                                    y: -6,
                                                    'scale':1
                                                }
                                            }

                                        },
                                        "winline2_1":{
                                            "type": "ImageDisplay",
                                            "x": 11,
                                            "y": -6,
                                            "assets": ["winLineStraight"],
                                            //"anchor":[0.5, 0.5],
                                            "lom": {
                                                "landscape": {
                                                    x: 11,
                                                    y: -6,
                                                    'scale':1
                                                },
                                                "portrait": {
                                                    x: 11,
                                                    y: -6,
                                                    'scale':1
                                                }
                                            }

                                        },
                                        "winline2_2":{
                                            "type": "ImageDisplay",
                                            "x": 242,
                                            "y": -6,
                                            "assets": ["winLineStraight"],
                                            //"anchor":[0.5, 0.5],
                                            "lom": {
                                                "landscape": {
                                                    x: 242,
                                                    y: -6,
                                                    'scale':1
                                                },
                                                "portrait": {
                                                    x: 242,
                                                    y: -6,
                                                    'scale':1
                                                }
                                            }

                                        },
                                        "winline2_3":{
                                            "type": "ImageDisplay",
                                            "x": 473,
                                            "y": -6,
                                            "assets": ["winLineStraight"],
                                            //"anchor":[0.5, 0.5],
                                            "lom": {
                                                "landscape": {
                                                    x: 473,
                                                    y: -6,
                                                    'scale':1
                                                },
                                                "portrait": {
                                                    x: 473,
                                                    y: -6,
                                                    'scale':1
                                                }
                                            }

                                        },
                                        "winline2_4":{
                                            "type": "ImageDisplay",
                                            "x": 703,
                                            "y": -6,
                                            "assets": ["winLineStraight"],
                                            //"anchor":[0.5, 0.5],
                                            "lom": {
                                                "landscape": {
                                                    x: 703,
                                                    y: -6,
                                                    'scale':1
                                                },
                                                "portrait": {
                                                    x: 703,
                                                    y: -6,
                                                    'scale':1
                                                }
                                            }

                                        },
                                        "winline2_5":{
                                            "type": "ImageDisplay",
                                            "x": 931,
                                            "y": -6,
                                            "assets": ["winLineShort"],
                                            //"anchor":[0.5, 0.5],
                                            "lom": {
                                                "landscape": {
                                                    x: 931,
                                                    y: -6,
                                                    'scale':1
                                                },
                                                "portrait": {
                                                    x: 931,
                                                    y: -6,
                                                    'scale':1
                                                }
                                            }

                                        }
                                    }
                                },
                                "winline3":{
                                    "type": "DisplayObject",
                                    x: 0,
                                    y: 330,
                                    "children": {
                                        "winline3_0":{
                                            "type": "ImageDisplay",
                                            "x": -147,
                                            "y": -6,
                                            "assets": ["winLineShort"],
                                            //"anchor":[0.5, 0.5],
                                            "lom": {
                                                "landscape": {
                                                    x: -147,
                                                    y: -6,
                                                    'scale':1
                                                },
                                                "portrait": {
                                                    x: -147,
                                                    y: -6,
                                                    'scale':1
                                                }
                                            }

                                        },
                                        "winline3_1":{
                                            "type": "ImageDisplay",
                                            "x": 11,
                                            "y": -6,
                                            "assets": ["winLineStraight"],
                                            //"anchor":[0.5, 0.5],
                                            "lom": {
                                                "landscape": {
                                                    x: 11,
                                                    y: -6,
                                                    'scale':1
                                                },
                                                "portrait": {
                                                    x: 11,
                                                    y: -6,
                                                    'scale':1
                                                }
                                            }

                                        },
                                        "winline3_2":{
                                            "type": "ImageDisplay",
                                            "x": 242,
                                            "y": -6,
                                            "assets": ["winLineStraight"],
                                            //"anchor":[0.5, 0.5],
                                            "lom": {
                                                "landscape": {
                                                    x: 242,
                                                    y: -6,
                                                    'scale':1
                                                },
                                                "portrait": {
                                                    x: 242,
                                                    y: -6,
                                                    'scale':1
                                                }
                                            }

                                        },
                                        "winline3_3":{
                                            "type": "ImageDisplay",
                                            "x": 473,
                                            "y": -6,
                                            "assets": ["winLineStraight"],
                                            //"anchor":[0.5, 0.5],
                                            "lom": {
                                                "landscape": {
                                                    x: 473,
                                                    y: -6,
                                                    'scale':1
                                                },
                                                "portrait": {
                                                    x: 473,
                                                    y: -6,
                                                    'scale':1
                                                }
                                            }

                                        },
                                        "winline3_4":{
                                            "type": "ImageDisplay",
                                            "x": 703,
                                            "y": -6,
                                            "assets": ["winLineStraight"],
                                            //"anchor":[0.5, 0.5],
                                            "lom": {
                                                "landscape": {
                                                    x: 703,
                                                    y: -6,
                                                    'scale':1
                                                },
                                                "portrait": {
                                                    x: 703,
                                                    y: -6,
                                                    'scale':1
                                                }
                                            }

                                        },
                                        "winline3_5":{
                                            "type": "ImageDisplay",
                                            "x": 931,
                                            "y": -6,
                                            "assets": ["winLineShort"],
                                            //"anchor":[0.5, 0.5],
                                            "lom": {
                                                "landscape": {
                                                    x: 931,
                                                    y: -6,
                                                    'scale':1
                                                },
                                                "portrait": {
                                                    x: 931,
                                                    y: -6,
                                                    'scale':1
                                                }
                                            }

                                        }
                                    }
                                },
                                "winline4":{
                                    "type": "DisplayObject",
                                    x: 0,
                                    y: 0,
                                    "children": {
                                        "winline4_0":{
                                            "type": "ImageDisplay",
                                            "x": -147,
                                            "y": -6,
                                            "assets": ["winLineShort"],
                                            //"anchor":[0.5, 0.5],
                                            "lom": {
                                                "landscape": {
                                                    x: -147,
                                                    y: -6,
                                                    'scale':1
                                                },
                                                "portrait": {
                                                    x: -147,
                                                    y: -6,
                                                    'scale':1
                                                }
                                            }

                                        },
                                        "winline4_1":{
                                            "type": "ImageDisplay",
                                            "x": 11,
                                            "y": -6,
                                            "assets": ["winLineStraight"],
                                            //"anchor":[0.5, 0.5],
                                            "lom": {
                                                "landscape": {
                                                    x: 11,
                                                    y: -6,
                                                    'scale':1
                                                },
                                                "portrait": {
                                                    x: 11,
                                                    y: -6,
                                                    'scale':1
                                                }
                                            }

                                        },
                                        "winline4_2":{
                                            "type": "ImageDisplay",
                                            "x": 242,
                                            "y": -6,
                                            "assets": ["winLineStraight"],
                                            //"anchor":[0.5, 0.5],
                                            "lom": {
                                                "landscape": {
                                                    x: 242,
                                                    y: -6,
                                                    'scale':1
                                                },
                                                "portrait": {
                                                    x: 242,
                                                    y: -6,
                                                    'scale':1
                                                }
                                            }

                                        },
                                        "winline4_3":{
                                            "type": "ImageDisplay",
                                            "x": 473,
                                            "y": -6,
                                            "assets": ["winLineDown"],
                                            //"anchor":[0.5, 0.5],
                                            "lom": {
                                                "landscape": {
                                                    x: 473,
                                                    y: -6,
                                                    'scale':1
                                                },
                                                "portrait": {
                                                    x: 473,
                                                    y: -6,
                                                    'scale':1
                                                }
                                            }

                                        },
                                        "winline4_4":{
                                            "type": "ImageDisplay",
                                            "x": 701,
                                            "y": 158,
                                            "assets": ["winLineDown"],
                                            //"anchor":[0.5, 0.5],
                                            "lom": {
                                                "landscape": {
                                                    x: 701,
                                                    y: 158,
                                                    'scale':1
                                                },
                                                "portrait": {
                                                    'x': 0,
                                                    'y': 280,
                                                    'scale': 1
                                                }
                                            }

                                        },
                                        "winline4_5":{
                                            "type": "ImageDisplay",
                                            "x": 931,
                                            "y": 324,
                                            "assets": ["winLineShort"],
                                            //"anchor":[0.5, 0.5],
                                            "lom": {
                                                "landscape": {
                                                    x: 931,
                                                    y: 324,
                                                    'scale':1
                                                },
                                                "portrait": {
                                                    x: 931,
                                                    y: 324,
                                                    'scale':1
                                                }
                                            }

                                        }
                                    }
                                },
                                "winline5":{
                                    "type": "DisplayObject",
                                    x: 0,
                                    y: 493,
                                    "children": {
                                        "winline5_0":{
                                            "type": "ImageDisplay",
                                            "x": -147,
                                            "y": -6,
                                            "assets": ["winLineShort"],
                                            //"anchor":[0.5, 0.5],
                                            "lom": {
                                                "landscape": {
                                                    x: -147,
                                                    y: -6,
                                                    'scale':1
                                                },
                                                "portrait": {
                                                    x: -147,
                                                    y: -6,
                                                    'scale':1
                                                }
                                            }

                                        },
                                        "winline5_1":{
                                            "type": "ImageDisplay",
                                            "x": 11,
                                            "y": -6,
                                            "assets": ["winLineStraight"],
                                            //"anchor":[0.5, 0.5],
                                            "lom": {
                                                "landscape": {
                                                    x: 11,
                                                    y: -6,
                                                    'scale':1
                                                },
                                                "portrait": {
                                                    x: 11,
                                                    y: -6,
                                                    'scale':1
                                                }
                                            }

                                        },
                                        "winline5_2":{
                                            "type": "ImageDisplay",
                                            "x": 242,
                                            "y": -6,
                                            "assets": ["winLineStraight"],
                                            //"anchor":[0.5, 0.5],
                                            "lom": {
                                                "landscape": {
                                                    x: 242,
                                                    y: -6,
                                                    'scale':1
                                                },
                                                "portrait": {
                                                    x: 242,
                                                    y: -6,
                                                    'scale':1
                                                }
                                            }

                                        },
                                        "winline5_3":{
                                            "type": "ImageDisplay",
                                            "x": 473,
                                            "y": -171,
                                            "assets": ["winLineUp"],
                                            //"anchor":[0.5, 0.5],
                                            "lom": {
                                                "landscape": {
                                                    x: 473,
                                                    y: -171,
                                                    'scale':1
                                                },
                                                "portrait": {
                                                    x: 473,
                                                    y: -171,
                                                    'scale':1
                                                }
                                            }

                                        },
                                        "winline5_4":{
                                            "type": "ImageDisplay",
                                            "x": 703,
                                            "y": -337,
                                            "assets": ["winLineUp"],
                                            //"anchor":[0.5, 0.5],
                                            "lom": {
                                                "landscape": {
                                                    x: 703,
                                                    y: -337,
                                                    'scale':1
                                                },
                                                "portrait": {
                                                    x: 703,
                                                    y: -337,
                                                    'scale':1
                                                }
                                            }

                                        },
                                        "winline5_5":{
                                            "type": "ImageDisplay",
                                            "x": 931,
                                            "y": -337,
                                            "assets": ["winLineShort"],
                                            //"anchor":[0.5, 0.5],
                                            "lom": {
                                                "landscape": {
                                                    x: 931,
                                                    y: -337,
                                                    'scale':1
                                                },
                                                "portrait": {
                                                    x: 931,
                                                    y: -337,
                                                    'scale':1
                                                }
                                            }

                                        }
                                    }
                                },
                                "winline6":{
                                    "type": "DisplayObject",
                                    x: 0,
                                    y: 493,
                                    "children": {
                                        "winline6_0":{
                                            "type": "ImageDisplay",
                                            "x": -147,
                                            "y": -6,
                                            "assets": ["winLineShort"],
                                            //"anchor":[0.5, 0.5],
                                            "lom": {
                                                "landscape": {
                                                    x: -147,
                                                    y: -6,
                                                    'scale':1
                                                },
                                                "portrait": {
                                                    x: -147,
                                                    y: -6,
                                                    'scale':1
                                                }
                                            }

                                        },
                                        "winline6_1":{
                                            "type": "ImageDisplay",
                                            "x": 11,
                                            "y": -6,
                                            "assets": ["winLineStraight"],
                                            //"anchor":[0.5, 0.5],
                                            "lom": {
                                                "landscape": {
                                                    x: 11,
                                                    y: -6,
                                                    'scale':1
                                                },
                                                "portrait": {
                                                    x: 11,
                                                    y: -6,
                                                    'scale':1
                                                }
                                            }

                                        },
                                        "winline6_2":{
                                            "type": "ImageDisplay",
                                            "x": 242,
                                            "y": -6,
                                            "assets": ["winLineUp"],
                                            //"anchor":[0.5, 0.5],
                                            "lom": {
                                                "landscape": {
                                                    x: 242,
                                                    y: -170,
                                                    'scale':1
                                                },
                                                "portrait": {
                                                    x: 242,
                                                    y: -170,
                                                    'scale':1
                                                }
                                            }

                                        },
                                        "winline6_3":{
                                            "type": "ImageDisplay",
                                            "x": 473,
                                            "y": -171,
                                            "assets": ["winLineUp"],
                                            //"anchor":[0.5, 0.5],
                                            "lom": {
                                                "landscape": {
                                                    x: 473,
                                                    y: -335,
                                                    'scale':1
                                                },
                                                "portrait": {
                                                    x: 473,
                                                    y: -335,
                                                    'scale':1
                                                }
                                            }

                                        },
                                        "winline6_4":{
                                            "type": "ImageDisplay",
                                            "x": 703,
                                            "y": -500,
                                            "assets": ["winLineUp"],
                                            //"anchor":[0.5, 0.5],
                                            "lom": {
                                                "landscape": {
                                                    x: 703,
                                                    y: -500,
                                                    'scale':1
                                                },
                                                "portrait": {
                                                    x: 703,
                                                    y: -500,
                                                    'scale':1
                                                }
                                            }

                                        },
                                        "winline6_5":{
                                            "type": "ImageDisplay",
                                            "x": 931,
                                            "y": -500,
                                            "assets": ["winLineShort"],
                                            //"anchor":[0.5, 0.5],
                                            "lom": {
                                                "landscape": {
                                                    x: 931,
                                                    y: -500,
                                                    'scale':1
                                                },
                                                "portrait": {
                                                    x: 931,
                                                    y: -500,
                                                    'scale':1
                                                }
                                            }

                                        }
                                    }
                                },
                                "winline7":{
                                    "type": "DisplayObject",
                                    x: 0,
                                    y: 0,
                                    "children": {
                                        "winline7_0":{
                                            "type": "ImageDisplay",
                                            "x": -147,
                                            "y": -6,
                                            "assets": ["winLineShort"],
                                            //"anchor":[0.5, 0.5],
                                            "lom": {
                                                "landscape": {
                                                    x: -147,
                                                    y: -6,
                                                    'scale':1
                                                },
                                                "portrait": {
                                                    x: -147,
                                                    y: -6,
                                                    'scale':1
                                                }
                                            }

                                        },
                                        "winline7_1":{
                                            "type": "ImageDisplay",
                                            "x": 11,
                                            "y": -6,
                                            "assets": ["winLineStraight"],
                                            //"anchor":[0.5, 0.5],
                                            "lom": {
                                                "landscape": {
                                                    x: 11,
                                                    y: -6,
                                                    'scale':1
                                                },
                                                "portrait": {
                                                    x: 11,
                                                    y: -6,
                                                    'scale':1
                                                }
                                            }

                                        },
                                        "winline7_2":{
                                            "type": "ImageDisplay",
                                            "x": 242,
                                            "y": -6,
                                            "assets": ["winLineDown"],
                                            //"anchor":[0.5, 0.5],
                                            "lom": {
                                                "landscape": {
                                                    x: 242,
                                                    y: -6,
                                                    'scale':1
                                                },
                                                "portrait": {
                                                    x: 242,
                                                    y: -6,
                                                    'scale':1
                                                }
                                            }

                                        },
                                        "winline7_3":{
                                            "type": "ImageDisplay",
                                            "x": 473,
                                            "y": 160,
                                            "assets": ["winLineDown"],
                                            //"anchor":[0.5, 0.5],
                                            "lom": {
                                                "landscape": {
                                                    x: 473,
                                                    y: 160,
                                                    'scale':1
                                                },
                                                "portrait": {
                                                    x: 473,
                                                    y: 160,
                                                    'scale':1
                                                }
                                            }

                                        },
                                        "winline7_4":{
                                            "type": "ImageDisplay",
                                            "x": 701,
                                            "y": 324,
                                            "assets": ["winLineDown"],
                                            //"anchor":[0.5, 0.5],
                                            "lom": {
                                                "landscape": {
                                                    x: 701,
                                                    y: 324,
                                                    'scale':1
                                                },
                                                "portrait": {
                                                    x: 701,
                                                    y: 324,
                                                    'scale':1
                                                }
                                            }

                                        },
                                        "winline7_5":{
                                            "type": "ImageDisplay",
                                            "x": 931,
                                            "y": 489,
                                            "assets": ["winLineShort"],
                                            //"anchor":[0.5, 0.5],
                                            "lom": {
                                                "landscape": {
                                                    x: 931,
                                                    y: 489,
                                                    'scale':1
                                                },
                                                "portrait": {
                                                    x: 931,
                                                    y: 489,
                                                    'scale':1
                                                }
                                            }

                                        }
                                    }
                                },
                                "winline8":{
                                    "type": "DisplayObject",
                                    x: 0,
                                    y: 330,
                                    "children": {
                                        "winline8_0":{
                                            "type": "ImageDisplay",
                                            "x": -148,
                                            "y": -173,
                                            "assets": ["winLineShort"],
                                            //"anchor":[0.5, 0.5],
                                            "lom": {
                                                "landscape": {
                                                    x: -148,
                                                    y: -173,
                                                    'scale':1
                                                },
                                                "portrait": {
                                                    x: -148,
                                                    y: -173,
                                                    'scale':1
                                                }
                                            }

                                        },
                                        "winline8_1":{
                                            "type": "ImageDisplay",
                                            "x": 11,
                                            "y": -173,
                                            "assets": ["winLineDown"],
                                            //"anchor":[0.5, 0.5],
                                            "lom": {
                                                "landscape": {
                                                    x: 11,
                                                    y: -173,
                                                    'scale':1
                                                },
                                                "portrait": {
                                                    x: 11,
                                                    y: -173,
                                                    'scale':1
                                                }
                                            }

                                        },
                                        "winline8_2":{
                                            "type": "ImageDisplay",
                                            "x": 242,
                                            "y": -6,
                                            "assets": ["winLineStraight"],
                                            //"anchor":[0.5, 0.5],
                                            "lom": {
                                                "landscape": {
                                                    x: 242,
                                                    y: -6,
                                                    'scale':1
                                                },
                                                "portrait": {
                                                    x: 242,
                                                    y: -6,
                                                    'scale':1
                                                }
                                            }

                                        },
                                        "winline8_3":{
                                            "type": "ImageDisplay",
                                            "x": 473,
                                            "y": -6,
                                            "assets": ["winLineStraight"],
                                            //"anchor":[0.5, 0.5],
                                            "lom": {
                                                "landscape": {
                                                    x: 473,
                                                    y: -6,
                                                    'scale':1
                                                },
                                                "portrait": {
                                                    x: 473,
                                                    y: -6,
                                                    'scale':1
                                                }
                                            }

                                        },
                                        "winline8_4":{
                                            "type": "ImageDisplay",
                                            "x": 704,
                                            "y": -7,
                                            "assets": ["winLineDown"],
                                            //"anchor":[0.5, 0.5],
                                            "lom": {
                                                "landscape": {
                                                    x: 703,
                                                    y: -7,
                                                    'scale':1
                                                },
                                                "portrait": {
                                                    x: 703,
                                                    y: -7,
                                                    'scale':1
                                                }
                                            }

                                        },
                                        "winline8_5":{
                                            "type": "ImageDisplay",
                                            "x": 931,
                                            "y": 157,
                                            "assets": ["winLineShort"],
                                            //"anchor":[0.5, 0.5],
                                            "lom": {
                                                "landscape": {
                                                    x: 931,
                                                    y: 157,
                                                    'scale':1
                                                },
                                                "portrait": {
                                                    x: 931,
                                                    y: 157,
                                                    'scale':1
                                                }
                                            }

                                        }
                                    }
                                },
                                "winline9":{
                                    "type": "DisplayObject",
                                    x: 0,
                                    y: 161,
                                    "children": {
                                        "winline9_0":{
                                            "type": "ImageDisplay",
                                            "x": -147,
                                            "y": 161,
                                            "assets": ["winLineShort"],
                                            //"anchor":[0.5, 0.5],
                                            "lom": {
                                                "landscape": {
                                                    x: -147,
                                                    y: 161,
                                                    'scale':1
                                                },
                                                "portrait": {
                                                    x: -147,
                                                    y: 161,
                                                    'scale':1
                                                }
                                            }

                                        },
                                        "winline9_1":{
                                            "type": "ImageDisplay",
                                            "x": 11,
                                            "y": -3,
                                            "assets": ["winLineUp"],
                                            //"anchor":[0.5, 0.5],
                                            "lom": {
                                                "landscape": {
                                                    x: 11,
                                                    y: -3,
                                                    'scale':1
                                                },
                                                "portrait": {
                                                    x: 11,
                                                    y: -3,
                                                    'scale':1
                                                }
                                            }

                                        },
                                        "winline9_2":{
                                            "type": "ImageDisplay",
                                            "x": 242,
                                            "y": -5,
                                            "assets": ["winLineStraight"],
                                            //"anchor":[0.5, 0.5],
                                            "lom": {
                                                "landscape": {
                                                    x: 242,
                                                    y: -5,
                                                    'scale':1
                                                },
                                                "portrait": {
                                                    x: 242,
                                                    y: -5,
                                                    'scale':1
                                                }
                                            }

                                        },
                                        "winline9_3":{
                                            "type": "ImageDisplay",
                                            "x": 473,
                                            "y": -5,
                                            "assets": ["winLineStraight"],
                                            //"anchor":[0.5, 0.5],
                                            "lom": {
                                                "landscape": {
                                                    x: 473,
                                                    y: -5,
                                                    'scale':1
                                                },
                                                "portrait": {
                                                    x: 473,
                                                    y: -5,
                                                    'scale':1
                                                }
                                            }

                                        },
                                        "winline9_4":{
                                            "type": "ImageDisplay",
                                            "x": 703,
                                            "y": -170,
                                            "assets": ["winLineUp"],
                                            //"anchor":[0.5, 0.5],
                                            "lom": {
                                                "landscape": {
                                                    x: 703,
                                                    y: -170,
                                                    'scale':1
                                                },
                                                "portrait": {
                                                    x: 703,
                                                    y: -170,
                                                    'scale':1
                                                }
                                            }

                                        },
                                        "winline9_5":{
                                            "type": "ImageDisplay",                                    
                                            "x": 931,
                                            "y": -170,
                                            "assets": ["winLineShort"],
                                            //"anchor":[0.5, 0.5],
                                            "lom": {
                                                "landscape": {
                                                    x: 931,
                                                    y: -170,
                                                    'scale':1
                                                },
                                                "portrait": {
                                                    x: 931,
                                                    y: -170,
                                                    'scale':1
                                                }
                                            }

                                        }
                                    }
                                },
                                "winline10":{
                                    "type": "DisplayObject",
                                    x: 0,
                                    y: 493,
                                    "children": {
                                        "winline10_0":{
                                            "type": "ImageDisplay",
                                            "x": -148,
                                            "y": -338,
                                            "assets": ["winLineShort"],
                                            //"anchor":[0.5, 0.5],
                                            "lom": {
                                                "landscape": {
                                                    x: -148,
                                                    y: -338,
                                                    'scale':1
                                                },
                                                "portrait": {
                                                    x: -148,
                                                    y: -338,
                                                    'scale':1
                                                }
                                            }

                                        },
                                        "winline10_1":{
                                            "type": "ImageDisplay",
                                            "x": 11,
                                            "y": -337,
                                            "assets": ["winLineDown"],
                                            //"anchor":[0.5, 0.5],
                                            "lom": {
                                                "landscape": {
                                                    x: 11,
                                                    y: -337,
                                                    'scale':1
                                                },
                                                "portrait": {
                                                    x: 11,
                                                    y: -337,
                                                    'scale':1
                                                }
                                            }

                                        },
                                        "winline10_2":{
                                            "type": "ImageDisplay",
                                            "x": 242,
                                            "y": -171,
                                            "assets": ["winLineDown"],
                                            //"anchor":[0.5, 0.5],
                                            "lom": {
                                                "landscape": {
                                                    x: 242,
                                                    y: -171,
                                                    'scale':1
                                                },
                                                "portrait": {
                                                    x: 242,
                                                    y: -171,
                                                    'scale':1
                                                }
                                            }

                                        },
                                        "winline10_3":{
                                            "type": "ImageDisplay",
                                            "x": 473,
                                            "y": -171,
                                            "assets": ["winLineUp"],
                                            //"anchor":[0.5, 0.5],
                                            "lom": {
                                                "landscape": {
                                                    x: 473,
                                                    y: -171,
                                                    'scale':1
                                                },
                                                "portrait": {
                                                    x: 473,
                                                    y: -171,
                                                    'scale':1
                                                }
                                            }

                                        },
                                        "winline10_4":{
                                            "type": "ImageDisplay",
                                            "x": 703,
                                            "y": -337,
                                            "assets": ["winLineUp"],
                                            //"anchor":[0.5, 0.5],
                                            "lom": {
                                                "landscape": {
                                                    x: 703,
                                                    y: -337,
                                                    'scale':1
                                                },
                                                "portrait": {
                                                    x: 703,
                                                    y: -337,
                                                    'scale':1
                                                }
                                            }

                                        },
                                        "winline10_5":{
                                            "type": "ImageDisplay",
                                            "x": 931,
                                            "y": -337,
                                            "assets": ["winLineShort"],
                                            //"anchor":[0.5, 0.5],
                                            "lom": {
                                                "landscape": {
                                                    x: 931,
                                                    y: -337,
                                                    'scale':1
                                                },
                                                "portrait": {
                                                    x: 931,
                                                    y: -337,
                                                    'scale':1
                                                }
                                            }

                                        }
                                    }
                                },
                                "winline11":{
                                    "type": "DisplayObject",
                                    x: 0,
                                    y: 493,
                                    "children": {
                                        "winline11_0":{
                                            "type": "ImageDisplay",
                                            "x": -145,
                                            "y": -170,
                                            "assets": ["winLineShort"],
                                            //"anchor":[0.5, 0.5],
                                            "lom": {
                                                "landscape": {
                                                    x: -145,
                                                    y: -170,
                                                    'scale':1
                                                },
                                                "portrait": {
                                                    x: -145,
                                                    y: -170,
                                                    'scale':1
                                                }
                                            }

                                        },
                                        "winline11_1":{
                                            "type": "ImageDisplay",
                                            "x": 11,
                                            "y": -334,
                                            "assets": ["winLineUp"],
                                            //"anchor":[0.5, 0.5],
                                            "lom": {
                                                "landscape": {
                                                    x: 11,
                                                    y: -334,
                                                    'scale':1
                                                },
                                                "portrait": {
                                                    x: 11,
                                                    y: -334,
                                                    'scale':1
                                                }
                                            }

                                        },
                                        "winline11_2":{
                                            "type": "ImageDisplay",
                                            "x": 242,
                                            "y": -500,
                                            "assets": ["winLineUp"],
                                            //"anchor":[0.5, 0.5],
                                            "lom": {
                                                "landscape": {
                                                    x: 242,
                                                    y: -500,
                                                    'scale':1
                                                },
                                                "portrait": {
                                                    x: 242,
                                                    y: -500,
                                                    'scale':1
                                                }
                                            }

                                        },
                                        "winline11_3":{
                                            "type": "ImageDisplay",
                                            "x": 473,
                                            "y": -501,
                                            "assets": ["winLineDown"],
                                            //"anchor":[0.5, 0.5],
                                            "lom": {
                                                "landscape": {
                                                    x: 473,
                                                    y: -501,
                                                    'scale':1
                                                },
                                                "portrait": {
                                                    x: 473,
                                                    y: -501,
                                                    'scale':1
                                                }
                                            }

                                        },
                                        "winline11_4":{
                                            "type": "ImageDisplay",
                                            "x": 703,
                                            "y": -336,
                                            "assets": ["winLineDown"],
                                            //"anchor":[0.5, 0.5],
                                            "lom": {
                                                "landscape": {
                                                    x: 703,
                                                    y: -336,
                                                    'scale':1
                                                },
                                                "portrait": {
                                                    x: 703,
                                                    y: -336,
                                                    'scale':1
                                                }
                                            }

                                        },
                                        "winline11_5":{
                                            "type": "ImageDisplay",
                                            "x": 931,
                                            "y": -173,
                                            "assets": ["winLineShort"],
                                            //"anchor":[0.5, 0.5],
                                            "lom": {
                                                "landscape": {
                                                    x: 931,
                                                    y: -173,
                                                    'scale':1
                                                },
                                                "portrait": {
                                                    x: 931,
                                                    y: -173,
                                                    'scale':1
                                                }
                                            }

                                        }
                                    }
                                },
                                "winline12":{
                                    "type": "DisplayObject",
                                    x: 0,
                                    y: 0,
                                    "children": {
                                        "winline12_0":{
                                            "type": "ImageDisplay",
                                            "x": -147,
                                            "y": 159,
                                            "assets": ["winLineShort"],
                                            //"anchor":[0.5, 0.5],
                                            "lom": {
                                                "landscape": {
                                                    x: -147,
                                                    y: 159,
                                                    'scale':1
                                                },
                                                "portrait": {
                                                    x: -147,
                                                    y: 159,
                                                    'scale':1
                                                }
                                            }

                                        },
                                        "winline12_1":{
                                            "type": "ImageDisplay",
                                            "x": 11,
                                            "y": -6,
                                            "assets": ["winLineUp"],
                                            //"anchor":[0.5, 0.5],
                                            "lom": {
                                                "landscape": {
                                                    x: 11,
                                                    y: -6,
                                                    'scale':1
                                                },
                                                "portrait": {
                                                    x: 11,
                                                    y: -6,
                                                    'scale':1
                                                }
                                            }

                                        },
                                        "winline12_2":{
                                            "type": "ImageDisplay",
                                            "x": 242,
                                            "y": -6,
                                            "assets": ["winLineStraight"],
                                            //"anchor":[0.5, 0.5],
                                            "lom": {
                                                "landscape": {
                                                    x: 242,
                                                    y: -6,
                                                    'scale':1
                                                },
                                                "portrait": {
                                                    x: 242,
                                                    y: -6,
                                                    'scale':1
                                                }
                                            }

                                        },
                                        "winline12_3":{
                                            "type": "ImageDisplay",
                                            "x": 473,
                                            "y": -6,
                                            "assets": ["winLineStraight"],
                                            //"anchor":[0.5, 0.5],
                                            "lom": {
                                                "landscape": {
                                                    x: 473,
                                                    y: -6,
                                                    'scale':1
                                                },
                                                "portrait": {
                                                    x: 473,
                                                    y: -6,
                                                    'scale':1
                                                }
                                            }

                                        },
                                        "winline12_4":{
                                            "type": "ImageDisplay",
                                            "x": 703,
                                            "y": -6,
                                            "assets": ["winLineDown"],
                                            //"anchor":[0.5, 0.5],
                                            "lom": {
                                                "landscape": {
                                                    x: 703,
                                                    y: -6,
                                                    'scale':1
                                                },
                                                "portrait": {
                                                    x: 703,
                                                    y: -6,
                                                    'scale':1
                                                }
                                            }

                                        },
                                        "winline12_5":{
                                            "type": "ImageDisplay",
                                            "x": 931,
                                            "y": 157,
                                            "assets": ["winLineShort"],
                                            //"anchor":[0.5, 0.5],
                                            "lom": {
                                                "landscape": {
                                                    x: 931,
                                                    y: 157,
                                                    'scale':1
                                                },
                                                "portrait": {
                                                    x: 931,
                                                    y: 157,
                                                    'scale':1
                                                }
                                            }

                                        }
                                    }
                                },
                                "winline13":{
                                    "type": "DisplayObject",
                                    x: 0,
                                    y: 493,
                                    "children": {
                                        "winline13_0":{
                                            "type": "ImageDisplay",
                                            "x": -147,
                                            "y": -171,
                                            "assets": ["winLineShort"],
                                            //"anchor":[0.5, 0.5],
                                            "lom": {
                                                "landscape": {
                                                    x: -147,
                                                    y: -171,
                                                    'scale':1
                                                },
                                                "portrait": {
                                                    x: -147,
                                                    y: -171,
                                                    'scale':1
                                                }
                                            }

                                        },
                                        "winline13_1":{
                                            "type": "ImageDisplay",
                                            "x": 11,
                                            "y": -172,
                                            "assets": ["winLineDown"],
                                            //"anchor":[0.5, 0.5],
                                            "lom": {
                                                "landscape": {
                                                    x: 11,
                                                    y: -172,
                                                    'scale':1
                                                },
                                                "portrait": {
                                                    x: 11,
                                                    y: -172,
                                                    'scale':1
                                                }
                                            }

                                        },
                                        "winline13_2":{
                                            "type": "ImageDisplay",
                                            "x": 242,
                                            "y": -6,
                                            "assets": ["winLineStraight"],
                                            //"anchor":[0.5, 0.5],
                                            "lom": {
                                                "landscape": {
                                                    x: 242,
                                                    y: -6,
                                                    'scale':1
                                                },
                                                "portrait": {
                                                    x: 242,
                                                    y: -6,
                                                    'scale':1
                                                }
                                            }

                                        },
                                        "winline13_3":{
                                            "type": "ImageDisplay",
                                            "x": 473,
                                            "y": -6,
                                            "assets": ["winLineStraight"],
                                            //"anchor":[0.5, 0.5],
                                            "lom": {
                                                "landscape": {
                                                    x: 473,
                                                    y: -6,
                                                    'scale':1
                                                },
                                                "portrait": {
                                                    x: 473,
                                                    y: -6,
                                                    'scale':1
                                                }
                                            }

                                        },
                                        "winline13_4":{
                                            "type": "ImageDisplay",
                                            "x": 703,
                                            "y": -171,
                                            "assets": ["winLineUp"],
                                            //"anchor":[0.5, 0.5],
                                            "lom": {
                                                "landscape": {
                                                    x: 703,
                                                    y: -171,
                                                    'scale':1
                                                },
                                                "portrait": {
                                                    x: 703,
                                                    y: -171,
                                                    'scale':1
                                                }
                                            }

                                        },
                                        "winline13_5":{
                                            "type": "ImageDisplay",
                                            "x": 931,
                                            "y": -170,
                                            "assets": ["winLineShort"],
                                            //"anchor":[0.5, 0.5],
                                            "lom": {
                                                "landscape": {
                                                    x: 931,
                                                    y: -170,
                                                    'scale':1
                                                },
                                                "portrait": {
                                                    x: 931,
                                                    y: -170,
                                                    'scale':1
                                                }
                                            }

                                        }
                                    }
                                },
                                "winline14":{
                                    "type": "DisplayObject",
                                    x: 0,
                                    y: 493,
                                    "children": {
                                        "winline14_0":{
                                            "type": "ImageDisplay",
                                            "x": -147,
                                            "y": -336,
                                            "assets": ["winLineShort"],
                                            //"anchor":[0.5, 0.5],
                                            "lom": {
                                                "landscape": {
                                                    x: -147,
                                                    y: -336,
                                                    'scale':1
                                                },
                                                "portrait": {
                                                    x: -147,
                                                    y: -336,
                                                    'scale':1
                                                }
                                            }

                                        },
                                        "winline14_1":{
                                            "type": "ImageDisplay",
                                            "x": 11,
                                            "y": -336,
                                            "assets": ["winLineStraight"],
                                            //"anchor":[0.5, 0.5],
                                            "lom": {
                                                "landscape": {
                                                    x: 11,
                                                    y: -336,
                                                    'scale':1
                                                },
                                                "portrait": {
                                                    x: 11,
                                                    y: -336,
                                                    'scale':1
                                                }
                                            }

                                        },
                                        "winline14_2":{
                                            "type": "ImageDisplay",
                                            "x": 242,
                                            "y": -336,
                                            "assets": ["winLineDown"],
                                            //"anchor":[0.5, 0.5],
                                            "lom": {
                                                "landscape": {
                                                    x: 242,
                                                    y: -336,
                                                    'scale':1
                                                },
                                                "portrait": {
                                                    x: 242,
                                                    y: -336,
                                                    'scale':1
                                                }
                                            }

                                        },
                                        "winline14_3":{
                                            "type": "ImageDisplay",                                     
                                            "x": 473,
                                            "y": -171,
                                            "assets": ["winLineDown"],
                                            //"anchor":[0.5, 0.5],
                                            "lom": {
                                                "landscape": {
                                                    x: 473,
                                                    y: -171,
                                                    'scale':1
                                                },
                                                "portrait": {
                                                    x: 473,
                                                    y: -171,
                                                    'scale':1
                                                }
                                            }

                                        },
                                        "winline14_4":{
                                            "type": "ImageDisplay",                                   
                                            "x": 703,
                                            "y": -6,
                                            "assets": ["winLineStraight"],
                                            //"anchor":[0.5, 0.5],
                                            "lom": {
                                                "landscape": {
                                                    x: 703,
                                                    y: -6,
                                                    'scale':1
                                                },
                                                "portrait": {
                                                    x: 703,
                                                    y: -6,
                                                    'scale':1
                                                }
                                            }

                                        },
                                        "winline14_5":{
                                            "type": "ImageDisplay",                                  
                                            "x": 931,
                                            "y": -6,
                                            "assets": ["winLineShort"],
                                            //"anchor":[0.5, 0.5],
                                            "lom": {
                                                "landscape": {
                                                    x: 931,
                                                    y: -6,
                                                    'scale':1
                                                },
                                                "portrait": {
                                                    x: 931,
                                                    y: -6,
                                                    'scale':1
                                                }
                                            }

                                        }
                                    }
                                },
                                "winline15":{
                                    "type": "DisplayObject",
                                    x: 0,
                                    y: 493,
                                    "children": {
                                        "winline15_0":{
                                            "type": "ImageDisplay",
                                            "x": -147,
                                            "y": -171,
                                            "assets": ["winLineShort"],
                                            //"anchor":[0.5, 0.5],
                                            "lom": {
                                                "landscape": {
                                                    x: -147,
                                                    y: -171,
                                                    'scale':1
                                                },
                                                "portrait": {
                                                    x: -147,
                                                    y: -171,
                                                    'scale':1
                                                }
                                            }

                                        },
                                        "winline15_1":{
                                            "type": "ImageDisplay",
                                            "x": 11,
                                            "y": -170,
                                            "assets": ["winLineStraight"],
                                            //"anchor":[0.5, 0.5],
                                            "lom": {
                                                "landscape": {
                                                    x: 11,
                                                    y: -170,
                                                    'scale':1
                                                },
                                                "portrait": {
                                                    x: 11,
                                                    y: -170,
                                                    'scale':1
                                                }
                                            }

                                        },
                                        "winline15_2":{
                                            "type": "ImageDisplay",
                                            "x": 242,
                                            "y": -335,
                                            "assets": ["winLineUp"],
                                            //"anchor":[0.5, 0.5],
                                            "lom": {
                                                "landscape": {
                                                    x: 242,
                                                    y: -335,
                                                    'scale':1
                                                },
                                                "portrait": {
                                                    x: 242,
                                                    y: -335,
                                                    'scale':1
                                                }
                                            }

                                        },
                                        "winline15_3":{
                                            "type": "ImageDisplay",
                                            "x": 473,
                                            "y": -501,
                                            "assets": ["winLineUp"],
                                            //"anchor":[0.5, 0.5],
                                            "lom": {
                                                "landscape": {
                                                    x: 473,
                                                    y: -501,
                                                    'scale':1
                                                },
                                                "portrait": {
                                                    x: 473,
                                                    y: -501,
                                                    'scale':1
                                                }
                                            }

                                        },
                                        "winline15_4":{
                                            "type": "ImageDisplay",
                                            "x": 703,
                                            "y": -501,
                                            "assets": ["winLineStraight"],
                                            //"anchor":[0.5, 0.5],
                                            "lom": {
                                                "landscape": {
                                                    x: 703,
                                                    y: -501,
                                                    'scale':1
                                                },
                                                "portrait": {
                                                    x: 703,
                                                    y: -501,
                                                    'scale':1
                                                }
                                            }

                                        },
                                        "winline15_5":{
                                            "type": "ImageDisplay",
                                            "x": 931,
                                            "y": -502,
                                            "assets": ["winLineShort"],
                                            //"anchor":[0.5, 0.5],
                                            "lom": {
                                                "landscape": {
                                                    x: 931,
                                                    y: -502,
                                                    'scale':1
                                                },
                                                "portrait": {
                                                    x: 931,
                                                    y: -502,
                                                    'scale':1
                                                }
                                            }

                                        }
                                    }
                                },
                                "winline16":{
                                    "type": "DisplayObject",
                                    x: 0,
                                    y: 493,
                                    "children": {
                                        "winline16_0":{
                                            "type": "ImageDisplay",
                                            "x": -147,
                                            "y": -502,
                                            "assets": ["winLineShort"],
                                            //"anchor":[0.5, 0.5],
                                            "lom": {
                                                "landscape": {
                                                    x: -147,
                                                    y: -502,
                                                    'scale':1
                                                },
                                                "portrait": {
                                                    x: -147,
                                                    y: -502,
                                                    'scale':1
                                                }
                                            }

                                        },
                                        "winline16_1":{
                                            "type": "ImageDisplay",
                                            "x": 11,
                                            "y": -502,
                                            "assets": ["winLineDown"],
                                            //"anchor":[0.5, 0.5],
                                            "lom": {
                                                "landscape": {
                                                    x: 11,
                                                    y: -502,
                                                    'scale':1
                                                },
                                                "portrait": {
                                                    x: 11,
                                                    y: -502,
                                                    'scale':1
                                                }
                                            }

                                        },
                                        "winline16_2":{
                                            "type": "ImageDisplay",
                                            "x": 242,
                                            "y": -336,
                                            "assets": ["winLineDown"],
                                            //"anchor":[0.5, 0.5],
                                            "lom": {
                                                "landscape": {
                                                    x: 242,
                                                    y: -336,
                                                    'scale':1
                                                },
                                                "portrait": {
                                                    x: 242,
                                                    y: -336,
                                                    'scale':1
                                                }
                                            }

                                        },
                                        "winline16_3":{
                                            "type": "ImageDisplay",
                                            "x": 473,
                                            "y": -171,
                                            "assets": ["winLineDown"],
                                            //"anchor":[0.5, 0.5],
                                            "lom": {
                                                "landscape": {
                                                    x: 473,
                                                    y: -171,
                                                    'scale':1
                                                },
                                                "portrait": {
                                                    x: 473,
                                                    y: -171,
                                                    'scale':1
                                                }
                                            }

                                        },
                                        "winline16_4":{
                                            "type": "ImageDisplay",
                                            "x": 703,
                                            "y": -170,
                                            "assets": ["winLineUp"],
                                            //"anchor":[0.5, 0.5],
                                            "lom": {
                                                "landscape": {
                                                    x: 703,
                                                    y: -170,
                                                    'scale':1
                                                },
                                                "portrait": {
                                                    x: 703,
                                                    y: -170,
                                                    'scale':1
                                                }
                                            }

                                        },
                                        "winline16_5":{
                                            "type": "ImageDisplay",
                                            "x": 931,
                                            "y": -170,
                                            "assets": ["winLineShort"],
                                            //"anchor":[0.5, 0.5],
                                            "lom": {
                                                "landscape": {
                                                    x: 931,
                                                    y: -170,
                                                    'scale':1
                                                },
                                                "portrait": {
                                                    x: 931,
                                                    y: -170,
                                                    'scale':1
                                                }
                                            }

                                        }
                                    }
                                },
                                "winline17":{
                                    "type": "DisplayObject",
                                    x: 0,
                                    y: 493,
                                    "children": {
                                        "winline17_0":{
                                            "type": "ImageDisplay",
                                            "x": -147,
                                            "y": -5,
                                            "assets": ["winLineShort"],
                                            //"anchor":[0.5, 0.5],
                                            "lom": {
                                                "landscape": {
                                                    x: -147,
                                                    y: -5,
                                                    'scale':1
                                                },
                                                "portrait": {
                                                    x: -147,
                                                    y: -5,
                                                    'scale':1
                                                }
                                            }

                                        },
                                        "winline17_1":{
                                            "type": "ImageDisplay",
                                            "x": 11,
                                            "y": -170,
                                            "assets": ["winLineUp"],
                                            //"anchor":[0.5, 0.5],
                                            "lom": {
                                                "landscape": {
                                                    x: 11,
                                                    y: -170,
                                                    'scale':1
                                                },
                                                "portrait": {
                                                    x: 11,
                                                    y: -170,
                                                    'scale':1
                                                }
                                            }

                                        },
                                        "winline17_2":{
                                            "type": "ImageDisplay",
                                            "x": 242,
                                            "y": -335,
                                            "assets": ["winLineUp"],
                                            //"anchor":[0.5, 0.5],
                                            "lom": {
                                                "landscape": {
                                                    x: 242,
                                                    y: -335,
                                                    'scale':1
                                                },
                                                "portrait": {
                                                    x: 242,
                                                    y: -335,
                                                    'scale':1
                                                }
                                            }

                                        },
                                        "winline17_3":{
                                            "type": "ImageDisplay",
                                            "x": 473,
                                            "y": -501,
                                            "assets": ["winLineUp"],
                                            //"anchor":[0.5, 0.5],
                                            "lom": {
                                                "landscape": {
                                                    x: 473,
                                                    y: -501,
                                                    'scale':1
                                                },
                                                "portrait": {
                                                    x: 473,
                                                    y: -501,
                                                    'scale':1
                                                }
                                            }

                                        },
                                        "winline17_4":{
                                            "type": "ImageDisplay",
                                            "x": 703,
                                            "y": -501,
                                            "assets": ["winLineDown"],
                                            //"anchor":[0.5, 0.5],
                                            "lom": {
                                                "landscape": {
                                                    x: 703,
                                                    y: -501,
                                                    'scale':1
                                                },
                                                "portrait": {
                                                    x: 703,
                                                    y: -501,
                                                    'scale':1
                                                }
                                            }

                                        },
                                        "winline17_5":{
                                            "type": "ImageDisplay",
                                            "x": 931,
                                            "y": -337,
                                            "assets": ["winLineShort"],
                                            //"anchor":[0.5, 0.5],
                                            "lom": {
                                                "landscape": {
                                                    x: 931,
                                                    y: -337,
                                                    'scale':1
                                                },
                                                "portrait": {
                                                    x: 931,
                                                    y: -337,
                                                    'scale':1
                                                }
                                            }

                                        },
                                    },
                                    "winline18":{
                                        "type": "DisplayObject",
                                        x: 0,
                                        y: 161,
                                        "children": {
                                            "winline18_0":{
                                                "type": "ImageDisplay",
                                                "x": -147,
                                                "y": -170,
                                                "assets": ["winLineShort"],
                                                //"anchor":[0.5, 0.5],
                                                "lom": {
                                                    "landscape": {
                                                        x: -147,
                                                        y: -170,
                                                        'scale':1
                                                    },
                                                    "portrait": {
                                                        x: -147,
                                                        y: -170,
                                                        'scale':1
                                                    }
                                                }
        
                                            },
                                            "winline18_1":{
                                                "type": "ImageDisplay",
                                                "x": 11,
                                                "y": -172,
                                                "assets": ["winLineDown"],
                                                //"anchor":[0.5, 0.5],
                                                "lom": {
                                                    "landscape": {
                                                        x: 11,
                                                        y: -172,
                                                        'scale':1
                                                    },
                                                    "portrait": {
                                                        x: 11,
                                                        y: -172,
                                                        'scale':1
                                                    }
                                                }
        
                                            },
                                            "winline18_2":{
                                                "type": "ImageDisplay",
                                                "x": 242,
                                                "y": -6,
                                                "assets": ["winLineStraight"],
                                                //"anchor":[0.5, 0.5],
                                                "lom": {
                                                    "landscape": {
                                                        x: 242,
                                                        y: -6,
                                                        'scale':1
                                                    },
                                                    "portrait": {
                                                        x: 242,
                                                        y: -6,
                                                        'scale':1
                                                    }
                                                }
        
                                            },
                                            "winline18_3":{
                                                "type": "ImageDisplay",
                                                "x": 473,
                                                "y": -6,
                                                "assets": ["winLineStraight"],
                                                //"anchor":[0.5, 0.5],
                                                "lom": {
                                                    "landscape": {
                                                        x: 473,
                                                        y: -6,
                                                        'scale':1
                                                    },
                                                    "portrait": {
                                                        x: 473,
                                                        y: -6,
                                                        'scale':1
                                                    }
                                                }
        
                                            },
                                            "winline18_4":{
                                                "type": "ImageDisplay",
                                                "x": 703,
                                                "y": -171,
                                                "assets": ["winLineUp"],
                                                //"anchor":[0.5, 0.5],
                                                "lom": {
                                                    "landscape": {
                                                        x: 703,
                                                        y: -171,
                                                        'scale':1
                                                    },
                                                    "portrait": {
                                                        x: 703,
                                                        y: -171,
                                                        'scale':1
                                                    }
                                                }
        
                                            },
                                            "winline18_5":{
                                                "type": "ImageDisplay",
                                                "x": 931,
                                                "y": -170,
                                                "assets": ["winLineShort"],
                                                //"anchor":[0.5, 0.5],
                                                "lom": {
                                                    "landscape": {
                                                        x: 931,
                                                        y: -170,
                                                        'scale':1
                                                    },
                                                    "portrait": {
                                                        x: 931,
                                                        y: -170,
                                                        'scale':1
                                                    }
                                                }
        
                                            }
                                        }
                                    },
                                    "winline19":{
                                        "type": "DisplayObject",
                                        x: 0,
                                        y: 330,
                                        "children": {
                                            "winline19_0":{
                                                "type": "ImageDisplay",
                                                "x": -147,
                                                "y": 158,
                                                "assets": ["winLineShort"],
                                                //"anchor":[0.5, 0.5],
                                                "lom": {
                                                    "landscape": {
                                                        x: -147,
                                                        y: 158,
                                                        'scale':1
                                                    },
                                                    "portrait": {
                                                        x: -147,
                                                        y: 158,
                                                        'scale':1
                                                    }
                                                }
        
                                            },
                                            "winline19_1":{
                                                "type": "ImageDisplay",
                                                "x": 11,
                                                "y": -6,
                                                "assets": ["winLineUp"],
                                                //"anchor":[0.5, 0.5],
                                                "lom": {
                                                    "landscape": {
                                                        x: 11,
                                                        y: -6,
                                                        'scale':1
                                                    },
                                                    "portrait": {
                                                        x: 11,
                                                        y: -6,
                                                        'scale':1
                                                    }
                                                }
        
                                            },
                                            "winline19_2":{
                                                "type": "ImageDisplay",
                                                "x": 242,
                                                "y": -7,
                                                "assets": ["winLineStraight"],
                                                //"anchor":[0.5, 0.5],
                                                "lom": {
                                                    "landscape": {
                                                        x: 242,
                                                        y: -7,
                                                        'scale':1
                                                    },
                                                    "portrait": {
                                                        x: 242,
                                                        y: -7,
                                                        'scale':1
                                                    }
                                                }
        
                                            },
                                            "winline19_3":{
                                                "type": "ImageDisplay",
                                                "x": 473,
                                                "y": -7,
                                                "assets": ["winLineStraight"],
                                                //"anchor":[0.5, 0.5],
                                                "lom": {
                                                    "landscape": {
                                                        x: 473,
                                                        y: -7,
                                                        'scale':1
                                                    },
                                                    "portrait": {
                                                        x: 473,
                                                        y: -7,
                                                        'scale':1
                                                    }
                                                }
        
                                            },
                                            "winline19_4":{
                                                "type": "ImageDisplay",
                                                "x": 703,
                                                "y": -7,
                                                "assets": ["winLineDown"],
                                                //"anchor":[0.5, 0.5],
                                                "lom": {
                                                    "landscape": {
                                                        x: 703,
                                                        y: -7,
                                                        'scale':1
                                                    },
                                                    "portrait": {
                                                        x: 703,
                                                        y: -7,
                                                        'scale':1
                                                    }
                                                }
        
                                            },
                                            "winline19_5":{
                                                "type": "ImageDisplay",
                                                "x": 931,
                                                "y": 156,
                                                "assets": ["winLineShort"],
                                                //"anchor":[0.5, 0.5],
                                                "lom": {
                                                    "landscape": {
                                                        x: 931,
                                                        y: 156,
                                                        'scale':1
                                                    },
                                                    "portrait": {
                                                        x: 931,
                                                        y: 156,
                                                        'scale':1
                                                    }
                                                }
        
                                            }
                                        }
                                    },
                                },
                            }
                        },
                        "winboxesContainer":{
                            "type": "DisplayObject",
                            x: -31,
                            y: -114,
                            "children":{
                                "winBox0":{
                                    "type": "ImageDisplay",
                                    x: 0,
                                    y: 0,
                                    'assets': ["winBox"],
                                    "lom": {
                                        "landscape": {
                                            x: 0,
                                            y: 0,
                                            'scale':1
                                        },
                                        "portrait": {
                                            'x': 0,
                                            'y': 0,
                                            'scale': 1
                                        }
                                    },
                                },
                                "winBox1":{
                                    "type": "ImageDisplay",
                                    x: 0,
                                    y: 0,
                                    'assets': ["winBox"],
                                    "lom": {
                                        "landscape": {
                                            x: 0,
                                            y: 0,
                                            'scale':1
                                        },
                                        "portrait": {
                                            'x': 0,
                                            'y': 0,
                                            'scale': 1
                                        }
                                    },
                                },
                                "winBox2":{
                                    "type": "ImageDisplay",
                                    x: 0,
                                    y: 0,
                                    'assets': ["winBox"],
                                    "lom": {
                                        "landscape": {
                                            x: 0,
                                            y: 0,
                                            'scale':1
                                        },
                                        "portrait": {
                                            'x': 0,
                                            'y': 0,
                                            'scale': 1
                                        }
                                    },
                                },
                                "winBox3":{
                                    "type": "ImageDisplay",
                                    x: 0,
                                    y: 0,
                                    'assets': ["winBox"],
                                    "lom": {
                                        "landscape": {
                                            x: 0,
                                            y: 0,
                                            'scale':1
                                        },
                                        "portrait": {
                                            'x': 0,
                                            'y': 0,
                                            'scale':1
                                        }
                                    },
                                },
                                "winBox4":{
                                    "type": "ImageDisplay",
                                    x: 0,
                                    y: 0,
                                    'assets': ["winBox"],
                                    "lom": {
                                        "landscape": {
                                            x: 0,
                                            y: 0,
                                            'scale':1
                                        },
                                        "portrait": {
                                            'x': 0,
                                            'y': 0,
                                            'scale':1
                                        }
                                    },
                                }
                            },
                            "lom": {
                                "landscape": {
                                    x: -31,
                                    y: -114,
                                    'scale':1
                                },
                                "portrait": {
                                    x: -313,
                                    y: 516,
                                    'scale':0.85                           
                                }
                            }
                        },
                        "winAnimationContainer":{
                            "type":"DisplayObject",
                            x: 92,
                            y: -13,
                            "lom": {
                                "landscape": {
                                    x: 92,
                                    y: -13,
                                    'scale':1
                                },
                                "portrait": {
                                    x: -210,
                                    y: 599,
                                    'scale':0.85                           
                                }
                            }
                        },
                        "symbolsOverlayContainer":{
                            "type":"DisplayObject",
                            x: 92,
                            y: -13,
                        },
                        "winCountupTextContainer": {
                            "type": "DisplayObject",
                            "x": 608,
                            "y": 426,
                            "visible":false,
                            "children":{
                                "winCountupText": {
                                    "type": "TextDisplay",
                                    "id": "winCountupText",
                                    "align":'center',
                                    "x": 0,
                                    "y": 0,
                                    //"width":300,
                                    //"height":300,
                                    "fontFamily":'Arial',
                                    "fontSize": 155,
                                    "fontStyle": 'italic',
                                    "fontWeight": 'bold',
                                    "fill": ['#FFCE35', '#FFFFFF', '#E09101','#FFD13C'], // gradient
                                    "strokeColor": '#4a1850',
                                    "strokeThickness": 2,
                                    "dropShadow": true,
                                    "dropShadowColor": '#000000',
                                    "dropShadowBlur": 4,
                                    "dropShadowAngle": Math.PI / 6,
                                    "dropShadowDistance": 6,
                                    "wordWrap": true,
                                    "wordWrapWidth": 440,
                                    "text":"100.00",
                                    "lom": {
                                        "landscape": {
                                            x: 91,
                                            y: 36,
                                            'scale':1
                                        },
                                        "portrait": {
                                            'x': 91,
                                            'y': 36,
                                            'scale':1
                                        }
                                    },
                                },
                            },
                            "lom": {
                                "landscape": {
                                    x: 608,
                                    y: 426,
                                    'scale':1
                                },
                                "portrait": {
                                    'x': 261,
                                    'y': 995,
                                    'scale': 0.85
                                }
                            },
                        },
                        "potsContainer": {
                            //"id": "potsContainer",
                            "type": "DisplayObject",
                            x: 0,
                            y: 0,
                            "children": {
                                "bronzePot": {
                                    "type": "ImageDisplay",
                                    "x": 413,
                                    "y": 81,
                                    "assets": ["bronzePot"],
                                    "children":{
                                        "bronzePotText": {
                                            "type": "TextDisplay",
                                            "id": "bronzePotText",
                                            "x": 83,
                                            "y": 31,
                                            "align":'center',
                                            "fontFamily":'Arial',
                                            "fontSize": 75,
                                            "fontStyle": 'italic',
                                            "fontWeight": 'bold',
                                            "fill": ['#701800','#FFFFFF', '#FFC8A7', '#BF582B', '#FF904F'], // gradient
                                            "strokeColor": '#4a1850',
                                            "strokeThickness": 2,
                                            "dropShadow": false,
                                            "dropShadowColor": '#000000',
                                            "dropShadowBlur": 4,
                                            "dropShadowAngle": Math.PI / 6,
                                            "dropShadowDistance": 6,
                                            "wordWrap": true,
                                            "wordWrapWidth": 440,
                                            "text":"0.00",
                                            "lom": {
                                                "landscape": {
                                                    x: 83,
                                                    y: 31,
                                                    'scale':1
                                                },
                                                "portrait": {
                                                    'x': 83,
                                                    'y': 31,
                                                    'scale':1
                                                }
                                            },
                                        },
                                    },
                                    //"anchor":[0.5, 0.5],
                                    "lom": {
                                        "landscape": {
                                            x: 413,
                                            y: 81,
                                            'scale':1
                                        },
                                        "portrait": {
                                            'x': 0,
                                            'y': 80,
                                            'scale': 0.85
                                        }
                                    },
                                },
                                "goldPot": {
                                    "type": "ImageDisplay",
                                    "x": 761,
                                    "y": 81,
                                    "assets": ["goldPot"],
                                    "children":{
                                        "goldPotText": {
                                            "type": "TextDisplay",
                                            "id": "goldPotText",
                                            "align":'center',
                                            "x": 91,
                                            "y": 36,
                                            "fontFamily":'Arial',
                                            "fontSize": 75,
                                            "fontStyle": 'italic',
                                            "fontWeight": 'bold',
                                            "fill": ['#FFCE35', '#FFFFFF', '#E09101','#FFD13C'], // gradient
                                            "strokeColor": '#4a1850',
                                            "strokeThickness": 2,
                                            "dropShadow": false,
                                            "dropShadowColor": '#000000',
                                            "dropShadowBlur": 4,
                                            "dropShadowAngle": Math.PI / 6,
                                            "dropShadowDistance": 6,
                                            "wordWrap": true,
                                            "wordWrapWidth": 440,
                                            "text":"0.00",
                                            "lom": {
                                                "landscape": {
                                                    x: 91,
                                                    y: 36,
                                                    'scale':1
                                                },
                                                "portrait": {
                                                    'x': 91,
                                                    'y': 36,
                                                    'scale':1
                                                }
                                            },
                                        },
                                    },
                                    "lom": {
                                        "landscape": {
                                            x: 761,
                                            y: 81,
                                            'scale':1
                                        },
                                        "portrait": {
                                            'x': 360,
                                            'y': 80,
                                            'scale': 0.85
                                        }
                                    },
                                },
                                "silverPot": {
                                    "type": "ImageDisplay",
                                    "x": 1131,
                                    "y": 81,
                                    "assets": ["silverPot"],
                                    "children":{
                                        "silverPotText": {
                                            "type": "TextDisplay",
                                            "id": "silverPotText",
                                            "align":'center',
                                            "x": 83,
                                            "y": 31,
                                            "fontFamily":'Arial',
                                            "fontSize": 75,
                                            "fontStyle": 'italic',
                                            "fontWeight": 'bold',
                                            "fill": ['#AFE0F4', '#ffffff', '#49839E', '#AADCF1'], // gradient
                                            "strokeColor": '#4a1850',
                                            "strokeThickness": 2,
                                            "dropShadow": false,
                                            "dropShadowColor": '#000000',
                                            "dropShadowBlur": 4,
                                            "dropShadowAngle": Math.PI / 6,
                                            "dropShadowDistance": 6,
                                            "wordWrap": true,
                                            "wordWrapWidth": 440,
                                            "text":"0.00",
                                            "lom": {
                                                "landscape": {
                                                    x: 83,
                                                    y: 31,
                                                    'scale':1
                                                },
                                                "portrait": {
                                                    'x': 83,
                                                    'y': 31,
                                                    'scale':1
                                                }
                                            },
                                        },
                                    },
                                    "lom": {
                                        "landscape": {
                                            x: 1131,
                                            y: 81,
                                            'scale':1
                                        },
                                        "portrait": {
                                            'x': 750,
                                            'y': 80,
                                            'scale': 0.85
                                        }
                                    },
                                },

                            }
                        },
                        "gameTitle1": {
                            "type": "ImageDisplay",
                            "id": "gameTitle1",
                            x: 1462,
                            y: 102,
                            'assets': ["gameTitle1"],
                            "lom": {
                                "landscape": {
                                    x: 1462,
                                    y: 102,
                                    'scale':1
                                },
                                "portrait": {
                                    'x': 340,
                                    'y': 540,
                                    'scale':1
                                }
                            },
                        },
                        "controlPanel": {
                            "type": "DisplayObject",
                            "children": {
                                "barLow": {
                                    "type": "ImageDisplay",
                                    "x": 0,
                                    "y": 825,
                                    'scale':1,
                                    "assets": ["barLow"],
                                    "lom": {
                                        "landscape": {
                                            x: 0,
                                            y: 825,
                                            'scale': 1
                                        },
                                        "portrait": {
                                            'x': 0,
                                            'y': 1666,
                                            'scale': 1
                                        }
                                    },
                                },
                                "barTop": {
                                    "type": "ImageDisplay",
                                    "x": 0,
                                    "y": 0,
                                    'scale': 1,
                                    "assets": ["barTop"],
                                    "lom": {
                                        "landscape": {
                                            x: 0,
                                            y: 0,
                                            'scale': 1
                                        },
                                        "portrait": {
                                            'x': 0,
                                            'y': 0,
                                            'scale': 1
                                        }
                                    },
                                },
                                "spinButtonShadow": {
                                    "type": "ImageDisplay",
                                    "x": 1580,
                                    "y": 752,
                                    'scale': 1,
                                    "assets": ["spinButtonShadow"],
                                    "lom": {
                                        "landscape": {
                                            x: 1580,                                                                        
                                            y: 752,
                                            'scale': 1
                                            
                                        },
                                        "portrait": {
                                            'x': 406,
                                            'y': 1504,
                                            'scale': 0.85
                                        }
                                    },
                                },
                                "gambleButton": {
                                    "type": "Button",
                                    "x": 958,
                                    "y": 917,
                                    "assets": ["gambleButton"],
                                    "lom": {
                                        "landscape": {
                                            x: 958,                                                                        
                                            y: 917,
                                            'scale': 1
                                        
                                        },
                                        "portrait": {
                                            'x': 58,
                                            'y': 1745,
                                            'scale': 0.85
                                            
                                        }
                                    },
                                },
                                "turboButton": {
                                    "type": "Button",
                                    "x": 1258,
                                    "y": 917,
                                    "assets": ["turboButton"],
                                    "lom": {
                                        "landscape": {
                                            x: 1258,                                                                        
                                            y: 917,
                                            'scale': 1
                                            
                                        },
                                        "portrait": {
                                            'x': 758,
                                            'y': 1753,
                                            'scale': 0.85
                                            
                                        }
                                    },
                                },
                                "spinButton": {
                                    "type": "Button",
                                    "x": 1587,
                                    "y": 756,   
                                    "assets": ["spinButton"],
                                    "lom": {
                                        "landscape": {
                                            x: 1587,                                                                        
                                            y: 756,
                                            'scale': 1
                                        
                                        },
                                        "portrait": {
                                            'x': 411,
                                            'y': 1510,
                                            'scale':0.85
                                            
                                        }
                                    },
                                },
                                "autoplayButton": {
                                    "type": "Button",
                                    "x": 304,
                                    "y":928,
                                    "assets": ["autoButton"],
                                    "lom": {
                                        "landscape": {
                                            x: 304,
                                            y: 928,
                                            'scale': 1
                                        
                                        },
                                        "portrait": {
                                            'x': 758,
                                            'y': 1509,
                                            'scale': 0.85
                                            
                                        }
                                    },
                                },
                            
                                
                                "stakeButton": {
                                    "type": "Button",
                                    "x": 21,
                                    "y": 928,
                                    "assets": ["stakeButton"],
                                    "lom": {
                                        "landscape": {
                                            x: 21,
                                            y: 928,
                                            'scale': 1
                                        
                                        },
                                        "portrait": {
                                            'x': 58,
                                            'y': 1509,
                                            'scale': 0.85
                                            
                                        }
                                    },
                                },
                                "soundButton": {
                                    "type": "Button",
                                    "x": 1643,
                                    "y":25,
                                    "assets": ["uiSound"],
                                    "lom": {
                                        "landscape": {
                                            x: 1643,
                                            y: 25,
                                            'scale': 1
                                        
                                        },
                                        "portrait": {
                                            'x': 837,
                                            'y': 27,
                                            'scale': 0.85
                                            
                                        }
                                    },
                                },
                                "menuButton": {
                                    "type": "Button",
                                    "x": 1830,
                                    "y": 16,
                                    "assets": ["uiMenuButton"],
                                    "lom": {
                                        "landscape": {
                                            x: 1830,
                                            y: 16,
                                            'scale': 1
                                    
                                        },
                                        "portrait": {
                                            'x': 988,
                                            'y': 19,
                                            'scale': 0.85
                                        
                                        }
                                    },

                                },
                                "settingsButton": {
                                    
                                    "type": "Button",
                                    "x": 1736,
                                    "y": 16,
                                    "assets": ["settingsButton"],
                                    "lom": {
                                        "landscape": {
                                            x: 1736,
                                            y: 16,
                                            'scale': 1
                                            
                                        },
                                        "portrait": {
                                            'x': 914,
                                            'y': 19,
                                            'scale': 0.85
                                            
                                        }
                                    },

                                },
                                
                                
                                
                            }
                        },
                        
                        "screenCover":
                        {
                            "type":"DisplayObject",
                            x: 0,
                            y: 0,
                            width:1920,
                            height:1920,
                            fillColor:"0x000000",
                        }
                        

                    },
                    "loadingScreen":{

                        "loadingBackGroundLandscape": {
                            "type": "ImageDisplay",
                            "id": "loadingBackGroundLandscape",
                            x: 0,
                            y: 0,
                            'assets': ["loadingLandscape"],
                            "lom": {
                                "landscape": {
                                    x: 0,
                                    y: 0,
                                    'scale':1,
                                    
                                },
                                "portrait": {
                                    'x': 3000,
                                    'y': 0,
                                    'scale': 1,
                                    
                                }
                            },
                        },
                        "loadingBackGroundPortrait": {
                            "type": "ImageDisplay",
                            "id": "loadingBackGroundPortrait",
                            x: 0,
                            y: 0,
                            'assets': ["loadingPortrait"],
                            "lom": {
                                "landscape": {
                                    x: 3000,
                                    y: 0,
                                    'scale':1,
                                    
                                },
                                "portrait": {
                                    'x': 0,
                                    'y': 0,
                                    'scale': 1,
                                    
                                }
                            },
                        },
                    },
                },
            },
            "build": {
                "internal": true,
                "test-server": false,
                "deploymentServer": false
            },
            "gamePhrases": {

                "MSG_loading": "Loading. Please wait...",
                "MSG_SPIN": "PRESS THE SPIN BUTTON TO PLAY ",
                "MSG_BALANCE": "BALANCE:",
                "MSG_STAKE": "STAKE",
                "MSG_TOTAL_WIN": "TOTAL WIN:",
                "MSG_BIG_WIN": "BIG WIN",
                "MSG_CONGRATULATIONS": "CONGRATULATIONS!",
                "MGS_YOU_WON": "YOU HAVE WON"

            }
        }
    }
}
