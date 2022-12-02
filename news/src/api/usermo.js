import requestmo from "../network/requestmo.js"

export const loginmo =(data) => {
	return requestmo({
		url:"/v1_0/authorizations",
		method:"post",
		data
	})
}

export const sendMsg =(mobile) => {
	return requestmo({
		url:"/v1_0/sms/codes/"+mobile,
		//url:`/v1_0/sms/codes/${mobile}`,
		method:"GET",
	})
}