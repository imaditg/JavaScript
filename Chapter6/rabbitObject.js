let Rabbit = {
    color: "white",
    numberOfRabbits : 5,
}

let blackRabbit = Object.create(Rabbit);

console.log(blackRabbit.color);

console.log(blackRabbit.numberOfRabbits);

blackRabbit.nature = "Agressive";

console.log(blackRabbit.nature);

console.log(Rabbit.nature);