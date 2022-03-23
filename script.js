const button = document.querySelector('button')
const imageDiv = document.querySelector('div')
const innerQuote = document.querySelector('h2')

button.addEventListener('click', async () => {
    let response = await axios.get(
        `https://animechan.vercel.app/api/random`
    )
    console.log(response)
    let response2 = await axios.get(
        `https://picsum.photos/1280/720`
    )
    console.log(response2)
    
    let picsumId = response2["data.headers.picsum-id.value"]

    console.log(picsumId)

    let imageId = `https://picsum.photos/id/${picsumId}/info`
    console.log(imageId)

    // imageDiv.innerHTML = `<img src="https://picsum.photos/id/${imageId}"`
    // innerQuote.innerText = response.data.quote
})

