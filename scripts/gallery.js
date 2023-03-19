const requestURL = '/json/images.json';
const imageCards = document.querySelector('.images');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.log(jsonObject);
    const images = jsonObject['Images'];
    images.forEach(displayImages);
  });
  function displayImages(image) {
    let imgTemplate = '';
    imgTemplate =
        `<div class='category'>
            <h2>${image.Category}</h2>`
    image.Image.forEach(image => {
        imgTemplate +=
        `<img src='${image.Src}' alt='${image.Title}' loading='lazy'>`
         
    })
    imageCards.innerHTML += imgTemplate;
  }