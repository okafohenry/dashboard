import { MemoryRouter as Router, Link } from 'react-router-dom';
import { sidebar_links } from "../utils";
import styled from 'styled-components';

const Wrapper = styled.div`
    background: #FFF;
    width: 15%;
    height: 74vh;
    padding: 50px 20px;
    position: relative;
    top: 4.89rem;

    a {
        text-decoration: none;
        margin-top: 20px;
        padding: 10px 20px;
        border-radius: 5px;
        display: flexbox;
        gap: 10px;
        color: var(--primary-gray);
        letter-spacing: .3px;
        font-weight: 600;

        &:hover{
            color: var(--primary-color);
            background: var(--light-gray);
        }

        .icon {
            font-size: 20px;
        }
    }
`;

export const SideBar = () => {
    return(
        <>
            <Wrapper>
                <Router>
                    {sidebar_links.map((sidebar_link: any, index: any) => (
                        <Link to={sidebar_link.path} key={index}>
                            <div className='icon'>{sidebar_link.icon}</div>
                            <div className='name'>{sidebar_link.name}</div>
                        </Link>
                    ))}
                </Router>
            </Wrapper>
        </>
    )
}