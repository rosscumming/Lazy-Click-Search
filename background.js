import { createContextMenus } from './helpers/contextMenu.js';
import { contextMenuChecks } from './helpers/contextMenuChecks.js';
import { onInstallDefaultOptions } from './helpers/settings.js';

chrome.runtime.onInstalled.addListener(() => {
  try {
    createContextMenus();
    onInstallDefaultOptions();
  } catch (error) {
    throw error;
  }
});

chrome.contextMenus.onClicked.addListener(info => {
  contextMenuChecks(info);
});

chrome.storage.onChanged.addListener((changes, area) => {
  if (area === 'sync' && changes.OPTIONS?.DEFAULT_SETTINGS?.newValue) {
    Boolean(changes.OPTIONS.DEFAULT_SETTINGS.newValue.oldReddit);
    Boolean(changes.OPTIONS.DEFAULT_SETTINGS.newValue.amazonUS);
  }
});

chrome.storage.sync.get(['OPTIONS'], result => {
  console.log(result);
});
