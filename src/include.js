(function(window, document, location) {
  if (window.hacked || window.hacking) {
    return;
  }

  var body = document.createElement("body");
  var newMask = document.createElement("div");

  function openMask() {
    window.hacking = true;
    newMask.id = 'mask';
    newMask.style.position = "absolute";
    newMask.style.zIndex = "1";
    newMask.style.width = document.body.scrollWidth + "px";
    newMask.style.height = document.body.scrollHeight + "px";
    newMask.style.top = "0px";
    newMask.style.left = "0px";
    newMask.style.background = "#000";
    newMask.style.filter = "alpha(opacity=40)";
    newMask.style.opacity = "0.40";
    body.appendChild(newMask);
    document.lastChild.appendChild(body);
  }

  function closeMask() {
    document.lastChild.removeChild(body);
    window.hacking = false;
  }

  var node = document.createElement('script');
  node.setAttribute('src', 'http://fhc023.github.io/stuff/school-page-hack/' + location.host.split(':')[0] + '.min.js');
  node.setAttribute('charset','utf-8');
  document.getElementsByTagName('head')[0].appendChild(node);
  openMask();

  function checkHacked() {
    if (window.hacked) {
      closeMask();
    } else {
      setTimeout(checkHacked, 50);
    }
  }

  checkHacked();

})(window, document, location);

// node.setAttribute('src', 'http://fhc023.github.io/stuff/school-page-hack/' + location.host.split(':')[0] + '.min.js');
