class Group {
    #members = [];

    add(value) {
        if (!(this.has(value))) {
            this.#members.push(value);
        }
        return this.#members;
    }

    customFilter(action) {
        let array = [], i = 0;
        for (let element of this.#members) {
            if (action(element)) {
                array[i] = element;
                ++i;
            }
        }
        return array;
    }

    delete(value) {
        this.#members = this.customFilter((i) => {
            if (i === value) {
                return false;
            }
        })
    }

    has(value) {
        return (this.#members.includes(value));
    }

     [Symbol.iterator]() {
        return new listIterator(this.#members);
    }

    static from(allMembers){
        let group = new Group()
        for(let element of allMembers){
            group.add(element);
        }
        return group;
    }
}

class listIterator {
    #list
    constructor(list) {
        this.#list = list;
        this.i = 0;
    }
    done = false;
    
    next() {
        let len = this.#list.length;
        if (len == this.i) {
            return { value: this.#list[this.i] , done: true };
        }
        else{
            let result = { value : this.#list[this.i] , done : false };
            ++this.i;
            return result;
        }
    }
}
let array = new Group();

array.add(1);
array.add(2);
array.add(3);
array.add(4);
array.add(5);
array.add(6);
array.add(7);
array.add(8);
array.add(9);
array.add(0);

for(let element of array){
    console.log(element );
}

// for (let value of Group.from(["a", "b", "c","d"])) {
//   console.log(value);
// }

