import React from 'react';
import './styles.scss';
import { useSelector } from 'react-redux';

function LoadingCircle({ width, height }) {
  const theme = useSelector((state) => state.theme);
  return (
    <>
      <div
        className={`load`}
        style={{ width: `${width}px`, height: `${height}px` }}
      >
        <svg
          viewBox="20 20 40 40"
          style={{
            width: `${width}px`,
            height: `${height}px`,
          }}
        >
          <circle r="10" cy="40" cx="40"></circle>
        </svg>
      </div>
    </>
  );
}

export default LoadingCircle;
