//Code by Hector Gonzalez for slideshow application. 


var slideshow = {
    photoList: ['beach.jpg', 'tree.jpg', 'elephant.jpg', 'truck.jpg'],
    currentPhotoIndex: 0,
    nextPhoto: function() {

        this.currentPhotoIndex++;

        if (this.currentPhotoIndex > this.photoList.length - 1 ) {
            this.currentPhotoIndex = -1;
            console.log('End of Slideshow')
        } else {
            console.log('next slide');
            console.log('Photo is:', this.photoList[this.currentPhotoIndex]);
        };
    },
    prevPhoto: function() {
        
        this.currentPhotoIndex--;

        if (this.currentPhotoIndex < 0 ) {
            this.currentPhotoIndex = this.photoList.length
            console.log('Beginning of Slideshow');
        } else {
            console.log('previous slide');
            console.log('Photo is:', this.photoList[this.currentPhotoIndex]);

        }
    },
    getCurrentPhoto: function() {
        console.log('Current Photo is:', this.photoList[this.currentPhotoIndex]);
    }
}

slideshow.getCurrentPhoto();
slideshow.prevPhoto();
slideshow.prevPhoto();
slideshow.nextPhoto();
slideshow.nextPhoto();
slideshow.nextPhoto();
slideshow.nextPhoto();
slideshow.getCurrentPhoto();


