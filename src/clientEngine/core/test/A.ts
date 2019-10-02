export default class A {
 
    private a:number = 10;

    public constructor() {
        console.log("A::constructor");
        //this.method1();
    }
 
    public method1() {
        console.log("A::method(): a = " + this.a);
    }
}