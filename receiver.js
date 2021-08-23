const peer = new Peer({key: '8bcc94dc-592d-4a96-bb15-1c80f2066616'});

function main() 
{
    document.getElementById('connect').onclick = () => {
        console.log('///')
        const idToConnect = document.getElementById('id').value;
        const mediaConnection = peer.call(idToConnect);
        mediaConnection.on('stream', stream => {
            const videoElm = document.getElementById('video')
            videoElm.srcObject = stream;
            videoElm.play();
            videoElm.webkitRequestFullscreen();
        });
    }
}