
Ext.onReady(function() {
    Ext.tip.QuickTipManager.init();
    Ext.QuickTips.init();
    var wait = new Ext.LoadMask(document.body, {        msg:Ext.ux.calendar.CONST.PROJECT_WELCOME_SIGN
    });
    wait.show();

    // hard code userId
    // In you real application, you do not need pass userId
    // Suppose end user need login to your system and your system will know
    // who are using this calendar. You can ignore this parameter. Not harm
    // to keep this.
    var userId = document.getElementById("userId").value;
    var ds = new Ext.ux.calendar.DataSource();

    ds.initialLoad(userId, function(backObj) {
        var cs = backObj.cs;
        ds.initialObj = backObj;
        if (!cs['language']) {
            var params = Ext.urlDecode(window.location.search .substring(1));
            if (params.lang) {
                cs.language = params.lang;
            } else {
                cs.language = 'zh_CN';
            }
        }
            /*
             * here add the related language file
             */
            if(Ext.ux.calendar.CONST.SHOW_LANGUAGE_MENU){
                Ext.ux.calendar.LanManager.addJavaScript(cs.language);
            }
			
            var count = 0;
            var fn = function() {
                if (!Ext.ux.calendar.Language && count++ < 40) {
                    /*
                     * need defer to wait the js file loaded
                     */
                    Ext.defer(fn, 50)
                } else {

                    var mp = Ext.create('Ext.ux.calendar.MainPanel', { 
                        datasource : ds,
                        calendarSetting : cs,
                        userId : userId
                    });
                    var dv = Ext.create('Ext.Viewport', {  
                    	layout : 'fit',
                        items : [mp]
                    });
                    wait.hide();
                }
            };
            fn();
    });
});