/// <reference path="../index.d.ts" />

declare namespace KubeJS.ClientEvents {
	interface ClientInitEvent extends GenericEvent { }
	interface ClientDebugInfoLeftEvent extends GenericEvent { }
	interface ClientDebugInfoRightEvent extends GenericEvent { }
	interface ClientLoggedInEvent extends GenericEvent { }
	interface ClientLoggedOutEvent extends GenericEvent { }
	interface ClientTickEvent extends GenericEvent { }
	interface ClientItemTooltipEvent extends GenericEvent { }
}
