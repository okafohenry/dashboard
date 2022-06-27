import styled from "styled-components";

export const Wrapper = styled.div`
    width: 84%;
    height: 85vh;
    margin: 0 auto;
    padding-top: 2rem;
    padding-bottom: 3rem;
    position: relative;
    top: -540px;
    right: -6.5rem;
    overflow-y: auto;
    ::-webkit-scrollbar {
        width: 3px;
    }

    @media (max-width: 1020px) {
        top: 70px;
        right: 0;
        width: 100%;
        height: 100vh;
    }
`;