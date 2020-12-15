/// <reference path="../index.d.ts" />

declare namespace KubeJS {
	interface Events {
		listen(name: "jei.subtypes", listener: (event: JEI.JEISubtypesEvent) => void): void;
		listen(name: "jei.hide.items", listener: (event: JEI.JEIHideItemsEvent) => void): void;
		listen(name: "jei.add.items", listener: (event: JEI.JEIAddItemsEvent) => void): void;
		listen(name: "jei.information", listener: (event: JEI.JEIInformationEvent) => void): void;
	}
}

declare namespace KubeJS.JEI {
	interface JEISubtypesEvent extends GenericEvent { }
	interface JEIHideItemsEvent extends GenericEvent { }
	interface JEIAddItemsEvent extends GenericEvent { }
	interface JEIInformationEvent extends GenericEvent { }
}
