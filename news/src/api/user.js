import request from "../network/request.js"

export const login = (data) => {
	return request({
		url:"/prod-api/api/login",
		method:"post",
		data
	})
}