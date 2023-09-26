import Image from "next/image";
import Link from "next/link";

export default function Header () {
    return(
        <div className="header_section">
        <div className="header_main">
           <div className="mobile_menu">
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
                 <div className="logo_mobile"><Link href="/"><Image src = "../app/images/logo.png" alt='img' /></Link></div>
                 <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                 <span className="navbar-toggler-icon"></span>
                 </button>
                 <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                       <li className="nav-item">
                          <Link className="nav-link" href="/">Home</Link>
                       </li>
                       <li className="nav-item">
                          <Link className="nav-link" href="/about">About</Link>
                       </li>
                       <li className="nav-item">
                          <Link className="nav-link" href="/services">Services</Link>
                       </li>
                       <li className="nav-item">
                          <Link className="nav-link " href="/blog">Blog</Link>
                       </li>
                       <li className="nav-item">
                          <Link className="nav-link " href="/contact">Contact</Link>
                       </li>
                    </ul>
                 </div>
              </nav>
           </div>
           <div className="container-fluid">
              <div className="logo"><Link href="/"><Image src= "../app/images/logo.png" alt='img' /></Link></div>
              <div className="menu_main">
                 <ul>
                    <li className="active"><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/services">Services</Link></li>
                    <li><Link href="/blog">Blog</Link></li>
                    <li><Link href="/contact">Contact us</Link></li>
                 </ul>
              </div>
           </div>
        </div>
        </div>
    )
}