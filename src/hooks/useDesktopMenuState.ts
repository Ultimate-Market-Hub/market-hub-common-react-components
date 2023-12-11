import { useSyncExternalStore } from 'react';

const STORAGE_KEY_DESKTOP_MENU = 'umh-desktop-menu-state';

const subscribe = (callback: () => void) => {
  window.addEventListener('storage', callback);

  return () => window.removeEventListener('storage', callback);
};

const getSnapshot = () => {
  const storageValue = localStorage.getItem(STORAGE_KEY_DESKTOP_MENU);

  return storageValue === 'true';
};

export const useDesktopMenuState = () => {
  const isOpen = useSyncExternalStore(subscribe, getSnapshot);

  const toggle = () => {
    const newValue = `${!isOpen}`;
    localStorage.setItem(STORAGE_KEY_DESKTOP_MENU, newValue);

    window.dispatchEvent(
      new StorageEvent('storage', {
        key: STORAGE_KEY_DESKTOP_MENU,
        newValue,
        oldValue: `${isOpen}`,
        storageArea: window.localStorage,
        url: window.location.href,
      })
    );
  };

  return { isOpen, toggle };
};
