import { Switch, Route } from 'react-router';
import React from 'react';
import withPage from '../page/with-page';

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
