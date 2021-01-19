const journal = [
    {
        id: 1,
        date: "01/05/2021",
        concept: "HTML & CSS",
        entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
        mood: "Taking a deep breath"
    },
    {
        id: 2,
        date: "01/11/2021",
        concept: "Javascript",
        entry: "We talked about objects and defining them, how to make them represent real world objects through code.",
        mood: "Fine"   
    },
    {
        id: 3,
        date: "01/12/2021",
        concept: "Javascript",
        entry: "We learned how to print things to the DOM, using import/export.",
        mood: "Optimistic",
    },
    {
        id: 4,
        date: "01/13/2021",
        concept: "Javascript",
        entry: "We practiced more DOM printing with Martin's Aquarium, creating new modules and automating list for his Tips and Locations.",
        mood: "Happy"
    }
]

export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}