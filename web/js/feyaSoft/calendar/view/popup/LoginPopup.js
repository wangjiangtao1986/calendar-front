/**
 * FeyaSoft MyCalendar
 * Copyright(c) 2006-2012, FeyaSoft Inc. All right reserved.
 * info@cubedrive.com
 * http://www.cubedrive.com
 *
 * Please read license first before your use myCalendar, For more detail
 * information, please can visit our link: http://www.cubedrive.com/myCalendar
 *
 * You need buy one of the Feyasoft's License if you want to use MyCalendar in
 * your commercial product. You must not remove, obscure or interfere with any
 * FeyaSoft copyright, acknowledgment, attribution, trademark, warning or
 * disclaimer statement affixed to, incorporated in or otherwise applied in
 * connection with the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY
 * KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
 * WARRANTIES OF MERCHANTABILITY,FITNESS FOR A PARTICULAR PURPOSE
 * AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
 * OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
Ext.define('Ext.ux.calendar.popup.LoginPopup', {
	extend : 'Ext.Window',
	initComponent : function() {
		var lan = Ext.ux.calendar.Mask.LoginPopup;

		this.luserIdField =Ext.create('Ext.form.TextField',{
					fieldLabel : lan['userIdField.label'],
					editable : true,
					displayField : 'display',
					valueField : 'value',
					typeAhead : true,
					allowBlank : false,
					labelWidth : 180,
					anchor : '95%'
				});

		this.ruserIdField =Ext.create('Ext.form.TextField',{
					fieldLabel : lan['userIdField.label'],
					editable : true,
					displayField : 'display',
					valueField : 'value',
					typeAhead : true,
					allowBlank : false,
					labelWidth : 180,
					anchor : '95%'
				});
		this.uuserIdField =Ext.create('Ext.form.TextField',{
					fieldLabel : lan['userIdField.label'],
					editable : true,
					displayField : 'display',
					valueField : 'value',
					typeAhead : true,
					allowBlank : false,
					labelWidth : 180,
					anchor : '95%'
				});
		this.lpasswordField =Ext.create('Ext.form.TextField',{
			fieldLabel : lan['passwordField.label'],
			editable : true,
			displayField : 'display',
			valueField : 'value',
			typeAhead : true,
			allowBlank : false,
			labelWidth : 180,
			anchor : '95%'
		});
		this.rpasswordField =Ext.create('Ext.form.TextField',{
			fieldLabel : lan['passwordField.label'],
			editable : true,
			displayField : 'display',
			valueField : 'value',
			typeAhead : true,
			allowBlank : false,
			labelWidth : 180,
			anchor : '95%'
		});
		this.upasswordField =Ext.create('Ext.form.TextField',{
			fieldLabel : lan['passwordField.label'],
			editable : true,
			displayField : 'display',
			valueField : 'value',
			typeAhead : true,
			allowBlank : false,
			labelWidth : 180,
			anchor : '95%'
		});
		this.rrpasswordField =Ext.create('Ext.form.TextField',{
			fieldLabel : lan['rpasswordField.label'],
			editable : true,
			displayField : 'display',
			valueField : 'value',
			typeAhead : true,
			allowBlank : false,
			labelWidth : 180,
			anchor : '95%'
		});

		this.urpasswordField =Ext.create('Ext.form.TextField',{
			fieldLabel : lan['rpasswordField.label'],
			editable : true,
			displayField : 'display',
			valueField : 'value',
			typeAhead : true,
			allowBlank : false,
			labelWidth : 180,
			anchor : '95%'
		});

		this.lapplyBtn =Ext.create('Ext.Button',{
					iconCls : 'icon_feyaCalendar_accept',
					text : lan['applyBtn.text'],
					handler : this.onApplyLoginFn,
					scope : this
				});
		this.rapplyBtn =Ext.create('Ext.Button',{
			iconCls : 'icon_feyaCalendar_accept',
			text : lan['applyBtn.text'],
			handler : this.onApplyRegistFn,
			scope : this
		});
		this.uapplyBtn =Ext.create('Ext.Button',{
			iconCls : 'icon_feyaCalendar_accept',
			text : lan['applyBtn.text'],
			handler : this.onApplyUPPWDFn,
			scope : this
		});

		this.lresetBtn = Ext.create('Ext.Button',{
					iconCls : 'icon_feyaCalendar_cancel',
					text : lan['resetBtn.text'],
					handler : this.onResetFn,
					scope : this
				});

		this.rresetBtn = Ext.create('Ext.Button',{
					iconCls : 'icon_feyaCalendar_cancel',
					text : lan['resetBtn.text'],
					handler : this.onResetFn,
					scope : this
				});

		this.uresetBtn = Ext.create('Ext.Button',{
					iconCls : 'icon_feyaCalendar_cancel',
					text : lan['resetBtn.text'],
					handler : this.onResetFn,
					scope : this
				});

		this.lcloseBtn = Ext.create('Ext.Button',{
					iconCls : 'icon_feyaCalendar_door_out',
					text : lan['closeBtn.text'],
					handler : this.onCloseFn,
					scope : this
				});
		this.rcloseBtn = Ext.create('Ext.Button',{
			iconCls : 'icon_feyaCalendar_door_out',
			text : lan['closeBtn.text'],
			handler : this.onCloseFn,
			scope : this
		});
		this.ucloseBtn = Ext.create('Ext.Button',{
			iconCls : 'icon_feyaCalendar_door_out',
			text : lan['closeBtn.text'],
			handler : this.onCloseFn,
			scope : this
		});

		this.loginForm =Ext.create('Ext.form.FormPanel',{
			title : lan['loginForm.title'],
			frame : true,
			border : false,
			baseCls : 'x-panel-body-default-framed',
			style : 'padding:10px;',
			bodyStyle : 'padding:10px;background:transparent;',
			fieldWidth : 180,
			items : [
			        this.luserIdField, 
					this.lpasswordField
					],
			buttons : [this.lresetBtn, this.lapplyBtn, this.lcloseBtn]
		});
		
		this.registForm =Ext.create('Ext.form.FormPanel',{
			title : lan['registForm.title'],
			frame : true,
			border : false,
			baseCls : 'x-panel-body-default-framed',
			style : 'padding:10px;',
			bodyStyle : 'padding:10px;background:transparent;',
			fieldWidth : 180,
			items : [
			        this.ruserIdField, 
					this.rpasswordField, 
					this.rrpasswordField
					],
			buttons : [this.rresetBtn, this.rapplyBtn, this.rcloseBtn]
		});
		
		this.weixinForm =Ext.create('Ext.form.FormPanel',{
			title : lan['weixinForm.title'],
			frame : true,
			border : false,
			baseCls : 'x-panel-body-default-framed',
			style : 'padding:10px;',
			bodyStyle : 'padding:10px;background:transparent;',
			fieldWidth : 180,
			items : [
			         {xtype: 'box', //或者xtype: 'component',  
			        	 width: 132,  
			        	 id: 'imagebox',  
			        	 name: 'imagebox',  
			        	 height: 136,    
			        	 autoEl: {  
			        	    tag: 'img',    //指定为img标签      
			        	    src: 'images/slogo.gif'    //指定url路径      
			        	 }  
			         }
					],
			buttons : [this.rapplyBtn, this.rcloseBtn]
		});
   	 
		this.changePWDForm =Ext.create('Ext.form.FormPanel',{
			title : lan['changePWDForm.title'],
			frame : true,
			border : false,
			baseCls : 'x-panel-body-default-framed',
			style : 'padding:10px;',
			bodyStyle : 'padding:10px;background:transparent;',
			fieldWidth : 180,
			items : [
			        this.uuserIdField, 
					this.upasswordField, 
					this.urpasswordField
					],
			buttons : [this.uresetBtn, this.uapplyBtn, this.ucloseBtn]
		});

		
		this.tabs =Ext.create('Ext.TabPanel',{
					activeTab : 0,
					deferredRender : true,
					resizeTabs : true,
					tabWidth : 1000,
					minTabWidth : 0,
					layoutOnTabChange : false,
					items : [this.loginForm, this.registForm,
							this.changePWDForm]
				});

		Ext.apply(this, {
					border : false,
					iconCls : 'icon_feyaCalendar_setting',
					cls : 'x-feyaCalendar-setting',
					title : lan['title'],
					width : 500,
					height : 360,
					closable : true,
					resizable : false,
					closeAction : 'hide',
					modal : true,
					layout : 'fit',
					items : [this.tabs]
				})
		this.callParent(arguments);
	},

	popup : function(data) {
		var userId = document.getElementById("userId").value;
		this.luserIdField.setValue(userId);
		this.ruserIdField.setValue(userId);
		this.uuserIdField.setValue(userId);

	   	 Ext.getCmp("imagebox").getEl().dom.src = newsrc;  
		this.show();
	},
	
	onApplyLoginFn : function() {
		var flag = true;

		var userId = this.luserIdField.getValue();
		var userPwd = this.lpasswordField.getValue();

		if(''==userPwd||''==userId){
            Ext.Msg.show({
                title:'Error',
                msg: '请输入必要的参数',
                buttons: Ext.Msg.OK,
                icon: Ext.MessageBox.ERROR
            });
            return;
		}
		var params = {
				userId : userId,
				userPwd : this.onEncryptFn(userPwd)
		};
			
		if (flag) {
			var cc = this.calendarContainer;
			var eh = cc.ehandler;
			eh.ds.login(params, function(backObj) {
//				更新列表
			    document.getElementById("userId").value=backObj.userId;
				this.mainPanel.userId=backObj.userId;
				this.refresh(eh,cc,1);
				this.onResetFn();
			}, this);
			this.onCloseFn();
		}
	},
	
	onApplyRegistFn : function() {
		var flag = true;

		var userId = this.ruserIdField.getValue();
		var userPwd = this.rpasswordField.getValue();
		var ruserPwd = this.rrpasswordField.getValue();
		if(''==userPwd||userPwd!=ruserPwd||''==userId){
            Ext.Msg.show({
                title:'Error',
                msg: '请输入必要的参数',
                buttons: Ext.Msg.OK,
                icon: Ext.MessageBox.ERROR
            });
            return;
		}
		var params = {
				userId : userId,
				userPwd : this.onEncryptFn(userPwd)
		};
			
		if (flag) {
			var cc = this.calendarContainer;
			var eh = cc.ehandler;
			eh.ds.regist(params, function(backObj) {
//				更新列表
			    document.getElementById("userId").value=backObj.userId;
				this.mainPanel.userId=backObj.userId;
				this.refresh(eh,cc);
				this.onResetFn();
			}, this);
			this.onCloseFn();
		}
	},
	
	onApplyUPPWDFn : function() {
		var flag = true;

		var userId = this.uuserIdField.getValue();
		var userPwd = this.upasswordField.getValue();
		var ruserPwd = this.urpasswordField.getValue();
		alert(userId + "-" + userPwd + "-" + ruserPwd);
		if(''==userPwd||userPwd==ruserPwd||''==userId){
            Ext.Msg.show({
                title:'Error',
                msg: '请输入必要的参数,且新旧密码不得相同！',
                buttons: Ext.Msg.OK,
                icon: Ext.MessageBox.ERROR
            });
            return;
		}
		var params = {
				userId : userId,
				ruserPwd : this.onEncryptFn(ruserPwd),
				userPwd : this.onEncryptFn(userPwd)
		};
			
		if (flag) {
			var cc = this.calendarContainer;
			var eh = cc.ehandler;
			eh.ds.updatePWD(params, function(backObj) {
//				更新列表
				this.onResetFn();
			}, this);
			this.onCloseFn();
		}
	},


	onEncryptFn : function(word) {
		return encryptString(word);
    },

	onCloseFn : function() {
		this.hide(Ext.getBody());
	},

	refresh : function(eh,cc,cflag) {
//		var eh = this.ehandler;
		var wp = cc.ownerCt.westPanel;
		var ownedCt, sharedCt;
		if (wp.myCalendarPanel) {
			ownedCt = wp.myCalendarPanel.body;
		}
		if (wp.otherCalendarPanel) {
			sharedCt = wp.otherCalendarPanel.body;
		}
		eh.fireEvent('reloadCalendar', ownedCt, sharedCt, cflag);
	},

	onResetFn : function() {
		this.loginForm.getForm().reset();
		this.registForm.getForm().reset();
		this.changePWDForm.getForm().reset();
	}
});