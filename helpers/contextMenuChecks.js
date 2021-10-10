import { youtube, reddit, amazonUK } from './contextMenu.js';
import { searchYoutube } from './searchYoutube.js';
import { searchReddit, searchOldReddit } from './searchReddit.js';
import { searchAmazonUK, searchAmazonUS } from './searchAmazon.js';

export const contextMenuChecks = info => {
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
};
