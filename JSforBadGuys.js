let play_btn = document.getElementById('play')
let video = document.getElementById('video')

var seat = document.getElementById('chair');


var seatElements = document.querySelectorAll('.book .right .chair .row li');


seatElements.forEach(function(seat) {
    seat.addEventListener('click', function() {
        
        this.classList.toggle('green');
    });


});

play_btn.addEventListener('click', () =>{
    if(video.paused) {
        video.play();
        video.style.display = 'unset';
        play_btn.classList.remove('bi-play-fill')
        play_btn.classList.add('bi-pause')
    }else {
        video.pause();
        video.style.display= 'none';
        play_btn.classList.add('bi-play-fill')
        play_btn.classList.remove('bi-pause')
    }
})

video.addEventListener('ended', () => {
    video.play();
})



