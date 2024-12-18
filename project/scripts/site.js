document.addEventListener("DOMContentLoaded", function () {
    let currentCardIndex = 0;
    const fadeDuration = 1000;

    function updatePreviewCard() {
        fetch('portfolio.html')
            .then(response => response.text())
            .then(data => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(data, 'text/html');
                const cards = doc.querySelectorAll('.portfolio-grid .card');
                
                if (cards.length >= 3) {
                    const previewCards = [];

                    for (let i = 0; i < 3; i++) {
                        const card = cards[i];
                        const imgSrc = card.querySelector('img').src;
                        const title = card.querySelector('.card-title').textContent;
                        const description = card.querySelector('.card-description').textContent;
                        
                        previewCards.push({ imgSrc, title, description });
                    }

                    function updatePreview() {
                        const previewCard = document.querySelector('.portfolio-preview .card');
                        const previewContent = previewCard.querySelector('.card-content');
                        const previewData = previewCards[currentCardIndex];
                        const previewImage = previewContent.querySelector('img');
                        const previewTitle = previewContent.querySelector('.card-title');
                        const previewDescription = previewContent.querySelector('.card-description');

                        previewContent.style.opacity = 0;

                        setTimeout(() => {
                            previewImage.src = previewData.imgSrc;
                            previewTitle.textContent = previewData.title;
                            previewDescription.textContent = previewData.description;

                            previewContent.style.transition = `opacity ${fadeDuration}ms ease-in-out`;
                            previewContent.style.opacity = 1;

                            const dots = document.querySelectorAll('.dot');
                            dots.forEach(dot => dot.classList.remove('active'));
                            if (dots[currentCardIndex]) {
                                dots[currentCardIndex].classList.add('active');
                            }
                        }, fadeDuration);
                    }

                    updatePreview();

                    document.querySelector('#next-arrow').addEventListener('click', function () {
                        currentCardIndex = (currentCardIndex + 1) % 3;
                        updatePreview();
                    });

                    document.querySelector('#prev-arrow').addEventListener('click', function () {
                        currentCardIndex = (currentCardIndex - 1 + 3) % 3;
                        updatePreview();
                    });

                    const dots = document.querySelectorAll('.dot');
                    dots.forEach((dot, index) => {
                        dot.addEventListener('click', () => {
                            currentCardIndex = index;
                            updatePreview();
                        });
                    });

                    function startAutoRotate() {
                        setInterval(() => {
                            currentCardIndex = (currentCardIndex + 1) % 3;
                            updatePreview();
                        }, 4000);
                    }

                    startAutoRotate();

                    document.querySelector('.portfolio-preview .card').addEventListener('click', function () {
                        localStorage.setItem('selectedCardIndex', currentCardIndex);
                        window.location.href = 'portfolio.html';
                    });
                }
            })
            .catch(error => console.error('Error fetching portfolio page:', error));
    }

    updatePreviewCard();
});
