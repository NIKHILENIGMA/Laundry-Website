import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { MainLayout } from "./pages"

const Home = React.lazy(() => import("./pages/Home"))
const NotFound = React.lazy(() => import("./pages/NotFound")) 
const Order = React.lazy(() => import("./pages/Order")) 
const Payment = React.lazy(() => import("./pages/Payment")) 
const Services = React.lazy(() => import("./pages/Services")) 

function ProjectRoutes() {
  return (
    <Suspense fallback={<>Loading...</>}>
        <Router>
            <Routes>
                <Route path='/' element={<MainLayout />}>
                  <Route path='' index  element={<Home />}/>
                  <Route path='order' element={<Order />}/>
                  <Route path='payment' element={<Payment />}/>
                  <Route path='services' element={<Services />}/>
                </Route>
                <Route path='*' element={<NotFound/>} />
            </Routes>  
        </Router>
    </Suspense>
  )
}

export default ProjectRoutes

