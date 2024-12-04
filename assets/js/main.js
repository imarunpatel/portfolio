
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const content = document.getElementById('dynamic-content');
    const menuLinks = document.querySelector('.nav-menu');
    let currentStyleSheet = null;
    const param = urlParams.get('page')

    menuLinks.addEventListener('click', (e) => {
        e.preventDefault();

        const listItem = e.target.closest('li')
        if(listItem) {
            const page = listItem.getAttribute('data-page');
            console.log('page', page);
            updateQueryParams('page', page);
            loadPage(page);
            loadStyles(page);
        }
    })

    
    loadPage(param);
    loadStyles(param);

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
        console.log('st', page)
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
    

    function updateQueryParams(paramName, paramValue) {
        const url = new URL(window.location.href);
        const queryParams = new URLSearchParams(url.search);

        queryParams.set(paramName, paramValue);
        url.search = queryParams.toString();

        history.pushState({}, '', url);
    }
})


