import { createContextMenus, youtube, reddit } from './helpers/contextMenu.js';
import { searchYoutube } from './helpers/searchYoutube.js';
import { searchReddit, searchOldReddit } from './helpers/searchReddit.js';
import { options } from './popup.js';

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
    searchReddit(info);
  }
});
