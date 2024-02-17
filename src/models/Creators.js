export class Creators{
    #id;
    #firstName;
    #image;
    #liscomics = [];
    #lisevents = [];
    #lisseries = [];
    #lisstories = [];

    addEvents(events){
        this.#lisevents.push(events)
    }
    getEvents(){
        return this.#lisevents
    }

    addSeries(series){
        this.#lisseries.push(series)
    }
    getSeries(){
        return this.#lisseries
    }

    addStories(stories){
        this.#lisstories.push(stories)
    }
    getStories(){
        return this.#lisstories
    }

    addComic(comics){
        this.#liscomics.push(comics)
    }
    getComic(){
        return this.#liscomics
    }

    setId(id){ 
        this.#id = id 
    }
    getId(){ 
        return this.#id 
    }

    setfirstName(firstName){
        this.#firstName = firstName
    }
    getfirstName(){
        return this.#firstName
    }

    setImage(image){
        this.#image = image
    }
    getImage(){
        return this.#image
    }
}