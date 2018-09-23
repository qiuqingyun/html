function yearInput(){
  var data = new Date();
  var copy=document.getElementsByClassName('copy');
  copy[0].innerHTML='&copy; '+data.getFullYear()+' By Qing';
}
yearInput();