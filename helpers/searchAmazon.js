export const searchAmazonUK = (info, tab) => {
  chrome.tabs.create({
    url: `https://www.amazon.co.uk/s?k=${info.selectionText}`,
  });
};
