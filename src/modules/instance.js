import { NAVIGATION_TYPE } from '../constant';

export class PerformanceLibrary {
  constructor(options) {
    console.log('options', options);
    if(!window) {
      throw 'error: 请在浏览器环境下运行'
    }
    // performance 对象
    this._performance = window.performance;
    console.log(this._performance);
    // 
    this.info = {};

    // 初始化执行
    this.init();
  }

  // 初始化执行
  init() {
    const _info = this.info;
    const { navigation: { redirectCount, type }, memory } = this._performance;
    // 加载方式
    _info.loadingMethod = NAVIGATION_TYPE[type];
    // 重定向次数
    _info.redirectCount = redirectCount;
    // 内存相关
    _info.memory = memory;
    const { usedJSHeapSize, totalJSHeapSize } = memory;
    // 当使用内存大于总内存时出现内存泄漏
    if (usedJSHeapSize > totalJSHeapSize) {
      // 内存泄漏
      _info.memory.memoryLeakage = true;
    } else {
      _info.memory.memoryLeakage = false;
    }

    const navigation = this._performance.getEntriesByType('navigation')
    const isTiming = 'PerformanceNavigationTiming' in this._performance && navigation.length;
    const timing = isTiming ? this._performance.timing : navigation[0];

    this.handleTiming(timing);
  }

  // 返回最后的结果
  getInfo() {
    return this.info;
  }

  // 计算用时
  handleTiming(timing) {

  }

}
