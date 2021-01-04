import { isValidHobbies } from './isValidHobbies.js';
import { findIfValidSelector } from './findIfValidSelector.js';

function renderHobbies (params) {
    //input validation
    if (!isValidHobbies(params)) {
        return false;
    }

    // logic
    // const selector = params.selector;
    // const data = params.data;
    // const limit = params.limit;
    // const borderRadius = params.borderRadius;

    const { selector, data, limit, borderRadius } = params;
    
    const DOM = findIfValidSelector(selector);
    if (!DOM) {
        return false;
    }

    let HTML = '';
    for (const item of data) {
        HTML += `<div class="hobbie-item col-xs-12 col-sm-6 col-md-4 col-lg-3">
                    <div class="content">
                        <i class="fa fa-${item.icon}"></i>
                        <span>${item.title}</span>
                    </div>
                </div>`;
    }

    DOM.innerHTML = HTML;
    //post logic validation


    //result
    return;
}

export { renderHobbies }