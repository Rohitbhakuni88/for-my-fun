document.addEventListener("DOMContentLoaded", () => {
    // Animate the letter content (fade-in effect)
    const letterContent = document.querySelector('.letter-content');
    letterContent.style.opacity = 0;
    letterContent.style.transition = 'opacity 2s ease-in';

    setTimeout(() => {
        letterContent.style.opacity = 1;
    }, 500);

    // Add a gentle hover effect to the closing
    const closing = document.querySelector('.closing');
    closing.addEventListener('mouseover', () => {
        closing.style.color = '#a8323e';
    });

    closing.addEventListener('mouseout', () => {
        closing.style.color = '#d45d79';
    });

    // Adjust the audio volume and attempt to play after 3 seconds
    const audio = document.getElementById('background-music');
    audio.volume = 0.5; // Adjust volume (0.0 to 1.0)
    audio.muted = true; // Start muted to comply with autoplay restrictions

    setTimeout(() => {
        audio.play().then(() => {
            audio.muted = false; // Unmute after successful play
        }).catch(error => {
            console.log('Autoplay prevented:', error);
            // Show a button to let the user start the music
            const playButton = document.getElementById('play-music');
            playButton.style.display = 'block';
            playButton.addEventListener('click', () => {
                audio.play();
            });
        });
    }, 3000); // Start music after 3 seconds
});
