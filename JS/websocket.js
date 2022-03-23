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
class Help {
   constructor(stringArg, numArg, objectArg, arrayArg) {
      this._stringArg = stringArg;
      this._numArg = numArg;
      this._objectArg = objectArg;
      this._arrayArg = arrayArg;
   }
   static Execute() {
      //   var receiver = new Instructions();
      //    receiver.DoThis(this._stringArg, this._numArg, this._objectArg, this._arrayArg );
      console.log("done");
      return "done";
   }
}

let laundry = new Help(2, 4, 5, 6);
laundry.Execute;
Help.prototype.kinky = 4;
console.log(laundry.kinky);
