/// <reference path="../index.d.ts" />

declare namespace KubeJS.PlayerEvents {
	interface PlayerLoggedInEvent extends GenericEvent { }
	interface PlayerLoggedOutEvent extends GenericEvent { }
	interface PlayerTickEvent extends GenericEvent { }
	interface PlayerDataFromServerEvent extends GenericEvent { }
	interface PlayerDataFromClientEvent extends GenericEvent { }
	interface PlayerChatEvent extends GenericEvent { }
	interface PlayerAdvancementEvent extends GenericEvent { }
	interface PlayerInventoryOpenedEvent extends GenericEvent { }
	interface PlayerInventoryClosedEvent extends GenericEvent { }
	interface PlayerInventoryChangedEvent extends GenericEvent { }
	interface PlayerChestOpenedEvent extends GenericEvent { }
	interface PlayerChestClosedEvent extends GenericEvent { }
}
