const gallery = document.getElementById('gallery');
const popup = document.getElementById('popup');
const selectedImage = document.getElementById('selectedImage');

const imageIndex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const selectedIndex = [];

imageIndex.forEach((i) => {
    const image = document.createElement('img');
    image.src = `/images/pic${i}.jpg`;
    image.alt = `Photo number ${i} of Enrico Art Gallery`;
    image.classList.add(`galleryImage`)

    image.addEventListener('click', () =>{
        popup.style.transform = `translateY(0)`;
        selectedImage.src = `/images/pic${i}.jpg`;
        selectedImage.alt = `Photo number ${i} of Enrico Art Gallery`;
    })
    gallery.appendChild(image);
})

popup.addEventListener('click', () => {
    popup.src = '';
    popup.alt = '';
})