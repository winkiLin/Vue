'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
	const db = uniCloud.database();
	// 获取 `files` 集合的引用
	const collection = db.collection('files').get();
	//返回数据给客户端
	return collection
};
