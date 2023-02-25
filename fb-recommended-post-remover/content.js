let option1_state, option2_state, option3_state, option4_state, option5_state;
chrome.storage.local.get(["option1"]).then((result) => {
	option1_state = Boolean(result["option1"]);
});

chrome.storage.local.get(["option2"]).then((result) => {
	option2_state = Boolean(result["option2"]);
});

chrome.storage.local.get(["option3"]).then((result) => {
	option3_state = Boolean(result["option3"]);
});

chrome.storage.local.get(["option4"]).then((result) => {
	option4_state = Boolean(result["option4"]);
});

chrome.storage.local.get(["option5"]).then((result) => {
	option5_state = Boolean(result["option5"]);
});

const ms = Date.now();
let classnames = ["x1lliihq"];
fetch(
	"https://raw.githubusercontent.com/tahmidmozaffar/chrome_extensions/main/config_server/class.json?dummy="+ms,
)
	.then((res) => res.json())
	.then((data) => (classnames = data));

function hide() {
	const divs = document.querySelectorAll("div");

	for (let i = 0; i < divs.length; i++) {
		const div = divs[i];

		if (
			div.hasAttribute("data-pagelet") ||
			classnames.includes(div.className)
		) {
			const spans = div.querySelectorAll("span");

			for (let j = 0; j < spans.length; j++) {
				const span = spans[j];

				if (
					(option1_state &&
						span.textContent === "Recommended post") ||
					(option2_state &&
						span.textContent === "Suggested for you") ||
					(option3_state &&
						span.textContent === "Suggested Groups") ||
					(option4_state &&
						span.textContent === "Reels and short videos") ||
					(option5_state &&
						span.textContent.includes("shared a memory"))
				) {
					div.remove();
					break;
				}
			}
		}
	}
}

window.onload = () => {
	hide();
};

hide();

var timer = null;
document.addEventListener("scroll", (event) => {
	if (timer === null) {
		timer = setTimeout(() => {
			hide();
			timer = null;
		}, 1 * 1000);
	}
});
