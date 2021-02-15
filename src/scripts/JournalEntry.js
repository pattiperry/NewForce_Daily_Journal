
export const JournalEntryComponent = (singleEntry,relatedMood) => {
    return `
        <section id="entry--${singleEntry.id}" class="journalEntry">
            <div class="journal-card">
            <p><h3>Date:</h3>${singleEntry.date}</p>
            <p><h3>Concepts Covered:</h3>${singleEntry.concept}</p>
            <p><h3>Entry:</h3>${singleEntry.entry}</p>
            <p><h3>Mood:</h3>${relatedMood.mood}</p>
            </div>
        </section>
    `
}
    



