var textarea = document.getElementById('text');

//window.alert("The current project isn't finished. Please be alert about this :)")
//window.alert("PS: If you are editing this, Check the JavaScript Tab and comment the window.alert(s)")

window.requestFileSystem = window.requestFileSystem ||
                           window.webkitRequestFileSystem;

var filesystem = null

function switchToDark() {
   document.body.style.backgroundColor = "#5d5d5d";
document.getElementById('text').style.backgroundColor = '#2d2d2d';
textarea.style.backgroundColor = '#2d2d2d';
  textarea.style.color = '#7d7d7d';
  var buttons = document.getElementsByClassName('buttons');
  for (i=0; i<buttons.length; i++) {
    buttons[i].style.backgroundColor = '#3d3d3d';
 buttons[i].style.borderColor = '#8d8d8d';
    buttons[i].style.color = '#8d8d8d';
  }
}
function switchToLight() {
  document.body.style.backgroundColor = "#ebebeb";
textarea.style.backgroundColor = '#b5b5b5';
  textarea.style.color = '#000000';
  var buttons = document.getElementsByClassName('buttons');
  for (i=0; i<buttons.length; i++) {
    buttons[i].style.backgroundColor = '#d6d6d6';
 buttons[i].style.borderColor = '#a8a8a8';
    buttons[i].style.color = '#616161'
  }
}
