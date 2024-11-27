
document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('dynamic-content');
    const menuLinks = document.querySelector('.nav-menu');
    let currentStyleSheet = null;

    menuLinks.addEventListener('click', (e) => {
        e.preventDefault();

        const listItem = e.target.closest('li')
        if(listItem) {
            const page = listItem.getAttribute('data-page');
            console.log('page', page);
            loadPage(page);
            loadStyles(page);
        }
    })
    loadPage('home');
    function loadPage(page) {
        fetch(`/pages/${page}.html`)
            .then(response => {
                if(!response.ok) {
                    throw new Error('Page not found');
                }
                return response.text();
            })
            .then(html => {
                content.innerHTML = html
            })
            .catch(error => {
                content.innerHTML = `<h1>Error</h1><p>${error.message}</p>`
            })
    }

    function loadStyles(page) {
        const cssPath = `../assets/css/pages/${page}.css`;

        if(currentStyleSheet) {
            currentStyleSheet.remove();
        }

        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = cssPath;
        link.id = 'dynamic-stylesheet';
        document.head.appendChild(link);

        currentStyleSheet = link;
    }
    
})


