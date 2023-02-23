const option1Checkbox = document.getElementById("option_1");
const option2Checkbox = document.getElementById("option_2");
const option3Checkbox = document.getElementById("option_3");
const option4Checkbox = document.getElementById("option_4");
const option5Checkbox = document.getElementById("option_5");

let option1_state;
chrome.storage.local.get(["option1"]).then((result) => {
	option1_state = Boolean(result["option1"]);
	option1Checkbox.checked = option1_state;
});
let option2_state;
chrome.storage.local.get(["option2"]).then((result) => {
	option2_state = Boolean(result["option2"]);
	option2Checkbox.checked = option2_state;
});
let option3_state;
chrome.storage.local.get(["option3"]).then((result) => {
	option3_state = Boolean(result["option3"]);
	option3Checkbox.checked = option3_state;
});
let option4_state;
chrome.storage.local.get(["option4"]).then((result) => {
	option4_state = Boolean(result["option4"]);
	option4Checkbox.checked = option4_state;
});
let option5_state;
chrome.storage.local.get(["option5"]).then((result) => {
	option5_state = Boolean(result["option5"]);
	option5Checkbox.checked = option5_state;
});

option1Checkbox.addEventListener("click", () => {
	chrome.storage.local.set({ option1: !option1_state });
});

option2Checkbox.addEventListener("click", () => {
	chrome.storage.local.set({ option2: !option2_state });
});

option3Checkbox.addEventListener("click", () => {
	chrome.storage.local.set({ option3: !option3_state });
});

option4Checkbox.addEventListener("click", () => {
	chrome.storage.local.set({ option4: !option4_state });
});

option5Checkbox.addEventListener("click", () => {
	chrome.storage.local.set({ option5: !option5_state });
});
