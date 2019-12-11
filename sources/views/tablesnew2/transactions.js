import {JetView} from "webix-jet";
import {allpayments} from "models/allpayments";

export default class TransactionsNewView extends JetView {
	config(){
		return {
			view:"datatable", localId:"grid",
			select:true, tooltip:true,
			columns:[
				{
					id:"datetime", header:"Дата и время",
					fillspace:1.5, minWidth:100,
					// sort:"date", format:webix.Date.dateToStr("%j %F")
				},
				{
					id:"method", header:"Номер", fillspace:1, minWidth:90, sort:"text",
					tooltip:"The card with which the payment was made",
					// template:data => `<img class="method" src="data/images/${data.method}.svg" />`
				},
				// {
				// 	id:"", header:"", fillspace:3, template:"#method# #number#"
				// },
				{
					id:"name", header:{
						text:"Канал",
						tooltip:"Click to sort the list by shops"
					},
					fillspace:3, minWidth:200, sort:"text"
				},
				{
					id:"adress", header:{
						text:"Адрес",
						tooltip:"Click to sort the list by shops"
					},
					fillspace:3, minWidth:200, sort:"text"
				},
				{
					id:"sum", header:"УК", sort:"int",
					fillspace:1.5, minWidth:90,
					format:webix.i18n.priceFormat
				},
				{
					id:"sum", header:"Идентификатор", sort:"int",
					fillspace:1.5, minWidth:90,
					format:webix.i18n.priceFormat
				},
			]
		};
	}
	init(grid){
		grid.sync(allpayments);
	}
}
