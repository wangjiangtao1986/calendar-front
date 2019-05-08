

Ext.ns("Ext.ux.calendar");

Ext.ux.calendar.CONST = {
    /*
     * The version number of myCalendar
     */
    VERSION:'2.6.1',
    /*
     *true to show the language submenu in myCalendar, or not
     *
     */
    SHOW_LANGUAGE_MENU:true,
        
    /*
     *define the main path of myCalendar
     */
    MAIN_PATH:'js/feyaSoft/calendar/',
    
    BLANK_IMAGE_URL:'../../extjs/resources/images/default/s.gif',
    /*
     *define the multi-language path of myCalendar
     */
    CALENDAR_LANGUAGE_PATH:'js/feyaSoft/calendar/multi-language/',
    /*
     *define the multi-language path of EXT
     */
    EXT_LANGUAGE_PATH:'js/extjs/locale/',
    /*
     * define the some url here for datasource
     */
    searchURL:'/api/calendar/listPage/search.html',

    showAllCalendarURL:'/api/calendar/showAllCalendar.html',

    showOnlyCalendarURL:'/api/calendar/showOnlyCalendar.html',
//保存日程分类
    createUpdateCalendarURL:'/api/calendar/saveCalendarType.html',
    createUpdateCalendarURL2:'/api/calendar/saveCalendarType2.html',
    deleteEventsByCalendarURL:'/api/calendar/deleteEventsByCalendar.html',//清空事件（已测试）
    deleteCalendarURL:'/api/calendar/deleteCalendar.html',  				//（已测试）
    loadCalendarURL:'/api/calendar/loadCalendar.html',      				//(未测试)
    loadEventURL:'/api/calendar/loadEvent.html',                       				//（已测试）
    loadRepeatEventURL:'/api/calendar/loadRepeatEvent.html',				//使用日历内部刷新控件时被调用//(未测试)
    createEventURL:'/api/calendar/createEditEvent.html',    				//工作台设置提醒逻辑待实现,较复杂（已测试）
    updateEventURL:'/api/calendar/updateEvent.html',        				//工作台设置提醒逻辑待实现,较复杂（已测试）
    deleteEventURL:'/api/calendar/deleteEvent.html',        				//（已测试）
    deleteRepeatEventURL:'/api/calendar/deleteRepeatEvent.html',			//(未测试)
    changeDayURL:'/api/calendar/changeDay.html',
    deleteDayURL:'/api/calendar/deleteDay.html',
    loadSettingURL:'/api/calendar/loadSetting.html',
    updateSettingURL:'/api/calendar/updateSetting.html',
    loginURL:'/api/calendar/locallogin.html',									//登录
    registURL:'/api/calendar/localregist.html',									//注册
    changePWDURL:'/api/calendar/localchangePWD.html',									//修改密码
    createUpdateRepeatEventURL:'/api/calendar/createUpdateRepeatEventURL.html',
    initialLoadURL:'/api/calendar/initialLoad.html',
//    listUserURL:'calendar/queryUser',
    updateLockStats:'/api/calendar/updateLockStats.html'
};