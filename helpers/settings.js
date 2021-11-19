export const OPTIONS = {};

export const onInstallDefaultOptions = sites => {
  chrome.storage.sync.set({
    OPTIONS: {
      DEFAULT_SETTINGS: {
        oldReddit: false,
        amazonUS: false,
      },
      CONTEXT_MENU: {
        ...sites.reduce((acc, site) => {
          const key = `enable${site.name}`;
          return {
            ...acc,
            [key]: true,
          };
        }, {}),
      },
    },
  });
};

export const setMenuItemVisibility = (siteId, bool) => {
  chrome.contextMenus.update(`${siteId}`, {
    visible: bool,
  });
};
