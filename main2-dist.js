'use strict';

var open = document.querySelector('.open'),
    close = document.querySelector('.close'),
    body = document.body,
    lightBox = document.querySelector('.my-element'),
    vh = window.innerHeight * 0.01;

open.addEventListener('click', function () {
    body.style.overflow = 'hidden';
    body.style.position = 'fixed';
    body.style.width = '100%';
    body.style.height = '100%';

    lightBox.style.display = 'block';
}, false);

close.addEventListener('click', function () {
    body.style.overflow = '';
    body.style.position = '';
    body.style.width = '';
    body.style.height = '';

    lightBox.style.display = '';
});