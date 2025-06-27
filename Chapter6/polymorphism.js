//Polymorphism with class


class Animal{
    speak(){
        return "Animals make a sound";
    }
}

class Dog extends Animal{
    speak(){
        return "The Dog barks";
    }
}

class Sparrow extends Animal{
    speak(){
        return "The Sparrow Tweet"
    }
}

class Wolf extends Animal{
    speak(){
        return "The Wolf howl"
    }
}

let Animals = [new Animal(),new Dog(),new Sparrow(),new Wolf()];

Animals.forEach(i => console.log(i.speak()));