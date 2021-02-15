//purpose: to render as many journal entry components as there are items in the collection exposed by data provider component


import {getJournalEntries, useJournalEntries} from "./JournalDataProvider.js"
import {JournalEntryComponent} from "./JournalEntry.js"
import {getMoods, useMoods} from "./MoodProvider.js"


export function EntryListComponent() {
    getJournalEntries()
    .then(getMoods)
    .then(() => {
        let entryLog = document.querySelector("#entry")
        entryLog.innerHTML = ""

        const allTheEntries = useJournalEntries();
        const allTheMoods = useMoods()
        
        
        // let journalHTMLString = "";
    
        //     for(let i=0; i<allTheEntries.length; i++) {
        //         journalHTMLString += JournalEntryComponent(allTheEntries[i]);
    
        //     }
    
        allTheEntries.filter((singleEntry) => {
            const relatedMood = allTheMoods.filter(singleMood => {
                return singleMood.id === +singleEntry.moodId
            })
            entryLog.innerHTML += JournalEntryComponent(singleEntry, relatedMood)
        })
        
    
        
    }) 
       
}
        
    