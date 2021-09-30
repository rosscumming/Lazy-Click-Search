export const searchReddit = (info, tab) => {
  chrome.tabs.create({
    url: `https://www.reddit.com/search/?q=${info.selectionText}`,
  });
};

export const searchOldReddit = (info, tab) => {
  chrome.tabs.create({
    url: `https://old.reddit.com/search?q=${info.selectionText}`,
  });
};
