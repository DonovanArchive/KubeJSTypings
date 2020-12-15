/// <reference path="../index.d.ts" />

declare namespace KubeJS.BlockEvents {
	interface BlockRegistryEvent extends GenericEvent { }
	interface BlockMissingMappingsEvent extends GenericEvent { }
	interface BlockTagsEvent extends GenericEvent { }
	interface BlockRightClickEvent extends GenericEvent { }
	interface BlockLeftClickEvent extends GenericEvent { }
	interface BlockPlaceEvent extends GenericEvent { }
	interface BlockBreakEvent extends GenericEvent { }
	interface BlockDropsEvent extends GenericEvent { }
}
