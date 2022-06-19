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
    overflow-y: scroll;
    ::-webkit-scrollbar {
        width: 3px;
    }

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
                display: flexbox;
                gap: 5px;
                div {
                    margin-top: 5px;
                    height: 15px;
                    width: 15px;
                    border-radius: 50%;
                }
            }
            .income-radio{
                div{
                    background: rgba(6, 131, 116, 0.05);
                    border: 2px solid #068374;
                }
            }
            .expense-radio{
                div{
                    background: rgba(223, 224, 235, 1);
                    border: 2px solid rgba(223, 224, 235, 1);
                }
            }
        }
    }
`;

export const AtmSection = styled.div`
    background: #fff;
    padding: 16px;

    header, .card-balance, .credit-limit {
        display: flexbox;
        justify-contents: space-between;
    }
    header {
        h3 {
            font-weight: 700;
            font-size: 20px;
            line-height: 32.78px; 
        }
    }
    .card-balance {
        margin-top: 40px;
        .balance-title {
            font-size: 16px;
        }
        .balance-amount {
            font-size: 18px;
            font-weight: 600;
        }
    }
    .credit-limit {
        .limit-title {
            font-size: 16px;
        }
        .limit-amount {
            font-size: 18px;
            font-weight: 600;
        }
    }
    .add-card__button {
        width: 100%;
        padding: 12.5px 0;
        border: none;
        border-radius: 8px;
        text-align: center;
    }
`