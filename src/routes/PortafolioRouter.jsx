import { BrowserRouter as Router,Route, Navigate, Routes } from "react-router-dom";
import React, { lazy, Suspense } from "react";
const IntershipDetailScreen = lazy(() => import("../pages/IntershipDetailScreen"));
const HomeScreen = lazy(() => import("../pages/HomeScreen"));
const PortafolioRouter=()=>{
    return(
      <div>
        <Router>
            <Suspense fallback={ 
              <div className="spinner" id="spinner">
                <img src="carga.gif" alt="GIF infinito" />
              </div>}>
              <Routes>
                {/* <Route exact path="/intership/:id">
                  <IntershipDetailScreen />
                </Route> */}

                <Route path="/intership/:id" element={<IntershipDetailScreen />} />
                <Route path="/home" element={<HomeScreen />} />
                <Route path="*" element={<Navigate to="/home" />} />
              </Routes>
            </Suspense>
        </Router>
      </div>
      
    );
}
export default PortafolioRouter;