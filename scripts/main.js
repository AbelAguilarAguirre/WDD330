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

function validateRecaptcha() {
    var response = grecaptcha.getResponse();
    if (response.length === 0) {
        alert("not validated");
        return false;
    } else {
        alert("validated");
        return true;
    }
}
