// Wave typescript

let container: HTMLElement = document.body;
let width: number = container.offsetWidth;
let height: number = container.offsetHeight;
let wave: HTMLElement = document.getElementById("wave");

class Wave {
  waveWidth: number = container.offsetWidth;
  waveHeight: number = 550;
  waveDelta: number = 25;
  speed: number = 0.25;
  wavePoints = 7;
}

// calculate wave points
let points: number[];

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
