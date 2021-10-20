import { OPTIONS } from './helpers/settings.js';

chrome.storage.sync.get('OPTIONS', data => {
  Object.assign(OPTIONS, data.OPTIONS);
  optionsForm.oldReddit.checked = Boolean(OPTIONS.DEFAULT_SETTINGS.oldReddit);
  optionsForm.amazonUS.checked = Boolean(OPTIONS.DEFAULT_SETTINGS.amazonUS);
});

optionsForm.oldReddit.addEventListener('change', event => {
  OPTIONS.DEFAULT_SETTINGS.oldReddit = event.target.checked;
  chrome.storage.sync.set({ OPTIONS });
});

optionsForm.amazonUS.addEventListener('change', event => {
  OPTIONS.DEFAULT_SETTINGS.amazonUS = event.target.checked;
  chrome.storage.sync.set({ OPTIONS });
});
