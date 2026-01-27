import { useState } from "react";
import { useSound } from "./useSound";

const useNav = () => {
    const [menuOpen, setMenuOpen] = useState(false);
      const [showNavbar, setShowNavbar] = useState(true);
      const menuItems = ["Home", "Projects", "Skills", "Languages", "Contact"];
      
      const playHoverSound = useSound("/sounds/hover.mp3", 0.3);
      const playClickSound = useSound("/sounds/click.wav", 0.5);
    
      const handleLinkClick = () => {
        playClickSound();
        setMenuOpen(false);
        setShowNavbar(false);
      };
    
      const handleHover = () => {
        playHoverSound();
      };
    return {
        setMenuOpen,
        menuOpen,
        menuItems,
        handleLinkClick,
        handleHover,
        showNavbar
    }
}

export default useNav;