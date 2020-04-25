// json-two.html?f=000000&b=ffffff

var foregroundHex;
var backgroundHex;
var colorData;

// Check if param exists
var field = 'f';
var url = window.location.href;
if(url.indexOf('?' + field + '=') != -1) {
  // return true;
  foregroundHex = getUrlVariable('f');
  backgroundHex = getUrlVariable('b');
  checkColors(foregroundHex, backgroundHex);

} else if(url.indexOf('&' + field + '=') != -1) {
  // return true;
  foregroundHex = getUrlVariable('f');
  backgroundHex = getUrlVariable('b');
  checkColors(foregroundHex, backgroundHex);
}

// Get Url Parameter
function getUrlVariable(param) {
  var vars = {};
  window.location.href.replace( location.hash, '' ).replace(
    /[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
    function( m, key, value ) { // callback
      vars[key] = value !== undefined ? value : '';
    }
  );
  if ( param ) {
    return vars[param] ? vars[param] : null;
  }
  return vars;
};

function checkColors(foregroundColor, backgroundColor) {
  if (foregroundColor && backgroundColor) {
    foregroundHex = foregroundColor;
    backgroundHex = backgroundColor;
  }

  // Hex to RGB
  function hexToRgb(hex) {
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
      return r + r + g + g + b + b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }

  // Get RGBA
  var foregroundR = hexToRgb(foregroundHex).r
  var foregroundG = hexToRgb(foregroundHex).g
  var foregroundB = hexToRgb(foregroundHex).b
  var foregroundColorRgba = ["" + foregroundR + "","" + foregroundG + "","" + foregroundB + "","0"]

  var backgroundR = hexToRgb(backgroundHex).r
  var backgroundG = hexToRgb(backgroundHex).g
  var backgroundB = hexToRgb(backgroundHex).b
  var backgroundColorRgba = ["" + backgroundR + "","" + backgroundG + "","" + backgroundB + "","1"]

  // console.log(foregroundColorRgba);
  //
  // console.log(backgroundR);
  // console.log(backgroundG);
  // console.log(backgroundB);
  // console.log(backgroundColorRgba);

  function luma(rgbaColor) {
    for (var i = 0; i < 3; i++) {
      var rgb = rgbaColor[i];
      rgb /= 255;
      rgb = rgb < .03928 ? rgb / 12.92 : Math.pow((rgb + .055) / 1.055, 2.4);
      rgbaColor[i] = rgb;
    }
    return .2126 * rgbaColor[0] + .7152 * rgbaColor[1] + 0.0722 * rgbaColor[2];
  }

  var foregroundLuma = luma(foregroundColorRgba);
  var backgroundLuma = luma(backgroundColorRgba);

  // console.log(foregroundLuma);
  // console.log(backgroundLuma);

  function checkContrast() {
    foregroundLuma = foregroundLuma + 0.05
    backgroundLuma = backgroundLuma + 0.05

    if (backgroundLuma < foregroundLuma) {
      return foregroundLuma / backgroundLuma;
    } else {
      return backgroundLuma / foregroundLuma;
    }
  }

  var ratio = checkContrast();
  var ratioRounded = ratio.toPrecision(3);

  function checkRating(value) {
    if (ratioRounded > value) {
      return true;
    } else {
      return false;
    }
  }

  var aaHeadline = checkRating(3);
  var aaaHeadline = checkRating(4.5);
  var aaText = checkRating(4.5);
  var aaaText = checkRating(7);
  var aaComponent = checkRating(3);

  // console.log("Foreground: " + foregroundHex)
  // console.log("Background: " + backgroundHex)
  // console.log("Contrast: " + ratio);
  // console.log("Rounded Contrast: " + ratioRounded);
  // console.log("AA Headline: " + aaHeadline);
  // console.log("AAA Headline: " + aaaHeadline);
  // console.log("AA Text: " + aaText);
  // console.log("AAA Text: " + aaaText);
  // console.log("AA Component: " + aaComponent);
  // console.log("Foreground Luma: " + foregroundLuma);
  // console.log("Background Luma: " + backgroundLuma);

  colorData = {
    "foregroundHex":foregroundHex,
    "backgroundHex":backgroundHex,
    "foregroundRgb":foregroundR + ", " + foregroundG + ", " + foregroundB,
    "backgroundRgb":backgroundR + ", " + backgroundG + ", " + backgroundB,
    "contrast":ratioRounded,
    "aaHeadline":aaHeadline,
    "aaaHeadline":aaaHeadline,
    "aaText":aaText,
    "aaaText":aaaText,
    "aaComponent":aaComponent,
    "foregroundLuma":foregroundLuma,
    "backgroundLuma":backgroundLuma
  }
};
