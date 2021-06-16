const loremIpsum = document.getElementById("lorem-ipsum")
fetch("index.html")
    
    .then(result => loremIpsum.innerHTML = result)