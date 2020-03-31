//Code by Hector Gonzalez for slideshow application. 


var slideshow = {
    photoList: ['beach.jpg', 'tree.jpg', 'elephant.jpg', 'truck.jpg'],
    currentPhotoIndex: 0,
    nextPhoto: function() {

        this.currentPhotoIndex++;

        if (this.currentPhotoIndex > this.photoList.length - 1 ) {
            this.currentPhotoIndex = 0;
            console.log('Back to beginning of slideshow')
        } else {
            console.log('next slide');
        };
    },
    prevPhoto: function() {
        
        this.currentPhotoIndex--;

        if (this.currentPhotoIndex < 0 ) {
            this.currentPhotoIndex = this.photoList.length - 1 
            console.log('Back to end of slideshow');
        } else {
            console.log('previous slide');
        }
    },
    getCurrentPhoto: function() {
        console.log(this.photoList[this.currentPhotoIndex]);
    }
}

slideshow.getCurrentPhoto();
slideshow.nextPhoto();
slideshow.getCurrentPhoto();
slideshow.nextPhoto();
slideshow.getCurrentPhoto();
slideshow.prevPhoto();
slideshow.getCurrentPhoto();


