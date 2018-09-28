(function () {
  var data = new Date();
  var copy = document.getElementsByClassName('copy');
  copy[0].innerHTML = '&copy; ' + data.getFullYear() + ' By Qing';
}());
(function () {
  var visualViewport = window.innerWidth;
  if (visualViewport <= 500) {
    document.getElementsByTagName('html')[0].style.fontSize = 20 * visualViewport / 320 + 'px';
    var mainContainer = document.getElementsByClassName('mainContainer')[0];
    mainContainer.style.width = px2rem(visualViewport);
    var style = document.createElement('link');
    style.href = 'css/mobile.css';
    style.rel = 'stylesheet';
    document.getElementsByTagName('head').item(0).appendChild(style);
  }
}());
//px化为rem
function px2rem(pxs) {
  var rems = pxs / parseFloat(getComputedStyle(document.getElementsByTagName('html')[0], false)["fontSize"]) + 'rem';
  return rems;
}
var menu = {
  topDrawer: document.getElementsByClassName('topDrawer')[0].style,
  mainContainer: document.getElementsByClassName('mainContainer')[0].style,
  open: function () {
    this.topDrawer.height = px2rem(window.innerHeight);
    this.topDrawer.width = px2rem(window.innerWidth);
    this.topDrawer.visibility = 'visible';
    this.topDrawer.opacity = '1';
    this.topDrawer.display= 'block';
    this.mainContainer.position='fixed';

  },
  close: function () {
    this.topDrawer.visibility = 'hidden';
    this.topDrawer.opacity = '0';
    this.mainContainer.position='';
  }
}
//返回顶部
function backTop () {
  window.scrollBy(0, -100)

  scrolldelay = setTimeout('backTop()', 20)

  var sTop = document.documentElement.scrollTop + document.body.scrollTop

  if (sTop === 0) {
    clearTimeout(scrolldelay)
  }
}