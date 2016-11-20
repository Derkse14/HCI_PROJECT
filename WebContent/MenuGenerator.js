/**
 * 
 */

var clean_regex = /\W/g;

function generateMenuSidebar() {
	for(ii = 0; ii < menu.length; ii++) {
		var category = menu[ii].category;
		var catDiv = $("<div>", {"id" : category.replace(clean_regex, '') + "Sidebar",
								 "class" : "col-xs-12 row-space category"});
		$(".menuSidebar").append(catDiv);
		$("#"+category.replace(clean_regex, '') + "Sidebar").append($("<a>", {"href" : "Menu.html#" + category}).text(category));
	}
}

function generateMenu() {
	for(i = 0; i < menu.length; i++) {
		var category = menu[i].category;
		var span = $("<span>", {"id" : category.replace(clean_regex, ''), "class" : "anchor"});
		var catDiv = $("<div>", {"class" : category.replace(clean_regex, '')});
		$(".menu").append(span);
		$(".menu").append(catDiv);
		$("."+category).append($("<h2>", {"class" : "categoryName"}).text(category));
		for(j = 0; j < menu[i].items.length; j++) {
			var item = menu[i].items[j];
			var itemClass = item.name.replace(clean_regex,'');
			itemClass = itemClass.replace(clean_regex,'');
			var itemDiv = $("<div>", {"class" : itemClass+" Item", "onclick" : "generateDetailedView(\'" + itemClass +"\')"});
			$("."+category).append(itemDiv);
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
	currentItem = item;
	if(item == null) {
		alert("not found");
	} else {
//		alert(item.name);
	}

	var cost = item.price;

	$(".headerTitle").text(item.name);
	$(".headerTitle").css("font-size", "4em");
	$(".detailedView").append($("<img>", {"src" : "../Images/"+item.image}));
	$(".detailedView").append($("<p>").text(item.description));
	$(".detailedView").append($("<div>", {"class" : "selections"}));
	
	if(item.selections != null) {
		for(var i = 0; i < item.selections.length; i++) {
			$(".detailedView .selections").append($("<label>").text(item.selections[i].selection_desc));
			var select = $("<select>", {"id" : item.selections[i].selection_id, "class": "formRow"});		
			$(".detailedView .selections").append(select);
			
			for(var j = 0; j < item.selections[i].options.length; j++) {
				var option = item.selections[i].options[j].option_desc;
				$("#"+item.selections[i].selection_id).append($("<option>", {value: option, text: option}));
			}

			if(i<(item.selections.length-1)){ 
				var br = document.createElement("br");
				$(".detailedView .selections").append($(br));  
			}
			
		}
	}

	$(".detailedView").append($("<label>", {"class": "labelWidth"}).text("Customer Name: "));
	$(".detailedView").append($("<input>", {"class": "formRow", "type" : "text", "name": "cusName"}));
	var br = document.createElement("br");
	$(".detailedView").append($(br));  
	$(".detailedView").append($("<label>", {"class": "labelWidth"}).text("Allergies: "));
	$(".detailedView").append($("<input>", {"class": "formRow","type" : "text", "name": "allergies"}));
	var br = document.createElement("br");
	$(".detailedView").append($(br)); 
	$(".detailedView").append($("<label>", {"class": "labelWidth"}).text("Cost: "));
	$(".detailedView").append($("<label>", {"class": "formRow"}).text("$ "+cost));
	var br = document.createElement("br");
	$(".detailedView").append($(br)); 
	$(".detailedView").append($("<button>", {"class" : "backButton"}).text("Go back"));  
	var btnConfirmOrder = document.createElement("button");
	btnConfirmOrder.setAttribute("class", "addToOrder"); 
	btnConfirmOrder.innerHTML = "Add To Order";  
	$(".detailedView").append(btnConfirmOrder);
	
	btnConfirmOrder.onclick = function(){
		var cusItem = {}; 
		var cusName = document.getElementsByName('cusName')[0].value; 
		cusItem.cusName = cusName; 
		var info = "Customer Name: "+ cusName + "\n\n"; 
		var allergies = document.getElementsByName('allergies')[0].value ; 
		cusItem.allergies = allergies; 
		info = info + " Allergies: "+ allergies+ "\n\n"; 

		info = info + " Item: "+item.name+"\n\n"; 
		var cost = parseFloat(item.price); 
		selectedOptions = []; 
		for(var i = 0; i < item.selections.length; i++) {
			var option = $("#"+item.selections[i].selection_id).val(); 
			selectedOptions[i] = option; 
			var index = 0; 
			var options = item.selections[i].options; 
			var found = false; 
			while(index < options.length && !found){
				var tempOption = options[index]; 
				if(tempOption.option_desc == option){
					found = true; 
				}else{
					index++; 
				}
				
			}
			cost = cost + parseFloat(item.selections[i].options[index].option_price); 
		}

		info = info + "Cost: "+ cost+"\n\n"; 
		cost = 0; 

		var confirmedOrder = confirm(info); 
		if(confirmedOrder == true){
			//doing something
		 
		}
	}
	
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


