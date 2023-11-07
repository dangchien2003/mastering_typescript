

export class GenericService<TEntity> {
    private entities:Array<TEntity>;
    constructor () {
        console.warn("TEntity");
        this.entities = new Array<TEntity>();
    }

    public add(entity:TEntity):void {
        
        
        this.entities.push(entity);
    }
    public getLast():TEntity {
        return this.entities.pop();
    }
}

export class Person{
    public _name:string = "abc";
    public get name():string {
        return this._name;
    }

    public set name(value:string) {
        this._name = value
    }
}

