document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((element) => {
        observer.observe(element);
    });

    const colorToggle = document.getElementById('colorToggle');
    colorToggle.addEventListener('click', function() {
        
        document.body.style.backgroundColor = (document.body.style.backgroundColor === 'black') ? 'aqua' : 'black';

       
        const paragraphs = document.querySelectorAll('.container p');
        paragraphs.forEach(paragraph => {
            paragraph.classList.toggle('blue-bg');
            paragraph.classList.toggle('black-bg');
        });
    });
});

const images = [
    'Pawn.png',
    'Knight.png',
    'Bishop.png',
    'Rook.png',
    'Queen.png',
    'King.png'
];


function alternateImages() {
    const imgElement = document.getElementById('centImage');
    let currentIndex = 0;

    
    setInterval(() => {
        imgElement.src = images[currentIndex];
        currentIndex = (currentIndex + 1) % images.length; 
    }, 1500); 
}

const images1 = [
    'Stage1.png',
    'Stage2.png',
    'Stage3.png',
    'Stage4.png'
];


function alternateImages1() {
    const imgElements = document.querySelectorAll('.image-container img');
    let currentIndex = 0;

    
    setInterval(() => {
        
        imgElements.forEach(imgElement => {
            imgElement.style.display = 'none';
        });

        
        imgElements[currentIndex].src = images1[currentIndex];
        imgElements[currentIndex].style.display = 'block';
        imgElements[currentIndex].style.left = ((currentIndex + 1) * 20) + '%'; 
        currentIndex = (currentIndex + 1) % images1.length; 
    }, 500); 
}