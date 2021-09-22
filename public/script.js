console.log('Script loaded');

document.querySelector('#btnload').addEventListener('click', () => {
    getDinoName();
    getDinoImage();
});


async function getDinoName(){
    const response = await fetch('/dinoname');

    const data = await response.json();
    let dinoName = data[0].join(' ');
    document.querySelector('#dinoName').textContent = dinoName;
    console.log(dinoName);
}


async function getDinoImage(){
    const response = await fetch('/dinoimage');

    const data = await response.json();
    let randIndex = Math.floor(Math.random()*20);
    let dinoImage = data.value[randIndex];
    let dinoImageUrl = dinoImage.thumbnailUrl;
    let dinoAlt = dinoImage.name;

    if(document.querySelector('#dinoImage') != null) {
        document.querySelector('#dinoImage').remove();
    }

    let img = document.createElement('img');
    img.id = 'dinoImage';
    img.src = dinoImageUrl;
    img.alt = dinoAlt;
    document.querySelector('body').appendChild(img);
    console.log(dinoImage);
}

async function makeImage(source) {
    
}