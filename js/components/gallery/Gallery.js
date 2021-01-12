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