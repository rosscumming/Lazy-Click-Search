export const searchStackOverflow = (info, tab) => {
  chrome.tabs.create({
    url: `https://stackoverflow.com/search?q=${info.selectionText}`,
  });
};
