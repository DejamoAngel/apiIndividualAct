const container = document.getElementById("container");

fetch('https://api.mangadex.org/manga?limit=10&')
.then((response) => response.json())
.then((data) => {
    for (let i = 0; i <= 10; i++){
    var req =  data.data[i];
    var title = req.attributes.title.en;
    var description = req.attributes.description.en;
    var mangaId = req.id;
    var coverArt = req.relationships[2].attributes.fileName;

console.log(req)
    container.innerHTML += `<h1>${title}</h1>
                           <p>${description}</p>
                           <img src="https://uploads.mangadex.org/covers/${mangaId}/${coverArt}">`
    }
});