import { PerformanceLibrary } from './instance';

export const createModules = (options) => {
  return {
    performanceLibrary: new PerformanceLibrary(options)
  }
}
