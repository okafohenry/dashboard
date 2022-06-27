import styled from 'styled-components';
import { DesktopNavbar } from "./desktopNavbar/DesktopNavbar";
import { SideBar } from "./_Sidebar";

const Wrapper = styled.div`
    background: var(--light-gray);
    height: 100vh;

    @media (max-width: 1020px) {
        width: 100%;
        height: 100vh;
    }
`;

export const PageLayout = ({active, children}: any) => {
    return(
        <Wrapper>
            <Layout active={active} /> 
            {children}
        </Wrapper>
    )
}

const Layout = (props: any) => {
    const {active} = props;
    return(
        <>
            <DesktopNavbar />
            <SideBar active={active} />  
        </>
    )
}