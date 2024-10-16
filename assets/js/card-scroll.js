
    let projectSection = document.querySelector('.project-sec');
    let cards = document.querySelectorAll('.p-card');
    let currentIndex = 0;

    function updateCardEffects() {
    // Remove zoom effects from all cards
    cards.forEach(card => {
        card.classList.remove('zoomed');
    });

    // Add zoom effect to the current card
    cards[currentIndex].classList.add('zoomed');

    // Center the current card in the viewport
    const cardWidth = cards[currentIndex].offsetWidth;
    const scrollOffset = (cardWidth + 30) * currentIndex - (projectSection.offsetWidth / 2) + (cardWidth / 2);
    projectSection.scrollTo({
    left: scrollOffset,
    behavior: 'smooth'
});
}

    function scrollNext() {
    if (currentIndex < cards.length - 1) {
    currentIndex++;
    updateCardEffects();
}
}

    function scrollPrev() {
    if (currentIndex > 0) {
    currentIndex--;
    updateCardEffects();
}
}

    // Initialize with the first card zoomed
    updateCardEffects();
