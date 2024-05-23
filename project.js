document.addEventListener('DOMContentLoaded', function() {
    const book1 = document.querySelector('.book1');

   
    book1.addEventListener('click', function() {
        book1.classList.toggle('active'); 
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const stories = document.querySelectorAll('.story');

    stories.forEach(story => {
        story.addEventListener('click', function() {
           
            stories.forEach(s => s.classList.remove('active'));
            this.classList.add('active');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const storySlider = document.querySelector('.story-slider');

    if (prevButton && nextButton && storySlider) {
        const storyWidth = 470; 

        prevButton.addEventListener('click', function() {
            storySlider.scrollBy({
                left: -storyWidth,
                behavior: 'smooth'
            });
        });

        nextButton.addEventListener('click', function() {
            storySlider.scrollBy({
                left: storyWidth,
                behavior: 'smooth'
            });
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const storySlider = document.querySelector('.story-slider');
    let isDragging = false;
    let startX;
    let scrollLeft;

    if (prevButton && nextButton && storySlider) {
        const storyWidth = 470;

        prevButton.addEventListener('click', function() {
            storySlider.scrollBy({
                left: -storyWidth,
                behavior: 'smooth'
            });
        });

        nextButton.addEventListener('click', function() {
            storySlider.scrollBy({
                left: storyWidth,
                behavior: 'smooth'
            });
        });

        storySlider.addEventListener('mousedown', (e) => {
            isDragging = true;
            startX = e.pageX - storySlider.offsetLeft;
            scrollLeft = storySlider.scrollLeft;
        });

        storySlider.addEventListener('mouseleave', () => {
            isDragging = false;
        });

        storySlider.addEventListener('mouseup', () => {
            isDragging = false;
        });

        storySlider.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            e.preventDefault();
            const x = e.pageX - storySlider.offsetLeft;
            const walk = (x - startX) * 3; 
            storySlider.scrollLeft = scrollLeft - walk;
        });
    }
});

document.getElementById('submit-button').addEventListener('click', function() {
    var userNote = document.getElementById('user-note').value;
    if (userNote.trim() !== '') {
        document.getElementById('message').textContent = 'Thank you for your beautiful message!';
   
        setTimeout(function() {
            document.getElementById('message').textContent = '';
        }, 3000);
 
        document.getElementById('user-note').value = '';
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const bookSlider = document.querySelector('.book-slider');

    if (prevButton && nextButton && bookSlider) {
        const slideWidth = 470; 
        let currentIndex = 0;

        prevButton.addEventListener('click', function() {
            currentIndex = Math.max(currentIndex - 1, 0);
            bookSlider.scrollLeft = currentIndex * slideWidth;
        });

        nextButton.addEventListener('click', function() {
            currentIndex = Math.min(currentIndex + 1, bookSlider.children.length - 1);
            bookSlider.scrollLeft = currentIndex * slideWidth;
        });
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const featuredBooksSection = document.querySelector('.featured-books');
    const nextBtn = featuredBooksSection.querySelector('.next');
    const prevBtn = featuredBooksSection.querySelector('.prev');
    const bookSlider = featuredBooksSection.querySelector('.book-slider');
    const slides = featuredBooksSection.querySelectorAll('.book-slide');
    let currentIndex = 0;
    let autoScroll;

    function updateSlider() {
        bookSlider.style.transform = `translateX(-${currentIndex * 100}%)`;
        slides.forEach((slide, index) => {
            slide.style.transform = index === currentIndex ? 'scale(1)' : 'scale(0.8)';
            slide.style.transition = 'transform 0.5s ease';
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
        updateSlider();
    }

    function prevSlide() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
        updateSlider();
    }

    function startAutoScroll() {
        autoScroll = setInterval(nextSlide, 3000);
    }

    function stopAutoScroll() {
        clearInterval(autoScroll);
    }

    nextBtn.addEventListener('click', () => {
        nextSlide();
        stopAutoScroll();
        startAutoScroll();
    });

    prevBtn.addEventListener('click', () => {
        prevSlide();
        stopAutoScroll();
        startAutoScroll();
    });

    bookSlider.addEventListener('mouseenter', stopAutoScroll);
    bookSlider.addEventListener('mouseleave', startAutoScroll);

    updateSlider();
    startAutoScroll();
});

function resetPanierCount() {
   
    localStorage.removeItem('favoriteBooks');
    localStorage.removeItem('readLaterBooks');

    const panierCount = document.querySelector('.panier-count');
    panierCount.textContent = '0';
}

