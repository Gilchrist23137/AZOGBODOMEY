var wms_layers = [];

var format_Com_Zogbodomey_0 = new ol.format.GeoJSON();
var features_Com_Zogbodomey_0 = format_Com_Zogbodomey_0.readFeatures(json_Com_Zogbodomey_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Com_Zogbodomey_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Com_Zogbodomey_0.addFeatures(features_Com_Zogbodomey_0);
var lyr_Com_Zogbodomey_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Com_Zogbodomey_0, 
                style: style_Com_Zogbodomey_0,
                popuplayertitle: 'Com_Zogbodomey',
                interactive: true,
                title: '<img src="styles/legend/Com_Zogbodomey_0.png" /> Com_Zogbodomey'
            });
var format_Foret_Zogbodomey_1 = new ol.format.GeoJSON();
var features_Foret_Zogbodomey_1 = format_Foret_Zogbodomey_1.readFeatures(json_Foret_Zogbodomey_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Foret_Zogbodomey_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Foret_Zogbodomey_1.addFeatures(features_Foret_Zogbodomey_1);
var lyr_Foret_Zogbodomey_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Foret_Zogbodomey_1, 
                style: style_Foret_Zogbodomey_1,
                popuplayertitle: 'Foret_Zogbodomey',
                interactive: true,
                title: '<img src="styles/legend/Foret_Zogbodomey_1.png" /> Foret_Zogbodomey'
            });
var format_Infrastructuressocio_sanitairesZogbodomey_2 = new ol.format.GeoJSON();
var features_Infrastructuressocio_sanitairesZogbodomey_2 = format_Infrastructuressocio_sanitairesZogbodomey_2.readFeatures(json_Infrastructuressocio_sanitairesZogbodomey_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Infrastructuressocio_sanitairesZogbodomey_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Infrastructuressocio_sanitairesZogbodomey_2.addFeatures(features_Infrastructuressocio_sanitairesZogbodomey_2);
var lyr_Infrastructuressocio_sanitairesZogbodomey_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Infrastructuressocio_sanitairesZogbodomey_2, 
                style: style_Infrastructuressocio_sanitairesZogbodomey_2,
                popuplayertitle: 'Infrastructures socio_sanitaires Zogbodomey',
                interactive: true,
                title: '<img src="styles/legend/Infrastructuressocio_sanitairesZogbodomey_2.png" /> Infrastructures socio_sanitaires Zogbodomey'
            });
var format_Loc_Zogbodomey_3 = new ol.format.GeoJSON();
var features_Loc_Zogbodomey_3 = format_Loc_Zogbodomey_3.readFeatures(json_Loc_Zogbodomey_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Loc_Zogbodomey_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Loc_Zogbodomey_3.addFeatures(features_Loc_Zogbodomey_3);
var lyr_Loc_Zogbodomey_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Loc_Zogbodomey_3, 
                style: style_Loc_Zogbodomey_3,
                popuplayertitle: 'Loc_Zogbodomey',
                interactive: true,
                title: '<img src="styles/legend/Loc_Zogbodomey_3.png" /> Loc_Zogbodomey'
            });
var format_Route_Zogbodomey_4 = new ol.format.GeoJSON();
var features_Route_Zogbodomey_4 = format_Route_Zogbodomey_4.readFeatures(json_Route_Zogbodomey_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Route_Zogbodomey_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Route_Zogbodomey_4.addFeatures(features_Route_Zogbodomey_4);
var lyr_Route_Zogbodomey_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Route_Zogbodomey_4, 
                style: style_Route_Zogbodomey_4,
                popuplayertitle: 'Route_Zogbodomey',
                interactive: true,
    title: 'Route_Zogbodomey<br />\
    <img src="styles/legend/Route_Zogbodomey_4_0.png" /> NC<br />\
    <img src="styles/legend/Route_Zogbodomey_4_1.png" /> RN<br />\
    <img src="styles/legend/Route_Zogbodomey_4_2.png" /> RNIE<br />' });

