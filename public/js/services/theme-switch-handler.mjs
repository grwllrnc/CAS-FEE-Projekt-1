/* Theme switch Handler */

const themeSwitch = () => {
    const switchState = document.getElementById('theme-switch').value;
    const bodyTag = document.querySelector('body');

    if (switchState === 'high-contrast') {
        bodyTag.classList.add('high-contrast');
    } else {
        bodyTag.classList.remove('high-contrast');
    }
};

export { themeSwitch };
