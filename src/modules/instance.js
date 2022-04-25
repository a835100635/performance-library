import { NAVIGATION_TYPE } from '../constant';

export class PerformanceLibrary {
  constructor(options) {
    console.log('options', options);
    if(!window) {
      throw 'error: 请在浏览器环境下运行'
    }
    // performance 对象
    this._performance = window.performance;
    // 
    this.info = {};

    // 初始化执行
    this.init();
  }

  // 初始化执行
  init() {
    const { redirectCount, type } = this._performance.navigation;
    // 加载方式
    this.info.loadingMethod = NAVIGATION_TYPE[type];
    // 重定向次数
    this.info.redirectCount = redirectCount;

    const isTiming = 'PerformanceNavigationTiming' in this._performance;
    const timing = isTiming ? this._performance.timing : this._performance.getEntriesByType('navigation')[0];
    this.handleTiming(timing);
  }

  // 返回最后的结果
  getInfo() {
    return this.info;
  }

  // 计算yong'hsu
  handleTiming(timing) {
    this.info.timing = timing;
    const { redirectCount, redirectEnd, domainLookupStart, fetchStart } = timing;
    Object.assign(this.info, {
      // 跳转耗时
      redirect: {
        timeConsuming: redirectEnd - redirectCount,
        startTime: redirectCount,
        Endtime: redirectEnd
      },
      // app cache 耗时
      cache: {
        timeConsuming: domainLookupStart - fetchStart,
        startTime: fetchStart,
        Endtime: domainLookupStart
      }
    })
  }

}
