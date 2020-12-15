/// <reference path="./events/index.d.ts" />
/// <reference path="./integrations/index.d.ts" />

declare namespace KubeJS {
	interface Settings {
		logAddedRecipes: boolean;
		logRemovedRecipes: boolean;
		logSkippedRecipes: boolean;
	}

	interface Events {
		listen(name: "init", listener: (event: GeneralEvents.InitEvent) => void): void;
		listen(name: "postinit", listener: (event: GeneralEvents.PostInitEvent) => void): void;
		listen(name: "loaded", listener: (event: GeneralEvents.LoadedEvent) => void): void;
		listen(name: "command.registry", listener: (event: GeneralEvents.CommandRegistryEvent) => void): void;
		listen(name: "command.run", listener: (event: GeneralEvents.CommandRunEvent) => void): void;
		listen(name: "client.init", listener: (event: ClientEvents.ClientInitEvent) => void): void;
		listen(name: "client.debug_info.left", listener: (event: ClientEvents.ClientDebugInfoLeftEvent) => void): void;
		listen(name: "client.debug_info.right", listener: (event: ClientEvents.ClientDebugInfoRightEvent) => void): void;
		listen(name: "client.logged_in", listener: (event: ClientEvents.ClientLoggedInEvent) => void): void;
		listen(name: "client.logged_out", listener: (event: ClientEvents.ClientLoggedOutEvent) => void): void;
		listen(name: "client.tick", listener: (event: ClientEvents.ClientTickEvent) => void): void;
		listen(name: "client.item_tooltip", listener: (event: ClientEvents.ClientItemTooltipEvent) => void): void;
		listen(name: "server.load", listener: (event: ServerEvents.ServerLoadEvent) => void): void;
		listen(name: "server.unload", listener: (event: ServerEvents.ServerUnloadEvent) => void): void;
		listen(name: "server.tick", listener: (event: ServerEvents.ServerTickEvent) => void): void;
		listen(name: "server.datapack.first", listener: (event: ServerEvents.ServerDatapackFirstEvent) => void): void;
		listen(name: "server.datapack.last", listener: (event: ServerEvents.ServerDatapackLastEvent) => void): void;
		listen(name: "recipes", listener: (event: GeneralEvents.RecipesEvent) => void): void;
		listen(name: "world.load", listener: (event: WorldEvents.WorldLoadEvent) => void): void;
		listen(name: "world.unload", listener: (event: WorldEvents.WorldUnloadEvent) => void): void;
		listen(name: "world.tick", listener: (event: WorldEvents.WorldTickEvent) => void): void;
		listen(name: "world.explosion.pre", listener: (event: WorldEvents.WorldExplosionPreEvent) => void): void;
		listen(name: "world.explosion.post", listener: (event: WorldEvents.WorldExplosionPostEvent) => void): void;
		listen(name: "player.logged_in", listener: (event: PlayerEvents.PlayerLoggedInEvent) => void): void;
		listen(name: "player.logged_out", listener: (event: PlayerEvents.PlayerLoggedOutEvent) => void): void;
		listen(name: "player.tick", listener: (event: PlayerEvents.PlayerTickEvent) => void): void;
		listen(name: "player.data_from_server", listener: (event: PlayerEvents.PlayerDataFromServerEvent) => void): void;
		listen(name: "player.data_from_client", listener: (event: PlayerEvents.PlayerDataFromClientEvent) => void): void;
		listen(name: "player.chat", listener: (event: PlayerEvents.PlayerChatEvent) => void): void;
		listen(name: "player.advancement", listener: (event: PlayerEvents.PlayerAdvancementEvent) => void): void;
		listen(name: "player.inventory.opened", listener: (event: PlayerEvents.PlayerInventoryOpenedEvent) => void): void;
		listen(name: "player.inventory.closed", listener: (event: PlayerEvents.PlayerInventoryClosedEvent) => void): void;
		listen(name: "player.inventory.changed", listener: (event: PlayerEvents.PlayerInventoryChangedEvent) => void): void;
		listen(name: "player.chest.opened", listener: (event: PlayerEvents.PlayerChestOpenedEvent) => void): void;
		listen(name: "player.chest.closed", listener: (event: PlayerEvents.PlayerChestClosedEvent) => void): void;
		listen(name: "entity.death", listener: (event: EntityEvents.EntityDeathEvent) => void): void;
		listen(name: "entity.attack", listener: (event: EntityEvents.EntityAttackEvent) => void): void;
		listen(name: "entity.drops", listener: (event: EntityEvents.EntityDropsEvent) => void): void;
		listen(name: "entity.check_spawn", listener: (event: EntityEvents.EntityCheckSpawnEvent) => void): void;
		listen(name: "entity.spawned", listener: (event: EntityEvents.EntitySpawnedEvent) => void): void;
		listen(name: "block.registry", listener: (event: BlockEvents.BlockRegistryEvent) => void): void;
		listen(name: "block.missing_mappings", listener: (event: BlockEvents.BlockMissingMappingsEvent) => void): void;
		listen(name: "block.tags", listener: (event: BlockEvents.BlockTagsEvent) => void): void;
		listen(name: "block.right_click", listener: (event: BlockEvents.BlockRightClickEvent) => void): void;
		listen(name: "block.left_click", listener: (event: BlockEvents.BlockLeftClickEvent) => void): void;
		listen(name: "block.place", listener: (event: BlockEvents.BlockPlaceEvent) => void): void;
		listen(name: "block.break", listener: (event: BlockEvents.BlockBreakEvent) => void): void;
		listen(name: "block.drops", listener: (event: BlockEvents.BlockDropsEvent) => void): void;
		listen(name: "item.registry", listener: (event: ItemEvents.ItemRegistryEvent) => void): void;
		listen(name: "item.missing_mappings", listener: (event: ItemEvents.ItemMissingMappingsEvent) => void): void;
		listen(name: "item.tags", listener: (event: ItemEvents.ItemTagsEvent) => void): void;
		listen(name: "item.right_click", listener: (event: ItemEvents.ItemRightClickEvent) => void): void;
		listen(name: "item.right_click_empty", listener: (event: ItemEvents.ItemRightClickEmptyEvent) => void): void;
		listen(name: "item.left_click", listener: (event: ItemEvents.ItemLeftClickEvent) => void): void;
		listen(name: "item.entity_interact", listener: (event: ItemEvents.ItemEntityInteractEvent) => void): void;
		listen(name: "item.pickup", listener: (event: ItemEvents.ItemPickupEvent) => void): void;
		listen(name: "item.toss", listener: (event: ItemEvents.ItemTossEvent) => void): void;
		listen(name: "item.crafted", listener: (event: ItemEvents.ItemCraftedEvent) => void): void;
		listen(name: "item.smelted", listener: (event: ItemEvents.ItemSmeltedEvent) => void): void;
		listen(name: "fluid.tags", listener: (event: GeneralEvents.FluidTagsEvent) => void): void;
		listen(name: "entity_type.tags", listener: (event: GeneralEvents.EntityTypeTagsEvent) => void): void;
	}

	interface GenericEvent {
		/**
		 * cancel the event.
		 * @see [EventJS](https://mods.latvian.dev/books/kubejs/page/eventjs)
		 */
		cancel(): void;
	}


	interface ItemHelper {
		of(event: string, amount: number): Item;
	}

	interface Item { }
}

declare const settings: KubeJS.Settings;
declare const events: KubeJS.Events;
declare const item: KubeJS.ItemHelper;
