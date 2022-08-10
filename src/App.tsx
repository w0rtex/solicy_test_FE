import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Spinner
import { Spin } from "antd";

// Global styled
import GlobalStyles from "./styles/Global.styled";

// Antd stylesheet
import "antd/dist/antd.css";

// Components
import Footer from "./components/Footer";

// Pages
const Home = lazy(() => import("./pages/Home"));
const Account = lazy(() => import("./pages/Account"));

function App() {
    return (
        <>
            <GlobalStyles />

            <Router>
                <Suspense fallback={<Spin />}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="accounts/:id" element={<Account />} />
                    </Routes>
                </Suspense>

                <Footer />
            </Router>
        </>
    );
}

export default App;
