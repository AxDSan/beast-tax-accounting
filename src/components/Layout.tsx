import * as React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import SmoothScroll from "./SmoothScroll"
import { AdminDashboard } from "./AdminDashboard"

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <SmoothScroll>
      <div className="min-h-screen flex flex-col bg-dark text-white font-sans">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <AdminDashboard />
      </div>
    </SmoothScroll>
  )
}

export default Layout