lyr_Com_Zogbodomey_0.setVisible(true);lyr_Foret_Zogbodomey_1.setVisible(true);lyr_Infrastructuressocio_sanitairesZogbodomey_2.setVisible(true);lyr_Loc_Zogbodomey_3.setVisible(true);lyr_Route_Zogbodomey_4.setVisible(true);
var layersList = [lyr_Com_Zogbodomey_0,lyr_Foret_Zogbodomey_1,lyr_Infrastructuressocio_sanitairesZogbodomey_2,lyr_Loc_Zogbodomey_3,lyr_Route_Zogbodomey_4];
lyr_Com_Zogbodomey_0.set('fieldAliases', {'Nom_COM': 'Nom_COM', 'Population': 'Population', 'Code_COM': 'Code_COM', 'Source': 'Source', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Foret_Zogbodomey_1.set('fieldAliases', {'Id': 'Id', 'CLASS': 'CLASS', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'AREA_HA': 'AREA_HA', });
lyr_Infrastructuressocio_sanitairesZogbodomey_2.set('fieldAliases', {'Type': 'Type', 'Nature': 'Nature', 'Ech_Carto': 'Ech_Carto', 'Source': 'Source', 'Nom_SAN': 'Nom_SAN', 'Commentair': 'Commentair', });
lyr_Loc_Zogbodomey_3.set('fieldAliases', {'Nom_LOC': 'Nom_LOC', 'Type': 'Type', 'Statut_ADM': 'Statut_ADM', 'Commune': 'Commune', 'Arrondisst': 'Arrondisst', 'Village_Ad': 'Village_Ad', 'Nom_PROP': 'Nom_PROP', 'Nom_ENQ': 'Nom_ENQ', 'Nom_50K': 'Nom_50K', 'Nom_200K': 'Nom_200K', 'Nom_600K': 'Nom_600K', 'Nom_ASSEMB': 'Nom_ASSEMB', 'Nom_SBEE': 'Nom_SBEE', 'Nom_DGEAU': 'Nom_DGEAU', 'Nom_INSAE': 'Nom_INSAE', 'Autre_Nom': 'Autre_Nom', 'Point_eau': 'Point_eau', 'Gendarm': 'Gendarm', 'Police': 'Police', 'Pompiers': 'Pompiers', 'Pro_civile': 'Pro_civile', 'Douane': 'Douane', 'Hopital': 'Hopital', 'Autre_SAN': 'Autre_SAN', 'Code_GEO': 'Code_GEO', 'Code_INSAE': 'Code_INSAE', 'Population': 'Population', 'Ech_carto': 'Ech_carto', 'Source': 'Source', 'X_Etiq': 'X_Etiq', 'Y_Etiq': 'Y_Etiq', 'Commentair': 'Commentair', 'OrigineNom': 'OrigineNom', });
lyr_Route_Zogbodomey_4.set('fieldAliases', {'Num_ROUTE': 'Num_ROUTE', 'Type': 'Type', 'Cl_Admin': 'Cl_Admin', 'Revetement': 'Revetement', 'Praticab': 'Praticab', 'Chaussee_S': 'Chaussee_S', 'Voie_local': 'Voie_local', 'Etat': 'Etat', 'Date': 'Date', 'Franchisst': 'Franchisst', 'Ech_Carto': 'Ech_Carto', 'Source': 'Source', 'Commentair': 'Commentair', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_Com_Zogbodomey_0.set('fieldImages', {'Nom_COM': 'TextEdit', 'Population': 'TextEdit', 'Code_COM': 'TextEdit', 'Source': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Foret_Zogbodomey_1.set('fieldImages', {'Id': 'Range', 'CLASS': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_Infrastructuressocio_sanitairesZogbodomey_2.set('fieldImages', {'Type': 'TextEdit', 'Nature': 'TextEdit', 'Ech_Carto': 'TextEdit', 'Source': 'TextEdit', 'Nom_SAN': 'TextEdit', 'Commentair': 'TextEdit', });
lyr_Loc_Zogbodomey_3.set('fieldImages', {'Nom_LOC': '', 'Type': '', 'Statut_ADM': '', 'Commune': '', 'Arrondisst': '', 'Village_Ad': '', 'Nom_PROP': '', 'Nom_ENQ': '', 'Nom_50K': '', 'Nom_200K': '', 'Nom_600K': '', 'Nom_ASSEMB': '', 'Nom_SBEE': '', 'Nom_DGEAU': '', 'Nom_INSAE': '', 'Autre_Nom': '', 'Point_eau': '', 'Gendarm': '', 'Police': '', 'Pompiers': '', 'Pro_civile': '', 'Douane': '', 'Hopital': '', 'Autre_SAN': '', 'Code_GEO': '', 'Code_INSAE': '', 'Population': '', 'Ech_carto': '', 'Source': '', 'X_Etiq': '', 'Y_Etiq': '', 'Commentair': '', 'OrigineNom': '', });
lyr_Route_Zogbodomey_4.set('fieldImages', {'Num_ROUTE': 'TextEdit', 'Type': 'TextEdit', 'Cl_Admin': 'TextEdit', 'Revetement': 'TextEdit', 'Praticab': 'TextEdit', 'Chaussee_S': 'TextEdit', 'Voie_local': 'TextEdit', 'Etat': 'TextEdit', 'Date': 'DateTime', 'Franchisst': 'TextEdit', 'Ech_Carto': 'TextEdit', 'Source': 'TextEdit', 'Commentair': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_Com_Zogbodomey_0.set('fieldLabels', {'Nom_COM': 'no label', 'Population': 'no label', 'Code_COM': 'no label', 'Source': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Foret_Zogbodomey_1.set('fieldLabels', {'Id': 'no label', 'CLASS': 'no label', 'AREA': 'no label', 'PERIMETER': 'no label', 'AREA_HA': 'no label', });
lyr_Infrastructuressocio_sanitairesZogbodomey_2.set('fieldLabels', {'Type': 'no label', 'Nature': 'no label', 'Ech_Carto': 'no label', 'Source': 'no label', 'Nom_SAN': 'no label', 'Commentair': 'no label', });
lyr_Loc_Zogbodomey_3.set('fieldLabels', {'Nom_LOC': 'no label', 'Type': 'no label', 'Statut_ADM': 'no label', 'Commune': 'no label', 'Arrondisst': 'no label', 'Village_Ad': 'no label', 'Nom_PROP': 'no label', 'Nom_ENQ': 'no label', 'Nom_50K': 'no label', 'Nom_200K': 'no label', 'Nom_600K': 'no label', 'Nom_ASSEMB': 'no label', 'Nom_SBEE': 'no label', 'Nom_DGEAU': 'header label - always visible', 'Nom_INSAE': 'no label', 'Autre_Nom': 'no label', 'Point_eau': 'no label', 'Gendarm': 'no label', 'Police': 'no label', 'Pompiers': 'no label', 'Pro_civile': 'no label', 'Douane': 'no label', 'Hopital': 'no label', 'Autre_SAN': 'no label', 'Code_GEO': 'no label', 'Code_INSAE': 'no label', 'Population': 'no label', 'Ech_carto': 'no label', 'Source': 'no label', 'X_Etiq': 'no label', 'Y_Etiq': 'no label', 'Commentair': 'no label', 'OrigineNom': 'no label', });
lyr_Route_Zogbodomey_4.set('fieldLabels', {'Num_ROUTE': 'no label', 'Type': 'no label', 'Cl_Admin': 'no label', 'Revetement': 'no label', 'Praticab': 'no label', 'Chaussee_S': 'no label', 'Voie_local': 'no label', 'Etat': 'no label', 'Date': 'no label', 'Franchisst': 'no label', 'Ech_Carto': 'no label', 'Source': 'no label', 'Commentair': 'no label', 'SHAPE_Leng': 'no label', });
lyr_Route_Zogbodomey_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});