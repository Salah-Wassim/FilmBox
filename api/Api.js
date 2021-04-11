const API_TOKEN = "26baf3b79857d440c70d30245fcf0c2f"

export function getFilmsFromApiWWithSearchedText (text) {
    const url  = 'https://api.themoviedb.org/3/movie/550?api_key=' + API_TOKEN +
    '&language=fr&query=' + text
    return fetch(url)
    .then(response => response.json())
    .catch(error => {console.log(error)})
}