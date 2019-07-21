import React from 'react';
import Layout from './components/Layouts/Layout';
import BurgerBuilder from '../src/views/BurgerBuilder/BurgerBuilder'

const App = () => {
  return (
    <div>
      <Layout>
        <BurgerBuilder />
      </Layout>
    </div>
  );
}

export default App;
