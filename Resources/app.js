var tabGroup = Titanium.UI.createTabGroup();
 
var win1 = Titanium.UI.createWindow({
    backgroundColor:'red',
    url:'login.js'
});
 
 
var tab1 = Titanium.UI.createTab({
    title:'Login',
    window:win1
});
 
var win2 = Titanium.UI.createWindow({
    backgroundColor:'green',
    title:'Search',
    barColor:'#000000'
});
 
var tab2 = Titanium.UI.createTab({
    title:'Search',
    window:win2
});
 
 
tabGroup.addTab(tab1);
tabGroup.addTab(tab2);
 
 
tabGroup.open();