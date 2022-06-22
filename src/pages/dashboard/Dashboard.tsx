import { Container, Row, Col } from "react-bootstrap";
import { IoEllipsisVerticalSharp } from 'react-icons/io5';
import { AiOutlinePlus } from 'react-icons/ai';
// import styled from 'styled-components';
import { AtmCard, Card, LineChart, PageLayout, Table } from "../../components";
import { CurrencyFormatter } from "../../utils/currencyFormatter";
import { dashboard_sections, card_balance, transactions, transfer_beneficiaries } from '../../utils/data';
import { ChartSection, Wrapper, AtmSection, TransactionSection, QuickTransferSection } from "./DashboardStyle";
import { FaUser } from "react-icons/fa";


export const Dashboard = () => {


    return(
        <PageLayout> 
            <Wrapper>
                <Container>
                    <Row>
                    {dashboard_sections.section_one.map((item: any, index: any) => (
                        <Col key={index} sm>
                            <Card 
                                color={item.color}
                                backgroundColor={item.backgroundColor}
                                icon={item.icon} 
                                headerText={item.headerText} 
                                amount={item.amount} />
                        </Col>
                    ))}
                    </Row>
                    <Row className="charts-section">
                        <Col lg={9} sm>
                            <ChartSection>
                                <div className="header">
                                    <h3>Dashboard</h3>
                                    <div className="radio-btns">
                                        <div className="income-radio">
                                            <div></div>
                                            <label htmlFor="income">Income</label>
                                        </div>
                                        <div className="expense-radio">
                                            <div></div>
                                            <label htmlFor="expense">Expenses</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="chart_container">
                                    <LineChart />                                  
                                </div>
                            </ChartSection>
                        </Col>
                        <Col sm>
                            <AtmSection>
                                <header>
                                    <h3>Cards</h3>
                                    <IoEllipsisVerticalSharp />
                                </header>
                                <AtmCard />
                                <div className='card-balance'>
                                    <p className="balance-title">Card balance</p>
                                    <p className="balance-amount">{CurrencyFormatter.format(card_balance.balance).replace(/(\.|,)00$/g, '')}</p>
                                </div>
                                <div className='credit-limit'>
                                    <p className='limit-title'>Credit limit</p>
                                    <p className="limit-amount">{CurrencyFormatter.format(200000).replace(/(\.|,)00$/g, '')}</p>
                                </div>
                                <button className="add-card__button"><AiOutlinePlus />  Add new card</button>
                            </AtmSection>
                        </Col>
                    </Row>
                    <Row className="transactions-section">
                        <Col lg={9} sm>
                            <TransactionSection>
                                <header className="transaction__header">
                                    <h3>Recent Transactions</h3>
                                    <a href='#'>View all</a>
                                </header>
                                <div className="transaction__body">
                                   { transactions ? <Table transactions={transactions} /> : <div className="no-transaction">No available transactions</div>}
                                </div>
                            </TransactionSection>
                        </Col>
                        <Col>
                            <QuickTransferSection>
                                <header>
                                    <h3>Quick Transfer</h3>
                                </header>
                                <div className="tr-beneficiaries__body">
                                    <a href="#" className="">
                                        <div className="user-placeholder"><FaUser/></div>
                                        <div className="add">Add</div>
                                    </a>
                                    <div className="beneficiaries">
                                    {transfer_beneficiaries.map((benefactor: any, index: number) => {
                                        if(index < 3){
                                            return( 
                                                <a href="#" className="beneficiary" key={index}>
                                                    <div className="img"><img src={benefactor.avatar} alt={benefactor.name} height="30px" width="30px" /></div>
                                                    <div>{benefactor.name.split(' ').splice(0, 1)}</div>
                                                </a>
                                            )
                                        }
                                    })}
                                    </div>
                                </div>
                            </QuickTransferSection>
                            
                        </Col>
                    </Row>
                </Container>
            </Wrapper>   
        </PageLayout>
    )
}