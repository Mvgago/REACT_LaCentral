import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness5Icon from '@mui/icons-material/Brightness5';
import { useDarkTheme, useUpdateDarkTheme } from "../../context/ThemeProvider";

import './_NavBar.scss';



export default function NavBar() {
    const darkTheme = useDarkTheme()
    const toggleTheme = useUpdateDarkTheme()
  
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
    const [size, setSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (size.width > 768 && menuOpen) {
            setMenuOpen(false);
        }
    }, [size.width, menuOpen]);

    const menuToggleHandler = () => {
        setMenuOpen((p) => !p);
    };

    const ctaClickHandler = () => {
        menuToggleHandler();
        navigate('/login');
    };



    return (
        <header className='header'>
            <div className='header__content'>
                <Link to='/' className='header__content__logo'>
                LaCentral
                </Link>
            
                <nav
                    className={`header__content__nav ${
                        menuOpen && size.width < 768 ? 'isMenu' : ""
                    }`}> 
                    
                    <ul>
                        <li>
                            <Link to="/catalogo" onClick={menuToggleHandler}>
                                Catálogo
                            </Link>
                        </li>
                        <li>
                            <Link to="/nosotros" onClick={menuToggleHandler}>
                                Nosotros
                            </Link>
                        </li>
                        <li>
                            <Link to="/contacto" onClick={menuToggleHandler}>
                                Contacto
                            </Link>
                        </li>
                        
                    </ul>
                 
                    <button type='button' onClick={ctaClickHandler}>
                        Mi cuenta
                    </button>
                    <div onClick={toggleTheme}>
                        {darkTheme ? (
                            <Brightness7Icon  fontSize='small' sx={{color:"white"}}/>
                            ) : (
                                <Brightness5Icon fontSize='small' sx={{color:"white"}}/>
                            )}
                    </div>

                    {/* <LoginProvider>
                        <button onClick={toggleLogin}>Mi cuenta</button>

                    </LoginProvider> */}
                </nav>
                <div className='header__content__toggle'>
                    {!menuOpen ? (
                        <BiMenuAltRight onClick={menuToggleHandler} />
                    ) : (
                        <AiOutlineClose onClick={menuToggleHandler} />
                    )}
                </div>
            </div>
        </header>
    );
}