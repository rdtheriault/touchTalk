chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('index.html', {
    'outerBounds': {
      'width': 1020,
      'height': 780
    },
	id: "index"
  });
});
