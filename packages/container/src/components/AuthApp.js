import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { mount } from 'auth/AuthApp';

export default () => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { pathname } = history.location;
    const { onParentNavigate } = mount(ref.current, {
      initialPath: pathname,
      onNavigate({ pathname: nextPathname }) {
        if (pathname !== nextPathname) history.push(nextPathname);
      },
    });

    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref} />;
};
