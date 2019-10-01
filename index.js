let first_shadow = '0px';
let second_shadow = '0px';
let shadows = (options) => {
    let divs = document.querySelectorAll('.mBShadows');
    if (options.shadow_number === 'one') {
        first_shadow = '0 1px 3px';
        second_shadow = '0 1px 2px';
    } else if (options.shadow_number === 'two') {
        first_shadow = '0 3px 6px';
        second_shadow = '0 3px 6px';
    } else if (options.shadow_number === 'three') {
        first_shadow = '0 10px 20px';
        second_shadow = '0 6px 6px';
    } else if (options.shadow_number === 'four') {
        first_shadow = '0 14px 28px';
        second_shadow = '0 10px 10px';
    } else {
        first_shadow = '0 19px 38px';
        second_shadow = '0 15px 12px';
    }

    shadows.forEach(shadow => {
        shadow.style.boxShadow = `${first_shadow}rgba(0,0,0,0.20), ${second_shadow}rgba(0,0,0,0.22)`;
        if (options.padding) {
            Image.style.padding = '1em';
        }
    });
}

module.exports.shadows = shadows;