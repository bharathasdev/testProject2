export default class GameState{

    private isGIP:boolean = false;
    private currentState:number = 0;
    // States of the game
    public static IDLE  = 0;
    public static PLAY_REQUEST_SENT  = 1;
    public static PLAY_RESPONSE_RECEIVED  = 2;
    public static SPINNING  = 3;
    public static SPIN_FINISH  = 4;
    public static PROCESS_WINLINES  = 5;
    public static CLOSE_REQUEST_SENT  = 6;
    public static CLOSE_RESPONSE_RECEIVED  = 7;
    public static PROCESSING_FS_INTRO  = 8;
    public static PROCESSING_FS_BONUS  = 9;
    public static PROCESSING_FS_OUTRO  = 10;  

    public static PROCESSING_BONUS_INTRO  = 11;
    public static PROCESSING_BONUS  = 12;
    
    public static PROCESSING_BONUS_OUTRO  = 13;
    
    public static MAX_WIN_REACHED  = 14;
    public static ERROR_CONNECTION  = 21;

    public playStates = [];
    public slotStates = [];

    public accountInfo = {
        "balance":1000,
        "stake":1,
        "totalWin":1
    }

    public getCurrentBalance()
    {
        return this.accountInfo.balance;
    }

    public getCurrentWin()
    {
        return this.accountInfo.totalWin;
    }

    public getCurrentStake()
    {
        return this.accountInfo.stake;
    }
}
