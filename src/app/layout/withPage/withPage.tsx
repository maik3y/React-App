import * as React from 'react';
import './withPage.scss';

const withPage = <P extends object>(title: string, Component: React.ComponentType<P>): React.FC<P> => ({
  ...props
}: {}) => (
  <div className="page">
    <div className="page-title">
      <h2>{title}</h2>
    </div>
    <div className="page-content">
      <Component {...(props as P)} />
    </div>
  </div>
);

export default withPage;
