yearInput();
// mobilSet();
function yearInput(){
  var data = new Date();
  var copy=document.getElementsByClassName('copy');
  copy[0].innerHTML='&copy; '+data.getFullYear()+' By Qing';
}

//px to rem
function px2rem(pxs){
  var rems=pxs/20+'rem';
  return rems;
}
function mobilSet(){
  var visualViewport=window. innerWidth;
  var mainContainer=document.getElementsByClassName('mainContainer')[0];
  mainContainer.style.width=px2rem(visualViewport);
}