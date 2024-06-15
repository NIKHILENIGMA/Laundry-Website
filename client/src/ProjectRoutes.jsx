import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"


function ProjectRoutes() {
  return (
    <Suspense fallback={<>Loading...</>}>
        <Router>
            <Routes>
                {/* <Route path='/' element={<Home />}/>   */}
                {/* <Route path='*' element={<NotFound/>} /> */}
            </Routes>  
        </Router>
    </Suspense>
  )
}

export default ProjectRoutes

