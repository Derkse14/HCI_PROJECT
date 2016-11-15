/**
 * 
 */

var clean_regex = /\W/g;

function generateMenuSidebar() {
	for(ii = 0; ii < menu.length; ii++) {
		var category = menu[ii].category;
		var catDiv = $("<div>", {"id" : category.replace(clean_regex, '') + "Sidebar",
								 "class" : "col-md-12 row-space category"});
		$(".menuSidebar").append(catDiv);
		$("#"+category.replace(clean_regex, '') + "Sidebar").append($("<a>", {"href" : "#" + category}).text(category));
	}
}

function generateMenu() {
	for(i = 0; i < menu.length; i++) {
		var category = menu[i].category;
		var catDiv = $("<div>", {"id" : category.replace(clean_regex, '')});
		$(".menu").append(catDiv);
		$("#"+category).append($("<h2>", {"class" : "categoryName"}).text(category));
		for(j = 0; j < menu[i].items.length; j++) {
			var item = menu[i].items[j];
			var itemClass = item.name.replace(clean_regex,'');
			itemClass = itemClass.replace(clean_regex,'');
			var itemDiv = $("<div>", {"class" : itemClass+" Item"});
			$("#"+category).append(itemDiv);
			$("."+itemClass).append($("<h4>", {"class" : "price"}).text(item.price));
			$("."+itemClass).append($("<h3>", {"class" : "itemName"}).text(item.name));
			$("."+itemClass).append($("<p>", {"class" : "description"}).text(item.description));
			
		}
	}
}
