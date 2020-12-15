/// <reference path="../index.d.ts" />

declare namespace KubeJS.WorldEvents {
	interface WorldLoadEvent extends GenericEvent { }
	interface WorldUnloadEvent extends GenericEvent { }
	interface WorldTickEvent extends GenericEvent { }
	interface WorldExplosionPreEvent extends GenericEvent { }
	interface WorldExplosionPostEvent extends GenericEvent { }
}
