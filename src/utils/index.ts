import reduce from 'lodash/reduce';

export const debounce = (wait: number) => {
  let timer: any;
  return function (fn: any) {
    if (timer) return;
    timer = setTimeout(() => {
      clearTimeout(timer);
      timer = null;
      fn?.();
    }, wait);
  };
};

export function publicMenuAdapter(srcData: any) {
  if (!srcData) return [];

  srcData.forEach((item: any) => {
    let { landingPage } = item;
    if (!landingPage) {
      landingPage = { pageUrl: '' };
    }
    item.key = item.id.toString();
    item.note = item.label;
    item.label = item.menuName;
    item.path =
      item.menuType === '01' ? `path_${item.menuCode}` : landingPage.pageUrl;
    item.icon = item.iconUrl;
    item.disaled = true;
    if (item.subMenus && item.subMenus.length > 0) {
      item.children = item.subMenus;
    }
    publicMenuAdapter(item.subMenus);
  });
  return srcData;
}

export function menuAdapter(srcData: any) {
  if (!srcData) return [];
  const result: any = [];
  srcData.forEach((item: any) => {
    let { landingPage } = item;
    if (!landingPage) {
      landingPage = { pageUrl: '' };
    }
    const _i = {
      key: item.menuCode,
      name: item.menuName,
      path: landingPage.pageUrl || `path_${item.menuCode}`,
      icon: item.iconUrl,
      children: menuAdapter(item.subMenus),
    };
    result.push(_i);
  });
  return result;
}

export function flatRoute(array: any) {
  return reduce(
    array,
    (previous, current) =>
      Array.isArray(current.subMenus)
        ? [
          ...previous,
          current?.landingPage?.pageUrl || null,
          ...flatRoute(current.subMenus),
        ]
        : [...previous, current?.landingPage?.pageUrl || null],
    [],
  );
}

export function isUrl(path: string) {
  const reg =
    /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;
  return reg.test(path);
}
