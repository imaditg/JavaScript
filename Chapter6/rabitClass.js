class Rabbit{
    constructor(type){
        this.type = type;
    }
    speak(line){
      let lines = `The ${this.type} rabbit say ${line}`;
      return lines
    }
}

let BlackRabbit = new Rabbit("Black Rabbit");

console.log(BlackRabbit.type);

console.log(BlackRabbit.speak);

console.log(BlackRabbit.speak());

console.log(BlackRabbit.speak("i am black beauty"));