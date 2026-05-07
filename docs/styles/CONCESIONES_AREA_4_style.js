var size = 0;
var placement = 'point';
function categories_CONCESIONES_AREA_4(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'CE':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(217,56,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2.28}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'CEP':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(210,168,226,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2.28}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'CIG':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,174,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'CP':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(171,29,150,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'PREC':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(211,164,70,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_CONCESIONES_AREA_4 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("TIPO");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
    var style = categories_CONCESIONES_AREA_4(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
