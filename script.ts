const toggleHeaders = document.querySelectorAll('.toggle-header');

toggleHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const details = header.nextElementSibling as HTMLElement;

        if (details.style.display === 'block') {
            details.style.display = 'none';
        } else {
            details.style.display = 'block';
        }
    });
});
