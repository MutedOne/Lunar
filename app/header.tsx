"use client"

import { useEffect } from "react";


export function Header(){
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
      }, []);
    return (
        <>
        <nav className="navbar navbar-expand-lg " style={{backgroundColor:"black"}} >
        <div className="container-sm px-5 py-5">
            <a className="navbar-brand" style={{color:"#fff",fontWeight:"800"}} href="/">Lunar</a>
            <button className="navbar-toggler bg-light"  type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <div className="px-2 col-lg hline border-start" ></div>
                <li className="nav-item px-2">
                <a className="nav-link active" style={{color:"#fff",fontWeight:"600"}} aria-current="page" href="/products">PRODUCTS</a>
                </li>
                <li className="nav-item px-2">
                <a className="nav-link" style={{color:"#fff",fontWeight:"600"}} href="/tokens">TOKENS</a>
                </li>
                <li className="nav-item px-2">
                <a className="nav-link" style={{color:"#fff",fontWeight:"600"}} href="#">GOVERNANCE</a>
                </li>
                <li className="nav-item px-2">
                <a className="nav-link" style={{color:"#fff",fontWeight:"600"}} href="#">COMMUNITY</a>
                </li>
                <li className="nav-item px-2">
                <a className="nav-link" style={{color:"#fff",fontWeight:"600"}} href="#">BLOG</a>
                </li>
                <li className="nav-item px-2">
                <a className="nav-link" style={{color:"#fff",fontWeight:"600"}} href="#">CONTACT</a>
                </li>
            </ul>
        
            </div>
            </div>
        </nav>
        </>
    )
}