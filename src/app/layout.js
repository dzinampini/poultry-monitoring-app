import { cookies } from 'next/headers';
import { getUserFromCookie } from '../lib/auth';
import BootstrapClient from './BootstrapClient';
import UserMenu from './components/UserMenu';
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';

export const metadata = {
  title: 'Poultry Monitoring App',
  description: 'Real-time poultry disease detection and security monitoring system',
};

export default function RootLayout({ children }) {
  // Read cookies on server
  const cookieStore = cookies();
  const token = cookieStore.get('token')?.value
  // console.log('token', token)
  const user = getUserFromCookie(token);


  return (
    <html lang="en">
      <body>
        <BootstrapClient /> {/* Loads Bootstrap JS on client only */}

        <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">PoultryVision</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="mynavbar">
              
              {user && user.role == 'farmer' ? (
                <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <a className="nav-link" href="/dashboard">Dashboard</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/live-monitoring">Live Monitoring</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/infer-image">Infer image</a>
                </li>
                
                <li className="nav-item">
                  <a className="nav-link" href="/monitoring-history">Monitoring History</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/notifications">Notifications</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/billing-status">Billing & Subscription</a>
                </li>
              </ul>
              ) : (
                <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <a className="nav-link" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/infer-image">Infer image</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/how-it-works">How it works</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/buy-unit">Buy unit</a>
                </li>
              </ul>
              )}


              {user ? (
                <UserMenu user={user} /> 
              ) : (
                <a className="btn btn-primary" href="/dashboard">
                  My Dashboard
                </a>
              )}

            </div>
          </div>
        </nav>

        {children}

        <footer className="bg-dark text-light pt-5 pb-4 mt-5">
          <div className="container text-md-left">
            <div className="row text-md-left">

              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h5 className="text-uppercase mb-4 text-warning">PoultryVision</h5>
                <p>
                  Smart poultry monitoring & disease detection powered by AI.
                  Developed with support from MSU Innovation Hub.
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <p><a href="/about" className="text-light text-decoration-none">About</a></p>
                <p><a href="/contact" className="text-light text-decoration-none">Contact</a></p>
                <p><a href="/contact" className="text-light text-decoration-none">Get Involved</a></p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <p><a href="/help-centre" className="text-light text-decoration-none">Help Centre</a></p>
                <p><a href="/how-it-works" className="text-light text-decoration-none">How it Works</a></p>
                <p><a href="/buy-unit" className="text-light text-decoration-none">Buy Unit</a></p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <p><i className="bi bi-house-door me-2"></i> MSU Innovation Hub</p>
                <p><i className="bi bi-envelope me-2"></i> support@poultryvision.com</p>
                <p><i className="bi bi-phone me-2"></i> +263 774 756 502</p>
              </div>

            </div>

            <hr className="mb-4" />

            <div className="row align-items-center">
              <div className="col-md-7 col-lg-8">
                <p className="text-light">
                  © 2025 PoultryVision — All Rights Reserved.
                </p>
              </div>

            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}
