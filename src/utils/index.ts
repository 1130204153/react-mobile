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

export function isUrl(path: string) {
  const reg =
    /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;
  return reg.test(path);
}
