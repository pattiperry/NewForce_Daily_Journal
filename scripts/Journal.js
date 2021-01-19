
export function Journal(journalObject){
    return `
    <section id="entry--${journalObject.id}" class="journalEntry>
    <p>${journalObject.date}</p>
    <p>${journalObject.entry}</p>
    </section>
    `
}
    




/* <form action="">
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
                    <textarea name="textarea" name ="journalEntry id="journalEntry></textarea>
                </fieldset>
                <fieldset>
                    <label for="mood">Mood</label>
                    <select name="mood" id="mood"> 
                    <optgroup label="">                   
                        <option value="happy">Happy</option>
                        <option value="sad">Sad</option>
                        <option value="fine">Fine</option>
                        <option value="proud">Proud</option>
                        <option value="optimistic">Optimistic</option>
                        <option value="frustrated">Frustrated</option>
                        <option value="takingAdeepBreath">Taking a deep breath</option>
                    </optgroup>
                    </select>
                </fieldset>
            </form> */