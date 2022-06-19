import { Container, Row, Col } from "react-bootstrap";
import { IoEllipsisVerticalSharp } from 'react-icons/io5';
import { AiOutlinePlus } from 'react-icons/ai';
// import styled from 'styled-components';
import { AtmCard, Card, LineChart, PageLayout } from "../../components"
import { CurrencyFormatter } from "../../utils/currencyFormatter";
import { dashboard_sections, card_balance } from '../../utils/data';
import { ChartSection, Wrapper, AtmSection } from "./DashboardStyle";


export const Dashboard = () => {


    return(
        <PageLayout> 
            <Wrapper>
                <Container>
                    <Row>
                    {dashboard_sections.section_one.map((item: any, index: any) => (
                        <Col key={index}>
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
                                <div>
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
                                <button className="add-card__button"><AiOutlinePlus /> Add new card</button>
                            </AtmSection>
                        </Col>
                    </Row>
                </Container>
            </Wrapper>   
        </PageLayout>
    )
}