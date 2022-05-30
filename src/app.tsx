import React from 'react';
import { Provider } from '@/context';
import '@/theme/theme.less';

export function rootContainer(container: any) {
  return React.createElement(Provider, null, container);
}
