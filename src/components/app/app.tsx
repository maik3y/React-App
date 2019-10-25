import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter as Router } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

// Components
import Header from '../header/header';
import Content from '../content/content';
import Footer from '../footer/footer';

const App: React.FC = (): React.ReactElement => {
  return (
    <React.StrictMode>
      <Router>
        <Header />
        <Content />
        <Footer />
      </Router>
    </React.StrictMode>
  );
};

export default hot(observer(App));
