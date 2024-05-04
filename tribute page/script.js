function initializeCarousel(carouselElementId) {
    // Get all carousel elements with the given ID
    const carousels = document.querySelectorAll(carouselElementId);
    
    // Iterate over each carousel element
    carousels.forEach(carousel => {
        // Get the carousel items and indicators
        const items = carousel.querySelectorAll('[data-twe-carousel-item]');
        const indicators = carousel.querySelectorAll('[data-twe-carousel-indicators] button');
    
        // Initialize current slide index
        let currentSlideIndex = 0;
    
        // Function to show a specific slide
        function showSlide(index) {
            // Hide all slides
            items.forEach((item) => {
                item.classList.add('hidden');
            });
            // Show the selected slide
            items[index].classList.remove('hidden');
    
            // Update active indicator
            indicators.forEach((indicator, i) => {
                if (i === index) {
                    indicator.classList.add('carousel-active');
                    indicator.setAttribute('aria-current', 'true');
                } else {
                    indicator.classList.remove('carousel-active');
                    indicator.removeAttribute('aria-current');
                }
            });
        }
    
        // Function to show next slide
        function nextSlide() {
            currentSlideIndex = (currentSlideIndex + 1) % items.length;
            showSlide(currentSlideIndex);
        }
    
        // Function to show previous slide
        function prevSlide() {
            currentSlideIndex = (currentSlideIndex - 1 + items.length) % items.length;
            showSlide(currentSlideIndex);
        }
    
        // Add click event listeners to navigation buttons
        carousel.querySelector('[data-twe-slide="prev"]').addEventListener('click', prevSlide);
        carousel.querySelector('[data-twe-slide="next"]').addEventListener('click', nextSlide);
    
        // Add click event listeners to indicators
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                currentSlideIndex = index;
                showSlide(currentSlideIndex);
            });
        });
    });
}

// Call the initializeCarousel function for each carousel element on the page
initializeCarousel('#carouselExampleIndicators');
// If you have other carousels on the page, call initializeCarousel for each of them like this:
// initializeCarousel('#otherCarouselId');

const words = [
    "I always try to give my best, play my game, and help my team.",
    "I'm not interested in records, I'm interested in winning titles.",
    "The most important thing is to enjoy playing, and to try to win every game.",
    "I don't play for the money or the fame, I play for the love of the game.",
    "I'm not a perfect player, but I always try to give my best.",
    "I'm not the best player in the world, but I'm one of the best.",
    "I'm always trying to improve, and I'm always learning.",
    "I'm a very competitive person, and I hate to lose.",
    "I'm always trying to create chances for my teammates.",
    "I'm always trying to score goals, but I'm also trying to help my team win.",
    "I'm a very passionate player, and I always give 100%.",
    "I'm very proud to play for Barcelona.",
    "I'm very proud to play for Argentina.",
    "I'm very grateful for all the support I've received from my family and friends.",
    "I'm very lucky to be able to play the game I love.",
    "I'm very happy to be a part of this team.",
    "I'm very excited about the future.",
    "I'm very confident in my abilities.",
    "I'm very ambitious, and I always want to win.",
    "I'm very motivated, and I always want to improve.",
    "I'm very disciplined, and I always follow my coach's instructions.",
    "I'm very professional, and I always take my job seriously.",
    "I'm very respectful of my opponents.",
    "I'm very humble, and I never take anything for granted.",
    "I'm very grateful for everything I have.",
    "I'm very happy with my life.",
    "I'm very content with my career.",
    "I'm very proud of my achievements.",
    "I'm very excited about the future.",
    "I'm very confident in my abilities.",
    "I'm very motivated to continue to improve.",
    "I'm very grateful for the support of my fans.",
    "I'm very lucky to be able to play the game I love.",
    "I'm very happy to be a part of this team.",
    "I'm very excited about the future.",
    "I'm very confident in my abilities.",
    "I'm very motivated to continue to improve.",
    "I'm very grateful for the support of my fans.",
    "I'm very lucky to be able to play the game I love.",
    "I'm very happy to be a part of this team.",
    "I'm very excited about the future.",
    "I'm very confident in my abilities.",
    "I'm very motivated to continue to improve.",
    "I'm very grateful for the support of my fans.",
    "I'm very lucky to be able to play the game I love.",
    "I'm very happy to be a part of this team."
  ];
    let index = 0;
    let wordIndex = 0;
    let intervalId;

    function typingText() {
        const target = document.getElementById("type");
        const currentWordpre = words[wordIndex];
        const currentWord=currentWordpre+` - Lionel Messi`
        const currentWordLength = currentWord.length;

        if (index < currentWordLength) {
            target.textContent += currentWord.charAt(index);
            index++;
            setTimeout(typingText, 50);
        } else {
            setTimeout(() => {
                intervalId = setInterval(removeText, 20);
            }, 2000);
        }
    }

// To remove text after typing
function removeText() {
    const target = document.getElementById("type");
    const currentWordpre = words[wordIndex];
    const currentWord=currentWordpre+` - Lionel Messi`
    const currentWordLength = currentWord.length;

    if (index > 0) {
        target.textContent = currentWord.substring(0, index - 1);
        index--;
    } else {
        clearInterval(intervalId);
        wordIndex = (wordIndex + 1) % words.length;
        index = 0;
        setTimeout(typingText, 1000);
    }
}
typingText();
//Animate on scroll initializations
//ScrollReveal({reset:true}).reveal('.timeline', { distance: '510px' ,origin:'right'});

//navbar
ScrollReveal({reset:false}).reveal('.navbar', { distance: '-20px'});
//narrative

ScrollReveal({reset:true}).reveal('.left', { distance: '100px' ,origin:'left',delay:150});
ScrollReveal({reset:true}).reveal('.right', { distance: '100px' ,origin:'right',delay:150});

//carcarouselExampleIndicators

ScrollReveal({reset:true}).reveal('.carouselExampleIndicators', { distance: '100px' ,origin:'bottom'});
ScrollReveal({reset:true}).reveal('.quiz-btn', { distance: '40px'});
ScrollReveal({reset:true}).reveal('.footer', { distance: '40px'});