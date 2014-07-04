var jsSrc = {
  prototype: 'http://fhc023.github.io/stuff/school-page-hack/prototype.js',
  jquery: 'http://fhc023.github.io/stuff/school-page-hack/jquery-1.3.2.min.js'
};

function openMask() {
  // TODO: Operate DOM
}

function closeMask() {
  // TODO: Operate DOM
}

function showMessage(message) {
  // TODO: Operate DOM
}

function appendJsNode(head, jsName) {
  var src = jsSrc[jsName];
  // TODO: Operate DOM
}

function afterLoadJsCode(loadFlag, timeout, callback) {
  var gap = 50;
  setTimeout(function() {
    if (window[loadFlag]) {
      callback();
    } else if (timeout < 0) {
      callback('Error: timeout');
    } else {
      loadJsCode(timeout - gap, callback);
    }
  }, gap);
}

function loadJS(head, jsName, timeout, callback) {
  appendJsNode(head, jsName);
  afterLoadJsCode(jsName + '_loaded', timeout, callback);
}

loadJS(head, 'prototype', 10000, function(err) {
  if (err) {
    showMessage(err);
  } else {
    loadJS(head, 'jquery', 10000, function(err) {
      if (err) {
        showMessage(err);
      } else {
        // TODO: jquery.noConflict();
        // TODO: rebind $
        // TODO: rebind origin function
        closeMask();
      }
    });
  }
});
