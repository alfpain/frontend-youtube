$(document).ready(function () {
    //Knockout Test
        var url = "https://www.googleapis.com/youtube/v3/search?key=AIzaSyCZIdvJkrCNDjswEeRtMTbN6B9yEiz2pEo&channelId=UCZJ7m7EnCNodqnu5SAtg8eQ&part=snippet%2Cid&order=date&maxResults=50";


        var viewModel = {};

        $.getJSON(url, function (data) {
            viewModel.model = data;
            ko.applyBindings(viewModel);
            console.log(viewModel);
        });

        

});


id = [];
stringUrl="";


$(document).ready(function($) {
	$.ajax({
		url : "https://www.googleapis.com/youtube/v3/search?key=AIzaSyCZIdvJkrCNDjswEeRtMTbN6B9yEiz2pEo&channelId=UCutAQ7OXuxEZ1Cw3ZPmPOZA&part=snippet&maxResults=10&format=json",
		dataType : "jsonp",
		success : function(parsed_json) {
	
		for (var i = 0; i <= 3; i++) {
			if (i==3){
				stringUrl = stringUrl + parsed_json["items"][i]["id"]["videoId"];
			}else{
				stringUrl = parsed_json["items"][i]["id"]["videoId"]+ "%2C+" +stringUrl
			};		
		};
		
		newUrl = "https://www.googleapis.com/youtube/v3/videos?part=snippet%2C+statistics&id="+stringUrl+"&maxResults=10&key=AIzaSyCZIdvJkrCNDjswEeRtMTbN6B9yEiz2pEo"
		alert(newUrl);
		}
	});
});
