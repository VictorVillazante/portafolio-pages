import { BrowserRouter as Router,Route, Navigate, Routes } from "react-router-dom";
import React, { lazy, Suspense } from "react";
const IntershipDetailScreen = lazy(() => import("../pages/IntershipDetailScreen"));
const HomeScreen = lazy(() => import("../pages/HomeScreen"));
const PortafolioRouter=()=>{
    return(
      <Router>
          <Suspense fallback={<h1 className="text-center">Loading...</h1>}>
            <Routes>
              <Route end path="/home" element={<HomeScreen />} />
              <Route end path="/intership/:id" element={<IntershipDetailScreen />} />
              <Route path="*" element={<Navigate to="/home" />} />
            </Routes>
          </Suspense>
      </Router>
    );
}
export default PortafolioRouter;