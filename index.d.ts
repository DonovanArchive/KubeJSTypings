interface Settings {
	logAddedRecipes: boolean;
	logRemovedRecipes: boolean;
	logSkippedRecipes: boolean;
}

interface Events {
	listen(name: "init", listener: (type: InitEvent) => void): void;
	listen(name: "postinit", listener: (type: PostInitEvent) => void): void;
	listen(name: "loaded", listener: (type: LoadedEvent) => void): void;
	listen(name: "command.registry", listener: (type: CommandRegistryEvent) => void): void;
	listen(name: "command.run", listener: (type: CommandRunEvent) => void): void;
	listen(name: "client.init", listener: (type: ClientInitEvent) => void): void;
	listen(name: "client.debug_info.left", listener: (type: ClientDebugInfoLeftEvent) => void): void;
	listen(name: "client.debug_info.right", listener: (type: ClientDebugInfoRightEvent) => void): void;
	listen(name: "client.logged_in", listener: (type: ClientLoggedInEvent) => void): void;
	listen(name: "client.logged_out", listener: (type: ClientLoggedOutEvent) => void): void;
	listen(name: "client.tick", listener: (type: ClientTickEvent) => void): void;
	listen(name: "client.item_tooltip", listener: (type: ClientItemTooltipEvent) => void): void;
	listen(name: "server.load", listener: (type: ServerLoadEvent) => void): void;
	listen(name: "server.unload", listener: (type: ServerUnloadEvent) => void): void;
	listen(name: "server.tick", listener: (type: ServerTickEvent) => void): void;
	listen(name: "server.datapack.first", listener: (type: ServerDatapackFirstEvent) => void): void;
	listen(name: "server.datapack.last", listener: (type: ServerDatapackLastEvent) => void): void;
	listen(name: "recipes", listener: (type: RecipesEvent) => void): void;
	listen(name: "world.load", listener: (type: WorldLoadEvent) => void): void;
	listen(name: "world.unload", listener: (type: WorldUnloadEvent) => void): void;
	listen(name: "world.tick", listener: (type: WorldTickEvent) => void): void;
	listen(name: "world.explosion.pre", listener: (type: WorldExplosionPreEvent) => void): void;
	listen(name: "world.explosion.post", listener: (type: WorldExplosionPostEvent) => void): void;
	listen(name: "player.logged_in", listener: (type: PlayerLoggedInEvent) => void): void;
	listen(name: "player.logged_out", listener: (type: PlayerLoggedOutEvent) => void): void;
	listen(name: "player.tick", listener: (type: PlayerTickEvent) => void): void;
	listen(name: "player.data_from_server", listener: (type: PlayerDataFromServerEvent) => void): void;
	listen(name: "player.data_from_client", listener: (type: PlayerDataFromClientEvent) => void): void;
	listen(name: "player.chat", listener: (type: PlayerChatEvent) => void): void;
	listen(name: "player.advancement", listener: (type: PlayerAdvancementEvent) => void): void;
	listen(name: "player.inventory.opened", listener: (type: PlayerInventoryOpenedEvent) => void): void;
	listen(name: "player.inventory.closed", listener: (type: PlayerInventoryClosedEvent) => void): void;
	listen(name: "player.inventory.changed", listener: (type: PlayerInventoryChangedEvent) => void): void;
	listen(name: "player.chest.opened", listener: (type: PlayerChestOpenedEvent) => void): void;
	listen(name: "player.chest.closed", listener: (type: PlayerChestClosedEvent) => void): void;
	listen(name: "entity.death", listener: (type: EntityDeathEvent) => void): void;
	listen(name: "entity.attack", listener: (type: EntityAttackEvent) => void): void;
	listen(name: "entity.drops", listener: (type: EntityDropsEvent) => void): void;
	listen(name: "entity.check_spawn", listener: (type: EntityCheckSpawnEvent) => void): void;
	listen(name: "entity.spawned", listener: (type: EntitySpawnedEvent) => void): void;
	listen(name: "block.registry", listener: (type: BlockRegistryEvent) => void): void;
	listen(name: "block.missing_mappings", listener: (type: BlockMissingMappingsEvent) => void): void;
	listen(name: "block.tags", listener: (type: BlockTagsEvent) => void): void;
	listen(name: "block.right_click", listener: (type: BlockRightClickEvent) => void): void;
	listen(name: "block.left_click", listener: (type: BlockLeftClickEvent) => void): void;
	listen(name: "block.place", listener: (type: BlockPlaceEvent) => void): void;
	listen(name: "block.break", listener: (type: BlockBreakEvent) => void): void;
	listen(name: "block.drops", listener: (type: BlockDropsEvent) => void): void;
	listen(name: "item.registry", listener: (type: itemRegistryEvent) => void): void;
	listen(name: "item.missing_mappings", listener: (type: ItemMissingMappingsEvent) => void): void;
	listen(name: "item.tags", listener: (type: ItemTagsEvent) => void): void;
	listen(name: "item.right_click", listener: (type: ItemRightClickEvent) => void): void;
	listen(name: "item.right_click_empty", listener: (type: ItemRightClickEmptyEvent) => void): void;
	listen(name: "item.left_click", listener: (type: ItemLeftClickEvent) => void): void;
	listen(name: "item.entity_interact", listener: (type: ItemEntityInteractEvent) => void): void;
	listen(name: "item.pickup", listener: (type: ItemPickupEvent) => void): void;
	listen(name: "item.toss", listener: (type: ItemTossEvent) => void): void;
	listen(name: "item.crafted", listener: (type: ItemCraftedEvent) => void): void;
	listen(name: "item.smelted", listener: (type: ItemSmeltedEvent) => void): void;
	listen(name: "fluid.tags", listener: (type: FluidTagsEvent) => void): void;
	listen(name: "entity_type.tags", listener: (type: entityTypeTagsEvent) => void): void;
}

