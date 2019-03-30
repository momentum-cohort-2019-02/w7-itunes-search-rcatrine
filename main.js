window.addEventListener('DOMContentLoaded', (event) => { 
    console.log('DOM loaded and parsed!');

let jackJohnson = fetch("https://itunes-api-proxy.glitch.me/artist/jack-johnson/909253?uo=4")
    console.log('Fetch functional!')
    
    const input = document.querySelector('#search')
    console.log(input)

    // const type = document.querySelector('searchValue')
    // console.log(type)

    const button = document.querySelector('#button')
    console.log(button)
    buttonClick()
})

function buttonClick(button){
    document.querySelector("button").addEventListener("click",function(event){
        event.stopPropagation()
        })
    }




// function searchMusic (searchMusic) {
//     const promise = fetch(`https://itunes-api-proxy.glitch.me/search?music=${searchMusic}`)
//     .then(function (response) {
//         if (!response.ok) {
//         throw Error(response.musicText)
//         }
//         return response.json()
//         })
//     return promise
// }