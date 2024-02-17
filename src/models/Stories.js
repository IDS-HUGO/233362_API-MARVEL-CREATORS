export class Stories{
    #typestories;
    #namestories;
    setNamestories(namestories){ 
        this.#namestories= namestories
    }
    getNamestories(){ 
        return this.#namestories
    }

    setTypestories(typestories){ 
        this.#typestories= typestories
    }
    getTypestories(){ 
        return this.#typestories
    }
}