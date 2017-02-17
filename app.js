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
  console.log(data1);

  var Images = data1.items.map(function(item){
    return "<img src=" + "'" + item.snippet.thumbnails.high.url + "' frameborder='0' >" 
    // "<img src=" + "'"+ item.snippet.thumbnails.high.url + ">" +  "< /img></a>";
  })
  $(".js-search-results").append(Images);

}
// <a href="http://www.youtube.com/watch?v=qqXi8WmQ_WM" rel="prettyPhoto" title=""><img src="images/thumbnails/flash-logo.jpg" alt="YouTube" width="60" /></a>

// function displayImage(data){
//   var Images = data.items.map(function(item){
//     console.log("<img src='" + item.snippet.thumbnails.high.url + "'></img>");
//   })
// }



// listen for click event
$(document).ready(function(){
  $('#btn').click(function(){
   getDataFromApi(displayCallBack);
   console.log()

  });
});


//code to grab the images
//for loop to grab each image and append it to results
// data1.items[1].snippet.thumbnails.high.url
