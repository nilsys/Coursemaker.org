import './src/css/tailwind.css';

const addScript = url => {
  const script = document.createElement("script")
  script.src = url
  script.async = true
  document.body.appendChild(script)
}

export const onClientEntry = () => {
  window.onload = () => {

		window.cookieconsent.initialise({
			"palette": {
				"popup": {
					"background": "#edf2f7",
					"text": "#4a5568"
				},
				"button": {
					"background": "#4299e1",
					"text": "#fff"
				}
			},
			"position": "bottom-left",
			"type": "opt-out"
		});

		/* on scroll */
		var popupScrollState = false;
		window.onscroll = function() {

			var header = document.querySelector('header');
			var pageY = window.scrollY;
			if(pageY > 0) {
				header.classList.add('shadow');
			} else {
				header.classList.remove('shadow');
			}

			var popupWrapper = document.querySelector('.popup-wrapper');
			if(popupWrapper) {

				var popupCloser = document.querySelector('.popup-closer');
				var h = document.documentElement, 
						b = document.body,
						st = 'scrollTop',
						sh = 'scrollHeight';

				var percent = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;

				if(Math.round(percent) > 33 && !popupScrollState) {
					popupWrapper.classList.add('is-active');
					popupScrollState = true;
				}

				popupCloser.onclick = function() {
					popupWrapper.classList.remove('is-active');
				}
			}

		}
  }
}
