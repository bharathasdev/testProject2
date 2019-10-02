export default class MockData{
  
    // ONLY BASE GAME WIN
    public static winData = {
        "totalWin":25,
        "baseGameWin":25,
        "bonusWin":0,
        "winlines":[
            {
                "lineId":5,
                "numWinSymbols":4,
                "win":2,
                "payoutIndex":14

            },
            
            {
                "lineId":8,
                "numWinSymbols":3,
                "win":5,
                "payoutIndex":14
            },
            {
                "lineId":11,
                "numWinSymbols":3,
                "win":7,
                "payoutIndex":14
            },
            {
                "lineId":18,
                "numWinSymbols":4,
                "win":11,
                "payoutIndex":28
            }
        ]
    }
 
    /*
    // ONLY £10 POUND WIN ON WHEEL
    public static winData = {
        "awardType":"Cash", // FS, 
        "bonusType":"Wheel",
        "hasBonusWin":true,
        "totalWin":10,
        "baseGameWin":0,
        "bonusWin":10,
        "winlines":[]
    }*/
}