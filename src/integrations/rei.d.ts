/// <reference path="../index.d.ts" />

declare namespace KubeJS {
	interface Events {
		listen(name: "rei.hide.items", listener: (event: REI.REIHideItemsEvent) => void): void;
		listen(name: "rei.add.items", listener: (event: REI.REIAddItemsEvent) => void): void;
		listen(name: "rei.information", listener: (event: REI.REIInformationEvent) => void): void;
	}
}

declare namespace KubeJS.REI {
	interface REIHideItemsEvent extends GenericEvent { }
	interface REIAddItemsEvent extends GenericEvent { }
	interface REIInformationEvent extends GenericEvent { }
}
