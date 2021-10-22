import { createContextMenus } from './helpers/contextMenu.js';
import { contextMenuChecks } from './helpers/contextMenuChecks.js';
import {
  onInstallDefaultOptions,
  checkSelectedMenuOptions,
} from './helpers/settings.js';

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
  checkSelectedMenuOptions(info);
});

chrome.storage.onChanged.addListener((changes, area) => {
  if (area === 'sync' && changes.OPTIONS?.DEFAULT_SETTINGS?.newValue) {
    Boolean(changes.OPTIONS.DEFAULT_SETTINGS.newValue.oldReddit);
    Boolean(changes.OPTIONS.DEFAULT_SETTINGS.newValue.amazonUS);
  }

  if (area === 'sync' && changes.OPTIONS?.CONTEXT_MENU?.newValue) {
    Boolean(changes.OPTIONS.CONTEXT_MENU.newValue.enableReddit);
    Boolean(changes.OPTIONS.CONTEXT_MENU.newValue.enableYoutube);
    Boolean(changes.OPTIONS.CONTEXT_MENU.newValue.enableAmazon);
    Boolean(changes.OPTIONS.CONTEXT_MENU.newValue.enableStackOverflow);
  }
});
