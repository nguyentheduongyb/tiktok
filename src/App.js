import { Fragment, useState, useRef, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './App.module.scss';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import DefaultLayout from '~/layouts';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faForwardStep } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function App() {
    const main = useRef()
    const buttonContainer = useRef()
    const [isActive, setIsActive] = useState(false)
    const [scrollTop, setScrollTop] = useState(0);
    const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }
    useEffect(() => {
        const handleScroll = event => {
            setScrollTop(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (scrollTop > 0) {
            setIsActive(true);
        }
        else {
            setIsActive(false);
        }
    }, [scrollToTop])
    return (
        <Router>
            <div className="App" ref={main}>
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;
                        let Layout = DefaultLayout;

                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
            <div ref={buttonContainer} className={cx("buttonContainer", isActive ? "active" : "fadeOut")} style={{ transform: isActive ? 'translateY(0px)' : 'translateY(50px)' }}>
                <button onClick={scrollToTop} className={cx("buttonBottom")}><FontAwesomeIcon icon={faForwardStep} /></button>
            </div>
        </Router>
    );
}

export default App;
