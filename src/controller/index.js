import { Creators } from "../models/Creators.js";
import {lisCreators} from "../controller/dependencies.js";
import { Comics } from "../models/Comics.js";
import { Series } from "../models/Series.js";
import { Events } from "../models/Events.js";
import { Stories } from "../models/Stories.js";
const keyPublic = "&apikey=9a343f438e1d35cdef01821da0e04c24"
const hash = "&hash=d30ed7ace3a5c1f69e8d9c1a8e1db772"
const url1 = "https://gateway.marvel.com:443/v1/public/creators?limit=30&ts=10"
const url = url1+keyPublic+hash;

let apiButton = document.getElementById("btn-api")
apiButton.addEventListener("click", () => {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            data.data.results.forEach(element => {
                let creators = new Creators()
                creators.setId(element.id)
                creators.setfirstName(element.firstName)                
                let imageUrl = element.thumbnail.path + "." + element.thumbnail.extension
                creators.setImage(imageUrl)
                
                element.comics.items.forEach(comic => {
                    let comics = new Comics();
                    comics.setName(comic.name);
                    creators.addComic(comics)
                })
                element.series.items.forEach(serie =>{
                    let series = new Series();
                    series.setNameseries(serie.name)
                    creators.addSeries(series)
                })
                element.stories.items.forEach(storie =>{
                    let stories = new Stories();
                    stories.setNamestories(storie.name)
                    stories.setTypestories(storie.type)
                    creators.addStories(stories)
                })
                element.events.items.forEach(event =>{
                    let events = new Events();
                    events.setNameevents(event.name)
                    creators.addEvents(events)
                })
               
                lisCreators.addCreator(creators) 
            })
            console.log(lisCreators.getCreator());
        })
})
const viewButton = document.getElementById("btn-view");
viewButton.addEventListener("click", () => {
    const div1 = document.getElementById("view");
    div1.innerHTML = "";
    lisCreators.getCreator().forEach(data => {
        let creator = document.createElement("div");

        let idcreator = document.createElement("p");
        idcreator.innerText = "ID:" + data.getId();
        let firstname = document.createElement("p");
        firstname.innerText = "FIRST NAME :" + data.getfirstName();
        let image = document.createElement("img");
        image.src = data.getImage();

        creator.appendChild(idcreator);
        creator.appendChild(firstname);
        creator.appendChild(image);

        let button1 = document.createElement("button");
        button1.innerText = "COMICS";
        button1.addEventListener("click", () => {
            openModal("COMICS:\n" + data.getComic().map(comic => comic.getName()).join("\n"));
        })

        console.log(data.getEvents())

        let button2 = document.createElement("button");
        button2.innerText = "EVENTS";
        button2.addEventListener("click", () => {
            openModal("EVENTS:\n" + data.getEvents().map(event => event.getNameevents()).join("\n"));
        })

        let button3 = document.createElement("button");
        button3.innerText = "SERIES";
        button3.addEventListener("click", () => {
            openModal("SERIES:\n" + data.getSeries().map(serie => serie.getNameseries()).join("\n"));
        })

        let button4 = document.createElement("button");
        button4.innerText = "STORIES";
        button4.addEventListener("click", () => {
            openModal("STORIES:\nNAME\n" + data.getStories().map(story => story.getNamestories()).join("\n") +"\n"+ "\nTYPE:\n" + data.getStories().map(story => story.getTypestories()).join("\n"));
        })
        creator.appendChild(button1);
        creator.appendChild(button2);
        creator.appendChild(button3);
        creator.appendChild(button4);

        div1.appendChild(creator);
    })
})

function openModal(message) {
    const modal = document.createElement("div");
    modal.classList.add("modal");

    const modalContent = document.createElement("div");
    modalContent.classList.add("modal-content");

    const modalMessage = document.createElement("p");
    modalMessage.textContent = message;

    const closeButton = document.createElement("button");
    closeButton.textContent = "Cerrar";
    closeButton.classList.add("modal-close-button");
    closeButton.addEventListener("click", () => {
        modal.style.display = "none";
    });

    modalContent.appendChild(modalMessage);
    modalContent.appendChild(closeButton);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
    modal.style.display = "block";
}


