chrome.storage.sync.set({ settings: { oldReddit: false } });

chrome.storage.sync.get('settings', result => {
  console.log(result.settings.oldReddit);
});
