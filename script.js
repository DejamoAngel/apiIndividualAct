const container = document.getElementById("container");

fetch('https://api.mangadex.org/manga?limit=10&')
.then((response) => response.json())
.then((data) => {
    const req =  data.data[0];
    let title = req.attributes;

console.log(title)
});