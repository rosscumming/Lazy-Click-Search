import { OPTIONS } from './helpers/settings.js';

chrome.storage.sync.get('OPTIONS', data => {
  Object.assign(OPTIONS, data.OPTIONS);
  optionsForm.oldReddit.checked = Boolean(OPTIONS.oldReddit);
});

optionsForm.oldReddit.addEventListener('change', event => {
  OPTIONS.oldReddit = event.target.checked;
  chrome.storage.sync.set({ OPTIONS });
});
