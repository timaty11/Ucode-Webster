export class CircImgCollection {
    amount
    current;
    img;
    CircImgCollection(amountOfImages, p5) {
      
    //   
    amount = amountOfImages;
      
      // Initialize all images as copies of the current display
      this.img = new p5.PImage[amount];
      for (let i = 0; i < this.amount; i++) {
        img[i] = p5.createImage(width, height, p5.RGB);
        img[i] = p5.get();
      }
    }
     next() {
        this.current = (this.current + 1) % this.amount;
    }
     prev() {
        this.current = (this.current - 1 + this.amount) % this.amount;
    }
     capture(p5) {
        this.img[current] = p5.get();
    }
     show(p5) {
      p5.image(this.img[current], 0, 0);
    }
}