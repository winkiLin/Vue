import request from './index.js'


export default {
	//获取验证码
	getSmsCode(data) {
		const instance = new request();
		const r = instance.post({
			url: 'api/Appsendmsg/send_sms',
			data: data
		})
		return r
	},

	// 登录
	logIn(data) {
		const instance = new request();
		const r = instance.post({
			url: 'api/Appsendmsg/login',
			data: data
		})
		return r
	},

	// 检查是否实名制
	checkIDMsg(data) {
		const instance = new request();
		const r = instance.post({
			url: 'UserApp/AppSource/checkIDMsg',
			data: data
		})
		return r
	},

	// 项目列表
	projectList(data) {
		const instance = new request();
		const r = instance.post({
			url: 'UserApp/AppSource/getProjectList',
			data: data
		})
		return r
	},

	// 施工列表
	unitList(data) {
		const instance = new request();
		const r = instance.post({
			url: 'UserApp/AppSource/getShigongList',
			data: data
		})
		return r
	},

	// 公司列表
	companyList(data) {
		const instance = new request();
		const r = instance.post({
			url: 'UserApp/AppSource/getCompanyInfo',
			data: data
		})
		return r
	},

	// 工种、班组、住建列表
	mostList(data) {
		const instance = new request();
		const r = instance.post({
			url: 'UserApp/AppSource/getGroupProfession',
			data: data
		})
		return r
	},

	// 实名制接口
	realName(data) {
		const instance = new request();
		const r = instance.post({
			url: 'UserApp/AppSource/addRealNameApi',
			data: data
		})
		return r
	},

	// 录入项目人员
	addProjectUser(data) {
		const instance = new request();
		const r = instance.post({
			url: 'UserApp/AppSource/addProjectUser',
			data: data
		})
		return r
	},

	// 换绑发送验证码
	changePhone(data) {
		const instance = new request();
		const r = instance.post({
			url: 'UserApp/AppSource/changePhone',
			data: data
		})
		return r
	},

	// 换绑验证(旧手机)
	sendToOldPhone(data) {
		const instance = new request();
		const r = instance.post({
			url: 'UserApp/AppSource/sendToOldPhone',
			data: data
		})
		return r
	},

	// 换绑验证(新手机)
	sendToNewPhone(data) {
		const instance = new request();
		const r = instance.post({
			url: 'UserApp/AppSource/sendToNewPhone',
			data: data
		})
		return r
	},

	// 获取地区列表
	getAreaFile(data) {
		const instance = new request();
		const r = instance.post({
			url: 'UserApp/AppSource/getAreaFile',
			data: data
		})
		return r
	},

	// 上传图片/文件
	uploadFile(data) {
		const instance = new request();
		const r = instance.post({
			url: 'Api/App/upImg/returnType/apiPart',
			data: data
		})
		return r
	},

	//我的信息
	getUserData(data) {
		const instance = new request();
		const r = instance.post({
			url: 'UserApp/AppSource/getUserData',
			data: data
		})
		return r
	},

	//我的信息项目列表
	getUserProjectList(data) {
		const instance = new request();
			const r = instance.post({
			url: 'UserApp/AppSource/getUserProjectList',
			data: data
		})
		return r
	},

	//修改人员项目信息
	editProjectUser(data) {
		const instance = new request();
		const r = instance.post({
			url: 'UserApp/AppSource/editProjectUser',
			data: data
		})
		return r
	},

	//修改实名制
	editRealName(data) {
		const instance = new request();
		const r = instance.post({
			url: 'UserApp/AppSource/editRealNameApi',
			data: data
		})
		return r
	},

	//上传疫苗接种信息
	updateSuikangCode(data) {
		const instance = new request();
		const r = instance.post({
			url: 'UserApp/AppSource/updateSuikangCode',
			data: data
		})
		return r
	},

	//查询人员是否在当前施工单位
	checkUserSC(data) {
		const instance = new request();
		const r = instance.post({
			url: 'UserApp/AppSource/checkUserShigongCompany',
			data: data
		})
		return r
	},

	// 人脸坐标接口
	faceDetect(data) {
		const instance = new request();
		const r = instance.post({
			url: 'Api/CheckBaiduface/detectImg',
			data: data
		})
		return r
	},
	
	// 更改头像
	changeHeadimgurl(data) {
		const instance = new request();
		const r = instance.post({
			url: 'UserApp/AppSource/changeHeadimgurl',
			data: data
		})
		return r
	},
	
	//上传粤康码
	uploadSuikangCode(data) {
		const instance = new request();
		const r = instance.post({
			url: 'UserApp/AppSource/uploadSuikangCode',
			data: data
		})
		return r
	},
}
	