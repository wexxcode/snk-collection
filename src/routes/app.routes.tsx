import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Layout from '../components/Layout';
import { About } from '../pages/About';
import { Company } from '../pages/Company';
import { Home } from '../pages/Home';
import { Item } from '../pages/Item';
import { Login } from '../pages/Login';
import { User } from '../pages/User';

const AppRoutes: React.FC = () => (
    <Layout>
        <Switch>
        <Route path="/about" exact component={ About } />
            <Route path="/company" exact component={ Company } />
            <Route path="/itens" exact component= { Item } />
            <Route path="/login" exact component={ Login } />
            <Route path="/user" exact component={ User } />
            <Route path="/" exact component={Home} />
        </Switch>
    </Layout>
);

export default AppRoutes;