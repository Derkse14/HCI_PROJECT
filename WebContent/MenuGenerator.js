/**
 * 
 */

function MenuItem(name, description, price, options) {
	this.name = name;
	this.description = description;
	this.price = price;
	this.options = options;
}

function Category(name, items) {
	this.name = name;
	this.items = items;
}

function Menu(categories) {
	this.categories = categories;
}

var menu = new Menu
([
            new Category
            (
            		"Breakfast",
            		[new MenuItem
            		(
            				"Steak & Eggs",
            				"Three eggs any style served with your choice cut of seasoned AAA beef.",
            				16.99,
            				["8 oz New York", "6 oz Sirloin"]
            		),
            		new MenuItem
            		(
            				"Spinach & Swiss Omelette",
            				"Swiss cheese, sauteed baby spinach, red onion, tomato and mushrooms finished with creamy hollandaise sauce.",
            				14.69,
            				null
            		),
            		new MenuItem
            		(
            				"Original French Toast",
            				"Three slices of French bread dipped in our original cinnamon and nutmeg mixture, grilled golden brown and sprinkled with powdered sugar.",
            				10.59,
            				null
            		)]
            ),
            new Category
            (
            		"Appetizers",
            		[new MenuItem
            		(
            				"Wings",
            				"Lightly breaded and fried chicken wings",
            				10.99,
            				["Salt & Pepper", "Buffalo", "Honey Garlic"]
            		),
            		new MenuItem
            		(
            				"Southwest Flatbread",
            				"Diced BBQ chicken, bacon and red onions baked on our flatbread with sweet and smoky BBQ sauce and pizza mozzarella, then topped with a drizzle of ranch dressing and a sprinkling of fresh parsley.",
            				11.99,
            				["Chipotle", "Marinara", "Ranch"]
            		)]
            ),
            new Category
            (
            		"Soups",
            		[new MenuItem
            		(
            				"Wings1",
            				"Lightly breaded and fried chicken wings",
            				10.99,
            				["Salt & Pepper", "Buffalo", "Honey Garlic"]
            		),
            		new MenuItem
            		(
            				"Southwest Flatbread1",
            				"Diced BBQ chicken, bacon and red onions baked on our flatbread with sweet and smoky BBQ sauce and pizza mozzarella, then topped with a drizzle of ranch dressing and a sprinkling of fresh parsley.",
            				11.99,
            				["Chipotle", "Marinara", "Ranch"]
            		)]
            ),
            new Category
            (
            		"Salads",
            		[new MenuItem
            		(
            				"Wings1",
            				"Lightly breaded and fried chicken wings",
            				10.99,
            				["Salt & Pepper", "Buffalo", "Honey Garlic"]
            		),
            		new MenuItem
            		(
            				"Southwest Flatbread1",
            				"Diced BBQ chicken, bacon and red onions baked on our flatbread with sweet and smoky BBQ sauce and pizza mozzarella, then topped with a drizzle of ranch dressing and a sprinkling of fresh parsley.",
            				11.99,
            				["Chipotle", "Marinara", "Ranch"]
            		)]
            ),
            new Category
            (
            		"Steaks",
            		[new MenuItem
            		(
            				"Wings1",
            				"Lightly breaded and fried chicken wings",
            				10.99,
            				["Salt & Pepper", "Buffalo", "Honey Garlic"]
            		),
            		new MenuItem
            		(
            				"Southwest Flatbread1",
            				"Diced BBQ chicken, bacon and red onions baked on our flatbread with sweet and smoky BBQ sauce and pizza mozzarella, then topped with a drizzle of ranch dressing and a sprinkling of fresh parsley.",
            				11.99,
            				["Chipotle", "Marinara", "Ranch"]
            		)]
            ),
            new Category
            (
            		"Sandwiches",
            		[new MenuItem
            		(
            				"Wings1",
            				"Lightly breaded and fried chicken wings",
            				10.99,
            				["Salt & Pepper", "Buffalo", "Honey Garlic"]
            		),
            		new MenuItem
            		(
            				"Southwest Flatbread1",
            				"Diced BBQ chicken, bacon and red onions baked on our flatbread with sweet and smoky BBQ sauce and pizza mozzarella, then topped with a drizzle of ranch dressing and a sprinkling of fresh parsley.",
            				11.99,
            				["Chipotle", "Marinara", "Ranch"]
            		)]
            ),
            new Category
            (
            		"Pasta",
            		[new MenuItem
            		(
            				"Wings1",
            				"Lightly breaded and fried chicken wings",
            				10.99,
            				["Salt & Pepper", "Buffalo", "Honey Garlic"]
            		),
            		new MenuItem
            		(
            				"Southwest Flatbread1",
            				"Diced BBQ chicken, bacon and red onions baked on our flatbread with sweet and smoky BBQ sauce and pizza mozzarella, then topped with a drizzle of ranch dressing and a sprinkling of fresh parsley.",
            				11.99,
            				["Chipotle", "Marinara", "Ranch"]
            		)]
            ),
            new Category
            (
            		"Beverages",
            		[new MenuItem
            		(
            				"Wings1",
            				"Lightly breaded and fried chicken wings",
            				10.99,
            				["Salt & Pepper", "Buffalo", "Honey Garlic"]
            		),
            		new MenuItem
            		(
            				"Southwest Flatbread1",
            				"Diced BBQ chicken, bacon and red onions baked on our flatbread with sweet and smoky BBQ sauce and pizza mozzarella, then topped with a drizzle of ranch dressing and a sprinkling of fresh parsley.",
            				11.99,
            				["Chipotle", "Marinara", "Ranch"]
            		)]
            ),
            new Category
            (
            		"Desserts",
            		[new MenuItem
            		(
            				"Wings1",
            				"Lightly breaded and fried chicken wings",
            				10.99,
            				["Salt & Pepper", "Buffalo", "Honey Garlic"]
            		),
            		new MenuItem
            		(
            				"Southwest Flatbread1",
            				"Diced BBQ chicken, bacon and red onions baked on our flatbread with sweet and smoky BBQ sauce and pizza mozzarella, then topped with a drizzle of ranch dressing and a sprinkling of fresh parsley.",
            				11.99,
            				["Chipotle", "Marinara", "Ranch"]
            		)]
            )
]);


function generateMenu() {
	for(i = 0; i < menu.categories.length; i++) {
		var category = menu.categories[i];
		var catDiv = $("<div>", {"id" : category.name.replace(/ /g,'')});
		$(".menu").append(catDiv);
		$("#"+category.name).append($("<h2>", {"class" : "categoryName"}).text(category.name));
		for(j = 0; j < category.items.length; j++) {
			var item = category.items[j];
			var itemClass = item.name.replace(/ /g,'');
			itemClass = itemClass.replace('&','');
			var itemDiv = $("<div>", {"class" : itemClass+" Item"});
			$("#"+category.name).append(itemDiv);
			$("."+itemClass).append($("<h4>", {"class" : "price"}).text(item.price));
			$("."+itemClass).append($("<h3>", {"class" : "itemName"}).text(item.name));
			$("."+itemClass).append($("<p>", {"class" : "description"}).text(item.description));
			
		}
	}
}
