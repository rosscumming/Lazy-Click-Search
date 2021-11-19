import { createContextMenus } from './helpers/contextMenu.js';
import { contextMenuChecks } from './helpers/contextMenuChecks.js';
import { onInstallDefaultOptions } from './helpers/settings.js';
import { sites } from './sites.js';

chrome.runtime.onInstalled.addListener(() => {
  try {
    createContextMenus(sites);
    onInstallDefaultOptions(sites);
  } catch (error) {
    throw error;
  }
});

chrome.contextMenus.onClicked.addListener(info => {
  contextMenuChecks(info, sites);
});

chrome.storage.onChanged.addListener((changes, area) => {
  if (area === 'sync' && changes.OPTIONS?.DEFAULT_SETTINGS?.newValue) {
    Boolean(changes.OPTIONS.DEFAULT_SETTINGS.newValue.oldReddit);
    Boolean(changes.OPTIONS.DEFAULT_SETTINGS.newValue.amazonUS);
  }

  if (area === 'sync' && changes.OPTIONS?.CONTEXT_MENU?.newValue) {
    sites.forEach(site =>
      Boolean(changes.OPTIONS.CONTEXT_MENU.newValue[`enable${site.name}`])
    );
  }
});
