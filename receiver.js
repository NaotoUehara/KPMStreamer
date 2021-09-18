const peer = new Peer({key: '8bcc94dc-592d-4a96-bb15-1c80f2066616'});
var fileToPlay = null;
peer.on("open", function (){document.getElementById('idview').value = peer.id;});

var videoElm = document.getElementById('video');

function full()
{
    videoElm.requestFullscreen();
}

function main() 
{
   // const peer = new Peer({key: '8bcc94dc-592d-4a96-bb15-1c80f2066616'});
   videoElm = document.getElementById('video')
    var fileInput = document.getElementById('filename')
    fileInput.addEventListener( "change", function (event) {
        var URL = URL || webkitURL;
        var file = event.target.files[0];
        //document.querySelector('video').src = URL.createObjectURL(file);
        fileToPlay = URL.createObjectURL(file);
        //videoElm.webkitRequestFullscreen();
        videoElm.src = fileToPlay;
        videoElm.load()
        //document.getElementById('filename').innerHTML = document.querySelector('video').src;
    }, false );

    peer.on("connection",function(connection) {
        console.log("connection");
        connection.on("data", msg => {
            console.log("aaa");
            const videoElm = document.getElementById('video')
            if (msg == "play")
            {   
                videoElm.play();
                videoElm.webkitRequestFullscreen();
                videoElm.RequestFullscreen();
            }
            else
            {
                videoElm.pause();
            }
        });
    })

}