// ==UserScript==
// @name           add lists
// @namespace      add_lists@basyura.org
// @include        https://twitter.com/*
// @include        http://twitter.com/*
// @resource       jquery    http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js 
// ==/UserScript==
(function (w) {
/*
 *
 */
(function() { 
  var head   = document.getElementsByTagName('head')[0]; 
  var script = document.createElement('script');
  script.type = 'text/javascript'; 
  var jQuery   = GM_getResourceText('jquery');
  script.innerHTML = jQuery;
  head.appendChild(script); 
  $ = w.$; 
})();

var screen_name = $('.dropdown-menu .account-summary').attr('href').replace("/", "");

var root = $('<li/>').attr('class', 'lists')
           .appendTo('#global-actions');

$('<a/>').attr('class', 'js-hover')
  .attr('href', '/#!/' + screen_name + '/lists')
  .text('L I S T')
  .appendTo(root);

/*
GM_xmlhttpRequest({
    method: 'GET',
    url: 'https://api.twitter.com/1/lists.json?screen_name=' + screen_name,
    onload: function(response) {
      JSON.parse(response.responseText).lists.forEach(function(list) {
          // list.name list.uri をつかってプルダウンメニューを作る
        });
    }
});
*/

})(this.unsafeWindow || this);
