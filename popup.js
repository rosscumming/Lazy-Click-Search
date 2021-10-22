import { OPTIONS } from './helpers/settings.js';

chrome.storage.sync.get('OPTIONS', data => {
  Object.assign(OPTIONS, data.OPTIONS);
  contextMenuForm.contextReddit.checked = Boolean(
    OPTIONS.CONTEXT_MENU.enableReddit
  );
  contextMenuForm.contextYoutube.checked = Boolean(
    OPTIONS.CONTEXT_MENU.enableYoutube
  );
  contextMenuForm.contextAmazon.checked = Boolean(
    OPTIONS.CONTEXT_MENU.enableAmazon
  );
  contextMenuForm.contextStackOverflow.checked = Boolean(
    OPTIONS.CONTEXT_MENU.enableStackOverlow
  );

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

contextMenuForm.contextReddit.addEventListener('change', event => {
  OPTIONS.CONTEXT_MENU.enableReddit = event.target.checked;
  chrome.storage.sync.set({ OPTIONS });
});

contextMenuForm.contextYoutube.addEventListener('change', event => {
  OPTIONS.CONTEXT_MENU.enableYoutube = event.target.checked;
  chrome.storage.sync.set({ OPTIONS });
});

contextMenuForm.contextAmazon.addEventListener('change', event => {
  OPTIONS.CONTEXT_MENU.enableAmazon = event.target.checked;
  chrome.storage.sync.set({ OPTIONS });
});

contextMenuForm.contextStackOverflow.addEventListener('change', event => {
  OPTIONS.CONTEXT_MENU.enableStackOverlow = event.target.checked;
  chrome.storage.sync.set({ OPTIONS });
});
