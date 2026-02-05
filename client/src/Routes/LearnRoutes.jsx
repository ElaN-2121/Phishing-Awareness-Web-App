import { Routes, Route } from "react-router-dom";
import Learn from "../pages/Learn";
import PhishingDetail from "../pages/PhishingDetail";

const LearnRoutes = () => {
  return (
    <Routes>
      <Route path="/learn" element={<Learn />} />
      <Route path="/learn/:slug" element={<PhishingDetail />} />
    </Routes>
  );
};

export default LearnRoutes;
