function setup() {
	chrome.storage.local.get(["isSetupDone"]).then((result) => {
		if (!Boolean(result["isSetupDone"])) {
			chrome.storage.local.set({ option1: true });
			chrome.storage.local.set({ option2: true });
			chrome.storage.local.set({ option3: false });
			chrome.storage.local.set({ option4: false });
			chrome.storage.local.set({ option5: false });

			chrome.storage.local.set({ isSetupDone: true });
		}
	});
}

setup();
