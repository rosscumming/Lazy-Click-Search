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

contextMenuForm.contextReddit.addEventListener('change', event => {
  OPTIONS.CONTEXT_MENU.enableReddit = event.target.checked;
  chrome.storage.sync.set({ OPTIONS });

  if (!OPTIONS.CONTEXT_MENU.enableReddit) {
    chrome.contextMenus.update('searchMenuIdReddit', {
      visible: false,
    });
  } else {
    chrome.contextMenus.update('searchMenuIdReddit', {
      visible: true,
    });
  }
});

contextMenuForm.contextYoutube.addEventListener('change', event => {
  OPTIONS.CONTEXT_MENU.enableYoutube = event.target.checked;
  chrome.storage.sync.set({ OPTIONS });

  if (!OPTIONS.CONTEXT_MENU.enableYoutube) {
    chrome.contextMenus.update('searchMenuIdYt', {
      visible: false,
    });
  } else {
    chrome.contextMenus.update('searchMenuIdYt', {
      visible: true,
    });
  }
});

contextMenuForm.contextAmazon.addEventListener('change', event => {
  OPTIONS.CONTEXT_MENU.enableAmazon = event.target.checked;
  chrome.storage.sync.set({ OPTIONS });

  if (!OPTIONS.CONTEXT_MENU.enableAmazon) {
    chrome.contextMenus.update('searchMenuIdAmazonUK', {
      visible: false,
    });
  } else {
    chrome.contextMenus.update('searchMenuIdAmazonUK', {
      visible: true,
    });
  }
});

contextMenuForm.contextStackOverflow.addEventListener('change', event => {
  OPTIONS.CONTEXT_MENU.enableStackOverlow = event.target.checked;
  chrome.storage.sync.set({ OPTIONS });

  if (!OPTIONS.CONTEXT_MENU.enableStackOverlow) {
    chrome.contextMenus.update('searchMenuIdStackOverflow', {
      visible: false,
    });
  } else {
    chrome.contextMenus.update('searchMenuIdStackOverflow', {
      visible: true,
    });
  }
});

optionsForm.oldReddit.addEventListener('change', event => {
  OPTIONS.DEFAULT_SETTINGS.oldReddit = event.target.checked;
  chrome.storage.sync.set({ OPTIONS });
});

optionsForm.amazonUS.addEventListener('change', event => {
  OPTIONS.DEFAULT_SETTINGS.amazonUS = event.target.checked;
  chrome.storage.sync.set({ OPTIONS });
});
