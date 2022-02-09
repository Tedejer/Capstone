var container = document.body;
var width = container.offsetWidth;
var height = container.offsetHeight;
var wave = document.getElementById("wave");

var waveWidth = container.offsetWidth; // Wave SVG width (usually container width)
var waveHeight = 550; // Position from the top of container
var waveDelta = 25; // Wave amplitude
var speed = 0.25; // Wave animation speed
var wavePoints = 7; // How many point will be used to compute our wave

var points = [];

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
}

function buildPath(points) {
  var SVGString = "M " + points[0].x + " " + points[0].y;

  var cp0 = {
    x: (points[1].x - points[0].x) / 2,
    y: points[1].y - points[0].y + points[0].y + (points[1].y - points[0].y)
  };

  SVGString +=
    " C " +
    cp0.x +
    " " +
    cp0.y +
    " " +
    cp0.x +
    " " +
    cp0.y +
    " " +
    points[1].x +
    " " +
    points[1].y;

  var prevCp = cp0;
  var inverted = -1;

  for (var i = 1; i < points.length - 1; i++) {
    var cpLength = Math.sqrt(prevCp.x * prevCp.x + prevCp.y * prevCp.y);
    var cp1 = {
      x: points[i].x - prevCp.x + points[i].x,
      y: points[i].y - prevCp.y + points[i].y
    };

    SVGString +=
      " C " +
      cp1.x +
      " " +
      cp1.y +
      " " +
      cp1.x +
      " " +
      cp1.y +
      " " +
      points[i + 1].x +
      " " +
      points[i + 1].y;
    prevCp = cp1;
    inverted = -inverted;
  }

  SVGString += " L " + width + " " + height;
  SVGString += " L 0 " + height + " Z";
  return SVGString;
}

var lastUpdate;
var totalTime = 0;

function tick() {
  var now = window.Date.now();

  if (lastUpdate) {
    var elapsed = (now - lastUpdate) / 1000;
    lastUpdate = now;

    totalTime += elapsed;

    var factor = totalTime * Math.PI;
    wave.setAttribute("d", buildPath(calculateWavePoints(factor)));
  } else {
    lastUpdate = now;
  }

  window.requestAnimationFrame(tick);
}
tick();
