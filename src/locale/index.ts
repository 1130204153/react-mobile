import defaultI18n from './en';

export default function useI18n() {
  const formatMessage = (
    messageDescriptor: { id: string },
    value: { [props: string]: string } = {},
  ) => {
    const { id } = messageDescriptor;

    let i18n: any = window.localStorage.getItem('MessagesUseI18n') || '';

    if (i18n) {
      try {
        i18n = JSON.parse(i18n);
      } catch (e) {
        console.error(e);
      }
    }
    let handleValue: any = i18n[id] || defaultI18n[id] || '';

    const keyList = Object.keys(value || {});
    if (handleValue && Array.isArray(keyList) && keyList.length > 0) {
      keyList.forEach((text: string) => {
        const patten = new RegExp(`{${text}}`, 'g');
        handleValue = handleValue.replace(patten, value[text]);
      });
    }
    return handleValue || id || '';
  };

  return { formatMessage };
}

export const formatMessage = (
  messageDescriptor: { id: string; defaultMessage?: string } = { id: '' },
  value: { [prop: string]: string } = {},
) => {
  const { id, defaultMessage } = messageDescriptor;
  let i18n: any = window.localStorage.getItem('MessagesUseI18n') || '';

  if (i18n) {
    try {
      i18n = JSON.parse(i18n);
    } catch (e) {
      console.error(e);
    }
  }
  let handleValue: any = i18n[id] || defaultI18n[id] || '';
  const keyList = Object.keys(value || {});
  if (handleValue && Array.isArray(keyList) && keyList.length > 0) {
    keyList.forEach(text => {
      const patten = new RegExp(`{${text}}`, 'g');
      handleValue = handleValue.replace(patten, value[text]);
    });
  }

  return handleValue || defaultMessage || id || '';
};

export const getLocale = () =>
  window.localStorage.getItem('current-lang') || 'en-US';

export const setLocale = (key: string) => {
  window.localStorage.setItem('current-lang', key);
};

export const setVersion = (version: string) => {
  window.localStorage.setItem(`version-${getLocale()}`, version);
};

export const getVersion = () =>
  window.localStorage.getItem(`version-${getLocale()}`) || '';

export const getLang = () =>
  window.localStorage.getItem('MessagesUseI18n') || '';

export const setLang = (langObj: any) => {
  window.localStorage.setItem(`i18n-${getLocale()}`, langObj);
};
