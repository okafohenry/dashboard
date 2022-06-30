import { useState } from 'react';
import {Link } from 'react-router-dom';
import { sidebar_links } from "../utils/data";
import styled from 'styled-components';

const Wrapper = styled.div`
    background: #FFF;
    width: 15%;
    height: 88vh;
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
        letter-spacing: .5px;
        font-weight: 600;

        &:hover{
            color: var(--primary-color);
            background: var(--light-gray);
        }

        .icon {
            font-size: 20px;
        }
        .name {
            font-size: 18px;
            line-height: 32px;
        }
    }
    
    .active {
        color: var(--primary-color);
        background: var(--light-gray);
    }

    @media (max-width: 1020px) {
        display: none;
    }
`;

export const SideBar = (props: any) => {   
    return(
        <>
            <Wrapper>
                <>
                    {sidebar_links.map((sidebar_link: any, index: any) => (
                        <Link to={sidebar_link.path} key={index}  className={props.active === sidebar_link.name.toLowerCase() ? 'active' : ""} >
                            <div className='icon'>{sidebar_link.icon}</div>
                            <div className='name'>{sidebar_link.name}</div>
                        </Link>
                    ))}
                </>
            </Wrapper>
        </>
    )
}