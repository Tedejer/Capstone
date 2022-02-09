// Wave typescript
let container = document.body;
let width = container.offsetWidth;
let height = container.offsetHeight;
let wave = document.getElementById("wave");
class Wave {
    constructor() {
        this.waveWidth = container.offsetWidth;
        this.waveHeight = 550;
        this.waveDelta = 25;
        this.speed = 0.25;
        this.wavePoints = 7;
    }
}
// calculate wave points
let points;
/**
function calculateWavePoints(factor) {
  var points = [];

  for (var i = 0; i <= wavePoints; i++) {
    var x = (i / wavePoints) * waveWidth;
    var sinSeed = (factor + (i + (i % wavePoints))) * speed * 100;
    var sinHeight = Math.sin(sinSeed / 100) * waveDelta;
    var yPos = Math.sin(sinSeed / 100) * sinHeight + waveHeight;
    points.push({ x: x, y: yPos });
  }
  return points;
 */
//# sourceMappingURL=new-wave.js.map