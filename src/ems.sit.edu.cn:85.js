(function(document, window) {
  var siderbarDoc = document.getElementsByName('leftFrame')[0].contentDocument;

  var scorePointNode = siderbarDoc.getElementsByTagName('tbody')[0].childNodes[38].getElementsByTagName('a')[0];

  function rewrite(untilNotHacked) {
    var mainDoc = document.getElementsByName('mainFrame')[0].contentDocument;
    var mainWin = document.getElementsByName('mainFrame')[0].contentWindow;

    if (untilNotHacked && mainWin.hacked) {
      setTimeout(function() {
        rewrite(untilNotHacked);
      }, 100);
    } else if (mainWin.pageForm && mainWin.pageForm.attributes['action'] && mainWin.pageForm.attributes['action'].value === "scorepoint.jsp") {
      mainWin.doSrc = function() {
        var term1 = mainWin.pageForm.getElementsByTagName('select')[0];
        var term2 = mainWin.pageForm.getElementsByTagName('select')[1];
        var av = mainWin.getSelVal(term1);
        var bv = mainWin.getSelVal(term2);
        if(av.length==0 && bv.length==0){
            alert("请选择学期。");
            return;
        }
        var ai = term1;
        var bi = term2;
        if(bi>0){
            if(ai>bi){
                alert("起始学期不能大于截止学期。");
                return;
            }
        }

        mainWin.pageForm.op.value = "list";
        mainWin.pageForm.submit();

        rewrite(true);
      };

      mainWin.hacked = true;
    } else {
      setTimeout(rewrite, 100);
    }
  }

  scorePointNode.onclick = rewrite;

}(document, window));
