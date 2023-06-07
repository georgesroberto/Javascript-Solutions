//<!--OBJECTS-->

/*
*Creating and accessing of objects
*/
let duck = {
    name: "Aflac",
    numLegs: 2
};
console.log(duck.name);//Dot notation accesses the duck name

//<!--INHERITANCE-->

/*Overridind Inherited Methods
*Override the fly() method for Penguin so that it returns the string Alas, this is a flightless bird.

*/
function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

let penguin = new Penguin();
console.log(penguin.fly()); //ouptuts 'I am flying!'

// Only change code below this line
Penguin.prototype.fly = function(obj){
    return "Alas, this is a flightless bird."
}
// Only change code above this line
console.log(penguin.fly());//outputs 'Alas, this is a flightless bird'

//<!--MODULES-->

/*
*Create a module named funModule to wrap the two mixins isCuteMixin and singMixin. *funModule should return an object.
*/

let funModule = ( function(obj) {
    return {
        isCuteMixin: function(obj) {
            obj.isCute = function() {
            return true;
            };
        },

        singMixin: function(obj) {
            obj.sing = function() {
            console.log("Singing to an awesome tune");
            };
        }
    };
}) ();

//"(function () {}) ()"--> This is called an IIFE (Immediate Invoked Function Expression) 
funModule.singMixin(penguin)
penguin.sing();