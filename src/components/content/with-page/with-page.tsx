import { observer } from 'mobx-react-lite';
import React from 'react';
import './with-page.scss';

const withPage = <P extends object>(title: string, Component: React.ComponentType<P>): React.FC<P> => {
  const Page = ({ ...props }: {}): React.ReactElement => (
    <section className="page">
      <h1 className="page__title">{title}</h1>
      <main className="page__content">
        <Component {...(props as P)} />
      </main>
    </section>
  );
  return observer(Page);
};
export default withPage;
