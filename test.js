var OkayPedaDetector = require('./');

var detector = new OkayPedaDetector();

detector.on("hotword", function(data) {
  console.log("okaypeda");
});

detector.listen();
