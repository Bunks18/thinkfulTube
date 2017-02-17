var YOUTUBE_BASE_URL = 'https://www.googleapis.com/youtube/v3/search';


function getDataFromApi(callback) {
  var params = {
    part: "snippet",
    q: $('#search').val(),
    key: 'AIzaSyA41kLMnUcRQd2OII8MjAhr9A9Sr5dfnjk',
  }
  $.getJSON(YOUTUBE_BASE_URL, params, callback);
  console.log("this works");
  console.log(params.q);
}

var displayCallBack = function(data) {
  data1 = data;

  var Images = data1.items.map(function(item){
    return "<a href=" + "'https://www.youtube.com/watch?v=" + item.id.videoId + "' target='_blank'>" +
    "<img src='"+ item.snippet.thumbnails.high.url + "'alt='Youtube'/>" +  "</a>";
  })
  $(".js-search-results").append(Images);

}

// <a href="http://www.youtube.com/watch?v=qqXi8WmQ_WM" rel="prettyPhoto" title=""><img src="images/thumbnails/flash-logo.jpg" alt="YouTube" width="60" /></a>

// listen for click event
$(document).ready(function(){
  $('#btn').click(function(){
   getDataFromApi(displayCallBack);
  });
});
