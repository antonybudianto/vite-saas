import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import GlobalLoader from './Loading/GlobalLoader';

function CustomRoute({
  component: Cmp,
  redirectAuth,
  redirectNoAuth,
  skipLoading,
  user,
  loading,
}) {
  if (loading && !skipLoading) {
    return <GlobalLoader />;
  }

  if (user && redirectAuth) {
    return <Redirect to={redirectAuth} />;
  }

  if (!user && redirectNoAuth) {
    return <Redirect to={redirectNoAuth} />;
  }

  const RouteCmp = (p) => <Cmp loading={loading} {...p} />;

  return <Route render={RouteCmp} />;
}

export default CustomRoute;
