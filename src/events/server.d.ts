/// <reference path="../index.d.ts" />

declare namespace KubeJS.ServerEvents {
	interface ServerLoadEvent extends GenericEvent { }
	interface ServerUnloadEvent extends GenericEvent { }
	interface ServerTickEvent extends GenericEvent { }
	interface ServerDatapackFirstEvent extends GenericEvent { }
	interface ServerDatapackLastEvent extends GenericEvent { }
}
