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
  } catch (error) {
    throw error;
  }
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (youtube.id === info.menuItemId) {
    searchYoutube(info);
  }

  if (reddit.id === info.menuItemId) {
    chrome.storage.sync.get(['OPTIONS'], result => {
      if (result.OPTIONS.oldReddit === true) {
        searchOldReddit(info);
      } else {
        searchReddit(info);
      }
    });
  }

  if (amazonUK.id === info.menuItemId) {
    chrome.storage.sync.get(['OPTIONS'], result => {
      if (result.OPTIONS.amazonUS === true) {
        searchAmazonUS(info);
      } else {
        searchAmazonUK(info);
      }
    });
  }
});

chrome.storage.onChanged.addListener((changes, area) => {
  if (area === 'sync' && changes.OPTIONS?.newValue) {
    Boolean(changes.OPTIONS.newValue.oldReddit);
    Boolean(changes.OPTIONS.newValue.amazonUS);
  }
});
