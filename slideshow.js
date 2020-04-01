//Code by Hector Gonzalez for slideshow application. 


var slideshow = {
    photoList: ['beach.jpg', 'tree.jpg', 'elephant.jpg', 'truck.jpg'],
    currentPhotoIndex: 0,
    nextPhoto: function() {

        if (this.currentPhotoIndex < this.photoList.length - 1 ) {
            this.currentPhotoIndex++;   
            console.log("Current Photo is: ", this.photoList[this.currentPhotoIndex]);
        } else {
            console.log('End of Slideshow');
            this.pause()
        };
    },
    prevPhoto: function() {
        
        if (this.currentPhotoIndex > 0) {
            this.currentPhotoIndex--;
            console.log('Current Photo is: ', this.photoList[this.currentPhotoIndex]);
        } else {
            console.log('Beginning of Slideshow');
        }
    },
    getCurrentPhoto: function() {
       return this.photoList[this.currentPhotoIndex];

    },
    //Async Changes
    playInterval: null,

    play: function(){

        this.playInterval = setInterval(function() {
            this.nextPhoto();
        }.bind(this), 2000)

    },
    pause: function(){
        clearInterval(this.playInterval)
    }

}

slideshow.play();

