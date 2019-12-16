import {JetView} from "webix-jet";
import {allpayments} from "models/allpayments";
// function showIcon(obj, common, row){
// 	const sign = row ? "plus" : "minus";
// 	return `<span class="feature webix_icon wxi-${sign}-circle">`;
// }

export default class ReatureView extends JetView {
	config(){
		return {
			view:"datatable", 
			localId:"grid",
			// select:true, css:"webix_header_border",
			columns:[
				{
					id:"datetime", header:"Дата и время",
					fillspace:1.5, minWidth:100,
				},
				{
					id:"namecounter", header:"Название счетчика", fillspace:2, minWidth:90, sort:"text",		
				},
				{
					id:"numbercounter", header:{
						text:"Номер счетчика",
					},
					fillspace:4, minWidth:200, sort:"text"
				},
				{
					id:"receipt code", header:"Код квитанции", sort:"int",
					fillspace:1.5, minWidth:200,
				},
			]

		};

	}
	init(grid){
		grid.sync(allpayments);
	}
}

