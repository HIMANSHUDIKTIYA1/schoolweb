"use client";
import { useRef, useEffect } from "react";
import Navbar from "../components/Navbar.jsx";
import Main from "../components/Main.jsx";
import Album from "../components/Album.jsx";
import Events from "../components/Events.jsx";
import About from "../components/About.jsx";
import Footer from "../components/Footer.jsx";

function Page() {
  const navbarRef = useRef(null);
  const lastScrollY = useRef(0); // Track last scroll position

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current) {
        // Scrolling down
        navbarRef.current?.classList.add("hidden");
      } else {
        // Scrolling up
        navbarRef.current?.classList.remove("hidden");
      }

      lastScrollY.current = currentScrollY; // Update last scroll position
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array for mounting only

  return (
    <div className="bg-black">
      <Navbar ref={navbarRef} />
      <Main />
      <About />
      <Events />
      <Album />
      <Footer />
    </div>
  );
}

export default Page;