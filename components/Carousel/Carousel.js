class Carousel {
    constructor(carElement) {
        this.carElement = carElement;
        this.leftButton = this.carElement.querySelector('.left-button');
        this.rightButton = this.carElement.querySelector('.right-button');
        this.imgs = this.carElement.querySelectorAll('img');

        // Click handlers
        this.leftButton.addEventListener('click', () => this.toggleLeft());
        this.rightButton.addEventListener('click', () => this.toggleRight());
    } // Methods
    toggleLeft() {
        
    }
    toggleRight() {
        
    }
}

let carousels = document.querySelectorAll('.carousel');
carousels.forEach(carousel => new Carousel(carousel));

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/