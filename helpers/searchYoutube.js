export const searchYoutube = (info, tab) => {
  chrome.tabs.create({
    url: `https://www.youtube.com/results?search_query=${info.selectionText}`,
  });
};
