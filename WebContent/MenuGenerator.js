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
			var itemDiv = $("<div>", {"class" : itemClass+" Item", "onclick" : "generateDetailedView(\'" + itemClass +"\')"});
			$("#"+category).append(itemDiv);
			$("."+itemClass).append($("<h4>", {"class" : "price"}).text(item.price));
			$("."+itemClass).append($("<h3>", {"class" : "itemName"}).text(item.name));
			$("."+itemClass).append($("<p>", {"class" : "description"}).text(item.description));
			
		}
	}
}


function generateDetailedView(name) {
	$(".menu").hide();
	$(".detailedView").css('visibility', 'visible');
	var item = getItem(name);
	if(item == null) {
		alert("not found");
	} else {
//		alert(item.name);
	}
	$(".headerTitle").text(item.name);
	$(".detailedView").append($("<img>", {"src" : "../Images/"+item.image}));
	$(".detailedView").append($("<p>").text(item.description));
	$(".detailedView").append($("<div>", {"class" : "selections"}));
	
	if(item.selections != null) {
		for(var i = 0; i < item.selections.length; i++) {
			var select = $("<select>", {"id" : item.selections[i].selection_id});

			$(".detailedView .selections").append($("<label>").text(item.selections[i].selection_desc));
			$(".detailedView .selections").append(select);
			for(var j = 0; j < item.selections[i].options.length; j++) {
				var option = item.selections[i].options[j].option_desc;
				$("#"+item.selections[i].selection_id).append($("<option>", {value: option, text: option}));
			}
		}
	}

	$(".detailedView").append($("<label>", {"class" : "backButton"}).text("Go back"));
	
	
}

function getItem(name) {
	for(i = 0; i < menu.length; i++) {
		for(j = 0; j < menu[i].items.length; j++) {
			var item = menu[i].items[j];
			var itemClass = item.name.replace(clean_regex,'');
			if(itemClass == name) {
				return menu[i].items[j];
			}
		}
	}
}

$(document).on("click", ".backButton", function(e) {
	$(".menu").show();
	$(".detailedView").css("visibility", "hidden");
	$(".detailedView").empty();
	location.reload();
});

$(document).on("click", ".category", function(e) {
	$(".menu").show();
	$(".detailedView").css("visibility", "hidden");
	$(".detailedView").empty();
	location.reload();
});


