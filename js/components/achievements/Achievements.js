import { isValidAchiementItem } from './isValidAchiementItem.js';

class Achievements {
    constructor(params) {
        this.selector = params.selector;
        this.limit = params.limit;
        this.data = params.data;
        this.defaultLimit = 4;
        this.DOM = null;
        this.validUsedData = [];
        this.animationDuration = 3;
        this.fps = 30;
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
            this.validUsedData.push(item);
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

    animateNumber(index, DOM) {
        const windowBottom = scrollY + innerHeight;
        const offsetSection = document.querySelector('.offset-section');
        const sectionMiddle = offsetSection.offsetTop + (offsetSection.offsetHeight / 2);

        if (windowBottom > sectionMiddle) {

            //saugiklis, kuris animacija paleidzia viena karta
            if (this.validUsedData[index].animated) {
                return false;
            }
            this.validUsedData[index].animated = true;

            //animacijos logika
            let step = 0;
            const increment = this.validUsedData[index].number / this.animationDuration / this.fps;

            const timer = setInterval(() => {
                const value = Math.floor(increment * step);
                step++;
                DOM.innerText = value;

                if (value >= this.validUsedData[index].number) {
                    DOM.innerText = this.validUsedData[index].number;
                    clearInterval(timer);
                }
            }, 1000 / this.fps);
        }
    }

    addEvents() {
        addEventListener('scroll', () => {
            const numberDOM = document.querySelectorAll('.achievement-number');
            for (let i = 0; i < this.validUsedData.length; i++) {
                this.animateNumber(i, numberDOM[i]);
            }
        })
    }
}

export { Achievements }