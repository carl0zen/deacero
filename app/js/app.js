

var elem = document.getElementById('mainSlider');
var bullets = document.getElementById('position').getElementsByTagName('li');

window.mySwipe = Swipe(elem, {
  // startSlide: 4,
  	 auto: 3000,
  // continuous: true,
  // disableScroll: true,
  // stopPropagation: true,
  // callback: function(index, element) {},
  // transitionEnd: function(index, element) {}
  callback: function(pos) {

      var i = bullets.length;
      while (i--) {
        bullets[i].className = ' ';
      }
      bullets[pos].className = 'on';

    }
});
(function(d, s, id) {
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) return;
          js = d.createElement(s); js.id = id;
          js.src = "//connect.facebook.net/en_US/all.js#xfbml=1&appId=242465489145177";
          fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));