/**
*  @description mis variables
*/
stringUrl="";
UrlData = "";
viewCount = [];
likeCount = [];
commentCount = [];
id = [];
title = [];
description = [];
image = [];

function Video(link){
$(".videos").empty();
$('.videos').slideUp();  
$('.videos').slideDown();
$("input").val("");

var videoUrl = '<iframe width="560" height="315" src="http://www.youtube.com/embed/'
var RestoDelUrls = ' frameborder="0" allowfullscreen>'
$(".videos").append(videoUrl+link+'"'+RestoDelUrls+'</iframe>');
}

$(document).ready(function($) {
	$.ajax({
		url : "https://www.googleapis.com/youtube/v3/search?key=AIzaSyCZIdvJkrCNDjswEeRtMTbN6B9yEiz2pEo&channelId=UCZJ7m7EnCNodqnu5SAtg8eQ&part=snippet&maxResults=50&format=json",
		dataType : "jsonp",
		success : function(parsed_json) {
	
		for (var i = 0; i <= 49; i++) {
			if (i==49){
				stringUrl = stringUrl + parsed_json["items"][i]["id"]["videoId"];
			}else{
				stringUrl = parsed_json["items"][i]["id"]["videoId"]+ "%2C+" +stringUrl
			}; 
		};
		UrlData = "https://www.googleapis.com/youtube/v3/videos?part=snippet%2C+statistics&id="+stringUrl+"&maxResults=10&key=AIzaSyCZIdvJkrCNDjswEeRtMTbN6B9yEiz2pEo";
		console.log(UrlData)
		$.ajax({
			url: UrlData,
			dataType : "jsonp",
			success : function(parsed_jso) {
				for (var e = 0; e<=49; e++) {
					title.push(parsed_jso["items"][e]["snippet"]["title"])
					id.push(parsed_jso["items"][e]["id"])
					description.push(parsed_jso["items"][e]["snippet"]["description"])
					viewCount.push(parsed_jso["items"][e]["statistics"]["viewCount"])
					likeCount.push(parsed_jso["items"][e]["statistics"]["likeCount"])
					commentCount.push(parsed_jso["items"][e]["statistics"]["commentCount"])
					image.push(parsed_jso["items"][e]["snippet"]["thumbnails"]["default"]["url"])
				};			
			//console.log(id)
			//console.log(title)
			var initialData = []
			for (var e = 0; e<=49; e++) {
				initialData.push(({name:title[e], images:image[e], view:viewCount[e], like:likeCount[e], comment:commentCount[e]
, ids:id[e]}))
			};
	$("#buscador").click(function(){
		$(".mostrar").empty();
			
	for (var x = 0; x <49; x++) {
		/*console.log(initialData[x]["name"])*/
		var ini  = $("input[name=buscar]").val();
		var busqueda = initialData[x]["name"]
		var resultado = busqueda.toLowerCase();
		var ini = ini.toLowerCase();
		var a = x
	
			/*alert(urls+id[x]+'"'+RestoDelUrl+'</iframe>')*/
		if ( resultado.search(ini) == -1 ){
			//console.log("palabra no encontrada" );
		}else{
			/*console.log("el resultado es" , initialData[x]["name"])*/
		$(".mostrar").append("<tr>"+"<td>"+initialData[x]["name"]+"</td>"+"<td>"+'<button type="button" class="btn btn-primary" onClick="Video(\''+id[x]+'\')" data-dismiss="modal">'+'Load Video'+'</button>'+"</td>"+"</tr>");

		}
		};

	});


var ViewModel = function(items) {
	this.items = ko.observableArray(items);

	this.sortByName = function() {
		this.items.sort(function(a, b) {
			return a.name < b.name ? -1 : 1;
		});
		
	};
		this.sortByName_z_a = function() {
		this.items.sort(function(a, b) {
			return a.name > b.name ? -1 : 1;
		});
	};

	this.sortByLikes = function() {
		this.items.sort(function(c, d) {
			return c.like > d.like ? -1 : 1;
		});
	};
	
	this.sortByViews = function() {
		this.items.sort(function(c, d) {
			return c.view > d.view ? -1 : 1;
		});
	};
		this.sortByLestViews = function() {
		this.items.sort(function(c, d) {
			return c.view < d.view ? -1 : 1;
		});
	};

	
	this.sortByComments = function() {
		this.items.sort(function(c, d) {
			return c.comment < d.comment ? -1 : 1;
		});
	};     

		this.sortByLestComments = function() {
		this.items.sort(function(c, d) {
			return c.comment > d.comment ? -1 : 1;
		});
	};

	this.gridOptions = {
		data: this.items,
		rowTemplate: "rowTmpl",
		useKOTemplates: true,
		height: 415,

		columns: [ 
			{
				title: "Name"
			},
			{
				title: "Image"   
			},
			{
				title: "View Count"
			},
			{
				title: "Like Count"
			},
			{
				title: "Comment Count"
			},
		],
	pageable: {
		
		pageSize: 3,
		buttonCount: 1
	  },
	};
};


ko.applyBindings(new ViewModel(initialData));

			}
		}); 
		} 

	});
});
















/*


$(document).ready(function () {
 
		var url = "https://www.googleapis.com/youtube/v3/search?key=AIzaSyCZIdvJkrCNDjswEeRtMTbN6B9yEiz2pEo&channelId=UCZJ7m7EnCNodqnu5SAtg8eQ&part=snippet%2Cid&order=date&maxResults=50";


		var viewModel = {};

		$.getJSON(url, function (data) {
			viewModel.model = data;
			ko.applyBindings(viewModel);
			console.log(viewModel);
		});

		

});
var id = [];
var stringUrl="";

var viewCount = [];
var likeCount = [];
var title = [];
var viewCount2 = [];
var likeCount2 = [];
var title2 = [];




$(document).ready(function($) {
	$.ajax({
		url : "https://www.googleapis.com/youtube/v3/search?key=AIzaSyCZIdvJkrCNDjswEeRtMTbN6B9yEiz2pEo&channelId=UCZJ7m7EnCNodqnu5SAtg8eQ&part=snippet&maxResults=10&format=json",
		dataType : "jsonp",
		success : function(parsed_json) {
	
		for (var i = 0; i <= 9; i++) {
			if (i==9){
				stringUrl = stringUrl + parsed_json["items"][i]["id"]["videoId"];
			}else{
				stringUrl = parsed_json["items"][i]["id"]["videoId"]+ "%2C+" +stringUrl
			};      
		};
		UrlData = "https://www.googleapis.com/youtube/v3/videos?part=snippet%2C+statistics&id="+stringUrl+"&maxResults=10&key=AIzaSyCZIdvJkrCNDjswEeRtMTbN6B9yEiz2pEo";

		console.log(UrlData)
		$.ajax({
		url: UrlData,
		dataType : "jsonp",
		success : function(parsed_jso) {
			for (var e = 0; e<=9; e++) {
				viewCount.push(parsed_jso["items"][e]["statistics"]["viewCount"])
				likeCount.push(parsed_jso["items"][e]["statistics"]["likeCount"])
				title.push(parsed_jso["items"][e]["snippet"]["title"])

				viewCount2.push(parsed_jso["items"][e]["statistics"]["viewCount"])
				likeCount2.push(parsed_jso["items"][e]["statistics"]["likeCount"])
				title2.push(parsed_jso["items"][e]["snippet"]["title"])
			};

		}
	});
		}
	
	});
	
});




*/





