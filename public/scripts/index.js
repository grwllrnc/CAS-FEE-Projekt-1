/*
 * 
 *
 */
/* jshint esversion: 6 */

const getFormData = form => {
    const formData = new FormData(form);
    let arr = [];
    for(let [key, value] of formData) {
        arr.push(`${key} = ${value}`);
    }
    return arr;
};
const form = document.getElementById('form');
form.addEventListener('submit', (event)=>{
    event.preventDefault();
    alert(getFormData(form).join('\n'));
});
