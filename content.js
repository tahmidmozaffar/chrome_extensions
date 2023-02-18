function hide() {
	
	const divs = document.querySelectorAll("div");	
	
	for (let i = 0; i < divs.length; i++) {
		const div = divs[i];

		if (div.hasAttribute("data-pagelet")) {
			
			const spans = div.querySelectorAll("span");
			
      for (let j = 0; j < spans.length; j++) {
				const span = spans[j];				
				if (span.textContent === "Recommended post") {					
					div.remove();
          break;
				}
			}
		}
	}
}

hide();

var timer = null;
document.addEventListener("scroll", (event) => {
	if (timer === null) {
		timer = setTimeout(() => {
			hide();
			timer = null;
		}, 2 * 1000);
	}
});
