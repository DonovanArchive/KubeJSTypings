/// <reference path="./events/block.d.ts" />
/// <reference path="./events/client.d.ts" />
/// <reference path="./events/entity.d.ts" />
/// <reference path="./events/general.d.ts" />
/// <reference path="./events/item.d.ts" />
/// <reference path="./events/player.d.ts" />
/// <reference path="./events/server.d.ts" />
/// <reference path="./events/world.d.ts" />

declare namespace KubeJS {
	interface Settings {
		logAddedRecipes: boolean;
		logRemovedRecipes: boolean;
		logSkippedRecipes: boolean;
	}

	interface Events {
		listen(name: "init", listener: (type: GeneralEvents.InitEvent) => void): void;
		listen(name: "postinit", listener: (type: GeneralEvents.PostInitEvent) => void): void;
		listen(name: "loaded", listener: (type: GeneralEvents.LoadedEvent) => void): void;
		listen(name: "command.registry", listener: (type: GeneralEvents.CommandRegistryEvent) => void): void;
		listen(name: "command.run", listener: (type: GeneralEvents.CommandRunEvent) => void): void;
		listen(name: "client.init", listener: (type: ClientEvents.ClientInitEvent) => void): void;
		listen(name: "client.debug_info.left", listener: (type: ClientEvents.ClientDebugInfoLeftEvent) => void): void;
		listen(name: "client.debug_info.right", listener: (type: ClientEvents.ClientDebugInfoRightEvent) => void): void;
		listen(name: "client.logged_in", listener: (type: ClientEvents.ClientLoggedInEvent) => void): void;
		listen(name: "client.logged_out", listener: (type: ClientEvents.ClientLoggedOutEvent) => void): void;
		listen(name: "client.tick", listener: (type: ClientEvents.ClientTickEvent) => void): void;
		listen(name: "client.item_tooltip", listener: (type: ClientEvents.ClientItemTooltipEvent) => void): void;
		listen(name: "server.load", listener: (type: ServerEvents.ServerLoadEvent) => void): void;
		listen(name: "server.unload", listener: (type: ServerEvents.ServerUnloadEvent) => void): void;
		listen(name: "server.tick", listener: (type: ServerEvents.ServerTickEvent) => void): void;
		listen(name: "server.datapack.first", listener: (type: ServerEvents.ServerDatapackFirstEvent) => void): void;
		listen(name: "server.datapack.last", listener: (type: ServerEvents.ServerDatapackLastEvent) => void): void;
		listen(name: "recipes", listener: (type: GeneralEvents.RecipesEvent) => void): void;
		listen(name: "world.load", listener: (type: WorldEvents.WorldLoadEvent) => void): void;
		listen(name: "world.unload", listener: (type: WorldEvents.WorldUnloadEvent) => void): void;
		listen(name: "world.tick", listener: (type: WorldEvents.WorldTickEvent) => void): void;
		listen(name: "world.explosion.pre", listener: (type: WorldEvents.WorldExplosionPreEvent) => void): void;
		listen(name: "world.explosion.post", listener: (type: WorldEvents.WorldExplosionPostEvent) => void): void;
		listen(name: "player.logged_in", listener: (type: PlayerEvents.PlayerLoggedInEvent) => void): void;
		listen(name: "player.logged_out", listener: (type: PlayerEvents.PlayerLoggedOutEvent) => void): void;
		listen(name: "player.tick", listener: (type: PlayerEvents.PlayerTickEvent) => void): void;
		listen(name: "player.data_from_server", listener: (type: PlayerEvents.PlayerDataFromServerEvent) => void): void;
		listen(name: "player.data_from_client", listener: (type: PlayerEvents.PlayerDataFromClientEvent) => void): void;
		listen(name: "player.chat", listener: (type: PlayerEvents.PlayerChatEvent) => void): void;
		listen(name: "player.advancement", listener: (type: PlayerEvents.PlayerAdvancementEvent) => void): void;
		listen(name: "player.inventory.opened", listener: (type: PlayerEvents.PlayerInventoryOpenedEvent) => void): void;
		listen(name: "player.inventory.closed", listener: (type: PlayerEvents.PlayerInventoryClosedEvent) => void): void;
		listen(name: "player.inventory.changed", listener: (type: PlayerEvents.PlayerInventoryChangedEvent) => void): void;
		listen(name: "player.chest.opened", listener: (type: PlayerEvents.PlayerChestOpenedEvent) => void): void;
		listen(name: "player.chest.closed", listener: (type: PlayerEvents.PlayerChestClosedEvent) => void): void;
		listen(name: "entity.death", listener: (type: EntityEvents.EntityDeathEvent) => void): void;
		listen(name: "entity.attack", listener: (type: EntityEvents.EntityAttackEvent) => void): void;
		listen(name: "entity.drops", listener: (type: EntityEvents.EntityDropsEvent) => void): void;
		listen(name: "entity.check_spawn", listener: (type: EntityEvents.EntityCheckSpawnEvent) => void): void;
		listen(name: "entity.spawned", listener: (type: EntityEvents.EntitySpawnedEvent) => void): void;
		listen(name: "block.registry", listener: (type: BlockEvents.BlockRegistryEvent) => void): void;
		listen(name: "block.missing_mappings", listener: (type: BlockEvents.BlockMissingMappingsEvent) => void): void;
		listen(name: "block.tags", listener: (type: BlockEvents.BlockTagsEvent) => void): void;
		listen(name: "block.right_click", listener: (type: BlockEvents.BlockRightClickEvent) => void): void;
		listen(name: "block.left_click", listener: (type: BlockEvents.BlockLeftClickEvent) => void): void;
		listen(name: "block.place", listener: (type: BlockEvents.BlockPlaceEvent) => void): void;
		listen(name: "block.break", listener: (type: BlockEvents.BlockBreakEvent) => void): void;
		listen(name: "block.drops", listener: (type: BlockEvents.BlockDropsEvent) => void): void;
		listen(name: "item.registry", listener: (type: ItemEvents.ItemRegistryEvent) => void): void;
		listen(name: "item.missing_mappings", listener: (type: ItemEvents.ItemMissingMappingsEvent) => void): void;
		listen(name: "item.tags", listener: (type: ItemEvents.ItemTagsEvent) => void): void;
		listen(name: "item.right_click", listener: (type: ItemEvents.ItemRightClickEvent) => void): void;
		listen(name: "item.right_click_empty", listener: (type: ItemEvents.ItemRightClickEmptyEvent) => void): void;
		listen(name: "item.left_click", listener: (type: ItemEvents.ItemLeftClickEvent) => void): void;
		listen(name: "item.entity_interact", listener: (type: ItemEvents.ItemEntityInteractEvent) => void): void;
		listen(name: "item.pickup", listener: (type: ItemEvents.ItemPickupEvent) => void): void;
		listen(name: "item.toss", listener: (type: ItemEvents.ItemTossEvent) => void): void;
		listen(name: "item.crafted", listener: (type: ItemEvents.ItemCraftedEvent) => void): void;
		listen(name: "item.smelted", listener: (type: ItemEvents.ItemSmeltedEvent) => void): void;
		listen(name: "fluid.tags", listener: (type: GeneralEvents.FluidTagsEvent) => void): void;
		listen(name: "entity_type.tags", listener: (type: GeneralEvents.entityTypeTagsEvent) => void): void;
	}

	interface GenericEvent {
		/**
		 * cancel the event.
		 * @see [EventJS](https://mods.latvian.dev/books/kubejs/page/eventjs)
		 */
		cancel(): void;
	}


	interface ItemHelper {
		of(type: string, amount: number): Item;
	}

	interface Item { }
}

declare const settings: KubeJS.Settings;
declare const events: KubeJS.Events;
declare const item: KubeJS.ItemHelper;
