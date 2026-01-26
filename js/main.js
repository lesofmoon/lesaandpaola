document.addEventListener('DOMContentLoaded', () => {
    // Audio Player Logic
    const audioToggle = document.getElementById('audioToggle');
    const audioIcon = document.getElementById('audioIcon');
    const bgMusic = document.getElementById('bgMusic');
    let isPlaying = false;

    // Try to play audio automatically (might be blocked by browser policy) or on first interaction
    // For now, we stick to the button toggle.
    
    if (audioToggle) {
        audioToggle.addEventListener('click', () => {
            if (isPlaying) {
                bgMusic.pause();
                audioIcon.setAttribute('name', 'volume-mute-outline');
            } else {
                bgMusic.play().catch(e => console.log('Audio play failed:', e));
                audioIcon.setAttribute('name', 'volume-high-outline');
            }
            isPlaying = !isPlaying;
        });
    }

    // Menu Modal Logic
    const menuBtn = document.getElementById('menuBtn');
    const menuOverlay = document.getElementById('menuOverlay');
    const closeMenuTop = document.getElementById('closeMenuTop');
    const closeMenuBottom = document.getElementById('closeMenuBottom');

    function openMenu() {
        menuOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling background
    }

    function closeMenu() {
        menuOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (menuBtn) {
        menuBtn.addEventListener('click', openMenu);
    }

    if (closeMenuTop) {
        closeMenuTop.addEventListener('click', closeMenu);
    }

    if (closeMenuBottom) {
        closeMenuBottom.addEventListener('click', closeMenu);
    }

    // Close menu when clicking outside the content (on the overlay background)
    if (menuOverlay) {
        menuOverlay.addEventListener('click', (e) => {
            if (e.target === menuOverlay) {
                closeMenu();
            }
        });
    }
});
