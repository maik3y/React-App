import { Switch, Route } from 'react-router';
import React from 'react';
import { observer } from 'mobx-react-lite';

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

const home = withPage('Home', (): React.ReactElement => <></>);
const about = withPage('About', (): React.ReactElement => <></>);
const notFound = withPage('NotFound', (): React.ReactElement => <></>);

const Content: React.FC = (): JSX.Element => {
  return (
    <Switch>
      <Route exact path={'/'} component={home} />
      <Route exact path={'/about'} component={about} />
      <Route component={notFound} />
    </Switch>
  );
};
export default Content;
