export const isMobile = () => {
  return window.innerWidth < 768;
};

export const isTablet = () => {
  return window.innerWidth >= 768 && window.innerWidth < 1024;
};

export const isDesktop = () => {
  return window.innerWidth >= 1024;
};

export const getOrientation = () => {
  return window.innerHeight > window.innerWidth ? 'portrait' : 'landscape';
};

export const handleTouchStart = (e) => {
  const touch = e.touches[0];
  return {
    x: touch.clientX,
    y: touch.clientY
  };
};


export const detectSwipe = (start, end, threshold = 50) => {
  const diffX = end.x - start.x;
  const diffY = end.y - start.y;
  
  if (Math.abs(diffX) > Math.abs(diffY)) {
    if (Math.abs(diffX) > threshold) {
      return diffX > 0 ? 'right' : 'left';
    }
  } else {
    if (Math.abs(diffY) > threshold) {
      return diffY > 0 ? 'down' : 'up';
    }
  }
  return null;
};