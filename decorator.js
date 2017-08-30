var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//class decorator with parameter.
function ClassDecorator(target) {
    target.prototype.name = "Footall";
    console.log("Name of the function is " + target.name); // Print the target name
}
var game = (function () {
    function game() {
    }
    game = __decorate([
        ClassDecorator
    ], game);
    return game;
}());
var player = new game(); // instantiate and access the value of proprty
console.log("Property value of name is " + player.name + " ");
//method decorator with parameter
var Greeter = (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function (abc) {
        console.log("Property key is " + enumerable + " "); // Console the value of key
    };
    __decorate([
        enumerable(false) // Decor with property value;
    ], Greeter.prototype, "greet");
    return Greeter;
}());
function enumerable(value) {
    return function (target, propertyKey, descriptor) {
        console.log("Property key is " + propertyKey + " "); // Console the value of key
        descriptor.enumerable = value;
    };
}
//Check the output
document.write("Please check the console to view the Decorator");
