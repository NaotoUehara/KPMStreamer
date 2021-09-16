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
    document.getElementById('register').onclick = register;
    document.getElementById('play').onclick = play;
}


function register()
{
  console.log('register')
    var id = document.getElementById('id').value;
    const peer = new Peer({key: '8bcc94dc-592d-4a96-bb15-1c80f2066616'});
    peer.on("open",function() {
      peerConnections.push(peer.connect(id));
      //peerConnections.push(connection)
    });
}

function play()
{
  console.log("play")
  for (var elm of peerConnections)
  {
    elm.send("play");
    console.log("play pls")
  }
  /*
  var insert_before = document.getElementById('end');
  var id_view = document.createElement("p");
  insert_before.before(id_view);
  capture(peer);
  peer.on('open', () => {
    id_view.textContent = peer.id;
  });
  */
}