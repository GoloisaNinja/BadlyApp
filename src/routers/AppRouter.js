import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HomePage from '../components/HomePage'
import GetIdeaPage from '../components/GetIdeaPage'
import AboutPage from '../components/AboutPage'
import PageNotFound from '../components/PageNotFound'
import ScrollToTop from '../components/ScrollToTop'


const AppRouter = () => (
    <BrowserRouter>
        <div className="flex-wrapper">
            <ScrollToTop />
            <Header />
            <Switch>
                <Route path="/" component={HomePage} exact={true} />
                <Route path="/form" component={GetIdeaPage} />
                <Route path="/about" component={AboutPage} />
                <Route component={PageNotFound} />
            </Switch>
            <Footer />
        </div>
    </BrowserRouter>
)

export default AppRouter