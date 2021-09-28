import { contextMenus } from './helpers/contextMenu.js';
import { searchYoutube } from './helpers/searchYoutube.js';

chrome.runtime.onInstalled.addListener(() => {
  try {
    contextMenus();
    console.log('onInstalled runtime successful');
  } catch (error) {
    console.error('error yo wtf');
  }
});

chrome.contextMenus.onClicked.addListener(searchYoutube);
