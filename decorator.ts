//class decorator with parameter.
function ClassDecorator(target) {
    target.prototype.name = "Footall";
    console.log(`Name of the function is ${target.name}`); // Print the target name
}

@ClassDecorator

class game {
    name: string; // define a param with value
}

var player = new game(); // instantiate and access the value of proprty
console.log(`Property value of name is ${player.name} `);


//method decorator with parameter

 class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }

    @enumerable(false) // Decor with property value;
    greet(abc) {
       console.log(`Property key is ${descriptor.enumerable} `) // Console the value of key
    }
}

function enumerable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log(`Property key is ${propertyKey} `) // Console the value of key
        descriptor.enumerable = value;
    };
}
//Check the output
document.write("Please check the console to view the Decorator");

