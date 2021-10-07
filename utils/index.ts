const MOBILE_MAX_WIDTH = 768;

export const isMobileDevice = () => {
  return !!(
    typeof window !== 'undefined' && window.innerWidth < MOBILE_MAX_WIDTH
  );
};
