

Ext.define('Ext.ux.calendar.DataSource', {
	extend : 'Ext.util.Observable',  
    /*
     * For show all calendars
     * @param {function} sucessFn: the callback function when request completed successfully
     * @param {obj} scope: the scope of sucessFn function
     */
    showAllCalendar:function(sucessFn, scope){
        Ext.Ajax.request({
            url:Ext.ux.calendar.CONST.showAllCalendarURL,
            success:function(response, options){
                /*
                 * The back json string should have a param "success", when it equal "false" means fail to create/update in server side
                 */
                var backObj = Ext.decode(response.responseText);
                if (backObj.success == 'false') {
                    Ext.Msg.show({
                        title:'Error',
                        msg: backObj.errorInfo,
                        buttons: Ext.Msg.OK,
                        icon: Ext.MessageBox.ERROR
                    });
                } else {
                    sucessFn.call(scope, backObj);
                }
            },
            failure:function(response, options){

            },
            scope:scope || this
        });
    },
    /*
     * For hide all calendars but only show this one
     * @param {int} calendarId: the id of the calendar
     * @param {function} sucessFn: the callback function when request completed successfully
     * @param {obj} scope: the scope of sucessFn function
     */
    showOnlyCalendar:function(calendarId, sucessFn, scope){
        Ext.Ajax.request({
            url:Ext.ux.calendar.CONST.showOnlyCalendarURL,
            params:{
                id:calendarId
            },
            success:function(response, options){
                /*
                 * The back json string should have a param "success", when it equal "false" means fail to create/update in server side
                 */
                var backObj = Ext.decode(response.responseText);
                if (backObj.success == 'false') {
                    Ext.Msg.show({
                        title:'Error',
                        msg: backObj.errorInfo,
                        buttons: Ext.Msg.OK,
                        icon: Ext.MessageBox.ERROR
                    });
                } else {
                    sucessFn.call(scope, backObj);
                }
            },
            failure:function(response, options){

            },
            scope:scope || this
        });
    },
    /*
     * For create/update a calendar
     * @param {Obj} calendar: the object of a calendar, should contain all field of calendar table in db
     * @param {function} sucessFn: the callback function when request completed successfully
     * @param {obj} scope: the scope of sucessFn function     
     */
    createUpdateCalendar:function(calendar, sucessFn, scope){
        Ext.Ajax.request({
            url:Ext.ux.calendar.CONST.createUpdateCalendarURL,
            /* The params pass to db contains below fields:
             * id: int, the id of calendar, primary key
             * name: string, the name of calendar
             * description: string, the description of calendar
             * color: string, the color of calendar, it's a string, should be one of ["blue", "red", "cyan", "orange", "green", "purple"],
             *    see colorIndex in common/Mask.js for detail, if you want to add more color, you need add it in colorIndex array and colors array in Mask.js,
             *    and also you need add related css in css/calendar.css
             * hide: boolean, the status of calendar, true for hide, false for show
             */
            params:{
                id:calendar.id,
                name:calendar.name,
                description:calendar.description,
                color:calendar.color,
                hide1:calendar.hide?"1":"0"
            },
            success:function(response, options){
                /*
                 * The back json string should have a param "success", when it equal "false" means fail to create/update in server side
                 */
                var backObj = Ext.decode(response.responseText);
                if (backObj.success == 'false') {
                    Ext.Msg.show({
                        title:'Error',
                        msg: backObj.errorInfo,
                        buttons: Ext.Msg.OK,
                        icon: Ext.MessageBox.ERROR
                    });
                } else {
                    sucessFn.call(scope, backObj);
                }
            },
            failure:function(response, options){

            },
            scope:scope || this
        });
    },
    /*
     * For delete all events belong to a calendar
     * @param {int} calendarId: the id of a calendar
     * @param {function} sucessFn: the callback function when request completed successfully
     * @param {obj} scope: the scope of sucessFn function
     */
    deleteEventsByCalendar:function(calendarId, sucessFn, scope){
        Ext.Ajax.request({
            url:Ext.ux.calendar.CONST.deleteEventsByCalendarURL,
            /*
             * pass the calendarId
             */
            params:{
                id:calendarId
            },
            success:function(response, options){
                /*
                 * The back json string should have a param "success", when it equal "false" means fail to create/update in server side
                 */
                 var backObj = Ext.decode(response.responseText);
                if (backObj.success == 'false') {
                    Ext.Msg.show({
                        title:'Error',
                        msg: backObj.errorInfo,
                        buttons: Ext.Msg.OK,
                        icon: Ext.MessageBox.ERROR
                    });
                } else {
                    sucessFn.call(scope, backObj);
                }
            },
            failure:function(response, options){

            },
            scope:scope || this
        });
    },
    /*
     * For delete a calendar and all events belong to it
     * @param {int} calendarId: the id of a calendar
     * @param {function} sucessFn: the callback function when request completed successfully
     * @param {obj} scope: the scope of sucessFn function
     */
    deleteCalendar:function(calendarId, sucessFn, scope){
        Ext.Ajax.request({
            url:Ext.ux.calendar.CONST.deleteCalendarURL,
            /*
             * pass the calendarId
             */
            params:{
                id:calendarId
            },
            success:function(response, options){
                /*
                 * The back json string should have a param "success", when it equal "false" means fail to create/update in server side
                 */
                 var backObj = Ext.decode(response.responseText);
                if (backObj.success == 'false') {
                    Ext.Msg.show({
                        title:'Error',
                        msg: backObj.errorInfo,
                        buttons: Ext.Msg.OK,
                        icon: Ext.MessageBox.ERROR
                    });
                } else {
                    sucessFn.call(scope, backObj);
                }
            },
            failure:function(response, options){

            },
            scope:scope || this
        });
    },
    /*
     * For load all calendars of a user
     * @param {int} userId: the id of a user
     * @param {function} sucessFn: the callback function when request completed successfully
     * @param {obj} scope: the scope of sucessFn function
     */
    loadCalendar:function(successFn, scope){
        Ext.Ajax.request({
           url:Ext.ux.calendar.CONST.loadCalendarURL,
            success:function(response, options){
                /*
                 * The back json string should like below:
                 * {    
                 *      "total":2,
                 *      "results":[{
                 *              "id":"1",
                 *              "color":"blue",
                 *              "description":null,
                 *              "hide":false,
                 *              "name":"Demo"
                 *       },{
                 *              "id":"2",
                 *              "color":"red",
                 *              "description":null,
                 *              "hide":false,
                 *              "name":"df"
                 *       }]
                 * }
                 */                
                var backObj = Ext.decode(response.responseText);
                if (backObj.success == 'false') {
                    Ext.Msg.show({
                        title:'Error',
                        msg: backObj.errorInfo,
                        buttons: Ext.Msg.OK,
                        icon: Ext.MessageBox.ERROR
                    });
                } else {
                    successFn.call(scope, backObj);
                }
            },
            failure:function(response, options){

            },
            scope:scope || this
        });
    },
    /*
     * For load all events from a day to another day
     * @param {Date} startData: the start date
     * @param {Date} endData: the end date
     * @param {function} sucessFn: the callback function when request completed successfully
     * @param {obj} scope: the scope of sucessFn function     
     */
    loadEvent:function(startDate, endDate, sucessFn, scope){
        startDate = startDate || new Date();
        endDate = endDate || new Date();
        var startDay =  Ext.Date.format(startDate,'Y-m-d');
        var endDay =  Ext.Date.format(endDate,'Y-m-d');
        Ext.Ajax.request({
            url:Ext.ux.calendar.CONST.loadEventURL,
            /*
             * the params pass to server should contain:
             * startDay: the start Date, we just use 'Y-m-d' format here, you can change it as you like
             * endDay: the end Date, we just use 'Y-m-d' format here, you can change it as you like
             * 
             * 数据加载周期
             * 其实时间及结束时间
             * 
             */
            params:{
            	startDay:startDay,
            	endDay:endDay
            },
            success:function(response, options){
                var backObj = Ext.decode(response.responseText);
                /*
                 * The back json string should like below:
                 * {
                 *      "total":1,
                 *      "results":[{
                 *              "id":"1",
                 *              "calendarId":0,
                 *              "color":"blue", // string; this color should be the same as the color of calendar "0"
                 *              "startRow":0, // int; startRow is in [0, 47], for 00:00-23:30
                 *              "endRow":2, //int; endRow is in [1, 48], for 00:30-24:00
                 *              "subject":"lunch", //string; the subject of this event
                 *              "description":"in hilton hotel", //string; the description of this event
                 *              "day":"2009-8-11", //string; the date of this event, need be 'Y-m-d' format
                 *              "alertFlag":[], //array; contain the alert information, in old version, it's just a boolean
                 *              "locked":false //boolean; true means this event is a locked event, nobody can change it, not use yet, in this version it should always be false
                 *       }]
                 * }
                 */
                if (backObj.success == 'false') {
                    Ext.Msg.show({
                        title:'Error',
                        msg: backObj.errorInfo,
                        buttons: Ext.Msg.OK,
                        icon: Ext.MessageBox.ERROR
                    });
                } else {
                    var rs = backObj['rows'];
                    var eventSet = {};
                    eventSet['whole'] = [];
                    var getRowFromHM = Ext.ux.calendar.Mask.getRowFromHM;
                    for(var i = 0, len = rs.length; i < len; i++){
                        var data = rs[i];
                        var startRow = getRowFromHM(data.startTime, this.intervalSlot);
                        var endRow = getRowFromHM(data.endTime, this.intervalSlot);
                        if(endRow == startRow){
                            endRow++;
                        }
                        var day = data.startDay;
                        var eday = data.endDay;
                        //alert(this.activeStartRow+':'+this.activeEndRow+':'+this.hideInactiveRow+':'+startRow+':'+endRow+':'+data.subject)
                        if(!this.hideInactiveRow 
                            || (this.activeStartRow <= startRow && endRow <= this.activeEndRow)
                                || (0 == startRow && this.rowCount == endRow) || (day != eday)){
                            
                            eventSet[day] = eventSet[day] || [];                            
                            var e = {
                                eventId:data.id,
                                calendarId:data.calendarId,
                                color:data.color,
                                startRow:startRow,
                                endRow:endRow,
                                subject:data.subject,
                                content:data.description,
                                day:day,
                                eday:eday,
                                alertFlag:Ext.decode(data.alertFlag),                                
                                locked:data.locked=="true"?true:false,
                                repeatType:data.repeatType
                            };
                            if(day != eday || (0 == startRow) && (this.rowCount == endRow)){
                                eventSet['whole'].push(e);
                            }else{
                                eventSet[day] = eventSet[day] || [];
                                eventSet[day].push(e);
                            }
                        }
                    }
                    sucessFn.call(scope, eventSet);
                }
            },
            failure:function(response, options){

//            	{"total":27,"rows":[{"id":"01cedff8-d35d-495b-b40f-a345d3139416","description":"nnnnnnnnnnnnnnnnnnn","endTime":"24:00","startTime":"00:00","locked1":null,"createDate":"2018-04-23 16:48:45","subEventid":null,"updateDate":"2018-04-23 16:48:45","locked":"false","lockedf":null,"ismanager":null,"yaoqingorder":null,"yaoqing":null,"dbflag":null,"alertFlag":"[{\"type\":\"popup\",\"early\":30,\"unit\":\"minute\"}]","userId":"super","repeatType":"{\"rtype\":\"year\",\"intervalSlot\":1,\"dspan\":0,\"beginDay\":\"2018-04-05\",\"endDay\":\"no\"}","startDay":"2018-04-05","endDay":"2018-04-05","calendarId":"ac86bcf5-3fd1-40bf-b56c-b49187f3f092","subject":"nnnnnnnnnnnnnnnn","yaoqingeventid":null},{"id":"45f2908e-13bd-4e13-981e-a5c980ff1279","description":"6666666666666666","endTime":"24:00","startTime":"00:00","locked1":null,"createDate":"2018-04-24 10:42:06","subEventid":null,"updateDate":"2018-04-24 10:42:06","locked":"false","lockedf":null,"ismanager":null,"yaoqingorder":null,"yaoqing":null,"dbflag":null,"alertFlag":"null","userId":"super","repeatType":"{\"rtype\":\"year\",\"intervalSlot\":3,\"dspan\":0,\"beginDay\":\"2019-02-21\",\"endDay\":\"no\"}","startDay":"2035-02-21","endDay":"2035-02-21","calendarId":"ac86bcf5-3fd1-40bf-b56c-b49187f3f092","subject":"6666666666666","yaoqingeventid":null},{"id":"7f8c342b-159f-40bb-8c89-0bf5e01bf2bb","description":"nnnnnnnnnnnnnnnn","endTime":"24:00","startTime":"00:00","locked1":null,"createDate":"2018-04-23 16:48:50","subEventid":null,"updateDate":"2018-04-23 16:48:50","locked":"false","lockedf":null,"ismanager":null,"yaoqingorder":null,"yaoqing":null,"dbflag":null,"alertFlag":"null","userId":"super","repeatType":"{\"rtype\":\"year\",\"intervalSlot\":1,\"dspan\":0,\"beginDay\":\"2018-04-06\",\"endDay\":\"no\"}","startDay":"2018-04-06","endDay":"2018-04-06","calendarId":"ac86bcf5-3fd1-40bf-b56c-b49187f3f092","subject":"nnnnnnn","yaoqingeventid":null},{"id":"a76a02b5-b6f3-4857-bf2f-19877f12bb32","description":"3333333333333333333","endTime":"24:00","startTime":"00:00","locked1":null,"createDate":"2018-04-24 09:31:26","subEventid":null,"updateDate":"2018-04-24 09:31:26","locked":"false","lockedf":null,"ismanager":null,"yaoqingorder":null,"yaoqing":null,"dbflag":null,"alertFlag":"null","userId":"super","repeatType":"{\"rtype\":\"week\",\"intervalSlot\":3,\"dspan\":0,\"beginDay\":\"2018-05-08\",\"endDay\":\"2018-05-31\",\"rday\":{\"1\":true,\"2\":true,\"3\":true,\"4\":true,\"7\":true}}","startDay":"2018-06-21","endDay":"2018-06-21","calendarId":"ac86bcf5-3fd1-40bf-b56c-b49187f3f092","subject":"33333333333333333333","yaoqingeventid":null},{"id":"d8cb9780-1fdc-423d-8471-96f25a6e30a6","description":"444444444444444444","endTime":"24:00","startTime":"00:00","locked1":null,"createDate":"2018-04-24 10:36:20","subEventid":null,"updateDate":"2018-04-24 10:36:20","locked":"false","lockedf":null,"ismanager":null,"yaoqingorder":null,"yaoqing":null,"dbflag":null,"alertFlag":"null","userId":"super","repeatType":"{\"rtype\":\"month\",\"intervalSlot\":1,\"dspan\":0,\"beginDay\":\"2018-05-14\",\"endDay\":\"no\",\"rby\":\"date\"}","startDay":"2018-05-14","endDay":"2018-05-14","calendarId":"ac86bcf5-3fd1-40bf-b56c-b49187f3f092","subject":"4444444444","yaoqingeventid":null},{"id":"e8668d86-72cc-4350-8615-4438ac9a858f","description":"555555555555555555555","endTime":"24:00","startTime":"00:00","locked1":null,"createDate":"2018-04-24 10:39:19","subEventid":null,"updateDate":"2018-04-24 10:39:19","locked":"false","lockedf":null,"ismanager":null,"yaoqingorder":null,"yaoqing":null,"dbflag":null,"alertFlag":"null","userId":"super","repeatType":"{\"rtype\":\"month\",\"intervalSlot\":3,\"dspan\":0,\"beginDay\":\"2018-08-15\",\"endDay\":\"no\",\"rby\":\"day\"}","startDay":"2018-08-15","endDay":"2018-08-15","calendarId":"ac86bcf5-3fd1-40bf-b56c-b49187f3f092","subject":"5555555555555555","yaoqingeventid":null},{"id":"3c4cc2d1-f8c2-424b-9a3d-b9aaba7f1662","description":"测试一下看看是否好用","endTime":"10:00","startTime":"09:00","locked1":null,"createDate":"2019-01-31 08:48:59","subEventid":null,"updateDate":"2019-01-31 08:48:59","locked":"false","lockedf":null,"ismanager":null,"yaoqingorder":null,"yaoqing":null,"dbflag":null,"alertFlag":"[{\"type\":\"email\",\"early\":10,\"unit\":\"minute\"}]","userId":"super","repeatType":"no","startDay":"2019-01-31","endDay":"2019-01-31","calendarId":"ac86bcf5-3fd1-40bf-b56c-b49187f3f092","subject":"王江涛测试邮件模板，HTML版本老牛逼了","yaoqingeventid":null},{"id":"9315d1da-f790-4854-8235-c49afae9a491","description":"你到底发还是不发？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？","endTime":"10:00","startTime":"09:00","locked1":null,"createDate":"2019-01-31 08:51:48","subEventid":null,"updateDate":"2019-01-31 08:51:48","locked":"false","lockedf":null,"ismanager":null,"yaoqingorder":null,"yaoqing":null,"dbflag":null,"alertFlag":"[{\"type\":\"email\",\"early\":5,\"unit\":\"minute\"}]","userId":"super","repeatType":"{\"rtype\":\"day\",\"intervalSlot\":1,\"dspan\":0,\"beginDay\":\"2019-01-31\",\"endDay\":\"no\"}","startDay":"2019-01-31","endDay":"2019-01-31","calendarId":"ac86bcf5-3fd1-40bf-b56c-b49187f3f092","subject":"不发邮件我就把你删了！！！！！！！！！！","yaoqingeventid":null},{"id":"c0adc3e1-ee97-49a1-967f-316938391283","description":"","endTime":"10:00","startTime":"09:00","locked1":null,"createDate":"2018-04-12 16:12:38","subEventid":null,"updateDate":"2018-04-12 16:12:38","locked":"false","lockedf":null,"ismanager":null,"yaoqingorder":null,"yaoqing":null,"dbflag":null,"alertFlag":"null","userId":"super","repeatType":"no","startDay":"2018-04-11","endDay":"2018-04-11","calendarId":"74f160ca-c639-4607-bbd0-329f25f51197","subject":"","yaoqingeventid":null},{"id":"0d33165d-630d-4536-bc1b-e937f124775b","description":"11111111","endTime":"10:30","startTime":"09:30","locked1":null,"createDate":"2018-04-12 15:29:18","subEventid":null,"updateDate":"2018-04-12 15:29:18","locked":"false","lockedf":null,"ismanager":null,"yaoqingorder":null,"yaoqing":null,"dbflag":null,"alertFlag":"[{\"type\":\"popup\",\"early\":10,\"unit\":\"minute\"}]","userId":"super","repeatType":"exception","startDay":"2018-04-12","endDay":"2018-04-12","calendarId":"74f160ca-c639-4607-bbd0-329f25f51197","subject":"111111111111","yaoqingeventid":null},{"id":"2f4082b7-f131-4beb-827b-9ee454eb1d6b","description":"","endTime":"11:00","startTime":"10:00","locked1":null,"createDate":"2018-04-12 16:12:21","subEventid":null,"updateDate":"2018-04-12 16:12:21","locked":"false","lockedf":null,"ismanager":null,"yaoqingorder":null,"yaoqing":null,"dbflag":null,"alertFlag":"null","userId":"super","repeatType":"no","startDay":"2018-04-10","endDay":"2018-04-10","calendarId":"ac86bcf5-3fd1-40bf-b56c-b49187f3f092","subject":"","yaoqingeventid":null},{"id":"f232b63b-0c47-46b9-a538-327757de65ac","description":"","endTime":"11:00","startTime":"10:00","locked1":null,"createDate":"2018-05-04 14:55:29","subEventid":null,"updateDate":"2018-05-04 14:55:29","locked":"false","lockedf":null,"ismanager":null,"yaoqingorder":null,"yaoqing":null,"dbflag":null,"alertFlag":"null","userId":"super","repeatType":"no","startDay":"2018-05-21","endDay":"2018-05-21","calendarId":"ac86bcf5-3fd1-40bf-b56c-b49187f3f092","subject":"","yaoqingeventid":null},{"id":"e4e82f5e-4bcd-484b-8c1d-573235a51250","description":"","endTime":"12:00","startTime":"11:00","locked1":null,"createDate":"2018-05-04 14:55:37","subEventid":null,"updateDate":"2018-05-04 14:55:37","locked":"false","lockedf":null,"ismanager":null,"yaoqingorder":null,"yaoqing":null,"dbflag":null,"alertFlag":"null","userId":"super","repeatType":"no","startDay":"2018-05-22","endDay":"2018-05-22","calendarId":"ac86bcf5-3fd1-40bf-b56c-b49187f3f092","subject":"","yaoqingeventid":null},{"id":"c0386044-163e-444f-be87-6479fd68ce47","description":"2","endTime":"19:30","startTime":"12:30","locked1":null,"createDate":"2018-04-12 15:02:17","subEventid":null,"updateDate":"2018-04-12 15:02:17","locked":"false","lockedf":null,"ismanager":null,"yaoqingorder":null,"yaoqing":null,"dbflag":null,"alertFlag":"[{\"type\":\"popup\",\"early\":10,\"unit\":\"minute\"}]","userId":"super","repeatType":"{\"rtype\":\"day\",\"intervalSlot\":3,\"dspan\":0,\"beginDay\":\"2018-04-09\",\"endDay\":\"no\",\"rtime\":10}","startDay":"2018-04-24","endDay":"2018-04-24","calendarId":"74f160ca-c639-4607-bbd0-329f25f51197","subject":"2","yaoqingeventid":null},{"id":"c29ff16c-512e-42fd-8b59-03846a44fc51","description":"","endTime":"14:00","startTime":"13:00","locked1":null,"createDate":"2018-04-12 15:02:31","subEventid":null,"updateDate":"2018-04-12 15:02:31","locked":"false","lockedf":null,"ismanager":null,"yaoqingorder":null,"yaoqing":null,"dbflag":null,"alertFlag":"null","userId":"super","repeatType":"{\"rtype\":\"day\",\"intervalSlot\":4,\"dspan\":0,\"beginDay\":\"2018-04-09\",\"endDay\":\"2019-04-12\"}","startDay":"2018-05-25","endDay":"2018-05-25","calendarId":"74f160ca-c639-4607-bbd0-329f25f51197","subject":"","yaoqingeventid":null},{"id":"36f3a04c-c86d-42f8-bf7c-41d9e3869cdc","description":"444444444444444","endTime":"17:00","startTime":"14:00","locked1":null,"createDate":"2018-04-12 15:07:45","subEventid":null,"updateDate":"2018-04-12 15:07:45","locked":"false","lockedf":null,"ismanager":null,"yaoqingorder":null,"yaoqing":null,"dbflag":null,"alertFlag":"[{\"type\":\"popup\",\"early\":60,\"unit\":\"minute\"}]","userId":"super","repeatType":"{\"rtype\":\"week\",\"intervalSlot\":1,\"dspan\":0,\"beginDay\":\"2018-04-09\",\"endDay\":\"no\",\"rday\":{\"1\":true,\"2\":true,\"3\":true}}","startDay":"2018-05-25","endDay":"2018-05-25","calendarId":"74f160ca-c639-4607-bbd0-329f25f51197","subject":"4444444444444","yaoqingeventid":null},{"id":"6e897015-44a6-4ca6-88c2-f4414dafe7c5","description":"重复事件提醒","endTime":"16:00","startTime":"15:00","locked1":null,"createDate":"2019-01-23 11:08:02","subEventid":null,"updateDate":"2019-01-23 11:08:02","locked":"false","lockedf":null,"ismanager":null,"yaoqingorder":null,"yaoqing":null,"dbflag":null,"alertFlag":"[{\"type\":\"email\",\"early\":20,\"unit\":\"minute\"}]","userId":"super","repeatType":"{\"rtype\":\"day\",\"intervalSlot\":1,\"dspan\":0,\"beginDay\":\"2019-01-23\",\"endDay\":\"no\"}","startDay":"2019-01-23","endDay":"2019-01-23","calendarId":"ac86bcf5-3fd1-40bf-b56c-b49187f3f092","subject":"重复事件提醒-邮件","yaoqingeventid":null},{"id":"8fdee384-4eb2-4d78-a45e-76339193aa48","description":"重复事件反显","endTime":"16:00","startTime":"15:00","locked1":null,"createDate":"2019-01-23 10:19:06","subEventid":null,"updateDate":"2019-01-23 10:19:06","locked":"false","lockedf":null,"ismanager":null,"yaoqingorder":null,"yaoqing":null,"dbflag":null,"alertFlag":"[{\"type\":\"email\",\"early\":20,\"unit\":\"minute\"}]","userId":"super","repeatType":"{\"rtype\":\"day\",\"intervalSlot\":1,\"dspan\":0,\"beginDay\":\"2019-01-23\",\"endDay\":\"no\"}","startDay":"2019-01-23","endDay":"2019-01-23","calendarId":"ac86bcf5-3fd1-40bf-b56c-b49187f3f092","subject":"重复事件反显","yaoqingeventid":null},{"id":"bbeeaa21-abfc-48da-9748-0c03be7b21f2","description":"","endTime":"16:00","startTime":"15:00","locked1":null,"createDate":"2019-01-23 11:14:18","subEventid":null,"updateDate":"2019-01-23 11:14:18","locked":"false","lockedf":null,"ismanager":null,"yaoqingorder":null,"yaoqing":null,"dbflag":null,"alertFlag":"[{\"type\":\"email\",\"early\":15,\"unit\":\"minute\"}]","userId":"super","repeatType":"no","startDay":"2019-01-23","endDay":"2019-01-23","calendarId":"ac86bcf5-3fd1-40bf-b56c-b49187f3f092","subject":"简单测试邮件提醒","yaoqingeventid":null},{"id":"64f3895e-b1ca-4e89-9ea1-be6786329914","description":"000000000000000","endTime":"16:30","startTime":"15:30","locked1":null,"createDate":"2018-04-12 16:35:37","subEventid":null,"updateDate":"2018-04-12 16:35:37","locked":"false","lockedf":null,"ismanager":null,"yaoqingorder":null,"yaoqing":null,"dbflag":null,"alertFlag":"null","userId":"super","repeatType":"no","startDay":"2018-04-14","endDay":"2018-04-14","calendarId":"ac86bcf5-3fd1-40bf-b56c-b49187f3f092","subject":"0000000000000000","yaoqingeventid":null},{"id":"125a1952-31c4-46b2-9ce6-b3176ef8a951","description":"zzzzzzzzzzzzzzzzzzzz","endTime":"17:00","startTime":"16:00","locked1":null,"createDate":"2018-04-24 15:43:30","subEventid":null,"updateDate":"2018-04-24 15:43:30","locked":"false","lockedf":null,"ismanager":null,"yaoqingorder":null,"yaoqing":null,"dbflag":null,"alertFlag":"[{\"type\":\"email\",\"early\":30,\"unit\":\"minute\"}]","userId":"super","repeatType":"no","startDay":"2018-04-24","endDay":"2018-04-24","calendarId":"ac86bcf5-3fd1-40bf-b56c-b49187f3f092","subject":"zzzzzzzzzzzzzzzzzz","yaoqingeventid":null},{"id":"d0d6a0c3-b657-4e8e-a6c0-c87333d7da93","description":"999999999999","endTime":"19:00","startTime":"18:00","locked1":null,"createDate":"2018-04-12 16:35:32","subEventid":null,"updateDate":"2018-04-12 16:35:32","locked":"false","lockedf":null,"ismanager":null,"yaoqingorder":null,"yaoqing":null,"dbflag":null,"alertFlag":"null","userId":"super","repeatType":"no","startDay":"2018-04-14","endDay":"2018-04-14","calendarId":"ac86bcf5-3fd1-40bf-b56c-b49187f3f092","subject":"99999999999999","yaoqingeventid":null},{"id":"248f446d-638a-490b-b546-aa703b0fce58","description":"777777777777777777","endTime":"22:00","startTime":"21:00","locked1":null,"createDate":"2018-04-12 16:35:22","subEventid":null,"updateDate":"2018-04-12 16:35:22","locked":"false","lockedf":null,"ismanager":null,"yaoqingorder":null,"yaoqing":null,"dbflag":null,"alertFlag":"null","userId":"super","repeatType":"no","startDay":"2018-04-15","endDay":"2018-04-15","calendarId":"ac86bcf5-3fd1-40bf-b56c-b49187f3f092","subject":"7777777777777777","yaoqingeventid":null},{"id":"6bba0fa7-a04e-438d-bfe9-7ad2607c1b0a","description":"555555555555","endTime":"22:00","startTime":"21:00","locked1":null,"createDate":"2018-04-12 16:35:15","subEventid":null,"updateDate":"2018-04-12 16:35:15","locked":"false","lockedf":null,"ismanager":null,"yaoqingorder":null,"yaoqing":null,"dbflag":null,"alertFlag":"null","userId":"super","repeatType":"no","startDay":"2018-04-14","endDay":"2018-04-14","calendarId":"ac86bcf5-3fd1-40bf-b56c-b49187f3f092","subject":"5555555555555555","yaoqingeventid":null},{"id":"17a8c57c-8978-4015-bc27-89e63a5cdfbf","description":"8888888888888888","endTime":"23:00","startTime":"22:00","locked1":null,"createDate":"2018-04-12 16:35:26","subEventid":null,"updateDate":"2018-04-12 16:35:26","locked":"false","lockedf":null,"ismanager":null,"yaoqingorder":null,"yaoqing":null,"dbflag":null,"alertFlag":"null","userId":"super","repeatType":"no","startDay":"2018-04-15","endDay":"2018-04-15","calendarId":"ac86bcf5-3fd1-40bf-b56c-b49187f3f092","subject":"888888888888888888","yaoqingeventid":null},{"id":"d728e0b0-0c46-47fa-8036-09c0605543b0","description":"4444444444444444444","endTime":"23:00","startTime":"22:00","locked1":null,"createDate":"2018-04-12 16:35:10","subEventid":null,"updateDate":"2018-04-12 16:35:10","locked":"false","lockedf":null,"ismanager":null,"yaoqingorder":null,"yaoqing":null,"dbflag":null,"alertFlag":"null","userId":"super","repeatType":"no","startDay":"2018-04-12","endDay":"2018-04-12","calendarId":"ac86bcf5-3fd1-40bf-b56c-b49187f3f092","subject":"444444444444444","yaoqingeventid":null},{"id":"02d1cfb7-6e46-45d7-841b-2e2bf3f5421d","description":"666666666666666","endTime":"23:30","startTime":"22:30","locked1":null,"createDate":"2018-04-12 16:35:18","subEventid":null,"updateDate":"2018-04-12 16:35:18","locked":"false","lockedf":null,"ismanager":null,"yaoqingorder":null,"yaoqing":null,"dbflag":null,"alertFlag":"null","userId":"super","repeatType":"no","startDay":"2018-04-14","endDay":"2018-04-14","calendarId":"ac86bcf5-3fd1-40bf-b56c-b49187f3f092","subject":"666666666666666","yaoqingeventid":null}],"success":"true"}

                var backObj = {"total":27,"rows":[{"id":"01cedff8-d35d-495b-b40f-a345d3139416","description":"nnnnnnnnnnnnnnnnnnn","endTime":"24:00","startTime":"00:00","locked1":null,"createDate":"2018-04-23 16:48:45","subEventid":null,"updateDate":"2018-04-23 16:48:45","locked":"false","lockedf":null,"ismanager":null,"yaoqingorder":null,"yaoqing":null,"dbflag":null,"alertFlag":"[{\"type\":\"popup\",\"early\":30,\"unit\":\"minute\"}]","userId":"super","repeatType":"{\"rtype\":\"year\",\"intervalSlot\":1,\"dspan\":0,\"beginDay\":\"2018-04-05\",\"endDay\":\"no\"}","startDay":"2018-04-05","endDay":"2018-04-05","calendarId":"ac86bcf5-3fd1-40bf-b56c-b49187f3f092","subject":"nnnnnnnnnnnnnnnn","yaoqingeventid":null},{"id":"45f2908e-13bd-4e13-981e-a5c980ff1279","description":"6666666666666666","endTime":"24:00","startTime":"00:00","locked1":null,"createDate":"2018-04-24 10:42:06","subEventid":null,"updateDate":"2018-04-24 10:42:06","locked":"false","lockedf":null,"ismanager":null,"yaoqingorder":null,"yaoqing":null,"dbflag":null,"alertFlag":"null","userId":"super","repeatType":"{\"rtype\":\"year\",\"intervalSlot\":3,\"dspan\":0,\"beginDay\":\"2019-02-21\",\"endDay\":\"no\"}","startDay":"2035-02-21","endDay":"2035-02-21","calendarId":"ac86bcf5-3fd1-40bf-b56c-b49187f3f092","subject":"6666666666666","yaoqingeventid":null},{"id":"7f8c342b-159f-40bb-8c89-0bf5e01bf2bb","description":"nnnnnnnnnnnnnnnn","endTime":"24:00","startTime":"00:00","locked1":null,"createDate":"2018-04-23 16:48:50","subEventid":null,"updateDate":"2018-04-23 16:48:50","locked":"false","lockedf":null,"ismanager":null,"yaoqingorder":null,"yaoqing":null,"dbflag":null,"alertFlag":"null","userId":"super","repeatType":"{\"rtype\":\"year\",\"intervalSlot\":1,\"dspan\":0,\"beginDay\":\"2018-04-06\",\"endDay\":\"no\"}","startDay":"2018-04-06","endDay":"2018-04-06","calendarId":"ac86bcf5-3fd1-40bf-b56c-b49187f3f092","subject":"nnnnnnn","yaoqingeventid":null},{"id":"a76a02b5-b6f3-4857-bf2f-19877f12bb32","description":"3333333333333333333","endTime":"24:00","startTime":"00:00","locked1":null,"createDate":"2018-04-24 09:31:26","subEventid":null,"updateDate":"2018-04-24 09:31:26","locked":"false","lockedf":null,"ismanager":null,"yaoqingorder":null,"yaoqing":null,"dbflag":null,"alertFlag":"null","userId":"super","repeatType":"{\"rtype\":\"week\",\"intervalSlot\":3,\"dspan\":0,\"beginDay\":\"2018-05-08\",\"endDay\":\"2018-05-31\",\"rday\":{\"1\":true,\"2\":true,\"3\":true,\"4\":true,\"7\":true}}","startDay":"2018-06-21","endDay":"2018-06-21","calendarId":"ac86bcf5-3fd1-40bf-b56c-b49187f3f092","subject":"33333333333333333333","yaoqingeventid":null},{"id":"d8cb9780-1fdc-423d-8471-96f25a6e30a6","description":"444444444444444444","endTime":"24:00","startTime":"00:00","locked1":null,"createDate":"2018-04-24 10:36:20","subEventid":null,"updateDate":"2018-04-24 10:36:20","locked":"false","lockedf":null,"ismanager":null,"yaoqingorder":null,"yaoqing":null,"dbflag":null,"alertFlag":"null","userId":"super","repeatType":"{\"rtype\":\"month\",\"intervalSlot\":1,\"dspan\":0,\"beginDay\":\"2018-05-14\",\"endDay\":\"no\",\"rby\":\"date\"}","startDay":"2018-05-14","endDay":"2018-05-14","calendarId":"ac86bcf5-3fd1-40bf-b56c-b49187f3f092","subject":"4444444444","yaoqingeventid":null},{"id":"e8668d86-72cc-4350-8615-4438ac9a858f","description":"555555555555555555555","endTime":"24:00","startTime":"00:00","locked1":null,"createDate":"2018-04-24 10:39:19","subEventid":null,"updateDate":"2018-04-24 10:39:19","locked":"false","lockedf":null,"ismanager":null,"yaoqingorder":null,"yaoqing":null,"dbflag":null,"alertFlag":"null","userId":"super","repeatType":"{\"rtype\":\"month\",\"intervalSlot\":3,\"dspan\":0,\"beginDay\":\"2018-08-15\",\"endDay\":\"no\",\"rby\":\"day\"}","startDay":"2018-08-15","endDay":"2018-08-15","calendarId":"ac86bcf5-3fd1-40bf-b56c-b49187f3f092","subject":"5555555555555555","yaoqingeventid":null},{"id":"3c4cc2d1-f8c2-424b-9a3d-b9aaba7f1662","description":"测试一下看看是否好用","endTime":"10:00","startTime":"09:00","locked1":null,"createDate":"2019-01-31 08:48:59","subEventid":null,"updateDate":"2019-01-31 08:48:59","locked":"false","lockedf":null,"ismanager":null,"yaoqingorder":null,"yaoqing":null,"dbflag":null,"alertFlag":"[{\"type\":\"email\",\"early\":10,\"unit\":\"minute\"}]","userId":"super","repeatType":"no","startDay":"2019-01-31","endDay":"2019-01-31","calendarId":"ac86bcf5-3fd1-40bf-b56c-b49187f3f092","subject":"王江涛测试邮件模板，HTML版本老牛逼了","yaoqingeventid":null},{"id":"9315d1da-f790-4854-8235-c49afae9a491","description":"你到底发还是不发？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？","endTime":"10:00","startTime":"09:00","locked1":null,"createDate":"2019-01-31 08:51:48","subEventid":null,"updateDate":"2019-01-31 08:51:48","locked":"false","lockedf":null,"ismanager":null,"yaoqingorder":null,"yaoqing":null,"dbflag":null,"alertFlag":"[{\"type\":\"email\",\"early\":5,\"unit\":\"minute\"}]","userId":"super","repeatType":"{\"rtype\":\"day\",\"intervalSlot\":1,\"dspan\":0,\"beginDay\":\"2019-01-31\",\"endDay\":\"no\"}","startDay":"2019-01-31","endDay":"2019-01-31","calendarId":"ac86bcf5-3fd1-40bf-b56c-b49187f3f092","subject":"不发邮件我就把你删了！！！！！！！！！！","yaoqingeventid":null},{"id":"c0adc3e1-ee97-49a1-967f-316938391283","description":"","endTime":"10:00","startTime":"09:00","locked1":null,"createDate":"2018-04-12 16:12:38","subEventid":null,"updateDate":"2018-04-12 16:12:38","locked":"false","lockedf":null,"ismanager":null,"yaoqingorder":null,"yaoqing":null,"dbflag":null,"alertFlag":"null","userId":"super","repeatType":"no","startDay":"2018-04-11","endDay":"2018-04-11","calendarId":"74f160ca-c639-4607-bbd0-329f25f51197","subject":"","yaoqingeventid":null},{"id":"0d33165d-630d-4536-bc1b-e937f124775b","description":"11111111","endTime":"10:30","startTime":"09:30","locked1":null,"createDate":"2018-04-12 15:29:18","subEventid":null,"updateDate":"2018-04-12 15:29:18","locked":"false","lockedf":null,"ismanager":null,"yaoqingorder":null,"yaoqing":null,"dbflag":null,"alertFlag":"[{\"type\":\"popup\",\"early\":10,\"unit\":\"minute\"}]","userId":"super","repeatType":"exception","startDay":"2018-04-12","endDay":"2018-04-12","calendarId":"74f160ca-c639-4607-bbd0-329f25f51197","subject":"111111111111","yaoqingeventid":null},{"id":"2f4082b7-f131-4beb-827b-9ee454eb1d6b","description":"","endTime":"11:00","startTime":"10:00","locked1":null,"createDate":"2018-04-12 16:12:21","subEventid":null,"updateDate":"2018-04-12 16:12:21","locked":"false","lockedf":null,"ismanager":null,"yaoqingorder":null,"yaoqing":null,"dbflag":null,"alertFlag":"null","userId":"super","repeatType":"no","startDay":"2018-04-10","endDay":"2018-04-10","calendarId":"ac86bcf5-3fd1-40bf-b56c-b49187f3f092","subject":"","yaoqingeventid":null},{"id":"f232b63b-0c47-46b9-a538-327757de65ac","description":"","endTime":"11:00","startTime":"10:00","locked1":null,"createDate":"2018-05-04 14:55:29","subEventid":null,"updateDate":"2018-05-04 14:55:29","locked":"false","lockedf":null,"ismanager":null,"yaoqingorder":null,"yaoqing":null,"dbflag":null,"alertFlag":"null","userId":"super","repeatType":"no","startDay":"2018-05-21","endDay":"2018-05-21","calendarId":"ac86bcf5-3fd1-40bf-b56c-b49187f3f092","subject":"","yaoqingeventid":null},{"id":"e4e82f5e-4bcd-484b-8c1d-573235a51250","description":"","endTime":"12:00","startTime":"11:00","locked1":null,"createDate":"2018-05-04 14:55:37","subEventid":null,"updateDate":"2018-05-04 14:55:37","locked":"false","lockedf":null,"ismanager":null,"yaoqingorder":null,"yaoqing":null,"dbflag":null,"alertFlag":"null","userId":"super","repeatType":"no","startDay":"2018-05-22","endDay":"2018-05-22","calendarId":"ac86bcf5-3fd1-40bf-b56c-b49187f3f092","subject":"","yaoqingeventid":null},{"id":"c0386044-163e-444f-be87-6479fd68ce47","description":"2","endTime":"19:30","startTime":"12:30","locked1":null,"createDate":"2018-04-12 15:02:17","subEventid":null,"updateDate":"2018-04-12 15:02:17","locked":"false","lockedf":null,"ismanager":null,"yaoqingorder":null,"yaoqing":null,"dbflag":null,"alertFlag":"[{\"type\":\"popup\",\"early\":10,\"unit\":\"minute\"}]","userId":"super","repeatType":"{\"rtype\":\"day\",\"intervalSlot\":3,\"dspan\":0,\"beginDay\":\"2018-04-09\",\"endDay\":\"no\",\"rtime\":10}","startDay":"2018-04-24","endDay":"2018-04-24","calendarId":"74f160ca-c639-4607-bbd0-329f25f51197","subject":"2","yaoqingeventid":null},{"id":"c29ff16c-512e-42fd-8b59-03846a44fc51","description":"","endTime":"14:00","startTime":"13:00","locked1":null,"createDate":"2018-04-12 15:02:31","subEventid":null,"updateDate":"2018-04-12 15:02:31","locked":"false","lockedf":null,"ismanager":null,"yaoqingorder":null,"yaoqing":null,"dbflag":null,"alertFlag":"null","userId":"super","repeatType":"{\"rtype\":\"day\",\"intervalSlot\":4,\"dspan\":0,\"beginDay\":\"2018-04-09\",\"endDay\":\"2019-04-12\"}","startDay":"2018-05-25","endDay":"2018-05-25","calendarId":"74f160ca-c639-4607-bbd0-329f25f51197","subject":"","yaoqingeventid":null},{"id":"36f3a04c-c86d-42f8-bf7c-41d9e3869cdc","description":"444444444444444","endTime":"17:00","startTime":"14:00","locked1":null,"createDate":"2018-04-12 15:07:45","subEventid":null,"updateDate":"2018-04-12 15:07:45","locked":"false","lockedf":null,"ismanager":null,"yaoqingorder":null,"yaoqing":null,"dbflag":null,"alertFlag":"[{\"type\":\"popup\",\"early\":60,\"unit\":\"minute\"}]","userId":"super","repeatType":"{\"rtype\":\"week\",\"intervalSlot\":1,\"dspan\":0,\"beginDay\":\"2018-04-09\",\"endDay\":\"no\",\"rday\":{\"1\":true,\"2\":true,\"3\":true}}","startDay":"2018-05-25","endDay":"2018-05-25","calendarId":"74f160ca-c639-4607-bbd0-329f25f51197","subject":"4444444444444","yaoqingeventid":null},{"id":"6e897015-44a6-4ca6-88c2-f4414dafe7c5","description":"重复事件提醒","endTime":"16:00","startTime":"15:00","locked1":null,"createDate":"2019-01-23 11:08:02","subEventid":null,"updateDate":"2019-01-23 11:08:02","locked":"false","lockedf":null,"ismanager":null,"yaoqingorder":null,"yaoqing":null,"dbflag":null,"alertFlag":"[{\"type\":\"email\",\"early\":20,\"unit\":\"minute\"}]","userId":"super","repeatType":"{\"rtype\":\"day\",\"intervalSlot\":1,\"dspan\":0,\"beginDay\":\"2019-01-23\",\"endDay\":\"no\"}","startDay":"2019-01-23","endDay":"2019-01-23","calendarId":"ac86bcf5-3fd1-40bf-b56c-b49187f3f092","subject":"重复事件提醒-邮件","yaoqingeventid":null},{"id":"8fdee384-4eb2-4d78-a45e-76339193aa48","description":"重复事件反显","endTime":"16:00","startTime":"15:00","locked1":null,"createDate":"2019-01-23 10:19:06","subEventid":null,"updateDate":"2019-01-23 10:19:06","locked":"false","lockedf":null,"ismanager":null,"yaoqingorder":null,"yaoqing":null,"dbflag":null,"alertFlag":"[{\"type\":\"email\",\"early\":20,\"unit\":\"minute\"}]","userId":"super","repeatType":"{\"rtype\":\"day\",\"intervalSlot\":1,\"dspan\":0,\"beginDay\":\"2019-01-23\",\"endDay\":\"no\"}","startDay":"2019-01-23","endDay":"2019-01-23","calendarId":"ac86bcf5-3fd1-40bf-b56c-b49187f3f092","subject":"重复事件反显","yaoqingeventid":null},{"id":"bbeeaa21-abfc-48da-9748-0c03be7b21f2","description":"","endTime":"16:00","startTime":"15:00","locked1":null,"createDate":"2019-01-23 11:14:18","subEventid":null,"updateDate":"2019-01-23 11:14:18","locked":"false","lockedf":null,"ismanager":null,"yaoqingorder":null,"yaoqing":null,"dbflag":null,"alertFlag":"[{\"type\":\"email\",\"early\":15,\"unit\":\"minute\"}]","userId":"super","repeatType":"no","startDay":"2019-01-23","endDay":"2019-01-23","calendarId":"ac86bcf5-3fd1-40bf-b56c-b49187f3f092","subject":"简单测试邮件提醒","yaoqingeventid":null},{"id":"64f3895e-b1ca-4e89-9ea1-be6786329914","description":"000000000000000","endTime":"16:30","startTime":"15:30","locked1":null,"createDate":"2018-04-12 16:35:37","subEventid":null,"updateDate":"2018-04-12 16:35:37","locked":"false","lockedf":null,"ismanager":null,"yaoqingorder":null,"yaoqing":null,"dbflag":null,"alertFlag":"null","userId":"super","repeatType":"no","startDay":"2018-04-14","endDay":"2018-04-14","calendarId":"ac86bcf5-3fd1-40bf-b56c-b49187f3f092","subject":"0000000000000000","yaoqingeventid":null},{"id":"125a1952-31c4-46b2-9ce6-b3176ef8a951","description":"zzzzzzzzzzzzzzzzzzzz","endTime":"17:00","startTime":"16:00","locked1":null,"createDate":"2018-04-24 15:43:30","subEventid":null,"updateDate":"2018-04-24 15:43:30","locked":"false","lockedf":null,"ismanager":null,"yaoqingorder":null,"yaoqing":null,"dbflag":null,"alertFlag":"[{\"type\":\"email\",\"early\":30,\"unit\":\"minute\"}]","userId":"super","repeatType":"no","startDay":"2018-04-24","endDay":"2018-04-24","calendarId":"ac86bcf5-3fd1-40bf-b56c-b49187f3f092","subject":"zzzzzzzzzzzzzzzzzz","yaoqingeventid":null},{"id":"d0d6a0c3-b657-4e8e-a6c0-c87333d7da93","description":"999999999999","endTime":"19:00","startTime":"18:00","locked1":null,"createDate":"2018-04-12 16:35:32","subEventid":null,"updateDate":"2018-04-12 16:35:32","locked":"false","lockedf":null,"ismanager":null,"yaoqingorder":null,"yaoqing":null,"dbflag":null,"alertFlag":"null","userId":"super","repeatType":"no","startDay":"2018-04-14","endDay":"2018-04-14","calendarId":"ac86bcf5-3fd1-40bf-b56c-b49187f3f092","subject":"99999999999999","yaoqingeventid":null},{"id":"248f446d-638a-490b-b546-aa703b0fce58","description":"777777777777777777","endTime":"22:00","startTime":"21:00","locked1":null,"createDate":"2018-04-12 16:35:22","subEventid":null,"updateDate":"2018-04-12 16:35:22","locked":"false","lockedf":null,"ismanager":null,"yaoqingorder":null,"yaoqing":null,"dbflag":null,"alertFlag":"null","userId":"super","repeatType":"no","startDay":"2018-04-15","endDay":"2018-04-15","calendarId":"ac86bcf5-3fd1-40bf-b56c-b49187f3f092","subject":"7777777777777777","yaoqingeventid":null},{"id":"6bba0fa7-a04e-438d-bfe9-7ad2607c1b0a","description":"555555555555","endTime":"22:00","startTime":"21:00","locked1":null,"createDate":"2018-04-12 16:35:15","subEventid":null,"updateDate":"2018-04-12 16:35:15","locked":"false","lockedf":null,"ismanager":null,"yaoqingorder":null,"yaoqing":null,"dbflag":null,"alertFlag":"null","userId":"super","repeatType":"no","startDay":"2018-04-14","endDay":"2018-04-14","calendarId":"ac86bcf5-3fd1-40bf-b56c-b49187f3f092","subject":"5555555555555555","yaoqingeventid":null},{"id":"17a8c57c-8978-4015-bc27-89e63a5cdfbf","description":"8888888888888888","endTime":"23:00","startTime":"22:00","locked1":null,"createDate":"2018-04-12 16:35:26","subEventid":null,"updateDate":"2018-04-12 16:35:26","locked":"false","lockedf":null,"ismanager":null,"yaoqingorder":null,"yaoqing":null,"dbflag":null,"alertFlag":"null","userId":"super","repeatType":"no","startDay":"2018-04-15","endDay":"2018-04-15","calendarId":"ac86bcf5-3fd1-40bf-b56c-b49187f3f092","subject":"888888888888888888","yaoqingeventid":null},{"id":"d728e0b0-0c46-47fa-8036-09c0605543b0","description":"4444444444444444444","endTime":"23:00","startTime":"22:00","locked1":null,"createDate":"2018-04-12 16:35:10","subEventid":null,"updateDate":"2018-04-12 16:35:10","locked":"false","lockedf":null,"ismanager":null,"yaoqingorder":null,"yaoqing":null,"dbflag":null,"alertFlag":"null","userId":"super","repeatType":"no","startDay":"2018-04-12","endDay":"2018-04-12","calendarId":"ac86bcf5-3fd1-40bf-b56c-b49187f3f092","subject":"444444444444444","yaoqingeventid":null},{"id":"02d1cfb7-6e46-45d7-841b-2e2bf3f5421d","description":"666666666666666","endTime":"23:30","startTime":"22:30","locked1":null,"createDate":"2018-04-12 16:35:18","subEventid":null,"updateDate":"2018-04-12 16:35:18","locked":"false","lockedf":null,"ismanager":null,"yaoqingorder":null,"yaoqing":null,"dbflag":null,"alertFlag":"null","userId":"super","repeatType":"no","startDay":"2018-04-14","endDay":"2018-04-14","calendarId":"ac86bcf5-3fd1-40bf-b56c-b49187f3f092","subject":"666666666666666","yaoqingeventid":null}],"success":"true"};
                if (backObj.success == 'false') {
                    Ext.Msg.show({
                        title:'Error',
                        msg: backObj.errorInfo,
                        buttons: Ext.Msg.OK,
                        icon: Ext.MessageBox.ERROR
                    });
                } else {
                    var rs = backObj['rows'];
                    var eventSet = {};
                    eventSet['whole'] = [];
                    var getRowFromHM = Ext.ux.calendar.Mask.getRowFromHM;
                    for(var i = 0, len = rs.length; i < len; i++){
                        var data = rs[i];
                        var startRow = getRowFromHM(data.startTime, this.intervalSlot);
                        var endRow = getRowFromHM(data.endTime, this.intervalSlot);
                        if(endRow == startRow){
                            endRow++;
                        }
                        var day = data.startDay;
                        var eday = data.endDay;
                        //alert(this.activeStartRow+':'+this.activeEndRow+':'+this.hideInactiveRow+':'+startRow+':'+endRow+':'+data.subject)
                        if(!this.hideInactiveRow 
                            || (this.activeStartRow <= startRow && endRow <= this.activeEndRow)
                                || (0 == startRow && this.rowCount == endRow) || (day != eday)){
                            
                            eventSet[day] = eventSet[day] || [];                            
                            var e = {
                                eventId:data.id,
                                calendarId:data.calendarId,
                                color:data.color,
                                startRow:startRow,
                                endRow:endRow,
                                subject:data.subject,
                                content:data.description,
                                day:day,
                                eday:eday,
                                alertFlag:Ext.decode(data.alertFlag),                                
                                locked:data.locked=="true"?true:false,
                                repeatType:data.repeatType
                            };
                            if(day != eday || (0 == startRow) && (this.rowCount == endRow)){
                                eventSet['whole'].push(e);
                            }else{
                                eventSet[day] = eventSet[day] || [];
                                eventSet[day].push(e);
                            }
                        }
                    }
                    sucessFn.call(scope, eventSet);
                }
            
            	
            },
            scope:scope || this
        });
    },

    loadRepeatEvent:function(sucessFn, scope){
        Ext.Ajax.request({
            url:Ext.ux.calendar.CONST.loadRepeatEventURL,
            success:function(response, options){
                var backObj = Ext.decode(response.responseText);
                if (backObj.success == 'false') {
                    Ext.Msg.show({
                        title:'Error',
                        msg: backObj.errorInfo,
                        buttons: Ext.Msg.OK,
                        icon: Ext.MessageBox.ERROR
                    });
                }else{
                    var rs = backObj['results'];
                    var eventSet = {};
                    var getRowFromHM = Ext.ux.calendar.Mask.getRowFromHM;
                    for(var i = 0, len = rs.length; i < len; i++){
                        var data = rs[i];
                        var startRow = getRowFromHM(data.startTime, this.intervalSlot);
                        var endRow = getRowFromHM(data.endTime, this.intervalSlot);
                        if(startRow == endRow){
                            endRow++;
                        }   
                        var day = data.ymd;
                        var eday = data.eymd;
                        //alert(this.activeStartRow+':'+this.activeEndRow+':'+this.hideInactiveRow+':'+startRow+':'+endRow+':'+data.subject)
                        if(!this.hideInactiveRow 
                            || (this.activeStartRow <= startRow && endRow <= this.activeEndRow)
                                || (0 == startRow && this.rowCount == endRow) || (day != eday)){
	                        var e = {
	                            eventId:data.id,
	                            calendarId:data.calendarId,
	                            color:data.color,
	                            startRow:startRow,
	                            endRow:endRow,
	                            subject:data.subject,
	                            content:data.description,
	                            repeatType:Ext.decode(data.repeatType),                            
	                            alertFlag:Ext.decode(data.alertFlag),
	                            locked:data.locked=="true"?true:false
	                        };                        
	                        eventSet[e.eventId] = e;
                        }
                    }
                    sucessFn.call(scope, eventSet);
                }
            },
            failure:function(response, options){

            },
            scope:scope || this
        });
    },
    /*
     * For create an event
     * @param {Obj} event: the object of event
     * @param {function} sucessFn: the callback function when request completed successfully
     * @param {obj} scope: the scope of sucessFn function
     */
	createEvent:function(event, sucessFn, scope){
        var day = event.day || Ext.Date.format((new Date()),'Y-m-d');
        var eday = event.eday || day;        
        Ext.Ajax.request({
            url:Ext.ux.calendar.CONST.createEventURL,
            /*
             * the params pass to server should contain:
             * calendarId: int, the id of the calendar this event belong to
             * selectedDay: string, 'Y-m-d' format, the day of this event
             * startHMTime: string, 'H:i' format, the start time of this event
             * endHMTime: string, 'H:i' format, the end time of this event
             * repeatType: boolean, not use yet, always false in this version
             * allDay: boolean, if true means this event is a whole event
             * flag: boolean, if true mean this event need alert a window when it's activing
             * locked: boolean, if true mean this event is locked, can not be changed
             * subject: string, the subject of this event
             * description: string, the description of this event
             */
            params:{
                'calendarId':event.calendarId,
                'startDay':day,
                'endDay':eday,
                'startTime':Ext.ux.calendar.Mask.getIntervalFromRow(this.intervalSlot, event.startRow),
                'endTime':Ext.ux.calendar.Mask.getIntervalFromRow(this.intervalSlot, event.endRow),
                'repeatType':event.repeatType,
                'alertFlag':Ext.encode(event.alertFlag),
                'locked':event.locked==true?"true":"false",
                'subject':event.subject,
                'description':event.content
            },
            success:function(response, options){
                 var backObj = Ext.decode(response.responseText);
                /*
                 * The back json string should contain a param "id", which is the id of the event just created,
                 * it should also have a param "success", when it equal "false" means fail to create/update in server side,
                 * for example: {"success":"true","info":"Your have successful created event","id":17}
                 */
                if (backObj.success == 'false') {
                    Ext.Msg.show({
                        title:'Error',
                        msg: backObj.errorInfo,
                        buttons: Ext.Msg.OK,
                        icon: Ext.MessageBox.ERROR
                    });
                } else {
                    sucessFn.call(scope, backObj);
                }
            },
            failure:function(response, options){

            }
        });
    },
    /*
     * For update an event
     * @param {Obj} event: the object of event
     * @param {function} sucessFn: the callback function when request completed successfully
     * @param {obj} scope: the scope of sucessFn function
     */
    updateEvent:function(event, sucessFn, scope){
        var day = event.day || Ext.Date.format(new Date(),'Y-m-d');
        var eday = event.eday || day;        
        Ext.Ajax.request({
            url:Ext.ux.calendar.CONST.updateEventURL,
            /*
             * the params pass to server should contain:
             * id: int, the id of the event
             * calendarId: int, the id of the calendar this event belong to
             * selectedDay: string, 'Y-m-d' format, the day of this event
             * startHMTime: string, 'H:i' format, the start time of this event
             * endHMTime: string, 'H:i' format, the end time of this event
             * repeatType: boolean, not use yet, always false in this version
             * allDay: boolean, if true means this event is a whole event
             * alertFlag:[], //array; contain the alert information, in old version, it's just a boolean
             * locked: boolean, if true mean this event is locked, can not be changed
             * subject: string, the subject of this event
             * description: string, the description of this event
             */
            params:{
                'id':event.eventId,
                'calendarId':event.calendarId,
                'startDay':day,
                'endDay':eday,
                'startTime':Ext.ux.calendar.Mask.getIntervalFromRow(this.intervalSlot, event.startRow),
                'endTime':Ext.ux.calendar.Mask.getIntervalFromRow(this.intervalSlot, event.endRow),
                'repeatType':event.repeatType,                
                'alertFlag':Ext.encode(event.alertFlag),
                'locked':event.locked==true?"true":"false",              
                'subject':event.subject,
                'description':event.content
            },
            success:function(response, options){
                 var backObj = Ext.decode(response.responseText);
                /*
                 * The back json string should have a param "success", when it equal "false" means fail to create/update in server side
                 */
                if (backObj.success == 'false') {
                    Ext.Msg.show({
                        title:'Error',
                        msg: backObj.errorInfo,
                        buttons: Ext.Msg.OK,
                        icon: Ext.MessageBox.ERROR
                    });
                } else {
                    sucessFn.call(scope, backObj);
                }
            },
            failure:function(response, options){

            },
            scope:scope || this
        });
    },
    /*
     * For delete an event
     * @param {Obj} event: the object of event
     * @param {function} sucessFn: the callback function when request completed successfully
     * @param {obj} scope: the scope of sucessFn function
     */
    deleteEvent:function(event, sucessFn, scope){
        Ext.Ajax.request({
            url:Ext.ux.calendar.CONST.deleteEventURL,
            /*
             * pass the id of event to delete
             */
            params:{
                'id':event.eventId
            },
            success:function(response, options){
                 var backObj = Ext.decode(response.responseText);
                /*
                 * The back json string should have a param "success", when it equal "false" means fail to delete in server side
                 */
                if (backObj.success == 'false') {
                    Ext.Msg.show({
                        title:'Error',
                        msg: backObj.errorInfo,
                        buttons: Ext.Msg.OK,
                        icon: Ext.MessageBox.ERROR
                    });
                } else {
                    sucessFn.call(scope, backObj);
                }
            },
            failure:function(response, options){

            },
            scope:scope || this
        });
    },

    deleteRepeatEvent:function(event, makeException, sucessFn, scope){
        Ext.Ajax.request({
            url:Ext.ux.calendar.CONST.deleteRepeatEventURL,
            /*
             * pass the id of event to delete
             */
            params:{
                'id':event.eventId,
                'makeException':makeException,
                'repeatType':Ext.encode(event.repeatType)
            },
            success:function(response, options){
                 var backObj = Ext.decode(response.responseText);
                /*
                 * The back json string should have a param "success", when it equal "false" means fail to delete in server side
                 */
                if (backObj.success == 'false') {
                    Ext.Msg.show({
                        title:'Error',
                        msg: backObj.errorInfo,
                        buttons: Ext.Msg.OK,
                        icon: Ext.MessageBox.ERROR
                    });
                } else {
                    sucessFn.call(scope, backObj);
                }
            },
            failure:function(response, options){

            },
            scope:scope || this
        });
    },
    /*
     * For change all events in a day to another day
     * @param {string} oday: the old day, all events belong to this day need be changed
     * @param {string} nday: the new day, all events belong to old day will change to this day
     * @param {function} sucessFn: the callback function when request completed successfully
     * @param {obj} scope: the scope of sucessFn function
     * @param {boolean} keep: if true will keep the events for old day, if false then delete events for old day
     */
    changeDay:function(oday, nday, sucessFn, scope, keep){
        Ext.Ajax.request({
            url:Ext.ux.calendar.CONST.changeDayURL,
            params:{
                'dragDay':oday,
                'dropDay':nday,
                'keep':keep
            },
            success:function(response, options){
                var backObj = Ext.decode(response.responseText);
                /*
                 * If keep is true, the back json string should contain a param "ids", which is an array keeps the id of the events just created for new day,
                 * for example: {"success":"true","info":"You have success update those events","backids":[18,19]};
                 * if keep is false, the back json is like: {"success":"true","info":"You have success update those events","backids":[]};
                 * it should also have a param "success", when it equal "false" means fail to change in server side
                 */
                if (backObj.success == 'false') {
                    Ext.Msg.show({
                        title:'Error',
                        msg: backObj.errorInfo,
                        buttons: Ext.Msg.OK,
                        icon: Ext.MessageBox.ERROR
                    });
                } else {
                    sucessFn.call(scope, backObj);
                }
            },
            failure:function(response, options){

            },
            scope:scope || this
        });
    },
    /*
     * For delete all events in a day
     * @param {string} day: all events belong to this day need be deleted
     * @param {function} sucessFn: the callback function when request completed successfully
     * @param {obj} scope: the scope of sucessFn function
     */
    deleteDay:function(day, sucessFn, scope){
        Ext.Ajax.request({
            url:Ext.ux.calendar.CONST.deleteDayURL,
            /*
             * pass the day to server, it's a string, 'Y-m-d' format
             */
            params:{
                'day':day
            },
            success:function(response, options){
                 var backObj = Ext.decode(response.responseText);
                 /*
                  * The back json string should have a param "success", when it equal "false" means fail to delete in server side
                  */
                if (backObj.success == 'false') {
                    Ext.Msg.show({
                        title:'Error',
                        msg: backObj.errorInfo,
                        buttons: Ext.Msg.OK,
                        icon: Ext.MessageBox.ERROR
                    });
                } else {
                    sucessFn.call(scope, backObj);
                }
            },
            failure:function(response, options){

            },
            scope:scope || this
        });
    },
    /*
     * For load setting of feyaCalendar   
     * @param {int} userId: the ID of current user
     * @param {function} sucessFn: the callback function when request completed successfully
     * @param {obj} scope: the scope of sucessFn function  
     */
    loadSetting:function(userId, sucessFn, scope){
    	Ext.Ajax.request({
            url:Ext.ux.calendar.CONST.loadSettingURL,
            success:function(response, options){
                 var backObj = Ext.decode(response.responseText);
                 /*
                  * The back json string should have a param "success", when it equal "false" means fail to delete in server side
                  */
                if (backObj.success == 'false') {
                    Ext.Msg.show({
                        title:'Error',
                        msg: backObj.errorInfo,
                        buttons: Ext.Msg.OK,
                        icon: Ext.MessageBox.ERROR
                    });
                } else {
                    sucessFn.call(scope, backObj);
                }
            },
            failure:function(response, options){

            },
            scope:scope || this
        });
    },

    /**
     * 登录
     */
    login:function(obj, sucessFn, scope){
    	Ext.Ajax.request({
            url:Ext.ux.calendar.CONST.loginURL,
            params:obj,
            success:function(response, options){
                 var backObj = Ext.decode(response.responseText);
                 if('0'==response.responseText) {
                     Ext.Msg.show({
                         title:'Error',
                         msg: "用户名密码错误！",
                         buttons: Ext.Msg.OK,
                         icon: Ext.MessageBox.ERROR
                     });
                 } else {
                     sucessFn.call(scope, backObj);
                 }
            },
            failure:function(response, options){

            },
            scope:scope || this
        });
    },
    regist:function(obj, sucessFn, scope){
    	Ext.Ajax.request({
            url:Ext.ux.calendar.CONST.registURL,
            params:obj,
            success:function(response, options){
                var backObj = Ext.decode(response.responseText);
                if('0'==response.responseText) {
                    Ext.Msg.show({
                        title:'Error',
                        msg: "重复的用户名！",
                        buttons: Ext.Msg.OK,
                        icon: Ext.MessageBox.ERROR
                    });
                } else {
                    sucessFn.call(scope, backObj);
                }
           },
            failure:function(response, options){

            },
            scope:scope || this
        });
    },
    updatePWD:function(obj, sucessFn, scope){
    	Ext.Ajax.request({
            url:Ext.ux.calendar.CONST.changePWDURL,
            params:obj,
            success:function(response, options){
                var backObj = Ext.decode(response.responseText);
                if('0'==response.responseText) {
                    Ext.Msg.show({
                        title:'Error',
                        msg: "密码修改失败！",
                        buttons: Ext.Msg.OK,
                        icon: Ext.MessageBox.ERROR
                    });
                } else {
                    sucessFn.call(scope, backObj);
                }
           },
            failure:function(response, options){

            },
            scope:scope || this
        });
    },
    /*
     * For save setting of feyaCalendar   
     * @param {obj} obj: the obj of current setting
     * @param {function} sucessFn: the callback function when request completed successfully
     * @param {obj} scope: the scope of sucessFn function  
     */
    updateSetting:function(obj, sucessFn, scope){
        var params = {
            'userId':this.mainPanel.userId
        };
        Ext.apply(params, obj);
    	Ext.Ajax.request({
            url:Ext.ux.calendar.CONST.updateSettingURL,
            params:params,
            success:function(response, options){
                 var backObj = Ext.decode(response.responseText);
                 /*
                  * The back json string should have a param "success", when it equal "false" means fail to delete in server side
                  */
                if (backObj.success == 'false') {
                    Ext.Msg.show({
                        title:'Error',
                        msg: backObj.errorInfo,
                        buttons: Ext.Msg.OK,
                        icon: Ext.MessageBox.ERROR
                    });
                } else {
                    sucessFn.call(scope, backObj);
                }
            },
            failure:function(response, options){

            },
            scope:scope || this
        });
    },

    createUpdateRepeatEvent:function(event, oevent, sucessFn, scope){
        var stime = Ext.ux.calendar.Mask.getIntervalFromRow(this.intervalSlot, event.startRow);
        var etime = Ext.ux.calendar.Mask.getIntervalFromRow(this.intervalSlot, event.endRow);        
        var params = {
            'calendarId':event.calendarId,
            'startDay':event.day,
            'endDay':event.eday,
            'startTime':stime,
            'endTime':etime,
            'repeatType': ('string' == Ext.ux.calendar.Mask.typeOf(event.repeatType))?event.repeatType:Ext.encode(event.repeatType),                  
            'alertFlag':Ext.encode(event.alertFlag),
            'locked':event.locked==true?"true":"false",
            'subject':event.subject,
            'description':event.content
        };        
        if('prepare' != event.eventId){
            params.id = event.eventId;
        }
        if(oevent){
            if('string' == Ext.ux.calendar.Mask.typeOf(oevent.repeatType)){
                params.oldRepeatType = oevent.repeatType;
            }else{
                params.oldRepeatType = Ext.encode(oevent.repeatType);                
            }
        }
        Ext.Ajax.request({
            url:Ext.ux.calendar.CONST.createUpdateRepeatEventURL,
            /*
             * the params pass to server should contain:
             * calendarId: int, the id of the calendar this event belong to
             * selectedDay: string, 'Y-m-d' format, the day of this event
             * startHMTime: string, 'H:i' format, the start time of this event
             * endHMTime: string, 'H:i' format, the end time of this event
             * repeatType: boolean, not use yet, always false in this version
             * allDay: boolean, if true means this event is a whole event
             * flag: boolean, if true mean this event need alert a window when it's activing
             * locked: boolean, if true mean this event is locked, can not be changed
             * subject: string, the subject of this event
             * description: string, the description of this event
             */
            params:params,
            success:function(response, options){
                 var backObj = Ext.decode(response.responseText);
                /*
                 * The back json string should contain a param "id", which is the id of the event just created,
                 * it should also have a param "success", when it equal "false" means fail to create/update in server side,
                 * for example: {"success":"true","info":"Your have successful created event","id":17}
                 */
                if (backObj.success == 'false') {
                    Ext.Msg.show({
                        title:'Error',
                        msg: backObj.errorInfo,
                        buttons: Ext.Msg.OK,
                        icon: Ext.MessageBox.ERROR
                    });
                } else {                    
                    sucessFn.call(scope, backObj);
                }
            },
            failure:function(response, options){

            }
        });
    },
    /*
     * For load setting and calendar from db
     * @param {int} userId: the ID of current user
     * @param {function} sucessFn: the callback function when request completed successfully
     * @param {obj} scope: the scope of sucessFn function
     */
    initialLoad:function(userId, sucessFn, scope){
    	Ext.Ajax.request({
            url:Ext.ux.calendar.CONST.initialLoadURL,
            /*
             * pass the userId to server
             */
            success:function(response, options){
                 var backObj = Ext.decode(response.responseText);
                 
                 /*
                  * The back json string should have a param "success", when it equal "false" means fail to delete in server side
                  */
                if (backObj.success == 'false') {
                    Ext.Msg.show({
                        title:'Error',
                        msg: backObj.errorInfo,
                        buttons: Ext.Msg.OK,
                        icon: Ext.MessageBox.ERROR
                    });
                } else {
                    var cs = backObj.cs[0];                                       
                    cs = Ext.ux.calendar.Mask.calculateActiveRow(cs);
                    Ext.apply(this, cs);
                    backObj.cs = cs;                    
                    var re = backObj.re;
                    var eventSet = {};
                    var getRowFromHM = Ext.ux.calendar.Mask.getRowFromHM;
                    for(var i = 0, len = re.length; i < len; i++){
                        var data = re[i];
                        var startRow = getRowFromHM(data.startTime, this.intervalSlot);
                        var endRow = getRowFromHM(data.endTime, this.intervalSlot);
                        if(startRow == endRow){
                            endRow++;
                        }    
                        var day = data.ymd;
                        var eday = data.eymd;
                        
                        if(!this.hideInactiveRow 
                            || (this.activeStartRow <= startRow && endRow <= this.activeEndRow)
                                || (0 == startRow && this.rowCount == endRow) || (day != eday)){
	                        var e = {
	                            eventId:data.id,
	                            calendarId:data.calendarId,
	                            color:data.color,
	                            startRow:startRow,
	                            endRow:endRow,
	                            subject:data.subject,
	                            content:data.description,
	                            repeatType:Ext.decode(data.repeatType),
	                            alertFlag:Ext.decode(data.alertFlag),                            
                                locked:data.locked=="true"?true:false
	                        };
	                        eventSet[e.eventId] = e;
                        }
                    }
                    backObj.re = eventSet;
                    sucessFn.call(scope, backObj);
                }
            },
            failure:function(response, options){
                Ext.Msg.show({
                    title:'Error',
                    msg: '遇到错误，切换到娱乐模式体验功能项！',
                    buttons: Ext.Msg.OK,
                    icon: Ext.MessageBox.ERROR
                });
                
//                {"cs":[{"language":"zh_CN","hourFormat":"24","activeEndTime":"17:30","weekFormat":"Y-m-d D","dayFormat":"l Y-m-d","fromtoFormat":"m/d/Y","intervalSlot":"30","monthFormat":"m/d","singleDay":0,"initialView":"1","readOnly":0,"userId":"super","startDay":"1","activeStartTime":"08:30","hideInactiveRow":0,"createByDblclick":0}],"owned":[{"name":"1111111111","id":"74f160ca-c639-4607-bbd0-329f25f51197","description":"11111111111111","inputDate":"2018-04-12 14:08:21","hide1":"1","color":"blue","userId":"super"},{"name":"工作安排","id":"ac86bcf5-3fd1-40bf-b56c-b49187f3f092","description":"工作安排","inputDate":null,"hide1":"1","color":"cyan","userId":"super"}],"re":[{"id":"01cedff8-d35d-495b-b40f-a345d3139416","description":"nnnnnnnnnnnnnnnnnnn","endTime":"24:00","startTime":"00:00","locked1":null,"createDate":"2018-04-23 16:48:45","subEventid":null,"updateDate":"2018-04-23 16:48:45","locked":"false","lockedf":null,"ismanager":null,"yaoqingorder":null,"yaoqing":null,"dbflag":null,"alertFlag":"[{\"type\":\"popup\",\"early\":30,\"unit\":\"minute\"}]","userId":"super","repeatType":"{\"rtype\":\"year\",\"intervalSlot\":1,\"dspan\":0,\"beginDay\":\"2018-04-05\",\"endDay\":\"no\"}","startDay":"2018-04-05","endDay":"2018-04-05","calendarId":"ac86bcf5-3fd1-40bf-b56c-b49187f3f092","subject":"nnnnnnnnnnnnnnnn","yaoqingeventid":null},{"id":"45f2908e-13bd-4e13-981e-a5c980ff1279","description":"6666666666666666","endTime":"24:00","startTime":"00:00","locked1":null,"createDate":"2018-04-24 10:42:06","subEventid":null,"updateDate":"2018-04-24 10:42:06","locked":"false","lockedf":null,"ismanager":null,"yaoqingorder":null,"yaoqing":null,"dbflag":null,"alertFlag":"null","userId":"super","repeatType":"{\"rtype\":\"year\",\"intervalSlot\":3,\"dspan\":0,\"beginDay\":\"2019-02-21\",\"endDay\":\"no\"}","startDay":"2035-02-21","endDay":"2035-02-21","calendarId":"ac86bcf5-3fd1-40bf-b56c-b49187f3f092","subject":"6666666666666","yaoqingeventid":null},{"id":"7f8c342b-159f-40bb-8c89-0bf5e01bf2bb","description":"nnnnnnnnnnnnnnnn","endTime":"24:00","startTime":"00:00","locked1":null,"createDate":"2018-04-23 16:48:50","subEventid":null,"updateDate":"2018-04-23 16:48:50","locked":"false","lockedf":null,"ismanager":null,"yaoqingorder":null,"yaoqing":null,"dbflag":null,"alertFlag":"null","userId":"super","repeatType":"{\"rtype\":\"year\",\"intervalSlot\":1,\"dspan\":0,\"beginDay\":\"2018-04-06\",\"endDay\":\"no\"}","startDay":"2018-04-06","endDay":"2018-04-06","calendarId":"ac86bcf5-3fd1-40bf-b56c-b49187f3f092","subject":"nnnnnnn","yaoqingeventid":null},{"id":"a76a02b5-b6f3-4857-bf2f-19877f12bb32","description":"3333333333333333333","endTime":"24:00","startTime":"00:00","locked1":null,"createDate":"2018-04-24 09:31:26","subEventid":null,"updateDate":"2018-04-24 09:31:26","locked":"false","lockedf":null,"ismanager":null,"yaoqingorder":null,"yaoqing":null,"dbflag":null,"alertFlag":"null","userId":"super","repeatType":"{\"rtype\":\"week\",\"intervalSlot\":3,\"dspan\":0,\"beginDay\":\"2018-05-08\",\"endDay\":\"2018-05-31\",\"rday\":{\"1\":true,\"2\":true,\"3\":true,\"4\":true,\"7\":true}}","startDay":"2018-06-21","endDay":"2018-06-21","calendarId":"ac86bcf5-3fd1-40bf-b56c-b49187f3f092","subject":"33333333333333333333","yaoqingeventid":null},{"id":"d8cb9780-1fdc-423d-8471-96f25a6e30a6","description":"444444444444444444","endTime":"24:00","startTime":"00:00","locked1":null,"createDate":"2018-04-24 10:36:20","subEventid":null,"updateDate":"2018-04-24 10:36:20","locked":"false","lockedf":null,"ismanager":null,"yaoqingorder":null,"yaoqing":null,"dbflag":null,"alertFlag":"null","userId":"super","repeatType":"{\"rtype\":\"month\",\"intervalSlot\":1,\"dspan\":0,\"beginDay\":\"2018-05-14\",\"endDay\":\"no\",\"rby\":\"date\"}","startDay":"2018-05-14","endDay":"2018-05-14","calendarId":"ac86bcf5-3fd1-40bf-b56c-b49187f3f092","subject":"4444444444","yaoqingeventid":null},{"id":"e8668d86-72cc-4350-8615-4438ac9a858f","description":"555555555555555555555","endTime":"24:00","startTime":"00:00","locked1":null,"createDate":"2018-04-24 10:39:19","subEventid":null,"updateDate":"2018-04-24 10:39:19","locked":"false","lockedf":null,"ismanager":null,"yaoqingorder":null,"yaoqing":null,"dbflag":null,"alertFlag":"null","userId":"super","repeatType":"{\"rtype\":\"month\",\"intervalSlot\":3,\"dspan\":0,\"beginDay\":\"2018-08-15\",\"endDay\":\"no\",\"rby\":\"day\"}","startDay":"2018-08-15","endDay":"2018-08-15","calendarId":"ac86bcf5-3fd1-40bf-b56c-b49187f3f092","subject":"5555555555555555","yaoqingeventid":null},{"id":"9315d1da-f790-4854-8235-c49afae9a491","description":"你到底发还是不发？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？","endTime":"10:00","startTime":"09:00","locked1":null,"createDate":"2019-01-31 08:51:48","subEventid":null,"updateDate":"2019-01-31 08:51:48","locked":"false","lockedf":null,"ismanager":null,"yaoqingorder":null,"yaoqing":null,"dbflag":null,"alertFlag":"[{\"type\":\"email\",\"early\":5,\"unit\":\"minute\"}]","userId":"super","repeatType":"{\"rtype\":\"day\",\"intervalSlot\":1,\"dspan\":0,\"beginDay\":\"2019-01-31\",\"endDay\":\"no\"}","startDay":"2019-01-31","endDay":"2019-01-31","calendarId":"ac86bcf5-3fd1-40bf-b56c-b49187f3f092","subject":"不发邮件我就把你删了！！！！！！！！！！","yaoqingeventid":null},{"id":"c0386044-163e-444f-be87-6479fd68ce47","description":"2","endTime":"19:30","startTime":"12:30","locked1":null,"createDate":"2018-04-12 15:02:17","subEventid":null,"updateDate":"2018-04-12 15:02:17","locked":"false","lockedf":null,"ismanager":null,"yaoqingorder":null,"yaoqing":null,"dbflag":null,"alertFlag":"[{\"type\":\"popup\",\"early\":10,\"unit\":\"minute\"}]","userId":"super","repeatType":"{\"rtype\":\"day\",\"intervalSlot\":3,\"dspan\":0,\"beginDay\":\"2018-04-09\",\"endDay\":\"no\",\"rtime\":10}","startDay":"2018-04-24","endDay":"2018-04-24","calendarId":"74f160ca-c639-4607-bbd0-329f25f51197","subject":"2","yaoqingeventid":null},{"id":"c29ff16c-512e-42fd-8b59-03846a44fc51","description":"","endTime":"14:00","startTime":"13:00","locked1":null,"createDate":"2018-04-12 15:02:31","subEventid":null,"updateDate":"2018-04-12 15:02:31","locked":"false","lockedf":null,"ismanager":null,"yaoqingorder":null,"yaoqing":null,"dbflag":null,"alertFlag":"null","userId":"super","repeatType":"{\"rtype\":\"day\",\"intervalSlot\":4,\"dspan\":0,\"beginDay\":\"2018-04-09\",\"endDay\":\"2019-04-12\"}","startDay":"2018-05-25","endDay":"2018-05-25","calendarId":"74f160ca-c639-4607-bbd0-329f25f51197","subject":"","yaoqingeventid":null},{"id":"36f3a04c-c86d-42f8-bf7c-41d9e3869cdc","description":"444444444444444","endTime":"17:00","startTime":"14:00","locked1":null,"createDate":"2018-04-12 15:07:45","subEventid":null,"updateDate":"2018-04-12 15:07:45","locked":"false","lockedf":null,"ismanager":null,"yaoqingorder":null,"yaoqing":null,"dbflag":null,"alertFlag":"[{\"type\":\"popup\",\"early\":60,\"unit\":\"minute\"}]","userId":"super","repeatType":"{\"rtype\":\"week\",\"intervalSlot\":1,\"dspan\":0,\"beginDay\":\"2018-04-09\",\"endDay\":\"no\",\"rday\":{\"1\":true,\"2\":true,\"3\":true}}","startDay":"2018-05-25","endDay":"2018-05-25","calendarId":"74f160ca-c639-4607-bbd0-329f25f51197","subject":"4444444444444","yaoqingeventid":null},{"id":"6e897015-44a6-4ca6-88c2-f4414dafe7c5","description":"重复事件提醒","endTime":"16:00","startTime":"15:00","locked1":null,"createDate":"2019-01-23 11:08:02","subEventid":null,"updateDate":"2019-01-23 11:08:02","locked":"false","lockedf":null,"ismanager":null,"yaoqingorder":null,"yaoqing":null,"dbflag":null,"alertFlag":"[{\"type\":\"email\",\"early\":20,\"unit\":\"minute\"}]","userId":"super","repeatType":"{\"rtype\":\"day\",\"intervalSlot\":1,\"dspan\":0,\"beginDay\":\"2019-01-23\",\"endDay\":\"no\"}","startDay":"2019-01-23","endDay":"2019-01-23","calendarId":"ac86bcf5-3fd1-40bf-b56c-b49187f3f092","subject":"重复事件提醒-邮件","yaoqingeventid":null},{"id":"8fdee384-4eb2-4d78-a45e-76339193aa48","description":"重复事件反显","endTime":"16:00","startTime":"15:00","locked1":null,"createDate":"2019-01-23 10:19:06","subEventid":null,"updateDate":"2019-01-23 10:19:06","locked":"false","lockedf":null,"ismanager":null,"yaoqingorder":null,"yaoqing":null,"dbflag":null,"alertFlag":"[{\"type\":\"email\",\"early\":20,\"unit\":\"minute\"}]","userId":"super","repeatType":"{\"rtype\":\"day\",\"intervalSlot\":1,\"dspan\":0,\"beginDay\":\"2019-01-23\",\"endDay\":\"no\"}","startDay":"2019-01-23","endDay":"2019-01-23","calendarId":"ac86bcf5-3fd1-40bf-b56c-b49187f3f092","subject":"重复事件反显","yaoqingeventid":null}]}

                var backObj = {"cs":[{"language":"zh_CN","hourFormat":"24","activeEndTime":"17:30","weekFormat":"Y-m-d D","dayFormat":"l Y-m-d","fromtoFormat":"m/d/Y","intervalSlot":"30","monthFormat":"m/d","singleDay":0,"initialView":"1","readOnly":0,"userId":"super","startDay":"1","activeStartTime":"08:30","hideInactiveRow":0,"createByDblclick":0}],"owned":[{"name":"1111111111","id":"74f160ca-c639-4607-bbd0-329f25f51197","description":"11111111111111","inputDate":"2018-04-12 14:08:21","hide1":"1","color":"blue","userId":"super"},{"name":"工作安排","id":"ac86bcf5-3fd1-40bf-b56c-b49187f3f092","description":"工作安排","inputDate":null,"hide1":"1","color":"cyan","userId":"super"}],"re":[{"id":"01cedff8-d35d-495b-b40f-a345d3139416","description":"nnnnnnnnnnnnnnnnnnn","endTime":"24:00","startTime":"00:00","locked1":null,"createDate":"2018-04-23 16:48:45","subEventid":null,"updateDate":"2018-04-23 16:48:45","locked":"false","lockedf":null,"ismanager":null,"yaoqingorder":null,"yaoqing":null,"dbflag":null,"alertFlag":"[{\"type\":\"popup\",\"early\":30,\"unit\":\"minute\"}]","userId":"super","repeatType":"{\"rtype\":\"year\",\"intervalSlot\":1,\"dspan\":0,\"beginDay\":\"2018-04-05\",\"endDay\":\"no\"}","startDay":"2018-04-05","endDay":"2018-04-05","calendarId":"ac86bcf5-3fd1-40bf-b56c-b49187f3f092","subject":"nnnnnnnnnnnnnnnn","yaoqingeventid":null},{"id":"45f2908e-13bd-4e13-981e-a5c980ff1279","description":"6666666666666666","endTime":"24:00","startTime":"00:00","locked1":null,"createDate":"2018-04-24 10:42:06","subEventid":null,"updateDate":"2018-04-24 10:42:06","locked":"false","lockedf":null,"ismanager":null,"yaoqingorder":null,"yaoqing":null,"dbflag":null,"alertFlag":"null","userId":"super","repeatType":"{\"rtype\":\"year\",\"intervalSlot\":3,\"dspan\":0,\"beginDay\":\"2019-02-21\",\"endDay\":\"no\"}","startDay":"2035-02-21","endDay":"2035-02-21","calendarId":"ac86bcf5-3fd1-40bf-b56c-b49187f3f092","subject":"6666666666666","yaoqingeventid":null},{"id":"7f8c342b-159f-40bb-8c89-0bf5e01bf2bb","description":"nnnnnnnnnnnnnnnn","endTime":"24:00","startTime":"00:00","locked1":null,"createDate":"2018-04-23 16:48:50","subEventid":null,"updateDate":"2018-04-23 16:48:50","locked":"false","lockedf":null,"ismanager":null,"yaoqingorder":null,"yaoqing":null,"dbflag":null,"alertFlag":"null","userId":"super","repeatType":"{\"rtype\":\"year\",\"intervalSlot\":1,\"dspan\":0,\"beginDay\":\"2018-04-06\",\"endDay\":\"no\"}","startDay":"2018-04-06","endDay":"2018-04-06","calendarId":"ac86bcf5-3fd1-40bf-b56c-b49187f3f092","subject":"nnnnnnn","yaoqingeventid":null},{"id":"a76a02b5-b6f3-4857-bf2f-19877f12bb32","description":"3333333333333333333","endTime":"24:00","startTime":"00:00","locked1":null,"createDate":"2018-04-24 09:31:26","subEventid":null,"updateDate":"2018-04-24 09:31:26","locked":"false","lockedf":null,"ismanager":null,"yaoqingorder":null,"yaoqing":null,"dbflag":null,"alertFlag":"null","userId":"super","repeatType":"{\"rtype\":\"week\",\"intervalSlot\":3,\"dspan\":0,\"beginDay\":\"2018-05-08\",\"endDay\":\"2018-05-31\",\"rday\":{\"1\":true,\"2\":true,\"3\":true,\"4\":true,\"7\":true}}","startDay":"2018-06-21","endDay":"2018-06-21","calendarId":"ac86bcf5-3fd1-40bf-b56c-b49187f3f092","subject":"33333333333333333333","yaoqingeventid":null},{"id":"d8cb9780-1fdc-423d-8471-96f25a6e30a6","description":"444444444444444444","endTime":"24:00","startTime":"00:00","locked1":null,"createDate":"2018-04-24 10:36:20","subEventid":null,"updateDate":"2018-04-24 10:36:20","locked":"false","lockedf":null,"ismanager":null,"yaoqingorder":null,"yaoqing":null,"dbflag":null,"alertFlag":"null","userId":"super","repeatType":"{\"rtype\":\"month\",\"intervalSlot\":1,\"dspan\":0,\"beginDay\":\"2018-05-14\",\"endDay\":\"no\",\"rby\":\"date\"}","startDay":"2018-05-14","endDay":"2018-05-14","calendarId":"ac86bcf5-3fd1-40bf-b56c-b49187f3f092","subject":"4444444444","yaoqingeventid":null},{"id":"e8668d86-72cc-4350-8615-4438ac9a858f","description":"555555555555555555555","endTime":"24:00","startTime":"00:00","locked1":null,"createDate":"2018-04-24 10:39:19","subEventid":null,"updateDate":"2018-04-24 10:39:19","locked":"false","lockedf":null,"ismanager":null,"yaoqingorder":null,"yaoqing":null,"dbflag":null,"alertFlag":"null","userId":"super","repeatType":"{\"rtype\":\"month\",\"intervalSlot\":3,\"dspan\":0,\"beginDay\":\"2018-08-15\",\"endDay\":\"no\",\"rby\":\"day\"}","startDay":"2018-08-15","endDay":"2018-08-15","calendarId":"ac86bcf5-3fd1-40bf-b56c-b49187f3f092","subject":"5555555555555555","yaoqingeventid":null},{"id":"9315d1da-f790-4854-8235-c49afae9a491","description":"你到底发还是不发？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？","endTime":"10:00","startTime":"09:00","locked1":null,"createDate":"2019-01-31 08:51:48","subEventid":null,"updateDate":"2019-01-31 08:51:48","locked":"false","lockedf":null,"ismanager":null,"yaoqingorder":null,"yaoqing":null,"dbflag":null,"alertFlag":"[{\"type\":\"email\",\"early\":5,\"unit\":\"minute\"}]","userId":"super","repeatType":"{\"rtype\":\"day\",\"intervalSlot\":1,\"dspan\":0,\"beginDay\":\"2019-01-31\",\"endDay\":\"no\"}","startDay":"2019-01-31","endDay":"2019-01-31","calendarId":"ac86bcf5-3fd1-40bf-b56c-b49187f3f092","subject":"不发邮件我就把你删了！！！！！！！！！！","yaoqingeventid":null},{"id":"c0386044-163e-444f-be87-6479fd68ce47","description":"2","endTime":"19:30","startTime":"12:30","locked1":null,"createDate":"2018-04-12 15:02:17","subEventid":null,"updateDate":"2018-04-12 15:02:17","locked":"false","lockedf":null,"ismanager":null,"yaoqingorder":null,"yaoqing":null,"dbflag":null,"alertFlag":"[{\"type\":\"popup\",\"early\":10,\"unit\":\"minute\"}]","userId":"super","repeatType":"{\"rtype\":\"day\",\"intervalSlot\":3,\"dspan\":0,\"beginDay\":\"2018-04-09\",\"endDay\":\"no\",\"rtime\":10}","startDay":"2018-04-24","endDay":"2018-04-24","calendarId":"74f160ca-c639-4607-bbd0-329f25f51197","subject":"2","yaoqingeventid":null},{"id":"c29ff16c-512e-42fd-8b59-03846a44fc51","description":"","endTime":"14:00","startTime":"13:00","locked1":null,"createDate":"2018-04-12 15:02:31","subEventid":null,"updateDate":"2018-04-12 15:02:31","locked":"false","lockedf":null,"ismanager":null,"yaoqingorder":null,"yaoqing":null,"dbflag":null,"alertFlag":"null","userId":"super","repeatType":"{\"rtype\":\"day\",\"intervalSlot\":4,\"dspan\":0,\"beginDay\":\"2018-04-09\",\"endDay\":\"2019-04-12\"}","startDay":"2018-05-25","endDay":"2018-05-25","calendarId":"74f160ca-c639-4607-bbd0-329f25f51197","subject":"","yaoqingeventid":null},{"id":"36f3a04c-c86d-42f8-bf7c-41d9e3869cdc","description":"444444444444444","endTime":"17:00","startTime":"14:00","locked1":null,"createDate":"2018-04-12 15:07:45","subEventid":null,"updateDate":"2018-04-12 15:07:45","locked":"false","lockedf":null,"ismanager":null,"yaoqingorder":null,"yaoqing":null,"dbflag":null,"alertFlag":"[{\"type\":\"popup\",\"early\":60,\"unit\":\"minute\"}]","userId":"super","repeatType":"{\"rtype\":\"week\",\"intervalSlot\":1,\"dspan\":0,\"beginDay\":\"2018-04-09\",\"endDay\":\"no\",\"rday\":{\"1\":true,\"2\":true,\"3\":true}}","startDay":"2018-05-25","endDay":"2018-05-25","calendarId":"74f160ca-c639-4607-bbd0-329f25f51197","subject":"4444444444444","yaoqingeventid":null},{"id":"6e897015-44a6-4ca6-88c2-f4414dafe7c5","description":"重复事件提醒","endTime":"16:00","startTime":"15:00","locked1":null,"createDate":"2019-01-23 11:08:02","subEventid":null,"updateDate":"2019-01-23 11:08:02","locked":"false","lockedf":null,"ismanager":null,"yaoqingorder":null,"yaoqing":null,"dbflag":null,"alertFlag":"[{\"type\":\"email\",\"early\":20,\"unit\":\"minute\"}]","userId":"super","repeatType":"{\"rtype\":\"day\",\"intervalSlot\":1,\"dspan\":0,\"beginDay\":\"2019-01-23\",\"endDay\":\"no\"}","startDay":"2019-01-23","endDay":"2019-01-23","calendarId":"ac86bcf5-3fd1-40bf-b56c-b49187f3f092","subject":"重复事件提醒-邮件","yaoqingeventid":null},{"id":"8fdee384-4eb2-4d78-a45e-76339193aa48","description":"重复事件反显","endTime":"16:00","startTime":"15:00","locked1":null,"createDate":"2019-01-23 10:19:06","subEventid":null,"updateDate":"2019-01-23 10:19:06","locked":"false","lockedf":null,"ismanager":null,"yaoqingorder":null,"yaoqing":null,"dbflag":null,"alertFlag":"[{\"type\":\"email\",\"early\":20,\"unit\":\"minute\"}]","userId":"super","repeatType":"{\"rtype\":\"day\",\"intervalSlot\":1,\"dspan\":0,\"beginDay\":\"2019-01-23\",\"endDay\":\"no\"}","startDay":"2019-01-23",
                	"endDay":"2019-01-23","calendarId":"ac86bcf5-3fd1-40bf-b56c-b49187f3f092","subject":"重复事件反显","yaoqingeventid":null}]};
               
                /*
                 * The back json string should have a param "success", when it equal "false" means fail to delete in server side
                 */
               if (backObj.success == 'false') {
                   Ext.Msg.show({
                       title:'Error',
                       msg: backObj.errorInfo,
                       buttons: Ext.Msg.OK,
                       icon: Ext.MessageBox.ERROR
                   });
               } else {
                   var cs = backObj.cs[0];                                       
                   cs = Ext.ux.calendar.Mask.calculateActiveRow(cs);
                   Ext.apply(this, cs);
                   backObj.cs = cs;                    
                   var re = backObj.re;
                   var eventSet = {};
                   var getRowFromHM = Ext.ux.calendar.Mask.getRowFromHM;
                   for(var i = 0, len = re.length; i < len; i++){
                       var data = re[i];
                       var startRow = getRowFromHM(data.startTime, this.intervalSlot);
                       var endRow = getRowFromHM(data.endTime, this.intervalSlot);
                       if(startRow == endRow){
                           endRow++;
                       }    
                       var day = data.ymd;
                       var eday = data.eymd;
                       
                       if(!this.hideInactiveRow 
                           || (this.activeStartRow <= startRow && endRow <= this.activeEndRow)
                               || (0 == startRow && this.rowCount == endRow) || (day != eday)){
	                        var e = {
	                            eventId:data.id,
	                            calendarId:data.calendarId,
	                            color:data.color,
	                            startRow:startRow,
	                            endRow:endRow,
	                            subject:data.subject,
	                            content:data.description,
	                            repeatType:Ext.decode(data.repeatType),
	                            alertFlag:Ext.decode(data.alertFlag),                            
                               locked:data.locked=="true"?true:false
	                        };
	                        eventSet[e.eventId] = e;
                       }
                   }
                   backObj.re = eventSet;
                   sucessFn.call(scope, backObj);
               }
            },
            scope:scope || this
        });
    }
});
