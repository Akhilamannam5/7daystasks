export const reportPerformance = () => {
  const loadTime = performance.now();

  console.log("⚡ Page Load Time:", loadTime.toFixed(2), "ms");
};