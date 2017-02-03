var peer = new Peer({
    key: '891484a0-11f6-45cf-8514-c0f8e815c971',
    debug: 3
});

peer.on('open', function() {
    let localpeerid = peer.id;
});

peer.on('connection', function(connection) {
    let remotepeerid = connection;
});
