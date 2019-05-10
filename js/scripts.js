// Javascript goes here
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    // console.log('mobile');
} else {
    var sources = document.querySelectorAll('video source');
    // Define the video object this source is contained inside
    var video = document.querySelector('video');
    for(var i = 0; i<sources.length;i++) {
      sources[i].setAttribute('src', sources[i].getAttribute('data-src'));
    }
    // If for some reason we do want to load the video after, for desktop as opposed to mobile (I'd imagine), use videojs API to load
    video.load();
    video.muted= "muted";
}
