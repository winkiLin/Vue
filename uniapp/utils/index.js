import request from './request';

import {
	apiBaseUrl,
	apiBaseUrlTest,
	apiBaseUrlLocal,
	apiBaseUrlLolo,
} from './config.js'

// 设置全局配置
request.prototype.setConfig({
	url: apiBaseUrl,
	timeout: 30000
});

// 判断不同api，传不同参数
function diffApi(param) {
	let reqUrl = param;
	let isUserApp = reqUrl.indexOf('UserApp') > 0 ? true : false
	return isUserApp
}

// 全局拦截器
request.prototype.addGlobalInterce({
	request(config) {
		request.prototype.isUserApp = diffApi(config.url)
		// config['data'] = common.packParams(config['data']);
		return config;
	},
	response(res) {
		if (JSON.stringify(res) === '{"errMsg":"request:fail"}' ||
			JSON.stringify(res) === '{"errMsg":"request:fail abort"}' ||
			JSON.stringify(res) === '{"errMsg":"request:fail abort statusCode:-1"}') {
			common.errorToShow('网络错误，请重试');
			return false;
		} else if (JSON.stringify(res) === '{"errMsg":"request:fail timeout"}' ||
			JSON.stringify(res) === '{"errMsg":"request:fail abort statusCode:-1 timeout"}') {
			common.errorToShow('请求超时')
			return false;
		} else {
			let firstCodeNum = String(res.statusCode).substr(0, 1);

			if (res.data.Code == 200000) {
				return res;
			} else if (res.data.Code == -200) {

			} else {
				if (firstCodeNum === '4' || firstCodeNum === '5') {
					console.log('is 4xx or 5xx')
					common.errorToShow(res.data.returnMsg)
					return Promise.reject('oops!')
				} else {
					return Promise.reject(res);
				}
			}
		}
	}
});

export default request
