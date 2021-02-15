import { saveJournalEntries } from "./JournalDataProvider.js"
import { EntryListComponent } from "./JournalEntryList.js"
import { getMoods, useMoods} from "./MoodProvider.js"

const formContainer = document.querySelector("#formContainer")

export const JournalForm = () => {
    getMoods().then(() => {
        let allTheMoods = useMoods()

        formContainer.innerHTML = `
        <form action="">
                <fieldset>
                    <label for="journalDate">Date of entry</label>
                    <input type="date" name="journalDate" id="journalDate">
                </fieldset>
                <fieldset>
                    <label for="conceptsCovered">Concepts covered</label>
                    <input type="text" name="conceptsCovered" id="conceptsCovered">
                </fieldset>
                <fieldset>
                    <label for="journalEntry">Journal Entry</label>
                    <textarea name="textarea" name ="journalEntry" id="journalEntry"></textarea>
                </fieldset>
                <fieldset>
                    <label for="mood">Mood</label>
                    <select name="mood" id="mood">
                    ${allTheMoods.map(moodObject => {
                        const moodName = moodObject.value
                        const moodId = moodObject.id
                        return `<option value="${moodId}">${moodName}</option>`
                    }).join("")
                } 
                    </select>
                </fieldset>
            </form>
            <input type="submit" value="Record Journal Entry" name="recordJournalEntry" id="recordJournalEntry">
        `

    })
    
}

formContainer.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "recordJournalEntry") {

    const newJournalEntry = {
        date: document.querySelector("#journalDate").value,
        concept: document.querySelector("#conceptsCovered").value,
        entry: document.querySelector("#journalEntry").value,
        mood: document.querySelector("#mood").value

    }

    console.log(newJournalEntry)
    console.log(Object.values(newJournalEntry))

  
    saveJournalEntries(newJournalEntry)
   .then(EntryListComponent)
    }
})