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
            				"Swiss cheese, sautÃ©ed baby spinach, red onion, tomato and mushrooms finished with creamy hollandaise sauce.",
            				14.69,
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
            )
]);


function generateMenu() {
	for(i = 0; i < menu.categories.length; i++) {
		var category = menu.categories[i];
		var li = $("<li>", {"class" : category.name});
		li.html(category.name);
		$(".menu").append(li);
		var ul = $("<ul>");
		$("."+category.name).append(ul);
		for(j = 0; j < category.items.length; j++) {
			var item = category.items[j];
			var li = $("<li>");
			li.html(item.name);
			$("."+category.name + " ul").append(li);
		}
	}
}