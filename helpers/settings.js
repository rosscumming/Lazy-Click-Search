export const OPTIONS = {};

export const onInstallDefaultOptions = () => {
  chrome.storage.sync.set({ OPTIONS: { oldReddit: false, amazonUS: false } });
};
