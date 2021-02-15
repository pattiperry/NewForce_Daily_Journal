let journal = []

export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}

export const getJournalEntries = () => {
    return fetch(`http://localhost:8088/entries`)
    .then(response => response.json())
    .then( parsedEntries => {
        journal = parsedEntries
    })

}

export const saveJournalEntries = (newJournalEntry) => {
    return fetch(`http://localhost:8088/entries`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newJournalEntry)
    })
}