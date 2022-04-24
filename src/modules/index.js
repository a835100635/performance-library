import { PerformanceLibrary } from './instance';

export const createModules = () => {
  return {
    performanceLibrary: new PerformanceLibrary()
  }
}
