export const youtube = {
  id: 'searchMenuIdYt',
  title: "Search YouTube for '%s'",
  contexts: ['selection'],
};

export const reddit = {
  id: 'searchMenuIdReddit',
  title: "Search Reddit for '%s'",
  contexts: ['selection'],
};

export const createContextMenus = () => {
  chrome.contextMenus.create(youtube);
  chrome.contextMenus.create(reddit);
};
