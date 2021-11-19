export const createContextMenus = sites => {
  sites.forEach(site =>
    chrome.contextMenus.create({
      id: site.id,
      title: `Search ${site.name} for '%s'`,
      contexts: ['selection'],
    })
  );
};
