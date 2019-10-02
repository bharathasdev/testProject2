import A from './A';

export default class B extends A {
 
    private a:number = 20;
 
    public constructor() {
        super();
        console.log("B::constructor");
    }
 
    
    public method1() {
        console.log("B::method() a = " + this.a);
    }
}