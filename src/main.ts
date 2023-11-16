
import * as TestEnum from './thuchanh/enum';
import {TestTupple} from './thuchanh/tupple';
import {TestFor, TestWhile} from './thuchanh/loop';
import {GenericService, Person} from './thuchanh/class_TEntity'


import {
    run2
} from './thuchanh/constructor';

import {Person1} from './thuchanh/person';

class Application {
    
    public static run(): void {
        let testEnum = new TestEnum.TestEnum();
        let testTupple = new TestTupple();
        let testFor = new TestFor();
        let testWhile = new TestWhile();
        let testConstructor = new run2();

        let person = new Person();

        let person1 = new Person1();
        person1.printf();
        let genericService: GenericService<Person>  = new GenericService<Person>();

        
        person.name = "chien12";
        genericService.add(person);
        console.log(genericService.getLast().name);
        testConstructor.print();
        testEnum.run();
        testTupple.run();
        testFor.run();
        testWhile.run();
        console.log("Hello, this message is from the application");
    }
}

Application.run();
