import styled from 'styled-components';
import { DesktopNavbar } from "./desktopNavbar/DesktopNavbar";
import { SideBar } from "./_Sidebar";

const Wrapper = styled.div`
    background: var(--light-gray);
    height: 100vh;
`;

export const PageLayout = ({children}: any) => {
    return(
        <Wrapper>
            <Layout /> 
            {children}
        </Wrapper>
    )
}

const Layout = () => {
    return(
        <>
            <DesktopNavbar />
            <SideBar />  
        </>
    )
}