/// <reference path="../index.d.ts" />

declare namespace KubeJS.GeneralEvents {
	interface InitEvent extends GenericEvent { }
	interface PostInitEvent extends GenericEvent { }
	interface LoadedEvent extends GenericEvent { }
	interface CommandRegistryEvent extends GenericEvent { }
	interface CommandRunEvent extends GenericEvent { }
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
	interface FluidTagsEvent extends GenericEvent { }
	interface EntityTypeTagsEvent extends GenericEvent { }
}
