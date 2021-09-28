export const contextMenus = () => {
  chrome.contextMenus.create(
    {
      id: 'Search With...',
      title: 'Search With...',
    },
    () => {}
  );
};
