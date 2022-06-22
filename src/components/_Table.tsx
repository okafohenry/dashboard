import styled from "styled-components"

const Wrapper = styled.div`
    table {
        width: 100%;
        .table__header {
            border-bottom: 1px solid #D9D9D9;
        }
        th{ 
            padding: 20px 0;
            font-weight: normal;
        }
        .status {
            display: flex;
            justify-content: flex-end;
            width: 2.5rem;
        }
        tbody{ 
            tr{ 
                td {
                    padding: 7px 0;
                }
                .recipient {
                    display: flexbox;
                    gap: 1rem;

                    .avatar {
                        width: 40px;
                        height: 40px;
                        border-radius: 50%;                            
                    }
                    .name {
                        line-height: 40px;
                    }
                }
                .success {
                    padding: 3px 16px;
                    color: #27AE60;
                    background: rgba(33, 150, 83, 0.1);
                    border-radius: 24px;
                    font-size: 14px;
                }
                .pending {
                    padding: 3px 16px;
                    color: #F2994A;
                    background: rgba(248, 163, 89, 0.1);
                    border-radius: 24px;
                    font-size: 14px;
                }
                .failed {

                }
            }
        }
    }
`;

export const Table = ({transactions}: any) => {
    return(
        <Wrapper>
            <table>
                <tr className="table__header">                        
                    <th>Recipient</th>
                    <th>Date</th>
                    <th>Amount</th>
                    <th className="status">Status</th>
                </tr>
                
                <tbody>
                    {transactions.map((transaction: any, index: number) => { 
                    if(index < 3){ 
                        return( 
                            <tr key={index} className="transactions">
                                <td className="recipient">
                                    <div className="avatar">
                                        <img src={transaction.avatar} alt={transaction.transaction_name} />
                                    </div>
                                    <div className="name">{transaction.transaction_name}</div>
                                </td>
                                <td>{transaction.transaction_date}</td>
                                <td>{transaction.transaction_amount}</td>
                                <td className="status">
                                    <div className={transaction.transaction_status==="success"? "success": transaction.transaction_status==="pending"? "pending" : "failed"}>{transaction.transaction_status}</div>
                                </td>
                            </tr>
                        )
                    }
                })}
                </tbody>
            </table>
        </Wrapper>
    )
}