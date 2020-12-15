/// <reference path="../index.d.ts" />

declare namespace KubeJS.ItemEvents {
	interface ItemRegistryEvent extends GenericEvent { }
	interface ItemMissingMappingsEvent extends GenericEvent { }
	interface ItemTagsEvent extends GenericEvent { }
	interface ItemRightClickEvent extends GenericEvent { }
	interface ItemRightClickEmptyEvent extends GenericEvent { }
	interface ItemLeftClickEvent extends GenericEvent { }
	interface ItemEntityInteractEvent extends GenericEvent { }
	interface ItemPickupEvent extends GenericEvent { }
	interface ItemTossEvent extends GenericEvent { }
	interface ItemCraftedEvent extends GenericEvent { }
	interface ItemSmeltedEvent extends GenericEvent { }
}
