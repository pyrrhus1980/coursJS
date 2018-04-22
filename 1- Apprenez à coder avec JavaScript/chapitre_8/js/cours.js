//	Définition du prototype
var unProto = {
	attr1 : 0,
	attr2 : 0,

	meth1 : function(){
		return "meth1";
	},

	meth2 : function(){
		return "meth2";	
	} 
}



var unObj = Object.create(unProto);

console.log(unObj.attr2);
console.log(unObj.meth1());