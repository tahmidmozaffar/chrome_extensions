function setup() {
	chrome.storage.local.get(["isSetupDone"]).then((result) => {
		if (!Boolean(result["isSetupDone"])) {
			chrome.storage.local.set({ option1: true });
			chrome.storage.local.set({ option2: true });
			chrome.storage.local.set({ option3: true });
			chrome.storage.local.set({ option4: true });
			chrome.storage.local.set({ option5: true });

			chrome.storage.local.set({ isSetupDone: true });
		}
	});
}

setup();
