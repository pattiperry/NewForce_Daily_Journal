
let moods = []

export const useMoods = () => moods.slice()

export const getMoods = () => {
  return fetch("http://localhost:8088/entries")
    .then(response => response.json())
    .then(parsedMoods => {
      moods = parsedMoods
    })
}

