 class TestConstructor {
    public input:string;
    constructor (input:string) {
        this.input = input;
    }
}
// same same
class TestConstructor1 {
    constructor (public input:string) {
        this.input = input;
    }
}





class TestConstructor2 {
    private _fullname:string;

    public get fullname():string {
        return this._fullname;
    }

    public set fullname(value:string) {
        this._fullname = value;
    }

    constructor (public input:string) {
        this.input = input;
        this.fullname = input;
    }
}

class run2 {
    
    public print():void {
        console.warn("constructor");
        let testConstructor:TestConstructor2 = new TestConstructor2("ab");
        let a:string = testConstructor.input;
        let b:string = testConstructor.fullname;
        console.log(a, b);
    }
}

export {run2}