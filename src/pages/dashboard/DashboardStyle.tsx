import styled from "styled-components";

export const Wrapper = styled.div`
    width: 84%;
    height: 83vh;
    margin: 0 auto;
    padding-top: 3rem;
    padding-bottom: 3rem;
    position: relative;
    top: -32.3rem;
    right: -6.4rem;

    .charts-section {
        margin-top: 3rem;
    }
`;

export const ChartSection = styled.div`
    background: #fff;
    padding: 1rem 1.5rem;
    display: grid;

    .header {
        display: flexbox;
        justify-contents: space-between;

        h3{
            font-weight: 700;
            font-size: 24px;
            line-height: 32.78px;
        }

        .radio-btns {
            display: flexbox;
            gap: 2rem;

            .income-radio, .expense-radio {
                input {
                    margin-right: 8px;
                }
            }
        }
    }
`;