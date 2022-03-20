class WebSockets {
    constructor(connection,data, myfunction) {

        this.ws = new WebSocket(connection)

        this.ws.onopen = function () {
            console.log('WebSocket Client Connected');
            ws.send(data);
        };
        this.ws.onerror = function () {
            console.log("No connection");
            //reload();
        };
        this.ws.onclose = function () {
            console.log("closed connection");
            //reload();
        };
        this.ws.ondisconnect = function () {
            reload();
        };

        this.ws.onmessage = myfunction;

    }
}

module.exports = WebSockets