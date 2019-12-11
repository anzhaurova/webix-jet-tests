export const allpayments = new webix.DataCollection({
	data:[
		{"id":1,"status":"success","datetime":"2019-09-24 04:36","method":"+79271240112","number":"do***@yahoo.com","type":0,"sum":"105.15","left":"847.71","name":"Телефон","adress":"Варшавское шоссе, д.150, стр.2, Москва",},
		{"id":2,"status":"success","datetime":"2019-09-23 19:09","method":"89631144561","number":"5128...8960","type":1,"sum":"327.50","left":"2371.18","name":"SMS","city":"Buenos Aires","country":"AR"},
		{"id":3,"status":"success","datetime":"2019-09-22 05:42","method":"+79271401712","number":"4781...9299","type":1,"sum":"172.66","left":"2456.07","name":"Телефон","city":"Canberra","country":"AU"},
		{"id":4,"status":"failed","datetime":"2019-09-21 05:29","method":"89654207718","number":"4802...9797","type":1,"sum":"253.24","left":"3202.83","name":"Телефон","city":"Vienna","country":"AT"},
		{"id":5,"status":"success","datetime":"2019-09-20 21:20","method":"+79271340113","number":"5170...3971","type":0,"sum":"328.90","left":"471.64","name":"SMS","city":"Minsk","country":"BY"},
		{"id":6,"status":"success","datetime":"2019-09-19 22:29","method":"89603441790","number":"5177...4636","type":1,"sum":"334.20","left":"1839.00","name":"SMS","city":"Brussels","country":"BE"},
		{"id":7,"status":"success","datetime":"2019-09-18 03:14","method":"+79261240856","number":"5131...0432","type":1,"sum":"200.37","left":"749.46","name":"Телефон","city":"Brasilia","country":"BR"},
		{"id":8,"status":"success","datetime":"2019-09-17 12:29","method":"+79296740390","number":"4141...9887","type":0,"sum":"23.09","left":"2468.39","name":"Телефон","city":"Ottawa","country":"CA"},
		{"id":9,"status":"success","datetime":"2019-09-16 08:45","method":"+79259240318","number":"jet***@aol.com","type":1,"sum":"31.59","left":"3130.40","name":"Телефон","city":"Beijing","country":"CN"},
		{"id":10,"status":"success","datetime":"2019-09-15 10:01","method":"+79287124006","number":"4930...2453","type":0,"sum":"134.63","left":"2671.30","name":"SMS","city":"Prague","country":"CZ"},
		{"id":11,"status":"success","datetime":"2019-09-14 21:24","method":"89264689046","number":"5119...3751","type":1,"sum":"108.69","left":"2369.38","name":"Телефон","city":"Copenhagen","country":"DK"},
		{"id":12,"status":"success","datetime":"2019-09-13 07:12","method":"+79251240668","number":"5150...1835","type":1,"sum":"16.49","left":"1137.82","name":"SMS","city":"Cairo","country":"EG"},
		{"id":13,"status":"success","datetime":"2019-09-12 17:39","method":"+79272240144","number":"5184...5903","type":1,"sum":"143.66","left":"2640.23","name":"SMS","city":"Helsinki","country":"FI"},
		{"id":14,"status":"success","datetime":"2019-09-11 11:28","method":"+792733401112","number":"4773...5816","type":1,"sum":"11.59","left":"704.37","name":"Телефон","city":"Paris","country":"FR"},
		{"id":15,"status":"success","datetime":"2019-09-10 15:31","method":"+792760401112","number":"neo***@optonline.net","type":0,"sum":"69.56","left":"2120.64","name":"Телефон","city":"Tbilisi","country":"GE"},
		{"id":16,"status":"failed","datetime":"2019-09-9 14:00","method":"+792712401112","number":"dal***@att.net","type":1,"sum":"246.03","left":"772.80","name":"Телефон","city":"Berlin","country":"DE"},
		{"id":17,"status":"waiting","datetime":"2019-09-8 12:41","method":"+792712401112","number":"4435...0652","type":1,"sum":"62.13","left":"682.68","name":"Телефон","city":"New Delhi","country":"IN"},
		{"id":18,"status":"success","datetime":"2019-09-7 06:37","method":"+79651240999","number":"5130...1376","type":1,"sum":"43.69","left":"633.88","name":"SMS","city":"Dublin","country":"IE"},
		{"id":19,"status":"success","datetime":"2019-09-6 08:44","method":"+79278000853","number":"5114...6585","type":1,"sum":"10.19","left":"1878.33","name":"SMS","city":"Rome","country":"IT"}
	],
	// scheme:{
	// 	$init:function(obj){
	// 		obj.date = webix.i18n.parseFormatDate(obj.date);
	// 		const curr_month = new Date().getMonth();
	// 		const data_month = obj.date.getMonth();
	// 		if (curr_month - data_month != 0){
	// 			if (obj.id < 25)
	// 				obj.date.setMonth(curr_month);
	// 			else if (obj.id >= 25)
	// 				obj.date.setMonth(curr_month-1);
	// 		}
	// 		const curr_year = new Date().getFullYear();
	// 		const data_year = obj.date.getFullYear();
	// 		if (curr_year - data_year > 0){
	// 			obj.date.setYear(curr_year);
	// 		}
	// 	}
	// }
});
