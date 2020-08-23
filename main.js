const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_items = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('div.header');
const phone_container = document.querySelector('#contact .contact-item.phone');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});
document.addEventListener('scroll', () => {
    const scroll_position = window.scrollY;
    if(scroll_position > 170) header.style.backgroundColor = '#29323c';
    else header.style.backgroundColor = 'transparent';
});
menu_items.forEach(item => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});
const copyToClipboard = str => {
    const el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
};
phone_container.addEventListener('click', () => {
    const phone_number = document.querySelector('#phone-number').textContent;
    const tooltip = document.querySelector('#contact .contact-info .tooltip');
    copyToClipboard(phone_number);
    tooltip.classList.add('show');
    setTimeout(() => {
        tooltip.classList.remove('show');
    },900);
});

