var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_PROVINCIA_1 = new ol.format.GeoJSON();
var features_PROVINCIA_1 = format_PROVINCIA_1.readFeatures(json_PROVINCIA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PROVINCIA_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PROVINCIA_1.addFeatures(features_PROVINCIA_1);
var lyr_PROVINCIA_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PROVINCIA_1, 
                style: style_PROVINCIA_1,
                popuplayertitle: 'PROVINCIA',
                interactive: true,
                title: '<img src="styles/legend/PROVINCIA_1.png" /> PROVINCIA'
            });
var format_AREAS_PROTEGIDAS_2 = new ol.format.GeoJSON();
var features_AREAS_PROTEGIDAS_2 = format_AREAS_PROTEGIDAS_2.readFeatures(json_AREAS_PROTEGIDAS_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AREAS_PROTEGIDAS_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREAS_PROTEGIDAS_2.addFeatures(features_AREAS_PROTEGIDAS_2);
var lyr_AREAS_PROTEGIDAS_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREAS_PROTEGIDAS_2, 
                style: style_AREAS_PROTEGIDAS_2,
                popuplayertitle: 'AREAS_PROTEGIDAS',
                interactive: true,
                title: '<img src="styles/legend/AREAS_PROTEGIDAS_2.png" /> AREAS_PROTEGIDAS'
            });
var format_CUENCASDEINTERESNACIONAL_3 = new ol.format.GeoJSON();
var features_CUENCASDEINTERESNACIONAL_3 = format_CUENCASDEINTERESNACIONAL_3.readFeatures(json_CUENCASDEINTERESNACIONAL_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CUENCASDEINTERESNACIONAL_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CUENCASDEINTERESNACIONAL_3.addFeatures(features_CUENCASDEINTERESNACIONAL_3);
var lyr_CUENCASDEINTERESNACIONAL_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CUENCASDEINTERESNACIONAL_3, 
                style: style_CUENCASDEINTERESNACIONAL_3,
                popuplayertitle: 'CUENCAS DE INTERES NACIONAL',
                interactive: true,
                title: '<img src="styles/legend/CUENCASDEINTERESNACIONAL_3.png" /> CUENCAS DE INTERES NACIONAL'
            });
var format_CONCESIONES_AREA_4 = new ol.format.GeoJSON();
var features_CONCESIONES_AREA_4 = format_CONCESIONES_AREA_4.readFeatures(json_CONCESIONES_AREA_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CONCESIONES_AREA_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CONCESIONES_AREA_4.addFeatures(features_CONCESIONES_AREA_4);
var lyr_CONCESIONES_AREA_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CONCESIONES_AREA_4, 
                style: style_CONCESIONES_AREA_4,
                popuplayertitle: 'CONCESIONES_AREA',
                interactive: true,
    title: 'CONCESIONES_AREA<br />\
    <img src="styles/legend/CONCESIONES_AREA_4_0.png" /> CE<br />\
    <img src="styles/legend/CONCESIONES_AREA_4_1.png" /> CEP<br />\
    <img src="styles/legend/CONCESIONES_AREA_4_2.png" /> CIG<br />\
    <img src="styles/legend/CONCESIONES_AREA_4_3.png" /> CP<br />\
    <img src="styles/legend/CONCESIONES_AREA_4_4.png" /> PREC<br />' });
var format_CONCESIONES_LINEAL_5 = new ol.format.GeoJSON();
var features_CONCESIONES_LINEAL_5 = format_CONCESIONES_LINEAL_5.readFeatures(json_CONCESIONES_LINEAL_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CONCESIONES_LINEAL_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CONCESIONES_LINEAL_5.addFeatures(features_CONCESIONES_LINEAL_5);
var lyr_CONCESIONES_LINEAL_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CONCESIONES_LINEAL_5, 
                style: style_CONCESIONES_LINEAL_5,
                popuplayertitle: 'CONCESIONES_LINEAL',
                interactive: true,
    title: 'CONCESIONES_LINEAL<br />\
    <img src="styles/legend/CONCESIONES_LINEAL_5_0.png" /> CEP<br />\
    <img src="styles/legend/CONCESIONES_LINEAL_5_1.png" /> CP<br />' });

