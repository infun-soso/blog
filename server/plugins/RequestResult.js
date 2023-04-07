/**
 * 请求结果
 * @param {string} status 状态
 * @param {Data} data 数据/信息
 */
module.exports = function RequestResult({status, data}) {
	if (!status) {
		if (arguments[0] === 1) {
			return {
				status: 1,
				message: 'success',
				body: arguments[1]
			}
		} else {
			return {
				status: 2,
				message: 'error',
				body: arguments[1]
			}
		}
	}
	if (status == 'success') {
		return {
			status: 1,
			message: 'success',
			body: data
		}
	} else {
		return {
			status: 2,
			message: 'error',
			body: data
		}
	}
}