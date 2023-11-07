enum Colour {

    B = 6
}



class TestEnum {
    public run() : void{
        console.warn("enum");
        let color = 7;
        if(color == Colour.B) {
            console.log(true);
        }else {
            console.log(false);
        }
    }
}

export  {TestEnum, Colour}