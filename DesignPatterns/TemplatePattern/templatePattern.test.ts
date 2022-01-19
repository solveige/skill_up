import { Dish } from './types';

test('template pattern', () => {

	const margarita: Dish = {
		name: 'Margarita',
		ingredients: 'tomatoes, cheese, basil',
		sauce: 'tomato sauce',
	};
	
	const saladData: Dish = {
		name: 'Greek Salad',
		ingredients: 'tomatoes, cucumbers, feta, onion, olives',
		sauce: 'olive oil',
	};

	const bonAppetitWish = 'Bon Appetit!';

	const dishTemplateFn = (dish: Dish, wish: string) => `For ${dish.name} you'll need ${dish.ingredients} and ${dish.sauce}. ${wish}`;
	const expectedResult = dishTemplateFn(margarita, bonAppetitWish);

	abstract class DishReceipt {
		abstract nameDish(): string

		abstract prepareIngredients(): string

		abstract addSauce(): string

		bonAppetit() {
			return bonAppetitWish;
		}

		receipt() {
			const dish = {
				name: this.nameDish(),
				ingredients: this.prepareIngredients(),
				sauce: this.addSauce(),
			};

			return dishTemplateFn(dish, this.bonAppetit());
		}
	}

	class MargaritaReceipt extends DishReceipt {
		nameDish() {
			return margarita.name;
		}

		prepareIngredients() {
			return margarita.ingredients;
		}

		addSauce() {
			return margarita.sauce;
		}
	}

	class SaladReceipt extends DishReceipt {
		nameDish() {
			return saladData.name;
		}

		prepareIngredients() {
			return saladData.ingredients;
		}

		addSauce() {
			return saladData.sauce;
		}
	}

	const pizzaMargarita = new MargaritaReceipt();
	const margaritaReceipt = pizzaMargarita.receipt();

	expect(margaritaReceipt).toBe(expectedResult);
});