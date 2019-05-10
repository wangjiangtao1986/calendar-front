
Ext.ns("Ext.ux.calendar");
Ext.ux.calendar.CONST = {	PROJECT_TITLE:'欢迎使用领导工作计划',//	领导工作计划-工作部署（项目管理-运营规划）-日程管理		PROJECT_WELCOME_SIGN:'<b>欢迎使用领导工作计划请稍后, 配置信息加载中</b>...',	
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
    updateLockStats:'/api/calendar/updateLockStats.html',
    

    loadEventDefalut : {
		"total" : 27,
		"rows" : [
				{
					"id" : "a76a02b5-b6f3-4857-bf2f-19877f12bb32",
					"description" : "热爱生活-专注工作",
					"endTime" : "24:00",
					"startTime" : "00:00",
					"locked1" : null,
					"createDate" : "2018-04-24 09:31:26",
					"subEventid" : null,
					"updateDate" : "2018-04-24 09:31:26",
					"locked" : "false",
					"lockedf" : null,
					"ismanager" : null,
					"yaoqingorder" : null,
					"yaoqing" : null,
					"dbflag" : null,
					"alertFlag" : "null",
					"userId" : "super",
					"repeatType" : "{\"rtype\":\"week\",\"intervalSlot\":3,\"dspan\":0,\"beginDay\":\"2018-05-08\",\"endDay\":\"no\",\"rday\":{\"1\":true,\"2\":true,\"3\":true,\"4\":true,\"7\":true}}",
					"startDay" : "2018-06-21",
					"endDay" : "2018-06-21",
					"calendarId" : "ac86bcf5-3fd1-40bf-b56c-b49187f3f092",
					"subject" : "热爱生活-专注工作",
					"yaoqingeventid" : null
				},
				{
					"id" : "d8cb9780-1fdc-423d-8471-96f25a6e30a6",
					"description" : "月版-交流会",
					"endTime" : "24:00",
					"startTime" : "00:00",
					"locked1" : null,
					"createDate" : "2018-04-24 10:36:20",
					"subEventid" : null,
					"updateDate" : "2018-04-24 10:36:20",
					"locked" : "false",
					"lockedf" : null,
					"ismanager" : null,
					"yaoqingorder" : null,
					"yaoqing" : null,
					"dbflag" : null,
					"alertFlag" : "null",
					"userId" : "super",
					"repeatType" : "{\"rtype\":\"month\",\"intervalSlot\":1,\"dspan\":0,\"beginDay\":\"2019-05-14\",\"endDay\":\"no\",\"rby\":\"date\"}",
					"startDay" : "2019-05-14",
					"endDay" : "2019-05-14",
					"calendarId" : "ac86bcf5-3fd1-40bf-b56c-b49187f3f092",
					"subject" : "月版-交流会",
					"yaoqingeventid" : null
				},
				{
					"id" : "9315d1da-f790-4854-8235-c49afae9a491",
					"description" : "站会-工作部署项目汇报-每个人2分钟",
					"endTime" : "10:00",
					"startTime" : "09:00",
					"locked1" : null,
					"createDate" : "2019-01-31 08:51:48",
					"subEventid" : null,
					"updateDate" : "2019-01-31 08:51:48",
					"locked" : "false",
					"lockedf" : null,
					"ismanager" : null,
					"yaoqingorder" : null,
					"yaoqing" : null,
					"dbflag" : null,
					"alertFlag" : "[{\"type\":\"email\",\"early\":5,\"unit\":\"minute\"}]",
					"userId" : "super",
					"repeatType" : "{\"rtype\":\"day\",\"intervalSlot\":1,\"dspan\":0,\"beginDay\":\"2019-01-31\",\"endDay\":\"no\"}",
					"startDay" : "2019-01-31",
					"endDay" : "2019-01-31",
					"calendarId" : "ac86bcf5-3fd1-40bf-b56c-b49187f3f092",
					"subject" : "站会-工作部署项目汇报-每个人2分钟",
					"yaoqingeventid" : null
				}
				],
		"success" : "true"
	},
    
    initialLoadDefalut : {
		"cs" : [ {
			"language" : "zh_CN",
			"hourFormat" : "24",
			"activeEndTime" : "17:30",
			"weekFormat" : "Y-m-d D",
			"dayFormat" : "l Y-m-d",
			"fromtoFormat" : "m/d/Y",
			"intervalSlot" : "30",
			"monthFormat" : "m/d",
			"singleDay" : 0,
			"initialView" : "1",
			"readOnly" : 0,
			"userId" : "super",
			"startDay" : "1",
			"activeStartTime" : "08:30",
			"hideInactiveRow" : 0,
			"createByDblclick" : 0
		} ],
		"owned" : [ {
			"name" : "领导工作计划",
			"id" : "74f160ca-c639-4607-bbd0-329f25f51197",
			"description" : "领导工作计划",
			"inputDate" : "2018-04-12 14:08:21",
			"hide1" : "1",
			"color" : "blue",
			"userId" : "super"
		}, {
			"name" : "工作部署",
			"id" : "ac86bcf5-3fd1-40bf-b56c-b49187f3f092",
			"description" : "工作部署",
			"inputDate" : null,
			"hide1" : "1",
			"color" : "cyan",
			"userId" : "super"
		} ],
		"re" : [
				{
					"id" : "01cedff8-d35d-495b-b40f-a345d3139416",
					"description" : "全天时间-好好生活-专注工作",
					"endTime" : "24:00",
					"startTime" : "00:00",
					"locked1" : null,
					"createDate" : "2018-04-23 16:48:45",
					"subEventid" : null,
					"updateDate" : "2018-04-23 16:48:45",
					"locked" : "false",
					"lockedf" : null,
					"ismanager" : null,
					"yaoqingorder" : null,
					"yaoqing" : null,
					"dbflag" : null,
					"alertFlag" : "[{\"type\":\"popup\",\"early\":30,\"unit\":\"minute\"}]",
					"userId" : "super",
					"repeatType" : "{\"rtype\":\"year\",\"intervalSlot\":1,\"dspan\":0,\"beginDay\":\"2018-04-05\",\"endDay\":\"no\"}",
					"startDay" : "2018-04-05",
					"endDay" : "2022-04-05",
					"calendarId" : "ac86bcf5-3fd1-40bf-b56c-b49187f3f092",
					"subject" : "好好生活-专注工作",
					"yaoqingeventid" : null
				},
				{
					"id" : "9315d1da-f790-4854-8235-c49afae9a491",
					"description" : "站会-工作部署项目汇报-每个人2分钟",
					"endTime" : "10:00",
					"startTime" : "09:00",
					"locked1" : null,
					"createDate" : "2019-01-31 08:51:48",
					"subEventid" : null,
					"updateDate" : "2019-01-31 08:51:48",
					"locked" : "false",
					"lockedf" : null,
					"ismanager" : null,
					"yaoqingorder" : null,
					"yaoqing" : null,
					"dbflag" : null,
					"alertFlag" : "[{\"type\":\"email\",\"early\":5,\"unit\":\"minute\"}]",
					"userId" : "super",
					"repeatType" : "{\"rtype\":\"day\",\"intervalSlot\":1,\"dspan\":0,\"beginDay\":\"2019-01-31\",\"endDay\":\"no\"}",
					"startDay" : "2019-01-31",
					"endDay" : "2029-01-31",
					"calendarId" : "ac86bcf5-3fd1-40bf-b56c-b49187f3f092",
					"subject" : "站会-工作部署项目汇报-每个人2分钟",
					"yaoqingeventid" : null
				},
				{
					"id" : "6e897015-44a6-4ca6-88c2-f4414dafe7c5",
					"description" : "下午茶时间-工作交流",
					"endTime" : "16:00",
					"startTime" : "15:00",
					"locked1" : null,
					"createDate" : "2019-01-23 11:08:02",
					"subEventid" : null,
					"updateDate" : "2019-01-23 11:08:02",
					"locked" : "false",
					"lockedf" : null,
					"ismanager" : null,
					"yaoqingorder" : null,
					"yaoqing" : null,
					"dbflag" : null,
					"alertFlag" : "[{\"type\":\"email\",\"early\":20,\"unit\":\"minute\"}]",
					"userId" : "super",
					"repeatType" : "{\"rtype\":\"day\",\"intervalSlot\":1,\"dspan\":0,\"beginDay\":\"2019-01-23\",\"endDay\":\"no\"}",
					"startDay" : "2019-01-23",
					"endDay" : "2029-01-23",
					"calendarId" : "ac86bcf5-3fd1-40bf-b56c-b49187f3f092",
					"subject" : "下午茶时间-工作交流",
					"yaoqingeventid" : null
				}
			]
	}
};