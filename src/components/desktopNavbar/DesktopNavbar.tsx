import Logo from '../../assets/images/logo.svg';
import {FaBars, FaBell} from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';
import { MobileNavbar } from '../mobileNavbar/MobileNavbar';

const Wrapper = styled.div`
    width: 100%;
    background: #FFF;
    padding: 1rem 0 1rem 3rem;
    position: fixed;
    top: 0;
    z-index: 10;
    display: flex;
    justify-content: space-between;
    box-shadow: 0px 0px 20px rgba(7, 59, 76, 0.05);

    .notification-avatar__container {
        margin-right: 7rem;
        display: flexbox;
        gap: 2rem;

        .notification {
            font-size: 25px;
            line-height: 40px;
        }

        .avatar__container {
            display: flexbox;
            gap: .5rem;
            div{ 
                width: 40px;
                height: 40px;
                border-radius: 100%;
                background: var(--light-gray);
            }
            p {
                line-height: 40px;
            }
        }
        .fa-bars {
            color: var(--primary-color);
            font-size: 20px;
            transition: all 0.5s ease-in-out;
        }
        .fa-close {
            color: var(--primary-color);
            font-size: 25px;
            transition: all 0.5s ease-in-out;
        }

        @media (max-width: 1020px){
            margin-right: 2rem;
        }
    }
`;

const showNav = {
    position: 'absolute',
    right: '0', 
    top: '75px'
}

const hideNav = {
    position: 'absolute', 
    right: '-9999999999px'
}



export const DesktopNavbar = () => {
    const [sideNavDisplay, setSideNavDisplay] = useState(false);

    const isMobile = useMediaQuery({
        query: "(max-width: 1020px)"
    });

    const handleSideNavDisplay = () => {
        setSideNavDisplay(true);
    }
    const handleSideNavClose = () => {
        setSideNavDisplay(false);
    }

    return(
        <Wrapper>
            <div>
                <img src={Logo} alt="bankly" />
            </div>
            <div className="notification-avatar__container">      
                { !isMobile ? 
                    <>
                        <div className='notification'>
                            <FaBell />
                        </div>  
                        <div className='avatar__container'>
                            <div>
                                <img src="" alt="" />
                            </div>
                            <p>User Name</p>
                        </div>
                    </> :
                    <>
                        {sideNavDisplay ? 
                        <div className="fa-close" onClick={handleSideNavClose}><IoClose /></div> : <div className="fa-bars" onClick={handleSideNavDisplay}><FaBars /></div>
                        }                        
                        <>{sideNavDisplay ?  <MobileNavbar /> : null }</>
                    </>
                }
            </div>
        </Wrapper>
    )
}