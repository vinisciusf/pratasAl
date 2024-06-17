document.addEventListener('DOMContentLoaded', function () {

    var produtosLink = document.getElementById('produtos');

    var submenu = document.getElementById('submenu');


    produtosLink.addEventListener('click', function (e) {

        e.preventDefault();

        if (submenu.style.display === 'block') {
            submenu.style.display = 'none';
        } else {
            submenu.style.display = 'block';
        }
    });
});
