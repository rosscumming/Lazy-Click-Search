import { search } from './sites/search.js';

export const contextMenuChecks = (info, sites) => {
  const searchSite = sites.filter(site => site.id === info.menuItemId)[0];
  search(info, searchSite);

  // if (reddit.id === info.menuItemId) {
  //   chrome.storage.sync.get('OPTIONS', result => {
  //     result.OPTIONS.DEFAULT_SETTINGS.oldReddit
  //       ? searchOldReddit(info)
  //       : searchReddit(info);
  //   });
  // }

  // if (amazonUK.id === info.menuItemId) {
  //   chrome.storage.sync.get('OPTIONS', result => {
  //     result.OPTIONS.DEFAULT_SETTINGS.amazonUS
  //       ? searchAmazonUS(info)
  //       : searchAmazonUK(info);
  //   });
  // }
};
