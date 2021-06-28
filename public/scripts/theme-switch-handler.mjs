/*
 * Theme switch
*/

const themeSwitch = () => {
    const switchState = document.getElementById('theme-switch').value;
    const bodyTag = document.querySelector('body');

    if (switchState === 'high-contrast') {
        bodyTag.classList.add('high-contrast');
    } else {
        bodyTag.classList.remove('high-contrast');
    }
};

// eslint-disable-next-line import/prefer-default-export
export { themeSwitch };
