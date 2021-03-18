//pirmas

function Notebook (totalPages, usedPages) {

    this.totalPages = totalPages;
    this.usedPages = usedPages;
}

Notebook.prototype.use = function(used){
    this.usedPages += used;
    console.log("Panaudoti puslapiai = " + this.usedPages);
}

Notebook.prototype.leftPages = function(){
    console.log("Laisvi puslapiai = " + (this.totalPages - this.usedPages));
}

const notebook1 = new Notebook(100, 12);

notebook1.use(3);
notebook1.leftPages();

const notebook2 = new Notebook(60, 5);

const notebook3 = new Notebook(30, 1);

console.log("notebook2 = ");
console.dir(notebook2);
console.log("notebook3 = ");
console.dir(notebook3);


// antras
class NotebookClass {

    constructor(totalPages, usedPages){
        this.totalPages = totalPages;
        this.usedPages = usedPages;
    }

    static use(used){
        this.usedPages += used;
        console.log("Panaudoti puslapiai = " + this.usedPages);
    }

    static leftPages() {
        console.log("Laisvi puslapiai = " + (this.totalPages - this.usedPages));
    }

    get getInfo(){
        console.log("This notebook has total pages of " + this.totalPages + ". Used pages: " + this.usedPages)
    }

    set add(totalPages){
        this.totalPages = totalPages;
        console.log(this.totalPages);
    }
}

const newNotebook = new NotebookClass(12, 4);

newNotebook.getInfo;

newNotebook.add = 25;


// trecias
const notebookCreate = {
    use(used){
        this.usedPages += used;
        console.log("Panaudoti puslapiai = " + this.usedPages);
    },

    leftPages() {
        console.log("Laisvi puslapiai = " + (this.totalPages - this.usedPages));
    },

    get getInfo(){
        console.log("This notebook has total pages of " + this.totalPages + ". Used pages: " + this.usedPages)
    },

    set add(totalPages){
        this.totalPages = totalPages;
        console.log(this.totalPages);
    }
}

const newerNotebook = Object.create(notebookCreate);

newerNotebook.totalPages = 55;
newerNotebook.usedPages = 15;

newerNotebook.leftPages();

console.dir(newerNotebook);


// vehicle paveldejimas per constructor

const Vehicle = function (wheelCount, speed) {

    this.wheelCount = wheelCount;
    this.speed = speed;
}

Vehicle.prototype.addSpeed = function (){
    this.speed += 10;
}

Vehicle.prototype.break = function (){
    this.speed -= 5;
}


const Car = function (wheelCount, speed) {
    Vehicle.call(this, wheelCount, speed);
}

Car.prototype = Object.create(Vehicle.prototype);

Car.prototype.blink = function () {
    console.log("blink, blink");
}


const Bicycle = function(wheelCount, speed) {
    Vehicle.call(this, wheelCount, speed);
}

Bicycle.prototype = Object.create(Vehicle.prototype);

Bicycle.prototype.beep = function () {
    console.log("beep, beep");
}



const audi = new Car(4, 20);

const dviratis = new Bicycle(2, 15);


audi.addSpeed();
audi.blink();
dviratis.break();
dviratis.beep();

console.log("audi = ");
console.dir(audi);
console.log("dviratis = ");
console.dir(dviratis);

// Vehicle paveldejimmas per Class

class Vehicle2 {

    constructor(wheelCount, speed){
        this.wheelCount = wheelCount;
        this.speed = speed;
    }

    addSpeed(){
        this.speed += 10;
    }

    break(){
        this.speed -= 5;
    }
}

class Car2 extends Vehicle2{

    constructor(wheelCount, speed){
        super(wheelCount, speed);
    }

    blink(){
        console.log("blink, blink");
    }
}

class Bicycle2 extends Vehicle2{

    constructor(wheelCount, speed){
        super(wheelCount, speed);
    }

    beep(){
        console.log("beep, beep");
    }
}

const volvo = new Car2(6, 60);
const dviratis2 = new Bicycle2(4, 25);

volvo.addSpeed();
volvo.blink();
dviratis2.break();
dviratis2.beep();

console.log("volvo = ");
console.dir(volvo);
console.log("dviratis2 = ");
console.dir(dviratis2);

// Vehicle paveldejimas Object.create

const Vehicle3  = {

    break(){
        this.speed -= 5;
    },

    addSpeed(){
        this.speed += 10;
    },

    par(wheelCount, speed){
        this.wheelCount = wheelCount;
        this.speed = speed;
    }
}

const Car3 = Object.create(Vehicle3)

Car3.par = function (wheelCount, speed) {
    Vehicle3.par.call(this, wheelCount, speed);
}

Car3.blink = function () {
    console.log("blink, blink");
}


const Bicycle3 = Object.create(Vehicle3)

Bicycle3.par = function (wheelCount, speed) {
    Vehicle3.par.call(this, wheelCount, speed);
}

Bicycle3.beep = function () {
    console.log("beep, beep");
}


const bmw = Object.create(Car3);
bmw.par(4,100);

const dviratis3 = Object.create(Bicycle3);
dviratis3.par(2,5);

bmw.addSpeed();
bmw.blink();
dviratis3.break();
dviratis3.beep();

console.log("bmw = ");
console.dir(bmw);
console.log("dviratis3 = ");
console.dir(dviratis3);