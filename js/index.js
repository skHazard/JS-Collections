var students = ["Ivan", "Maria", "Petro"];

for (var i = 0; i < students.length; i++) {
    console.log(students[i]);
}

//creating dictionary with keys and values
var persons = {
    'AX123': 'Vasyl',
    'AX124': 'Inna',
    'AX125': 'Maria',
    'AX523': 'Max',
    'AX623': 'Jack'
};

console.log(persons['AX125']);

// itetrator
var counter = 0;
for (var key in persons){
    counter++;
}
console.log(counter);

//creating object
var pushok = {
    name: 'Pushok',
    color: 'white'
}

var murchik = {
    name: 'Murchik',
    color: 'brown'
}

var ryzyk = {
};

ryzyk.name = 'Ryzhyk';
ryzyk.color = 'red';

function Cat(name, color){
    this.name = name;
    this.color = color;
    this.run = function(){
        console.log(this.name + ' has run');
    }
    return this;
}

var barsik = new Cat('Barsik', 'grey');
barsik.run();
var andrijko = new Cat('Andrijko', 'black');
andrijko.run();
