import { CircImgCollection } from "./CircImgCollection.js";

export class Undo {
  // Number of currently available undo and redo snapshots
  undoSteps = 0;
  redoSteps = 0;
  images;
  Undo(levels) {
   
    this.images = new CircImgCollection(levels);
  }

  takeSnapshot(p5) {
    // console.log("jshdkjhdjhdskjhsdkjhkdsjfhkh " + this.images.amount);
    this.undoSteps = p5.min(this.undoSteps + 1, this.images.amount - 1);
    // each time we draw we disable redo
    this.redoSteps = 0;
    this.images.next();
    this.images.capture(p5);
  }

  undo(p5) {
    if (this.undoSteps > 0) {
        this.undoSteps--;
        this.redoSteps++;
        this.images.prev();
        this.images.show(p5);
    }
  }

  redo(p5) {
    if (this.redoSteps > 0) {
        this.undoSteps++;
        this.redoSteps--;
        this.images.next();
        this.images.show(p5);
    }
  }
}
