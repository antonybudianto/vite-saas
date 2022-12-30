import { FC } from 'react';
import { Navigate, Route } from 'react-router-dom';

import GlobalLoader from './Loading/GlobalLoader';

interface CustomRouteProps {
  user: unknown;
  loading: boolean;
  redirectNoAuth?: string;
  redirectAuth?: string;
  component: any;
  skipLoading?: boolean;
}

const CustomRoute: FC<CustomRouteProps> = ({
  component: Cmp,
  redirectAuth,
  redirectNoAuth,
  skipLoading,
  user,
  loading,
}) => {
  if (loading && !skipLoading) {
    return (
      <>
        <GlobalLoader />
      </>
    );
  }

  if (user && redirectAuth) {
    return (
      <>
        <Navigate replace to={redirectAuth} />
      </>
    );
  }

  if (!user && redirectNoAuth) {
    return (
      <>
        <Navigate replace to={redirectNoAuth} />
      </>
    );
  }

  // const RouteCmp = (p) => <Cmp loading={loading} {...p} />;

  // return <Route render={RouteCmp} />;

  return <Cmp loading={loading} />;
};

export default CustomRoute;
