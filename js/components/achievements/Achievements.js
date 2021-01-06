import { isValidAchiementItem } from './isValidAchiementItem.js';

class Achievements {
    constructor(params) {
        this.selector = params.selector;
        this.limit = params.limit;
        this.data = params.data;
        this.defaultLimit = 4;
        this.DOM = null;
    }

    init() {
        if (!this.isValidSelector() ||
            !this.isValidData()) {
            return false;
        }
        
        this.limit = this.isValidLimit() ? this.limit : this.defaultLimit;

        this.render();
    }
    
    isValidSelector() {
        if (typeof this.selector !== 'string' ||
            this.selector === '') {
            return false;
            }
        const DOM = document.querySelector(this.selector);
        if(!DOM) {
            return false;
        }
        this.DOM = DOM;
        return true;
    }
    
    isValidData() {
        if(!Array.isArray(this.data) ||
        this.data.length === 0) {
            return false;
        }
        return true;
    }
    
    isValidLimit() {
        if (typeof this.limit !== 'number' ||
        !isFinite(this.limit) ||
        this.limit < 1 ||
        this.limit % 1 !== 0) {
            return false;
        }
        return true;
    }
    
    render() {
        let HTML = '';
        
        let validItems = 0;
        // logic: for loop
        for (const item of this.data) {
            if (validItems === this.limit) {
                break;
            }
            if (!isValidAchiementItem(item)){
                continue;
            }
            HTML += `<div class="achievement-item">
                        <div class="fa fa-${item.icon}"></div>
                        <div class="achievement-number">${item.number}</div>
                        <div class="achievement-label">${item.label}</div>
                    </div>`;
            validItems++;
        }
        
        //post logig validation
        if (HTML === '') {
            return false;
        }
        
        this.DOM.innerHTML = HTML;
    }
}

export { Achievements }