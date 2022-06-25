alert("👋Hello👋!. මෙහෙයුම් පද්ධතියක් (OS) යනු අපි පරිගණකය ආරම්භ කරන විට හෝ ආරම්භ කරන විට දෘඩාංග (භෞතික කොටස්, දෘඪ තැටිය, තිරය, යතුරුපුවරුව, ආදිය) පරිගණක පද්ධතියේ සියලුම සම්පත් කළමනාකරණය කිරීම සඳහා වගකිව යුතු වැඩසටහනකි. මෘදුකාංග (වැඩසටහන් සහ උපදෙස්), එමගින් පරිශීලකයා සහ පරිගණකය අතර සන්නිවේදනයට ඉඩ සලසයි.");
(function() {

	
  // define variables
  var items = document.querySelectorAll(".timeline li");

  // check if an element is in viewport
  // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
      }
    }
  }

  // listen for events
  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);

})();
const btns = document.querySelectorAll('.close');

btns.forEach(btn => {
	btn.addEventListener('click', (e) => {
		e.target.parentNode.remove();
	});
});