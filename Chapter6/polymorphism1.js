//Function based Polymorphism

function speaks(voice){
    voice.speak();
}

let bird = {
    speak(){
        console.log("Tweet Tweet");
    }
}

let dog = {
    speak(){
    console.log("Woof Woof");
    }
}

speaks(bird);

speaks(dog);