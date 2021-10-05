export const options = {};

chrome.storage.sync.get('options', data => {
  Object.assign(options, data.options);
  optionsContainer.oldReddit.checked = Boolean(options.oldReddit);
});

optionsContainer.oldReddit.addEventListener('change', event => {
  options.oldReddit = event.target.checked;
  chrome.storage.sync.set({ options });
});
