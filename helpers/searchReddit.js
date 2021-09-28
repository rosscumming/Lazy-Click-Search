export const searchReddit = (info, tab) => {
  chrome.tabs.create({
    url: `https://www.reddit.com/search/?q=${info.selectionText}`,
  });
};
