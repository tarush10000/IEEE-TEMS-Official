import React from 'react';
import PixelBlast from '../PixelBlast/PixelBlast';

const WithPixelBlast = (WrappedComponent) => {
  return function WithPixelBlastWrapper(props) {
    return (
      <div style={{ position: 'relative', minHeight: '100vh', background: 'black' }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0
        }}>
          <PixelBlast
            variant="circle"
            pixelSize={6}
            color="#B19EEF"
            patternScale={3}
            patternDensity={1.2}
            pixelSizeJitter={0.5}
            enableRipples
            rippleSpeed={0.4}
            rippleThickness={0.12}
            rippleIntensityScale={1.5}
            speed={0.6}
            edgeFade={0.25}
            transparent
          />
        </div>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <WrappedComponent {...props} />
        </div>
      </div>
    );
  };
};

export default WithPixelBlast;
