// loadScript('http://').then(() => {});
var loadScript = url => fetch(url).
  then(res => res.blob()).
  then(body => injectScript(URL.createObjectURL(body)));

var injectScript = url => new Promise(function(resolve, reject) {
  var script = document.createElement('script');
  script.src = url;
  script.onload = resolve;
  script.onerror = reject; // TODO Not sure it really works
  document.head.appendChild(script);
});
