/// <reference path="../index.d.ts" />

declare namespace KubeJS.EntityEvents {
	interface EntityDeathEvent extends GenericEvent { }
	interface EntityAttackEvent extends GenericEvent { }
	interface EntityDropsEvent extends GenericEvent { }
	interface EntityCheckSpawnEvent extends GenericEvent { }
	interface EntitySpawnedEvent extends GenericEvent { }
}
