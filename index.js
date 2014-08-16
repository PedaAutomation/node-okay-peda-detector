var jreRunner    = require('jre-runner'),
    EventEmitter = require('events').EventEmitter;

function OkayPedaDetector() {
  var self = this;

  this.listen = function() {
    var command = this.command = jreRunner.runJava(['-jar', __dirname + '/okay-peda.jar']);

    command.stdout.on("data", function(data) {
      self.emit("hotword", data);
    });

    command.on('close', function (code) {
      console.log('Okaypeda process exited with code ' + code);
    });
  }
}

OkayPedaDetector.prototype.__proto__ = EventEmitter.prototype;

module.exports = OkayPedaDetector;
