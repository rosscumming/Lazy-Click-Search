export const searchAmazonUK = (info, tab) => {
  chrome.tabs.create({
    url: `https://www.amazon.co.uk/s?k=${info.selectionText}`,
  });
};

export const searchAmazonUS = (info, tab) => {
  chrome.tabs.create({
    url: `https://www.amazon.com/s?k=${info.selectionText}`,
  });
};
