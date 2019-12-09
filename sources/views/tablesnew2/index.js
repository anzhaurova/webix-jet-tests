import {JetView} from "webix-jet";

export default class TablesNew2View extends JetView{    //add new class
	config(){
		return {
			type:"space",
			rows:[
				{
					type:"wide", cols:[
						{ $subview:"tablesnew2.transactions" },
						// { $subview:"tables.films" }
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