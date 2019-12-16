import {JetView} from "webix-jet";

export default class TablesNew2View extends JetView{    //add new class
	config(){
		return {
			type:"space",
			rows:[
				{
					type:"wide", cols:[
						{ view:"button", icon:"mdi mdi-bell", height:50, id:"updatebtn", value:"Обновить" },
						{ view:"button", icon:"mdi mdi-bell", height:50, id:"exportbtn", value:"Экспортировать для импорта" },
						{ view:"button", icon:"mdi mdi-bell", height:50, id:"exportexcelbtn", value:"Экспортировать в Excel" },
					]
				},
				{
					type:"wide", cols:[
						{ $subview:"tablesnew2.transactions" },
						// { $subview:"tables.films" }
					]
				},
				{
					type:"wide", cols:[
						{ view:"text", name:"header", value:"sefesfs" },
						
					]
				},
				{
					type:"wide", cols:[
						{ $subview:"tablesnew2.features" },
						// { $subview:"tables.widgets" }
					]
				}
			]
		};
	}
}
