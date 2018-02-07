Ext.define('Testpackage.view.MyMessageBox', {
    extend : 'Ext.window.Window',
    alias : 'widget.mymessagebox',
    
    modal: 'true',
    height:Ext.getBody().getViewSize().height*.50,
    width:Ext.getBody().getViewSize().width*.50
});
