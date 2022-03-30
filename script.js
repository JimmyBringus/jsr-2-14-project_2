const randomize = document.querySelector('.randomizeButton')
const favourite = document.querySelector('.favouriteButton')
const viewFaves = document.querySelector('.viewFavesButton')
const imageDiv = document.querySelector('div')
const innerQuote = document.querySelector('#textPaste')
const innerAuthor = document.querySelector('#quoteAuthor')

function createClass(name,rules){
    var style = document.createElement('style')
    style

}

randomize.addEventListener('click', async () => {
    let response = await axios.get(
        `https://animechan.vercel.app/api/random`
    )
    console.log(response)
    let response2 = await axios.get(
        `https://picsum.photos/1920/1080`
    )
    console.log(response2)
    
    let picsumId = response2.headers["picsum-id"]

    console.log(picsumId)

    let imageId = `https://picsum.photos/id/${picsumId}/info`
    console.log(imageId)

    let quoteCreation = () => {
        document.querySelector('.imagePaste').setAttribute("style",`background-image: url('https://picsum.photos/id/${picsumId}/1920/1080.webp');`)

    // imageDiv.innerHTML = `<style = "background-image: url('https://picsum.photos/id/${picsumId}}/1280/720?blur=1.webp');">`
    // document.querySelector("#randomImg").setAttribute("src",`https://picsum.photos/id/${picsumId}/1280/720.webp`)
        innerQuote.innerText = response.data.quote
        innerAuthor.innerHTML = `&mdash; ${response.data.character}, <i>${response.data.anime}</i>`
    }

    quoteCreation()
})

favourite.addEventListener('click', () => {
    
})