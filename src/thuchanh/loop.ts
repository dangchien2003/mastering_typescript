class TestFor {
    public run(): void {
        console.warn("for");
        var arr:any = [4, "string"]
        console.log("type 1");
        for(let i = 0; i < arr.length; i++) {
            console.log(i, arr[i]);
        }
        console.log("type 2");

        for(let value of arr) {
            console.log(value)
        }
        console.log("type 3");
        for(let index in arr) {
            console.log(index, arr[index]);
        }
    }
}


class TestWhile {
    index:number = 0
    run(): void {
        let i:number = this.index;;
        console.log("while");
        while(i < 5) {
            console.log(     i);
            ++i;
        }
    }
}



export {TestFor, TestWhile}