const peer = new Peer({key: '8bcc94dc-592d-4a96-bb15-1c80f2066616'});
var fileToPlay = null;
peer.on("open", function (){document.getElementById('idview').value = peer.id;});

const videoElm = document.getElementById('video')

function main() 
{
   // const peer = new Peer({key: '8bcc94dc-592d-4a96-bb15-1c80f2066616'});

    var fileInput = document.getElementById('filename')
    fileInput.addEventListener( "change", function (event) {
        var URL = URL || webkitURL;
        var file = event.target.files[0];
        //document.querySelector('video').src = URL.createObjectURL(file);
        fileToPlay = URL.createObjectURL(file);
        videoElm.webkitRequestFullscreen();
        //document.getElementById('filename').innerHTML = document.querySelector('video').src;
    }, false );

    peer.on("connection",function(connection) {
        console.log("connection");
        connection.on("data", msg => {
            console.log("aaa");
            const videoElm = document.getElementById('video')
            if (msg == "play")
            {   
                videoElm.src = fileToPlay;
                videoElm.play();
                videoElm.webkitRequestFullscreen();
            }
            else
            {
                videoElm.pause();
            }
        });
    })

}