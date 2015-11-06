/**
  pentizr.js custom template demo
  
  # What? #
  How to use a custom template with pentizr.js to display
  my 5 latest CodePens (without pentizr.css)
  https://github.com/TimPietrusky/pentizr
  # 2012 by Tim Pietrusky
  # timpietrusky.com
**/

$('.my-pens').pentizr({
  username: 'TimPietrusky', 
  type : 'owned', 
  limit : 5,
  callback : function() {
  // Custom callback after everything was created (elements are dom ready)
  },
  // A custom template
  template : ''+
  '<div class="entry">'+
    '<h2 class="label" id="{{title}}" data-label="{{hearts}} ♥ | {{views}} views">{{title}}</h2>'+
    '<div class="body">'+
      '<div class="container">'+
        '<iframe src="{{urlFull}}" scrolling="no"></iframe>'+
      '</div>'+
      '<p class="meta">{{hearts}} ♥ | {{views}} views</p>'+
      '<p>{{description}}</p>'+
      '<hr>'+
      '<p><a href="{{urlPen}}" target="_blank">See it in action</a></p>'+
      '<p><a href="{{urlDetails}}" target="_blank">Write a comment</a></p>'+
    '</div>'+
  '</div>'
});