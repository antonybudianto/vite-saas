import React from 'react';

import { useUser } from '../../context/auth';

const HomeView = () => {
  const { user } = useUser();
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 mt-3">
          <div>Welcome Home, {user.displayName}</div>
        </div>
      </div>
    </div>
  );
};

export default HomeView;
