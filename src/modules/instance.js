export class PerformanceLibrary {
  constructor() {
    if(!window) {
      throw 'error: 请在浏览器环境下运行'
    }
    this.performance = window.performance;

    this.init();
  }

  init() {
    return {
      
    }
  }


}
