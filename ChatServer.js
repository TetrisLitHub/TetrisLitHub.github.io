var sock = new WebSocket("ws://localhost:8080");

sock.onmessage = function(data) {
    while(true) {
        console.log(data)
        Document.Write(data);
    }
}
