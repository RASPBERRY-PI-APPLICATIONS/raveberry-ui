class WebSockets {
   constructor(connection, data, myfunction) {
      this.ws = new WebSocket(connection);

      this.ws.onopen = function () {
         console.log("WebSocket Client Connected");
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
laundry.kinky;
console.log(laundry.prototype);
