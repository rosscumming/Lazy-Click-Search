export const OPTIONS = {};

export const onInstallDefaultOptions = () => {
  chrome.storage.sync.set({
    OPTIONS: {
      DEFAULT_SETTINGS: {
        oldReddit: false,
        amazonUS: false,
      },
      CONTEXT_MENU: {
        enableYoutube: true,
        enableReddit: true,
        enableAmazon: true,
        enableStackOverlow: true,
      },
    },
  });
};

export const checkSelectedMenuOptions = () => {
  console.log(OPTIONS);
};
