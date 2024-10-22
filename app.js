function resizeImage(selectedImage) {
    const images = document.querySelectorAll('.button-image');
    images.forEach(image => {
        if (image === selectedImage) {
            image.classList.add('active');
            image.classList.remove('notactive');
        } else {
            image.classList.remove('active');
            image.classList.add('notactive');
        }
    });
}