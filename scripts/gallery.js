const requestURL = '/json/images.json';
const imageCards = document.querySelector('.images');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const images = jsonObject['Images'];
    images.forEach(displayImages);
  });
function displayImages(image) {
  let imgTemplate = '';
  image.FullTable.forEach(image => {

    imgTemplate +=
      `<div class="imageSets" >
       <img class="mainimg" src="${image.TableImg}" alt="" loading="lazy">
       `;
    if (image.Set != undefined) {
      for (let i = 0; i < image.Set.length; i++) {
        imgTemplate += `<img class="childimg" src="${image.Set[i].Src}" alt="${image.Set[i].Title}">`;
      };
    };
    imgTemplate += `</div><hr>`;

  });
  imgTemplate += `<h2>Holidays</h2><hr><div class="imageSets">`;
  image.Holidays.forEach(image => {
    imgTemplate += `<img class="childimg" src="${image.Src}" alt="${image.Title}">`;
  });
  imgTemplate +=
    `</div><hr>`;
  imgTemplate += `<h2>Custom Treats</h2><hr><div class="imageSets">`;
  image.Custom.forEach(image => {
    imgTemplate += `<img class="childimg" src="${image.Src}" alt="${image.Title}">`
  });
  imgTemplate +=
    `</div><hr>`;
  imageCards.innerHTML += imgTemplate;
}