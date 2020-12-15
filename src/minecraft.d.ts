/// <reference path="./index.d.ts" />

// I'm assuming we're not inlcuding the type in the JSON parts
declare namespace KubeJS.Minecraft {
	// tags: https://minecraft.gamepedia.com/Tag#Items
	type ItemOrTag = { item: string } | { tag: string };

	interface GenericJSON {
		group?: string;
	}

	// https://github.com/skylinerw/guides/blob/master/java/recipes.md#shaped-crafting
	interface CraftingShapedJSON extends GenericJSON {
		pattern: [
			row1: string,
			row2: string,
			row3: string
		];
		key: {
			[k: string]: string;
		};
		result: {
			item: string;
			count?: number;
		} | string;
	}

	// https://github.com/skylinerw/guides/blob/master/java/recipes.md#shapeless-crafting
	interface CraftingShapelessJSON extends GenericJSON {
		group?: string;
		ingredients: (ItemOrTag | ItemOrTag[])[];
		result: {
			item: string;
			count?: number;
		} | string;
	}

	// https://github.com/skylinerw/guides/blob/master/java/recipes.md#smelting
	interface SmeltingJSON extends GenericJSON {
		group?: string;
		ingredient: (ItemOrTag | ItemOrTag[])[];
		result: string;
		experience: number;
		cookingtime?: number;
	}

	// https://minecraft.gamepedia.com/Recipe#blasting
	interface BlastingJSON extends SmeltingJSON {
	}

	// https://minecraft.gamepedia.com/Recipe#campfire_cooking
	interface CampfireCookingJSON extends SmeltingJSON {
	}

	// https://minecraft.gamepedia.com/Recipe#smoking
	interface SmokingJSON extends SmeltingJSON {
	}

	// https://minecraft.gamepedia.com/Recipe#smithing
	interface SmithingJSON extends GenericJSON {
		base: ItemOrTag;
		addition: ItemOrTag;
		result: string;
	}

	// https://minecraft.gamepedia.com/Recipe#stonecutting
	interface StonecuttingJSON extends GenericJSON {
		ingredient: ItemOrTag | ItemOrTag[];
		result: string;
		count: number;
	}
}
