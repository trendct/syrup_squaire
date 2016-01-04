/*
	Squaire-based project
	---------------------
	
	* Use tabs to choose data set
	*
*/

jQuery(function() {


	function unsetNulls () {
		// unset all null fields
		for (var state in squaireProject.data){
			if (squaireProject.data.hasOwnProperty(state)) {
				for (var key in squaireProject.data[state]){
					if (squaireProject.data[state].hasOwnProperty(key)){
						if (squaireProject.data[state][key] === null){
							//console.log("deleting " + state + ":" + key);
							delete squaireProject.data[state][key];
						}
					}
				}
			}
		}
	}

	unsetNulls();

	jQuery("#map-tab-container").html();
	for (var i = 0; i < squaireProject.datasets.length; i++){

		var dataset_label = (squaireProject.datasets[i]["label"] || squaireProject.datasets[i]["name"]);
		var dataset_name = squaireProject.datasets[i]["name"]
		jQuery("#map-tab-container").append("<div class='map-tab' id='map_tab_"
			+ dataset_name + 
			"' data-dataset='" 
			+ dataset_name + 
			"'><h6>" + dataset_label + "</h6></div>");
	}

	jQuery("#map-tab-container").append("<div style='clear:both'></div>");

	jQuery("#map-title").html("<h2 class='no-margin'>" + squaireProject.title + "</h2>");
	jQuery("#map-caption").html(squaireProject.caption);
	jQuery("#map-sourceline").html("<em>Sources: " + squaireProject.sourceline + "</em>");
	jQuery("#map-byline").html(squaireProject.byline);

	//var map = new Squaire(squaireProject.data[(squaireProject.default || squaireProject.datasets[0])], squaireProject.opt[(squaireProject.default || squaireProject.datasets[0])]);


	jQuery(".map-tab").on("click", function () {
		selectTab(jQuery(this).attr("data-dataset"));
	});

	pym_child = new pym.Child();

	function selectTab(dataset){

		var fallback_options= {
		    tooltip: {enabled: true},
		    el: "#map-container",
		    index: dataset,
		    whitelist: dataset,
		    colors: d3.scale.quantize().domain([10000,100000]).range(['#eaccae','#d5985d','#794c20','#3d2610'])
		}

		jQuery(".map-tab").removeClass("selected");
		jQuery("#map_tab_" + dataset).addClass("selected");

		var options = (squaireProject.opt[dataset]
			|| squaireProject.opt["default"]
			|| fallback_options);

		console.log(squaireProject.opt[dataset]);


		jQuery("#" + squaireProject.div_id).html("");
		//var chosen_data = squaireProject.data[dataset];
		//var chosen_opt = squaireProject.opt[dataset];

		options.index = dataset;

		console.log(options);
		var map = new Squaire(squaireProject.data, options);
		pym_child.sendHeight();
	}

	// show the default data set or the first available data set if no default is defined
	selectTab((squaireProject.default_set || squaireProject.datasets[0]));


	jQuery(window).on('resize', function () { pym_child.sendHeight();});

	setTimeout(function () {
		pym_child.sendHeight();
	}, 2000)
})