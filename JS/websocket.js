class WebSockets {
   constructor(URL) {
      this.root = "https://" + URL;
      this.ws = new WebSocket(this.root);
   }
   open(data) {
      this.ws.onopen = function () {
         console.log("WebSocket Client Connected");
         ws.send(data);
      };
   }
   onerror() {
      this.ws.onerror = function () {
         console.log("No connection");
         //reload();
      };
   }
   onclose() {
      this.ws.onclose = function () {
         console.log("closed connection");
         //reload();
      };
   }
   ondisconnect() {
      this.ws.ondisconnect = function () {
         reload();
      };
   }
   onmessage() {
      this.ws.onmessage = myfunction;
   }
   callout(data) {
      this.onopen(data);
      this.onclose();
      this.ondisconnect();
      this.onerror();
      this.onmessage();
   }
}

module.exports = WebSockets;

/*   class practice */
