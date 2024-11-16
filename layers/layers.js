ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32644").setExtent([789989.119042, 2025419.813377, 819010.180122, 2055810.289318]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_municipalboundary_1 = new ol.format.GeoJSON();
var features_municipalboundary_1 = format_municipalboundary_1.readFeatures(json_municipalboundary_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32644'});
var jsonSource_municipalboundary_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_municipalboundary_1.addFeatures(features_municipalboundary_1);
var lyr_municipalboundary_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_municipalboundary_1, 
                style: style_municipalboundary_1,
                popuplayertitle: "municipal boundary",
                interactive: true,
    title: 'municipal boundary<br />\
    <img src="styles/legend/municipalboundary_1_0.png" /> Amadalavalasa<br />\
    <img src="styles/legend/municipalboundary_1_1.png" /> Pithapuram<br />\
    <img src="styles/legend/municipalboundary_1_2.png" /> <br />'
        });
var format_STPs_2 = new ol.format.GeoJSON();
var features_STPs_2 = format_STPs_2.readFeatures(json_STPs_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32644'});
var jsonSource_STPs_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_STPs_2.addFeatures(features_STPs_2);
var lyr_STPs_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_STPs_2, 
                style: style_STPs_2,
                popuplayertitle: "STPs",
                interactive: true,
    title: 'STPs<br />\
    <img src="styles/legend/STPs_2_0.png" /> Amadalavalasa<br />\
    <img src="styles/legend/STPs_2_1.png" /> Pithapuram<br />\
    <img src="styles/legend/STPs_2_2.png" /> <br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_municipalboundary_1.setVisible(true);lyr_STPs_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_municipalboundary_1,lyr_STPs_2];
lyr_municipalboundary_1.set('fieldAliases', {'Id': 'Id', 'Name': 'Name', 'Population': 'Population', 'No_of_STP': 'No_of_STP', 'No_of_NSTP': 'No_of_NSTP', 'STP_Status': 'STP_Status', 'Const_Stat': 'Const_Stat', 'Total_proj': 'Total_proj', });
lyr_STPs_2.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'x__Longi_1': 'x__Longi_1', 'y__Latitud': 'y__Latitud', 'Name': 'Name', 'Location': 'Location', 'Capasity': 'Capasity', 'Type': 'Type', 'Technology': 'Technology', 'Land_owner': 'Land_owner', 'Land_req': 'Land_req', 'Status_pos': 'Status_pos', 'proj_statu': 'proj_statu', 'proj_st_1': 'proj_st_1', 'cost': 'cost', });
lyr_municipalboundary_1.set('fieldImages', {'Id': 'Range', 'Name': 'TextEdit', 'Population': 'TextEdit', 'No_of_STP': 'Range', 'No_of_NSTP': 'Range', 'STP_Status': 'TextEdit', 'Const_Stat': 'TextEdit', 'Total_proj': 'Range', });
lyr_STPs_2.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'x__Longi_1': 'TextEdit', 'y__Latitud': 'TextEdit', 'Name': 'TextEdit', 'Location': 'TextEdit', 'Capasity': 'TextEdit', 'Type': 'TextEdit', 'Technology': 'TextEdit', 'Land_owner': 'TextEdit', 'Land_req': 'TextEdit', 'Status_pos': 'TextEdit', 'proj_statu': 'TextEdit', 'proj_st_1': 'TextEdit', 'cost': 'TextEdit', });
lyr_municipalboundary_1.set('fieldLabels', {'Id': 'no label', 'Name': 'inline label - always visible', 'Population': 'inline label - always visible', 'No_of_STP': 'inline label - always visible', 'No_of_NSTP': 'inline label - always visible', 'STP_Status': 'inline label - always visible', 'Const_Stat': 'inline label - always visible', 'Total_proj': 'inline label - always visible', });
lyr_STPs_2.set('fieldLabels', {'OBJECTID_1': 'no label', 'x__Longi_1': 'header label - always visible', 'y__Latitud': 'header label - always visible', 'Name': 'inline label - always visible', 'Location': 'inline label - always visible', 'Capasity': 'inline label - always visible', 'Type': 'inline label - always visible', 'Technology': 'inline label - always visible', 'Land_owner': 'inline label - always visible', 'Land_req': 'inline label - always visible', 'Status_pos': 'inline label - always visible', 'proj_statu': 'inline label - always visible', 'proj_st_1': 'inline label - always visible', 'cost': 'inline label - always visible', });
lyr_STPs_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});