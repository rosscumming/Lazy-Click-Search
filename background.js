import { contextMenus } from './helpers/contextMenu.js';

chrome.runtime.onInstalled.addListener(() => {
  try {
    contextMenus();
    console.log('onInstalled runtime successful');
  } catch (error) {
    console.error('error yo wtf');
  }
});
