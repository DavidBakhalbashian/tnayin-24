// class Flower {
//   static quantity = 0
//   constructor(name, grow, smell, count, color) {
//     this.name = name
//     this.grow = grow;
//     this.smell = smell
//     this.color = color
//     this.count = count
//     Flower.quantity++
//   }
// }

// class Lotus extends Flower {

// }
// class Jasmine extends Flower {

// }

// class Sunflower extends Flower {

// }
// class Daisy extends Flower {

// }
// class Rose extends Flower {

// }
// class Balsam extends Flower {

// }



// let Evelyn = [
//   new Daisy("Daisy", 'Fast', "Sweet", 3, "White"),
//   new Jasmine("Jasmine", "Slowly", "Nice", 5, "Blue"),
//   new Lotus("Lotus", "Norm", "Sweet", 7, "Green")
// ]
// let Ava = [
//   new Rose("Rose", "Fast", "Dark", 5, "Red"),
//   new Balsam("Balsam", "Quick", "Norm", 7, "Blue"),
//   new Jasmine("Jasmine", "Slowly", "Dark", 11, "green")
// ]; 
// let aNewDay = [
//   new Daisy("Daisy", 'Fast', "Sweet", 12, "White"),
//   new Lotus("Lotus", "Norm", "Sweet", 16, "Green"),
//   new Sunflower("Sunflower", "Fast", "sweet", 21, "Yellow")

// ];
// console.log(Flower.quantity);

// xndir2
// class Vehicle {
//   name;
//   color;
//   wheels;

//   _speed ;
//   _horsewPower ;

//   #frame
//   #breaks
//   #wheeltype
// }
// class Car extends Vehicle {
//   headlightColor;
//   steeringWheel;
//   _engine;
//   set engine(value) {
//     this._engine = value
//   }
//   get engine() {
//     return this._engine
//   }
//   set horsewPower(value){
//     if(value > 1500){
//       value = `Avtomeqenayi max ciauj ${1500}`
//     }
//     this._horsewPower = value
//    }
//    get horsewPower(){
//     return _horsewPower
//    }
//    set speed(value){
//     if(value > 800){
//       value = `Avtomeqenan max aragutyun ${800}km/h`
//     }
//     this._speed = value
//    }
//    get speed(){
//     return this._speed 
//    }
//    #typeofDrive
// }
// class Hecaniv extends Vehicle{
// pedal;
// sitter;

// _speeds;
// set speed(value){
//   if(value > 50){
//     value = `hecanivi aragutyun ${50}km/h`
//   }
//   this._speed = value
//  }
//  get speed(){
//   return this._speed 
//  }
//  set horsewPower(value){
//   if(value > 70){
//     value = `Hecaniv max ciauj ${70}`
//   }
//   this._horsewPower = value
//  }
//  get horsewPower(){
//   return _horsewPower
//  }

// set speeds(value){
//   if(value > 7){
//     value = `hecaniv ${value}  skorost chuni`
//   }
//   this._speeds = value
  
// }
// get speeds(){
//     return this._speeds
// }
// #reel
// }
// let b = new Car()
// b.color = "karmir"
// b.steeringWheel = 1;
// b.horsewPower = 1400;
// b.color = "dexin"
// b.headlightColor = "sev"
// b.name = "mercedess"
// b.wheels = 4
// b.speed = 900
// b.engine = 4.5
// console.log(b);




// let g = new Hecaniv()

// g.speeds = 10
// g.color ="sev"
// g.pedal = 2
// g.name = "rembo"
// g.wheels = 2
// g.sitter = 1
// g.horsewPower = 100
// g.speed = 40


// console.log(g);


// class ArramSum extends Array{
//   sum(){
    
//     let a = 0 ;
//     for(let i = 0;i<this.length;i++){
//       if(typeof this[i] === 'number'){
//         a += this[i]
//       }   
//     }
//     return a
   
//   }

// }

// let ars = new ArramSum(6,'3',10,666,75,86,99,'100')
// console.log(ars.sum());



// // homework 4

// let str = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
 
// String.prototype.toUpper =  function(){
//  let strArray = this.split(" ");

//  strArray = strArray.map((str) => {
//    return str.charAt(0).toUpperCase() + str.substring(1);
//  });

//  return strArray.join(" ");
// }


// console.log(str.toUpper());