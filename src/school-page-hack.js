(function(doc, document, window) {
  if (window.hacking) {
    return;
  }

  window.hacking = true;

  var jsSrc = {
    prototype: 'http://fhc023.github.io/stuff/school-page-hack/prototype.js',
    jquery: 'http://fhc023.github.io/stuff/school-page-hack/jquery-1.3.2.min.js'
  };

  var body = doc.createElement("body");
  var newMask = doc.createElement("div");
  var head = document.getElementsByTagName("HEAD")[0];

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
    doc.lastChild.appendChild(body);
  }

  function closeMask() {
    doc.lastChild.removeChild(body);
  }

  function showMessage(message) {
    window.alert(message);
  }

  function appendJsNode(head, jsName) {
    var node = document.createElement("SCRIPT");
    node.setAttribute("type", "text/javascript");
    node.setAttribute("src", jsSrc[jsName]);
    head.appendChild(node);
  }

  function afterLoadJsCode(loadFlag, timeout, callback) {
    var gap = 50;
    setTimeout(function() {
      if (window[loadFlag]) {
        callback();
      } else if (timeout < 0) {
        callback('Error: timeout.');
      } else {
        afterLoadJsCode(loadFlag, timeout - gap, callback);
      }
    }, gap);
  }

  function loadJS(head, jsName, timeout, callback) {
    appendJsNode(head, jsName);
    afterLoadJsCode(jsName + '_loaded', timeout, callback);
  }

  openMask();

  loadJS(head, 'prototype', 5000, function(err) {
    if (err) {
      showMessage(err);
      location.reload();
    } else {
      loadJS(head, 'jquery', 5000, function(err) {
        if (err) {
          showMessage(err);
          location.reload();
        } else {
          var jqy = window.jQuery.noConflict();

          window.$ = function(element) {
            if (arguments.length > 1) {
              for (var i = 0, elements = [], length = arguments.length; i <
                length; i++)
                elements.push($(arguments[i]));
              return elements;
            }
            if (typeof element == 'string')
              element = document.getElementById(element);
            return window.Element.extend(element);
          };

          window.setUrl = function(url, urlAddr) {
            jqy("#urlName").val(url);
            jqy("#urlAdress").val(urlAddr);
            var fields = jqy("#setURLName").serialize();
            jqy.ajax({
              type: "POST",
              url: "/loadFunctionNamePage.jsp",
              data: fields,
              success: function(msg) {}
            });
          };
        }

        showMessage("Hack success! ");
        closeMask();
      });
    }
  });
})(document, document.getElementsByName("contents")[0].contentDocument.getElementsByName(
    "dtbar")[0].contentDocument,
  document.getElementsByName("contents")[0].contentDocument.getElementsByName(
    "dtbar")[0].contentWindow);
