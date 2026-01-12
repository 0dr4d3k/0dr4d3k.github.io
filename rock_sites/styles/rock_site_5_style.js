var size = 0;
var placement = 'point';
function categories_rock_site_5(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'cueva':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [119.99999, 171.99998],
                  scale: 0.1833333486111124,
                  anchor: [59.999995, 85.99999],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/horizontal-dry-cave.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'cueva terracota':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [119.99999, 171.89671],
                  scale: 0.1833333486111124,
                  anchor: [59.999995, 85.948355],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/chicot.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '[\'abrigo\', \'acantilado\']':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [119.84158, 171.90837],
                  scale: 0.1835756838319388,
                  anchor: [59.92079, 85.954185],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/shelter.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'afloramiento rocoso':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [121.4837, 173.68076],
                  scale: 0.18109425379701144,
                  anchor: [60.74185, 86.84038],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/roundkarren-field.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'rock-spring':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [119.88998, 171.99998],
                  scale: 0.18350157369281403,
                  anchor: [59.94499, 85.99999],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/impenetrable-spring.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '[\'cantera\', \'hypogeum\', \'mina\', \'rock-sauna\']':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [117.30182, 169.30167],
                  scale: 0.18755037219371362,
                  anchor: [58.65091, 84.650835],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/artificial-cave.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
default:
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [119.92207, 173.57567],
                  scale: 0.1834524704251686,
                  anchor: [59.961035, 86.787835],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/horizontal-ponor-cave-penetrable.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_rock_site_5 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var labelFont = "13.0px \'Open Sans\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "center";
    var offsetX = 15;
    var offsetY = 10;
    var feature
	var value
    var clusteredFeatures = feature.get("features");
    size = clusteredFeatures.length;
    if (size == 1) { // If cluster has one feature
        var feature = clusteredFeatures[0];
        value = clusteredFeatures[0].get("Tipo");
        if (feature.get("Índice") !== null) {
            labelText = String(feature.get("Índice"));
        }
    } else { // If cluster has more than one feature
		labelText = size.toString();
		var radius = 6 + Math.log(size) * 3;
		var maxClusterSize = 80;
		var relativeSize = Math.min(size / maxClusterSize, 1);
		var redComponent, greenComponent, blueComponent = 0;
		if (relativeSize < 0.5) {
			redComponent = Math.floor(210 * (relativeSize / 0.5));
			greenComponent = 210;
		} else {
			redComponent = 210;
			greenComponent = Math.floor(210 * (1 - (relativeSize - 0.5) / 0.5));
		}
		var color = `rgba(${redComponent}, ${greenComponent}, ${blueComponent}, 0.75)`;
		return [
			new ol.style.Style({
				image: new ol.style.Circle({
					radius: radius + 4,
					fill: new ol.style.Fill({
						color: `rgba(${redComponent}, ${greenComponent}, ${blueComponent}, 0.3)`
					})
				})
			}),
			new ol.style.Style({
				image: new ol.style.Circle({
					radius: radius,
					fill: new ol.style.Fill({
						color: color
					})
				}),
				text: new ol.style.Text({
					font: labelFont,
					text: labelText,
					fill: new ol.style.Fill({
						color: labelFill
					}),
					placement: placement
				})
			})
		];
	}
    
    var style = categories_rock_site_5(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
