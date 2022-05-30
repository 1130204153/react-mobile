import { defineConfig } from 'umi';
import px2rem from 'postcss-plugin-px2rem';
import routes from './routes';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes,
  fastRefresh: {},
  hash: true,
  extraPostCSSPlugins: [
    px2rem({
      rootValue: 100, // 兼容 ant mobile
      propBlackList: [], // 这些属性不需要转换
    }),
  ],
});
