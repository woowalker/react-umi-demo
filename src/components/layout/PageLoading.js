import React, { useState, useEffect } from 'react';
import '@/styles/layout/pageLoading.less';

function PageLoading(props) {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    let timer = setInterval(() => {
      if (props.pastDelay && percent < 90) {
        setPercent(Number((percent + 0.1).toFixed(1)));
      } else {
        clearInterval(timer);
      }
    }, percent);
    return () => {
      clearInterval(timer);
    };
  });

  if (!props.pastDelay) {
    return null;
  }
  return (
    <div className="page-loading">
      <div
        className="page-loading__indicator"
        style={{ left: `-${100 - percent}%` }}
      />
    </div>
  );
}

export default PageLoading;
