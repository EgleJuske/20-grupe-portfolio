class Gallery {
    constructor(params) {
        // if (this.isValidInput(params)) {
        //     return false;
        // }

        this.selector = params.selector;
        this.data = params.data;

        this.DOM = null;
        this.init();
    }

    /**
     * Automatiskai paleidziamas metodas, kai yra kuriamas 'Gallery' klases objektas
     * @returns {void}
     */

    init() {
        if (!this.isValidSelector()) {
            return false;
        }
        this.render();
    }

    isValidSelector() {
        const DOM = document.querySelector(this.selector);
        if (!DOM) {
            return false;
        }

        this.DOM = DOM;
        return true;
    }

    isValidInput(params) {
        if (typeof params !== 'object') {
            return false;
        }
        // if (typeof params.selector !== 'string' ||
        //     params.selector === '') {
        //     return false;
        // }
        // if (!Array.isArray(params.data) ||
        //     params.data.length ===0) {
        //     return false;
        // }
        return true;
    }


    render() {
        let listHTML = '';

        for (const item of this.data) {
            listHTML += this.generateGalleryItem(item);
        }

        if (listHTML === '') {
            return false;
        }


        this.DOM.innerHTML = `<div class="gallery">
                                <div class="filter"></div>
                                <div class="list">${listHTML}</div>
                            </div>`;
    }

    /**
     * Sukonstruoja galerijos elementa reprezentuojanti HTML tekstini turini
     * @param {Object} item Objektas aprasantis viena galerijos saraso elementa
     * @param {string} item.title Galerijos elemento pavadinimas
     * @param {string} item.alt Galerijos elemento nuotraukos alternatyvus pavadinimas
     * @param {string} item.subtitle Galerijos elemento sub-pavadinimas
     * @param {string} item.image Galerijos elemento nuotraukos nuoroda
     * @returns {string} HTML teksas
     */
    generateGalleryItem(item) {
        return `<div class="item">
                    <img src="${item.image}" alt="${item.alt}">
                    <div class="texts">
                    <div class="title">${item.title}</div>
                    <div class="subtitle">${item.subtitle}</div>
                    </div>
                 </div>`;
    }
}

export { Gallery }