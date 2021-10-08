import {
  createContextMenus,
  youtube,
  reddit,
  amazonUK,
} from './helpers/contextMenu.js';
import { searchYoutube } from './helpers/searchYoutube.js';
import { searchReddit, searchOldReddit } from './helpers/searchReddit.js';
import { searchAmazonUK, searchAmazonUS } from './helpers/searchAmazon.js';

chrome.runtime.onInstalled.addListener(() => {
  try {
    createContextMenus();
    chrome.storage.sync.set({ OPTIONS: { oldReddit: false, amazonUS: false } });
  } catch (error) {
    throw error;
  }
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (youtube.id === info.menuItemId) {
    searchYoutube(info);
  }

  if (reddit.id === info.menuItemId) {
    chrome.storage.sync.get('OPTIONS', result => {
      result.OPTIONS.oldReddit ? searchOldReddit(info) : searchReddit(info);
    });
  }

  if (amazonUK.id === info.menuItemId) {
    chrome.storage.sync.get('OPTIONS', result => {
      result.OPTIONS.amazonUS ? searchAmazonUS(info) : searchAmazonUK(info);
    });
  }
});

chrome.storage.onChanged.addListener((changes, area) => {
  if (area === 'sync' && changes.OPTIONS?.newValue) {
    Boolean(changes.OPTIONS.newValue.oldReddit);
    Boolean(changes.OPTIONS.newValue.amazonUS);
  }
});
