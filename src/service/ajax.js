import {API} from '@/const'
const Fly = require('flyio/dist/npm/wx.js') ;
const fly = new Fly();
const isProduction = process.env.ENV === 'prod';
fly.config.baseURL = isProduction ? API.production : API.test;

let getparam = params => {
	let buffer = [];
	let count = 0;
  	for(let name in params){
  		count++
	  	if ( ! params.hasOwnProperty( name ) ) {
	        continue;
	    }
	  	let value = params[name];
	  	buffer.push(
	        encodeURIComponent( name ) + "=" + encodeURIComponent( ( value == null ) ? "" : value )
	    );
	    let source = buffer.join( "&" ).replace( /%20/g, "+" );
	    if(count === Object.keys(params).length){
	    	return source;
	    }
  	}
}


let flyJSON = (url, params, target,methodType)=> {
  	if(methodType === 'get'){
  		url = params ? url+'?'+getparam(params):url;
  		return fly.get(url);
  	}else{
  		data = params;
  		return fly.post(url, data);
  	}
}


export const flyJSONByPost = (url, target) => query =>flyJSON(url, query, target,'post');
export const flyJSONByGet = (url, target) => query =>flyJSON(url, query, target,'get')
