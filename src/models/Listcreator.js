export class ListCreator {
    #liscreators = [];
    addCreator(creators){
        this.#liscreators.push(creators)
    }
    getCreator(){
        return this.#liscreators
    } 
     
}
