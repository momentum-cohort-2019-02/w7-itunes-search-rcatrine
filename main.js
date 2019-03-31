document.addEventListener('DOMContentLoaded', function () {
    
    const submitButton = document.getElementById('submit')
    const songList = document.getElementById('songlist')

    submitButton.addEventListener('click', event => {
        
        console.log("Button clicked.")
        searchSong()
    })
    songList.addEventListener('click', event => {
        
        console.log("Song clicked.")
        if(event.target && event.target.nodeName == "IMG") {
            
            console.log("List item ", event.target.id, " was clicked.")
            const playBar = document.getElementById('audio')
            songBar.src = event.target.id
            songBar.play()
        }
    })
})

function searchSong() {

    //Registers input
    const userInput = document.getElementById('searchinput')
    const inputError = document.getElementById('inputerror')

    //Resets the song bar
    const songBar = document.getElementById('audio')
    songBar.src = ""

    //Gets user input, validates it
    const userInputValue = userInput.nodeValue
    if(userInputValue != null && userInputValue != '') {
        inputError.innerText = ''
        updateSongs(userInputValue)
    }
    else {
        inputError.innerText = "enter a song, album, or artist name"
    }
}

function getSongs(userInput) {
    const promise = fetch(
        `https://itunes-api-proxy.glitch.me/search?media=music&entity=musicArtist&entity=musicTrack&term=${userInput}&country=US`
    ).then(function (response) {
        if (!response.ok) {
            throw Error(response.statusText)
        }
        return response.json()
    })
    return promise
}

//Updates songs in HTML
// function updateSongs(userInput) {
//     //Retrieves tracks from iTunes API
//     getSongs(encodeURIComponent(userInput))
//     .then(function (songData) {
//         console.log(songData)
//         const songListDiv = document.getElementById('songlist')
//         songListDiv.innerHTML = ""
//         for(let i=0; i<songData.resultCount; i++){
//             const result = songData.results[i]
//             //Creates song element, adds class
//             const imageHtml = `<img id="${result.previewUrl}" src="${result.artworkUrl100}" />`
//             const songNameDiv = `<div class="song-name">${result.songCensoredName}</div>`
//             const songArtistDiv = `<div class="song-artist">${result.artistName}</div>`
//             let song = document.createElement('div')
//             song.classList.add('song')
//             song.innerHTML = `${imageHtml} ${songNameDiv} ${songArtistDiv}`
//             songListDiv.append(song)
//         }
    // })
// }