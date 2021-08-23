let peerConnections = [];
let localStreams = {};

function capture(peerObj) {
  navigator.mediaDevices.getDisplayMedia()
    .then(stream => 
        {
          //const videoElm = document.getElementById('video');
          //videoElm.srcObject = stream;
          //videoElm.play();
          localStreams[peerObj] = stream;
        }
      );
}

function main()
{   
    document.getElementById('share').onclick = share;
}

function share()
{
  const peer = new Peer({key: '8bcc94dc-592d-4a96-bb15-1c80f2066616'});
  var insert_before = document.getElementById('end');
  var id_view = document.createElement("p");
  insert_before.before(id_view);
  capture(peer);
  peer.on('open', () => {
    id_view.textContent = peer.id;
  });
  peer.on('call', mediaConnection => {
    mediaConnection.answer(localStreams[peer]);
  });
}