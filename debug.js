let deb = {
  status: false,
  run: function debug() {
    if (deb.status) {
      deb.hide();
    } else {
      deb.show();
    }
  },
  show: function show() {
    let filename = 'https://cholodymedia.github.io/debug/debug.css';
    let fileref = document.createElement('link');
    fileref.setAttribute('rel', 'stylesheet');
    fileref.setAttribute('type', 'text/css');
    fileref.setAttribute('href', filename);
    document.getElementsByTagName('head')[0].appendChild(fileref);
    deb.status = true;
  },
  hide: function hide() {
    let list = document.getElementsByTagName('head');
    let last = list[0].childNodes.length - 1;
    list[0].childNodes[last].remove();
    deb.status = false;
  }
};

document.addEventListener('keyup', function(e) {
  if (e.defaultPrevented) {
    return;
  }
  var key = e.key || e.keyCode;
  if (key == '`') {
    deb.run();
  }
});
