const defaults = require('./config');
const CommonService = require('./commonService');
const { debounce } = require('@/utils/index');

class UAAService extends CommonService {
  constructor(instanceConfig: any) {
    super(instanceConfig);

    this.timer = null;
    this.debounce4 = debounce(1000);
    this.RESULT_CODE = {
      SUCCESS: '0',
    };
  }

  async commonRequest(url: string, option: any) {
    const response = await this.request(url, option);
    return response;
  }

  async authRequest(url: string, option: any, selfConfig: any = {}) {
    const { needNotication = true } = selfConfig;

    const response = await this.request(url, option);
    const { success, data } = response || {};
    const { resultCode, resultMsg } = data || {};

    if (!success) {
      const { errorMsg, errCode } = response;

      if (errCode === 'SESSION_TIMEOUT') {
        window.location.href = `${window.location.origin}/mpaas/login`;
        if (this.timer) {
          clearTimeout(this.timer);
          this.timer = null;
        }
        this.timer = setTimeout(() => {
          // notification.error({ message: errorMsg });
        }, 300);
        return '';
      }
      // needNotication &&
      //   notification.error({ message: errorMsg, description: `${errorMsg}` });
      return '';
    }

    if (resultCode !== this.RESULT_CODE.SUCCESS && resultMsg) {
      // needNotication && notification.error({ message: resultMsg });
      return '';
    }

    return response;
  }
}

module.exports = new UAAService(defaults);
