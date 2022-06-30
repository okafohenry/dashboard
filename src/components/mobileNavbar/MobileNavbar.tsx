import { AiFillPieChart } from "react-icons/ai";
import { BsArrowLeftRight, BsFillCreditCardFill } from "react-icons/bs";
import { FaBell } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { Link } from "react-router-dom"; 
import styled from "styled-components";

const mobile_sideNav = [
    {
        icon: <MdDashboard />,
        path: "/dashboard",
        name: "Dashboard"
    },
    {
        icon: <BsArrowLeftRight />,
        path: "/transaction",
        name: "Transaction"
    },
    {
        icon: <AiFillPieChart />,
        path: "/analysis",
        name: "Analysis"
    },
    {
        icon: <BsFillCreditCardFill />,
        path: "/cards",
        name: "Cards"
    },
    {
        icon: "",
        path: "/profile",
        name: "Profile"
    },
    {
        icon: <FaBell />,
        path: "/notifications",
        name: "Notification"
    }
];

const Wrapper = styled.div`
    width: 70%;
    height: 100vh; 
    padding: 20px;
    background: #fff;
    z-index: -1;
    font-size: 20px;
    position: absolute;
    top: 75px;
    right: 0;

    ul {
        display: grid;
        gap: 1rem;
        padding-left: 0;
        margin-top: 20px;
        li {
            list-style: none;
            a {
                padding: 15px 10px;
                text-decoration: none;
                display: flex;
                gap: 1rem;
                color: var(--primary-color);
            }
        }
    }
`;




export const MobileNavbar = () => {
    return(
        <Wrapper >
            <ul>
            {mobile_sideNav.map((item: any, index: number) => (
                <li key={index}>
                    <Link to={item.path}>
                        <div>{item.icon}</div>
                        <div>{item.name}</div>
                    </Link>
                </li>
            ))}
            </ul> 
        </Wrapper>
    )
}