import { contextMenus } from './helpers/contextMenu.js';
import { searchYoutube } from './helpers/searchYoutube.js';
import { searchReddit } from './helpers/searchReddit.js';

chrome.runtime.onInstalled.addListener(() => {
  try {
    contextMenus();
  } catch (error) {
    throw error;
  }
});

chrome.contextMenus.onClicked.addListener(searchYoutube);
chrome.contextMenus.onClicked.addListener(searchReddit);
