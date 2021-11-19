import { OPTIONS } from './helpers/settings.js';
import { setMenuItemVisibility } from './helpers/settings.js';
import { sites } from './sites.js';

chrome.storage.sync.get('OPTIONS', data => {
  Object.assign(OPTIONS, data.OPTIONS);

  sites.forEach(site => {
    contextMenuForm[`context${site.name}`].checked = Boolean(
      OPTIONS.CONTEXT_MENU[`enable${site.name}`]
    );
  });

  optionsForm.oldReddit.checked = Boolean(OPTIONS.DEFAULT_SETTINGS.oldReddit);
  optionsForm.amazonUS.checked = Boolean(OPTIONS.DEFAULT_SETTINGS.amazonUS);
});

const menuOptionContainer = document.querySelector('.menu-option-container');
const options = sites.forEach(site => {
  const icon = document.createElement('img');
  icon.src = site.icon;
  icon.alt = site.name;

  const input = document.createElement('input');
  input.id = `context${site.name}`;
  input.name = `context${site.name}`;
  input.type = 'checkbox';

  input.addEventListener('change', event => {
    OPTIONS.CONTEXT_MENU[`enable${site.name}`] = event.target.checked;
    chrome.storage.sync.set({ OPTIONS });

    OPTIONS.CONTEXT_MENU[`enable${site.name}`]
      ? setMenuItemVisibility(site.id, true)
      : setMenuItemVisibility(site.id, false);
  });

  const menuOption = document.createElement('div');
  menuOption.classList.add('menu-option');

  const label = document.createElement('label');
  label.for = `context${site.name}`;

  const labelText = document.createElement('span');
  labelText.innerText = site.name;

  menuOption.appendChild(input);
  menuOption.appendChild(icon);

  label.appendChild(menuOption);
  label.appendChild(labelText);

  menuOptionContainer.appendChild(label);
});

optionsForm.oldReddit.addEventListener('change', event => {
  OPTIONS.DEFAULT_SETTINGS.oldReddit = event.target.checked;
  chrome.storage.sync.set({ OPTIONS });
});

optionsForm.amazonUS.addEventListener('change', event => {
  OPTIONS.DEFAULT_SETTINGS.amazonUS = event.target.checked;
  chrome.storage.sync.set({ OPTIONS });
});
