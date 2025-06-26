class secretiveObject{
    #getMySecret(){
        return "I have no super power";
    }
    code(){
        let line = this.#getMySecret();
        return line;
    }
}

let supper = new secretiveObject();

console.log(supper.code());
