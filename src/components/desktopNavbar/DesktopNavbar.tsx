import Logo from '../../assets/images/logo.svg';
import {FaBell} from 'react-icons/fa';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    background: #FFF;
    padding: 1rem 0 1rem 3rem;
    position: fixed;
    top: 0;
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
    }
`

export const DesktopNavbar = () => {
    return(
        <Wrapper>
            <div>
                <img src={Logo} alt="bankly" />
            </div>
            <div className="notification-avatar__container"> 
                <div className='notification'>
                    <FaBell />
                </div>         
                <div className='avatar__container'>
                    <div>
                        <img src="" alt="" />
                    </div>
                    <p>User Name</p>
                </div>
            </div>
        </Wrapper>
    )
}