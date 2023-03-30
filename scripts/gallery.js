const requestURL = '/json/images.json';
const imageCards = document.querySelector('.images');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const images = jsonObject['Images'];
    console.log(images);
    images.forEach(displayImages);
  });
function displayImages(image) {
  let imgTemplate = '';
  console.log(image),
    image.FullTable.forEach(image => {

      imgTemplate +=
        `<div class="imageSets" >
       <img class="mainimg" src="${image.TableImg}" alt="" loading="lazy">
       `;
      if ( image.Set != undefined) {
        for (let i = 0; i < image.Set.length; i++) {
          imgTemplate += `<img class="childimg" src="${image.Set[i].Src}" alt="${image.Set[i].Title}">`
        }
      }


      imgTemplate += `</div>`;
    })
  imgTemplate +=
    `<hr></div>`
  imageCards.innerHTML += imgTemplate;
}