lyr_GoogleHybrid_0.setVisible(true);lyr_PROVINCIA_1.setVisible(false);lyr_AREAS_PROTEGIDAS_2.setVisible(false);lyr_CUENCASDEINTERESNACIONAL_3.setVisible(false);lyr_CONCESIONES_AREA_4.setVisible(true);lyr_CONCESIONES_LINEAL_5.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_PROVINCIA_1,lyr_AREAS_PROTEGIDAS_2,lyr_CUENCASDEINTERESNACIONAL_3,lyr_CONCESIONES_AREA_4,lyr_CONCESIONES_LINEAL_5];
lyr_PROVINCIA_1.set('fieldAliases', {'PROVINCIA': 'PROVINCIA', 'POB_URBANA': 'POB_URBANA', 'POB_RURAL': 'POB_RURAL', 'POB_TOTAL': 'POB_TOTAL', 'AREA': 'AREA', 'DENSIDAD': 'DENSIDAD', });
lyr_AREAS_PROTEGIDAS_2.set('fieldAliases', {'ID': 'ID', 'NOMBRE': 'NOMBRE', 'CAT_MANEJO': 'CAT_MANEJO', 'CAT_SIGNIF': 'CAT_SIGNIF', 'SUP_TIERRA': 'SUP_TIERRA', 'SUP_MAR': 'SUP_MAR', 'SUP_TOTAL': 'SUP_TOTAL', 'OBJETO': 'OBJETO', });
lyr_CUENCASDEINTERESNACIONAL_3.set('fieldAliases', {'id': 'id', 'objectid': 'objectid', 'nombre': 'nombre', 'numero': 'numero', 'longitud': 'longitud', 'area': 'area', });
lyr_CONCESIONES_AREA_4.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'CODIGO': 'CODIGO', 'TITULAR': 'TITULAR', 'EXPEDIENTE': 'EXPEDIENTE', 'MINERAL': 'MINERAL', 'USO': 'USO', 'RES_ACUERD': 'RES_ACUERD', 'FECHA_RESO': 'FECHA_RESO', 'FECHA_TERM': 'FECHA_TERM', 'TIPO': 'TIPO', 'HECTAREAS': 'HECTAREAS', 'PROVINCIA': 'PROVINCIA', 'MUNICIPIO': 'MUNICIPIO', 'ORGANISMO': 'ORGANISMO', 'CLASIFICAC': 'CLASIFICAC', 'SECTOR': 'SECTOR', 'OFICIAL': 'OFICIAL', 'EXTINCION': 'EXTINCION', 'GACETA_1': 'GACETA_1', });
lyr_CONCESIONES_LINEAL_5.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'CODIGO': 'CODIGO', 'TITULAR': 'TITULAR', 'EXPEDIENTE': 'EXPEDIENTE', 'MINERAL': 'MINERAL', 'USO': 'USO', 'RESOLUCION': 'RESOLUCION', 'FECHA_RES_': 'FECHA_RES_', 'FECHA_TERM': 'FECHA_TERM', 'TIPO': 'TIPO', 'HECTAREAS': 'HECTAREAS', 'PROVINCIA': 'PROVINCIA', 'MUNICIPIO': 'MUNICIPIO', 'ORGANISMO': 'ORGANISMO', 'CLASIFICAC': 'CLASIFICAC', 'OBSERVACIO': 'OBSERVACIO', 'OBSERVAC0': 'OBSERVAC0', 'OBSERVAC1': 'OBSERVAC1', 'OFICIAL': 'OFICIAL', 'EXTINCION': 'EXTINCION', 'GACETA_1': 'GACETA_1', });
lyr_PROVINCIA_1.set('fieldImages', {'PROVINCIA': 'TextEdit', 'POB_URBANA': 'TextEdit', 'POB_RURAL': 'TextEdit', 'POB_TOTAL': 'TextEdit', 'AREA': 'TextEdit', 'DENSIDAD': 'TextEdit', });
lyr_AREAS_PROTEGIDAS_2.set('fieldImages', {'ID': 'TextEdit', 'NOMBRE': 'TextEdit', 'CAT_MANEJO': 'TextEdit', 'CAT_SIGNIF': 'TextEdit', 'SUP_TIERRA': 'TextEdit', 'SUP_MAR': 'TextEdit', 'SUP_TOTAL': 'TextEdit', 'OBJETO': 'TextEdit', });
lyr_CUENCASDEINTERESNACIONAL_3.set('fieldImages', {'id': 'TextEdit', 'objectid': 'TextEdit', 'nombre': 'TextEdit', 'numero': 'TextEdit', 'longitud': 'TextEdit', 'area': 'TextEdit', });
lyr_CONCESIONES_AREA_4.set('fieldImages', {'NOMBRE': 'TextEdit', 'CODIGO': 'TextEdit', 'TITULAR': 'TextEdit', 'EXPEDIENTE': 'TextEdit', 'MINERAL': 'TextEdit', 'USO': 'TextEdit', 'RES_ACUERD': '', 'FECHA_RESO': '', 'FECHA_TERM': '', 'TIPO': 'TextEdit', 'HECTAREAS': 'TextEdit', 'PROVINCIA': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'ORGANISMO': 'TextEdit', 'CLASIFICAC': '', 'SECTOR': 'TextEdit', 'OFICIAL': 'TextEdit', 'EXTINCION': 'TextEdit', 'GACETA_1': 'TextEdit', });
lyr_CONCESIONES_LINEAL_5.set('fieldImages', {'NOMBRE': 'TextEdit', 'CODIGO': 'TextEdit', 'TITULAR': 'TextEdit', 'EXPEDIENTE': 'TextEdit', 'MINERAL': 'TextEdit', 'USO': 'TextEdit', 'RESOLUCION': '', 'FECHA_RES_': '', 'FECHA_TERM': '', 'TIPO': 'TextEdit', 'HECTAREAS': 'TextEdit', 'PROVINCIA': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'ORGANISMO': 'TextEdit', 'CLASIFICAC': '', 'OBSERVACIO': 'TextEdit', 'OBSERVAC0': 'TextEdit', 'OBSERVAC1': 'TextEdit', 'OFICIAL': 'TextEdit', 'EXTINCION': 'TextEdit', 'GACETA_1': 'TextEdit', });
lyr_PROVINCIA_1.set('fieldLabels', {'PROVINCIA': 'inline label - always visible', 'POB_URBANA': 'inline label - always visible', 'POB_RURAL': 'inline label - always visible', 'POB_TOTAL': 'inline label - always visible', 'AREA': 'inline label - always visible', 'DENSIDAD': 'inline label - always visible', });
lyr_AREAS_PROTEGIDAS_2.set('fieldLabels', {'ID': 'hidden field', 'NOMBRE': 'inline label - always visible', 'CAT_MANEJO': 'inline label - always visible', 'CAT_SIGNIF': 'inline label - always visible', 'SUP_TIERRA': 'inline label - always visible', 'SUP_MAR': 'inline label - always visible', 'SUP_TOTAL': 'inline label - always visible', 'OBJETO': 'hidden field', });
lyr_CUENCASDEINTERESNACIONAL_3.set('fieldLabels', {'id': 'hidden field', 'objectid': 'hidden field', 'nombre': 'inline label - always visible', 'numero': 'inline label - always visible', 'longitud': 'inline label - always visible', 'area': 'inline label - always visible', });
lyr_CONCESIONES_AREA_4.set('fieldLabels', {'NOMBRE': 'inline label - always visible', 'CODIGO': 'hidden field', 'TITULAR': 'inline label - always visible', 'EXPEDIENTE': 'inline label - always visible', 'MINERAL': 'inline label - always visible', 'USO': 'inline label - always visible', 'RES_ACUERD': 'inline label - always visible', 'FECHA_RESO': 'inline label - always visible', 'FECHA_TERM': 'inline label - always visible', 'TIPO': 'inline label - always visible', 'HECTAREAS': 'inline label - always visible', 'PROVINCIA': 'inline label - always visible', 'MUNICIPIO': 'inline label - always visible', 'ORGANISMO': 'inline label - always visible', 'CLASIFICAC': 'inline label - always visible', 'SECTOR': 'inline label - always visible', 'OFICIAL': 'hidden field', 'EXTINCION': 'hidden field', 'GACETA_1': 'hidden field', });
lyr_CONCESIONES_LINEAL_5.set('fieldLabels', {'NOMBRE': 'inline label - always visible', 'CODIGO': 'hidden field', 'TITULAR': 'inline label - always visible', 'EXPEDIENTE': 'inline label - always visible', 'MINERAL': 'inline label - always visible', 'USO': 'inline label - always visible', 'RESOLUCION': 'inline label - always visible', 'FECHA_RES_': 'inline label - always visible', 'FECHA_TERM': 'inline label - always visible', 'TIPO': 'inline label - always visible', 'HECTAREAS': 'inline label - always visible', 'PROVINCIA': 'inline label - always visible', 'MUNICIPIO': 'inline label - always visible', 'ORGANISMO': 'inline label - always visible', 'CLASIFICAC': 'inline label - always visible', 'OBSERVACIO': 'hidden field', 'OBSERVAC0': 'hidden field', 'OBSERVAC1': 'hidden field', 'OFICIAL': 'hidden field', 'EXTINCION': 'hidden field', 'GACETA_1': 'hidden field', });
lyr_CONCESIONES_LINEAL_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});