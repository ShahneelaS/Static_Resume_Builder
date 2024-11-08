var toggleHeaders = document.querySelectorAll('.toggle-header');
toggleHeaders.forEach(function (header) {
    header.addEventListener('click', function () {
        var details = header.nextElementSibling;
        if (details.style.display === 'block') {
            details.style.display = 'none';
        }
        else {
            details.style.display = 'block';
        }
    });
});
