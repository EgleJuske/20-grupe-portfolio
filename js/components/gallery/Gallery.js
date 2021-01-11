class Gallery {
    constructor(params) {
        if (this.isValidInput(params)) {
            return false;
        }

        this.selector = params.selector;
        this.data = params.data;

        this.DOM = null;
        this.init();
    }

    init() {
        /* jei validus selectorius
            susirasti DOM
            render
            add event listener
        o jei ne
            return false
        */
    }

    isValidSelector() {
        const DOM = document.querySelector(this.selector);
        if (!DOM) {
            return false;
        }

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
        
    }
}

export { Gallery }