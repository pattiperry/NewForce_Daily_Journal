//purpose: to render as many journal entry components as there are items in the collection exposed by data provider component


import {useJournalEntries} from "./JournalDataProvider.js"
import {Journal} from "./Journal.js"

//DOM reference to where all entries will be rendered
let entryLog = document.querySelector("#entry-log")

export function JournalEntryList(){
    //use the journal entry data from the data provider component
    const allTheEntries = useJournalEntries();

    for (let i=0; i<allTheEntries.length; i++){
 //---------------       //i need something here += Journal(allTheEntries[i]);
    }

//----------i need to finish my console log    console.log();

 //------i need to finish this line    journalContainer.innerHTML = '<h2>Journal Entries By Date</h2>${}'

}

