import {
    loadTemplate,
    renderWithTemplate
} from './utils.mjs'

displayHeaderFooter();

async function displayHeaderFooter() {
    const header = await loadTemplate('templates/header.html');
    const footer = await loadTemplate('templates/footer.html');
    renderWithTemplate(header, document.getElementById('header'), 'beforebegin', true);
    renderWithTemplate(footer, document.getElementById('footer'), 'beforeend', true);
    let dropdown = document.querySelector('.dropbtn');
    let dropdownContent = document.querySelector('.dropdown-content');
    dropdown.addEventListener('click', () => { dropdownContent.classList.toggle('responsive') }, false);
    let wrapper = document.querySelector('nav');
    document.addEventListener('click', function (e) {
        if (!wrapper.contains(e.target)) {
            dropdownContent.classList.remove('responsive');
            dropdown.classList.remove('change');
        };
    });
};
buildImageTransition();
function buildImageTransition() {
    let imgTemplate = '';
    let imgContainer = document.getElementById('hero-banner');
    for (let i = 1; i < 43; i++) {
        let imageSrc = `../images/full tables/${i}.webp`;
        imgTemplate += `<img src='${imageSrc}' alt='Full Candy Table' class='fadeImg'>`;
    };
    imgTemplate += `<a href="custom-tables.html">
    <h2>Book With Us Today</h2>
</a>`
    imgContainer.innerHTML = imgTemplate;
    // let images = document.getElementsByClassName('fadeImg');
    // for (let i = 0; i < images.length; i++) {
    //     images[i].style.visibility = 'visible';
    //     images[i].style.opacity = 1;
    //     images[i].style.transition = 'all .5s'
    // }
    // let top = 0;
    // let a = document.querySelector("#hero-banner > a");
    // let cur = images.length - 1;
    // a.style.zIndex = top + 2;
    // setInterval(changeImage, 5000);
    // setInterval(changeVisiblility, 5100);
    // function changeImage() {

    //     let nextImage = (1 + cur) % images.length;

    //     images[cur].style.zIndex = top + 1;
    //     images[nextImage].style.zIndex = top;
    //     images[cur].style.zIndex = top;

    //     top = top + 1;

    //     images[nextImage].style.visibility = 'hidden';

    //     cur = nextImage;

    // }
    // function changeVisiblility() {
        
    //     images[cur].style.visibility= 'visible';
    // }
}
