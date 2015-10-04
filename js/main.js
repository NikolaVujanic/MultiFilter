'use strict';

toggleCheckbox();

function toggleCheckbox() {
    var filters = document.querySelectorAll("input[type=checkbox]");
    for (var i=0; i < filters.length; i++) {
        filters[i].addEventListener('click', function() {
            this.nextElementSibling.children[0].classList.toggle('active');
        })
    }
}
