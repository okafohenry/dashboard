import { Container, Row, Col } from "react-bootstrap";
// import styled from 'styled-components';
import { Card, LineChart, PageLayout } from "../../components"
import { dashboard_sections } from '../../utils/data';
import { ChartSection, Wrapper } from "./DashboardStyle";




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
                                            <input type="radio" id="income" />
                                            <label htmlFor="income">Income</label>
                                        </div>
                                        <div className="expense-radio">
                                            <input type="radio" id="expense" />
                                            <label htmlFor="expense">Expenses</label>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <LineChart />                                  
                                </div>
                            </ChartSection>
                        </Col>
                        <Col sm>cards</Col>
                    </Row>
                </Container>
            </Wrapper>   
        </PageLayout>
    )
}