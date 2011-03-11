var win=Titanium.UI.currentWindow;

var button = Ti.UI.createButton({
    title:'login'
});

button.addEventListener('click',function(e){
    var indexWin = Ti.UI.createWindow({
        backgroundColor:'blue',
        navBarHidden:false,
        url:'index.js',
        title:'index'
    });
    indexWin.open();
});

win.add(button);