/*********************************************************/
/**
 * 
 * @param {} text   文本
 * @param {} value  值
 * @param {} length 长度（number）
 * @param {} isInSpace 是否允许空格 false不允许
 * @param {} isNum 只允许数字-true
 * @return {Boolean}
 */

function validateLengthAndSpace(text,value,length,isInSpace,isNum){
	//判读长度
	if(arguments.length==3){
		if((length2(value)>length)){
			try {
				Ext.MessageBox.alert(警告,数据未通过合法性校验+"["+text+"]"+长度不能超过+length+个字节);
			}catch(e){
				Ext.MessageBox.alert(警告,数据未通过合法性校验+"["+text+"]"+长度不能超过+length+个字节);
			}
			return false;
		}
		return true;
	}
	//判读是否为空
	if(arguments.length==2){
		if(value.replace(/\s/g,"")==""){
			try {
				Ext.MessageBox.alert(警告,数据未通过合法性校验+"["+text+"]"+不允许为空);
			}catch(e){
				Ext.MessageBox.alert(警告,数据未通过合法性校验+"["+text+"]"+不允许为空);
			}
			return false;
		}
		return true;
	}
	if(arguments.length==5){
		if(!isInSpace){
			if(isIncSpace(value)){
				try {
					Ext.MessageBox.alert(警告,数据未通过合法性校验+"["+text+"]"+不允许包含空格);
				}catch(e){
					Ext.MessageBox.alert(警告,数据未通过合法性校验+"["+text+"]"+不允许包含空格);
				}
				return false;
			}
		}
		if((length2(value)>length)){
			try {
				Ext.MessageBox.alert(警告,数据未通过合法性校验+"["+text+"]"+长度不能超过+length+个字节);
			}catch(e){
				Ext.MessageBox.alert(警告,数据未通过合法性校验+"["+text+"]"+长度不能超过+length+个字节);
			}
			return false;
		}
		//if(isIncSym(value)){
		//	Ext.MessageBox.alert(警告,"数据未通过合法性校验，["+text+"]不允许包含非法字符!");
		///	return false;
		//}
		if(isNum){
			var pattern = /^(\d*,\d*$)|(^\d*$)/;
			if(!pattern.test(value)){
				try {
					Ext.MessageBox.alert(警告,数据未通过合法性校验+"["+text+"]"+必须是数字类型);
				}catch(e){
					Ext.MessageBox.alert(警告,数据未通过合法性校验+"["+text+"]"+必须是数字类型);
				}
				return false;
			}
		}
		return true ;
	}	
	
}
function validateUserNameInSpace(value){
		if(value.replace(/\s/g,"")=="" || isIncSpace(value)){
			try {
					Ext.MessageBox.alert(警告,数据未通过合法性校验姓名不允许包含空格如果需要请用进行代替);
			}catch(e){
					Ext.MessageBox.alert(警告,数据未通过合法性校验姓名不允许包含空格如果需要请用进行代替);
			}
			return false;
		}	
		return true;
}


/*********************************************************/
function validateEmail(text,value){	
	var re = new RegExp(/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/g);
	//var re=/^w+([-+.]w+)*@w+([-.]w+)*.w+([-.]w+)*$/g;
	if(!re.test(value)){
		try {
			Ext.MessageBox.alert(警告,数据未通过合法性校验+"["+text+"]"+格式错误);
		}catch(e){
			Ext.MessageBox.alert(警告,数据未通过合法性校验+"["+text+"]"+格式错误);
		}
		return false;
	}
	return true;
}

