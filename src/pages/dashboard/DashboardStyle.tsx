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
    .charts-section, .transactions-section {
        margin-top: 2rem;
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
    .chart_container {
        width: 100%;
        height: 100%;
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
`;

export const TransactionSection = styled.div`
    background: #fff;
    padding: 1.5rem;
    display: grid;

    .transaction__header {
        display: flexbox;
        justify-contents: space-between;

        a {
            text-decoration: none;
            padding: 8px 16px;
            background: #F8F8F8;
            border-radius: 8px;                
            font-size: 16px;
            line-height: 35px;
            color: #333333;
        }
    }

    .transaction__body {  
        width: 100%;
        overflow-x: auto;
        :-webkit-scrollbar {
            width: 3px;
        }

    }
`;

export const QuickTransferSection = styled.div`
    background: #fff;
    padding: 1rem 1.5rem 3.5rem 1.5rem;
    display: grid;
    header {
        h3{
            font-weight: 700;
            font-size: 22px;
            line-height: 32.78px;
        }
    }

    .tr-beneficiaries__body{
        display: flexbox;
        margin-top: 25px;
        justify-content: space-between;
        a {
            text-decoration: none;
        }        

        .user-placeholder {
            height: 30px;
            width: 30px;
            margin: 0 auto;
            border-radius: 50%;
            text-align: center;
            background: #EBEBEB;
            color: var(--primary-color);
        }
        .add {
            font-size: 13px;
            margin-left: 5px;
        }
    
        .beneficiaries {
            display: flex;
            flex-direction: row;
            gap: 10px;

            .beneficiary {
                .img{
                    width: 30px;
                    height: 30px;
                    margin: 0 auto;
                    border-radius: 50%;
                }
                display: grid;
                font-size: 13px;
                align-text: left;
            }
        }
    }
`;