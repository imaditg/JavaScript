class Group {

    #members = [];

    add(value) {
        if (!this.has(value)) {
            this.#members.push(value);
        }
    }

    has(value) {
        return this.#members.includes(value);
    }



    delete(value) {
        this.#members = this.#members.filter(v => v !== value);
    }

    static from(value) {
        let group = new Group;
        for (let element of value) {
            group.add(element);
        }
        return group;
    }
}

let mini = new Group();

mini.add(5);

console.log(mini.has(5));

mini.add(10);

let mega = Group.from([10,20,30]);

console.log(mega.has(10))
