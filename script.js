document.addEventListener('DOMContentLoaded', function() {
    var messages = [
        "Ti amo!",
        "Sei speciale.",
        "Non potrei vivere senza di te.",
        "Grazie per essere in questo mondo."
    ];
    var heartContainer = document.getElementById('heart-container');
    var audio = document.getElementById('background-music');
    var toggleMusicButton = document.getElementById('toggle-music');
    var images = [
        'immagini/img1.jpg',
        'immagini/img2.jpg',
        'immagini/img3.jpg',
        'immagini/img4.jpg',
        'immagini/img5.jpg',
        'immagini/img6.jpg',
        'immagini/img7.jpg',
        'immagini/img8.jpg',
        'immagini/img9.jpg',
        'immagini/img10.jpg',
        'immagini/img11.jpg',
        'immagini/img12.jpg',
        'immagini/img13.jpg',
        'immagini/img14.jpg',
        'immagini/img15.jpg'
    ];

    

    // Funzione per creare un cuore
    function createHeart(x, y) {
        var heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = `${x}px`;
        heart.style.top = `${y}px`;
        heartContainer.appendChild(heart);
    
        // Mostra un messaggio carino sopra il cuore
        var messageElement = document.createElement('div');
        messageElement.classList.add('heart-message');
        messageElement.textContent = messages[Math.floor(Math.random() * messages.length)];
        heart.appendChild(messageElement);
    
        // Rimuovi il cuore e il messaggio dopo 2 secondi
        setTimeout(() => {
            heartContainer.removeChild(heart);
            heartContainer.removeChild(messageElement);
        }, 2000);
    }
    
    function changeImage() {
        var randomIndex = Math.floor(Math.random() * images.length);
        document.getElementById('valentine-image').src = images[randomIndex];
    }

    // Aggiungi event listeners per i clic sui cuori
    for (let i = 0; i < 10; i++) {
        var x = Math.random() * window.innerWidth;
        var y = Math.random() * window.innerHeight;
        document.addEventListener('click', function(event) {
            if (event.clientX > x && event.clientX < x + 50 && event.clientY > y && event.clientY < y + 50) {
                createHeart(x, y);
            }
        });
    }

    // Gestione della musica di sottofondo
    toggleMusicButton.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
            toggleMusicButton.textContent = '❚❚';
      
        } else {
            audio.pause();
            toggleMusicButton.textContent = '▷';
            

        }
    });
});