function validateIP(text,value){	
	var re = new RegExp(/^([1-9]|[1-9]\d|1\d{2}|2[0-1]\d|22[0-3])(\.(\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])){3}$/g);
	if(!re.test(value)){
		try {
			Ext.MessageBox.alert(警告,数据未通过合法性校验+"["+text+"]"+格式错误);
		}catch(e){
			Ext.MessageBox.alert(警告,数据未通过合法性校验+"["+text+"]"+格式错误);
		}
		 return false;
	}
	return true;
}
function validateIps(text,value){
	var ips = value.split(",");
	var pattern1=/^(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9])\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.$/;
	var pattern2 = /^([1-9]|[1-9]\d|1\d{2}|2[0-1]\d|22[0-3])(\.(\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])){3}$/;
	var pattern3=/^(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9])\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.$/;
	var pattern4=/^(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9])\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)-\1\.\2\.\3\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)$/;
	var contorl;
	for(var i =0;i<ips.length;i++){
		contorl=false;
		if( pattern1.test(ips[i]) || pattern2.test(ips[i])|| pattern3.test(ips[i])){
			contorl=true;
		}else if(pattern4.test(ips[i])){
			var ip4s= ips[i].split("-");
			var ip41= ip4s[0].split(".");
			var ip42= ip4s[1].split(".");
			if(parseInt(ip41[3])<parseInt(ip42[3])){
				contorl= true;
			}else{
				break;
			}
		}else {
			break;
		}
	}
	if(contorl==true){
		return true;
	}
	try {
		Ext.MessageBox.alert(警告,数据未通过合法性校验+"["+text+"]"+格式错误);
	}catch(e){
		Ext.MessageBox.alert(警告,数据未通过合法性校验+"["+text+"]"+格式错误);
	}
	
	return false;
	
}
//是否是手机号码
function validateMobilePhone(text,value){	
	 //if(! (/^(?:13\d|15[0689])-?\d{5}(\d{3}|\*{3})$/.test(value)) ){	
	if(value.charAt(0)=='0' && value.length>12){		
		try {
			Ext.MessageBox.alert(警告,数据未通过合法性校验+"["+text+"]"+格式错误);
		}catch(e){
			Ext.MessageBox.alert(警告,数据未通过合法性校验+"["+text+"]"+格式错误);
		}
		return false;
	}else if(value.charAt(0)!='0' && value.length>11){		
		try {
			Ext.MessageBox.alert(警告,数据未通过合法性校验+"["+text+"]"+格式错误);
		}catch(e){
			Ext.MessageBox.alert(警告,数据未通过合法性校验+"["+text+"]"+格式错误);
		}
		return false;
	}	
	if(!(/(^0{0,1}13\d{9}$)|(^0{0,1}15\d{9}$)|(^0{0,1}18\d{9}$)/.test(value))){
		try {
			Ext.MessageBox.alert(警告,数据未通过合法性校验+"["+text+"]"+格式错误);
		}catch(e){
			Ext.MessageBox.alert(警告,数据未通过合法性校验+"["+text+"]"+格式错误);
		}
		return false;
	}
	return true;
}
//是否是电话号码
function validatePhone(text,value){     
	var RegExp = /(^[0-9]{3,4}\-[0-9]{7,8}$)|(^[0-9]{7,8}$)|(^\([0-9]{3,4}\)[0-9]{7,8}$)|(^[0-9]{3,4}\-[0-9]{7,8}\-[0-9]{1,9}$)|(^[0-9]{7,8}\-[0-9]{1,9}$)|(^\([0-9]{3,4}\)[0-9]{7,8}\-[0-9]{1,9}|(^\+[0-9]{2,4}\-[0-9]{2,4}\-[0-9]{6,8}$)|(^\+\d{2,4}\d{2,4}\d{6,8}$))/ig
	if(!value.match(RegExp)){
		if(value.indexOf('+')>-1){
			try {
				Ext.MessageBox.alert(数据未通过合法性校验+"["+text+"]"+格式错误+"<br>"+国际电话格式+"86-10-12345678");
			}catch(e){
				Ext.MessageBox.alert(数据未通过合法性校验+"["+text+"]"+格式错误+"<br>"+国际电话格式+"86-10-12345678");
			}
			return false;
		}
		try{  
			Ext.MessageBox.alert(警告,数据未通过合法性校验+"["+text+"]"+格式错误+"<br>"+国内电话格式+"010-12345678"+或+"0312-12345678"+或+"12345678");
		}catch(Exception){
			Ext.MessageBox.alert(警告,数据未通过合法性校验+"["+text+"]"+格式错误+"<br>"+国内电话格式+"010-12345678"+或+"0312-12345678"+或+"12345678");
		}
		return false;
	}
	
	return true;
}


function validateMobilePhone2(text,value){	
	if(value!=''){
		 //if(! (/^(?:13\d|15[0689])-?\d{5}(\d{3}|\*{3})$/.test(value)) ){
		if(! (/^\d{11}$/.test(value)) ){
			try {
				alert(数据未通过合法性校验+"["+text+"]"+格式错误);
			}catch(e){
				alert(数据未通过合法性校验+"["+text+"]"+格式错误);
			}
			return false;
		}
	}
	return true;
}
function validatePhone2(text,value){
	if(value!=''){
		if(!(/^(([+\?]\d{2,3}-)?([0\+]\d{2,3}-)?(0\d{2,3})-)?(\d{7,8})(-(\d{3,}))?$/.test(value)) ) {
			if(value.indexOf('+')>-1){
				try {
					alert(数据未通过合法性校验+"["+text+"]"+格式错误+"<br>"+国际电话格式+"86-10-12345678");
				}catch(e){
					alert(数据未通过合法性校验+"["+text+"]"+格式错误+"<br>"+国际电话格式+"86-10-12345678");
				}
				return false;
			}
			try {
				alert(数据未通过合法性校验+"["+text+"]"+格式错误+"<br>"+国内电话格式+"010-12345678"+或+"0312-12345678"+或+"12345678");
			}catch(e){
				alert(数据未通过合法性校验+"["+text+"]"+格式错误+"<br>"+国内电话格式+"010-12345678"+或+"0312-12345678"+或+"12345678");
			}
			return false;
		}
	}
	return true;
} 