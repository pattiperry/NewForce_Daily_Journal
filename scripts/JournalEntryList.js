//purpose: to render as many journal entry components as there are items in the collection exposed by data provider component


import {useJournalEntries} from "./JournalDataProvider.js"
import {JournalEntryComponent} from "./JournalEntry.js"


let entryLog = document.querySelector("#entry")
export function EntryListComponent() {
        
    const allTheEntries = useJournalEntries();

    let journalHTMLString = "";

        for(let i=0; i<allTheEntries.length; i++) {
            journalHTMLString += JournalEntryComponent(allTheEntries[i]);

        }

    console.log(journalHTMLString);

    entryLog.innerHTML = journalHTMLString
}