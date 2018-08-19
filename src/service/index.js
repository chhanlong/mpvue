export const createAjaxAction = (api, startAction, endAction) => async (data, cb, reject) =>{
	let resp = await api(data);
	let code = resp.status;
	if(code != 200){
		let msg = await resp.msg;
		alert(msg);
	}else{
		let data = await resp
		return data;
	}
}
