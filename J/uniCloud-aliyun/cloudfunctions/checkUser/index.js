'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
	const db = uniCloud.database();
	// 获取 绑定电话号码的用户
	const res = db.collection('users').where({
		phone:event.phone
	}).get()
	return res
	
};
