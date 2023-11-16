
import * as TestEnum from './thuchanh/enum';
import {TestTupple} from './thuchanh/tupple';
import {TestFor, TestWhile} from './thuchanh/loop';
import {GenericService, Person} from './thuchanh/class_TEntity'


import {
    run2, TestConstructor1
} from './thuchanh/constructor';

import {iperson} from './thuchanh/iPerson';
import {Person1} from './thuchanh/person';

import {objectFactory} from './thuchanh/objectFactory';

class Application {
    
    public static run(): void {
        // let testEnum = new TestEnum.TestEnum();
        // let testTupple = new TestTupple();
        // let testFor = new TestFor();
        // let testWhile = new TestWhile();
        // let testConstructor = new run2();

        // let person = new Person();

        // let iperson:iperson = new Person1();
        // iperson.printf();
        // let genericService: GenericService<Person>  = new GenericService<Person>();

        
        // person.name = "chien12";
        // genericService.add(person);
        // console.log(genericService.getLast().name);
        // testConstructor.print();
        // testEnum.run();
        // testTupple.run();
        // testFor.run();
        // testWhile.run();
        // console.log("Hello, this message is from the application");

        let constructor1:TestConstructor1 = objectFactory.create<TestConstructor1>(TestConstructor1, "in");
        console.log(constructor1);
    }
}

Application.run();
