import { youtube, reddit, amazonUK, stackOverflow } from './contextMenu.js';
import { searchYoutube } from './sites/searchYoutube.js';
import { searchReddit, searchOldReddit } from './sites/searchReddit.js';
import { searchAmazonUK, searchAmazonUS } from './sites/searchAmazon.js';
import { searchStackOverflow } from './sites/searchStackOverflow.js';

export const contextMenuChecks = info => {
  if (youtube.id === info.menuItemId) searchYoutube(info);

  if (stackOverflow.id === info.menuItemId) searchStackOverflow(info);

  if (reddit.id === info.menuItemId) {
    chrome.storage.sync.get('OPTIONS', result => {
      result.OPTIONS.DEFAULT_SETTINGS.oldReddit
        ? searchOldReddit(info)
        : searchReddit(info);
    });
  }

  if (amazonUK.id === info.menuItemId) {
    chrome.storage.sync.get('OPTIONS', result => {
      result.OPTIONS.DEFAULT_SETTINGS.amazonUS
        ? searchAmazonUS(info)
        : searchAmazonUK(info);
    });
  }
};
