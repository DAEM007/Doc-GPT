import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
// const ChatUI = React.lazy(() => import("pages/ChatUI"));

const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={ <LandingPage /> }/>
        </Routes>
      </Router>
    </React.Suspense>
  );
};

export default ProjectRoutes;