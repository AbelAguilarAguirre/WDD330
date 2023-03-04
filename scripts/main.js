import {
    loadTemplate,
    renderWithTemplate
} from './utils.mjs'

displayHeaderFooter();

async function displayHeaderFooter() {
    const header = await loadTemplate('templates/header.html');
    const footer = await loadTemplate('templates/footer.html');
    renderWithTemplate(header, document.getElementById('header'), 'beforebegin', true);
    renderWithTemplate(footer, document.getElementById('footer'), 'beforebegin', true);
    let hambutton = document.querySelector('.ham');
    let mainnav = document.querySelector('nav');
    hambutton.addEventListener('click', () => { mainnav.classList.toggle('responsive') }, false);
}