interface GenericEvent {
	/**
	 * cancel the event.
	 * @see [EventJS](https://mods.latvian.dev/books/kubejs/page/eventjs)
	 */
	cancel(): void;
}

interface InitEvent extends GenericEvent { }
interface PostInitEvent extends GenericEvent { }
interface LoadedEvent extends GenericEvent { }
interface CommandRegistryEvent extends GenericEvent { }
interface CommandRunEvent extends GenericEvent { }
interface ClientInitEvent extends GenericEvent { }
interface ClientDebugInfoLeftEvent extends GenericEvent { }
interface ClientDebugInfoRightEvent extends GenericEvent { }
interface ClientLoggedInEvent extends GenericEvent { }
interface ClientLoggedOutEvent extends GenericEvent { }
interface ClientTickEvent extends GenericEvent { }
interface ClientItemTooltipEvent extends GenericEvent { }
interface ServerLoadEvent extends GenericEvent { }
interface ServerUnloadEvent extends GenericEvent { }
interface ServerTickEvent extends GenericEvent { }
interface ServerDatapackFirstEvent extends GenericEvent { }
interface ServerDatapackLastEvent extends GenericEvent { }
interface RecipesEvent extends GenericEvent {
	/**
	 * Remove current recipes in game.
	 * @param {object} options - The recipe to remove, provide no properties to remove all recipes.
	 * @param {string} [options.id] - the id of the recipe to remove
	 * @param {string} [options.input] - (tag) remove all input recipes where specified tag is present
	 * @param {string} [options.output] - (tag) remove all output recipes where specified tag is present
	 * @param {string} [options.mod] - the mod to remove all recipes from
	 * @param {string} [options.type] - the type of the recipe to remove
	 * @see [RecipeEventJS](https://mods.latvian.dev/books/kubejs/page/recipeeventjs)
	 */
	remove(options: (
		{} | {
			id: string;
		} | {
			input: string;
		} | {
			output: string;
		} | {
			mod: string;
		} | {
			type: string;
		}
	)): void;

	/**
	 * Add a shaped crafting recipe
	 * @param {Item} product - the resulting item(s)
	 * @param {[string, string, string]} crafting - the crafting grid, use letters or symbols as placeholders for items
	 * @param {object} items - an object mapping of letters/symbols to the material id (minecraft:*, etc)
	 * @see [RecipeEventJS](https://mods.latvian.dev/books/kubejs/page/recipeeventjs)
	 */
	shaped(product: Item, crafting: [
		row_one: string,
		row_two: string,
		row_three: string
	], items: {
		[k: string]: string;
	}): void;

	/**
	 * Add a shapeless crafting recipe
	 * @param product - the resulting item(s)
	 * @param input - the input item(s)
	 * @see [RecipeEventJS](https://mods.latvian.dev/books/kubejs/page/recipeeventjs)
	 */
	shapeless(product: Item, input: [
		string, string?, string?, string?, string?, string?, string?, string?, string?
	]): void;
}
interface WorldLoadEvent extends GenericEvent { }
interface WorldUnloadEvent extends GenericEvent { }
interface WorldTickEvent extends GenericEvent { }
interface WorldExplosionPreEvent extends GenericEvent { }
interface WorldExplosionPostEvent extends GenericEvent { }
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
interface EntityDeathEvent extends GenericEvent { }
interface EntityAttackEvent extends GenericEvent { }
interface EntityDropsEvent extends GenericEvent { }
interface EntityCheckSpawnEvent extends GenericEvent { }
interface EntitySpawnedEvent extends GenericEvent { }
interface BlockRegistryEvent extends GenericEvent { }
interface BlockMissingMappingsEvent extends GenericEvent { }
interface BlockTagsEvent extends GenericEvent { }
interface BlockRightClickEvent extends GenericEvent { }
interface BlockLeftClickEvent extends GenericEvent { }
interface BlockPlaceEvent extends GenericEvent { }
interface BlockBreakEvent extends GenericEvent { }
interface BlockDropsEvent extends GenericEvent { }
interface itemRegistryEvent extends GenericEvent { }
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
interface FluidTagsEvent extends GenericEvent { }
interface entityTypeTagsEvent extends GenericEvent { }

interface ItemHelper {
	of(type: string, amount: number): Item;
}

interface Item { }

declare const settings: Settings;
declare const events: Events;
declare const item: ItemHelper;
