
// import React from 'react';
// import { Link } from 'react-router-dom';
// import logo from './LOGO.webp';
// import { useSelector } from 'react-redux';

// export default function Header() {
//   const { cartItems } = useSelector(state => state.cart);
//   const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)
//   return (
//     <>
//       <nav className="navbar navbar-expand-lg px-4" style={{ backgroundColor: '#2a9d8f' }} >
//         <div className="container-fluid">
//           {/* Left Side: Logo */}
//           <Link className="navbar-brand d-flex align-items-center text-white" to="/">
//             <img src={logo} alt="logo" width="40" height="40" className="d-inline-block align-top" />
//             <span className="fw-bold ms-2">E-Product</span>
//           </Link>

//           {/* Toggle button  */}
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarNav"
//             aria-controls="navbarNav"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>

//           {/* Right Side: Navigation Links */}
//           <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
//             <ul className="navbar-nav">
//               <li className="nav-item">
//                 <Link className="nav-link text-white" to="/">
//                   <i className="fas fa-home me-1"></i> Home
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link text-white" to="/users">
//                   <i className="fas fa-users me-1"></i> Users
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link text-white" to="/products">
//                   <i className="fas fa-box-open me-1"></i> Furnitures
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 {/* <Link className="nav-link text-white" to="/cart">
//                   <i className="fas fa-shopping-cart me-1"></i> Cart
//                 </Link> */}
//                 <Link to="/cart" className="nav-link">
//                   <i className="fas fa-shopping-cart"></i>Cart <span className="badge bg-primary">{cartCount}</span>
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }


import React from 'react';
import { Link } from 'react-router-dom';
import logo from './LOGO3.webp';
import { useSelector } from 'react-redux';

export default function Header() {
  const { cartItems } = useSelector(state => state.cart);
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <nav
        className="navbar navbar-expand-lg px-4"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          position: 'sticky',
          top: 0,
          zIndex: 1000,
        }}
      >
        <div className="container-fluid">
          {/* Logo */}
          <Link className="navbar-brand d-flex align-items-center text-dark" to="/">
            <img src={logo} alt="logo" width="50" height="50" className="d-inline-block align-top" />
            <span className="fw-bold ms-2">𝔽𝕦𝕣𝕟𝕚𝕥𝕦𝕣𝕖𝕄𝕒𝕣𝕥𝟛𝟞𝟝</span>
          </Link>

          {/* Toggle button */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navigation Links */}
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/">
                  <i className="fas fa-home me-1"></i> Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/users">
                  <i className="fas fa-users me-1"></i> Users
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/products">
                  <i className="fas fa-box-open me-1"></i> Furnitures
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/cart" className="nav-link text-dark">
                  <i className="fas fa-shopping-cart me-1"></i> Cart
                  <span className="badge bg-primary ms-1">{cartCount}</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
