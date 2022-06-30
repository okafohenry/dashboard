import styled from "styled-components";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem } from 'mdb-react-ui-kit';

const Wrapper = styled.div`
    width: 100%;
    margin-top: 15px;
    background: rgba(0, 154, 80, 1);
    border-radius: 10px;
    padding: 15px;
    box-shadow: 4px 8px 30px 0px rgba(63, 63, 63, 0.2);

    p{
        color: #fff;
    }

    .debit__text {
        font-size: 12px;
        text-align: right;
    }

    .card-details {
        display: grid;
        margin-top: 3rem;

        .card-number {
            font-size: 20px;
        }
        .card-owner {
            text-transform: uppercase;
            margin-top: -15px;
            font-size: 13px;
        }
        .validation__section {
            display: flexbox;
            justify-contents: space-between;

            .valid-date {
                display: flexbox;
                gap: 5px;
                div{
                    font-size: 6px;
                    display: grid;
                    .valid {
                        margin-top: 5px;
                    }
                    .thru {
                        margin-top: -19px;
                    }
                }
            }
        }
        .card-symbols { 
            display: flexbox;
            .red, .yellow {            
                height: 20px;
                width: 20px;
                border-radius: 50%;
            }
            .red {
                background: rgba(227, 58, 36, 1);
                position: relative;
                left: 7px;
            }
            .yellow {
                background: rgba(248, 203, 46, 0.8);
                position: relative;
                z-index: 3;
            }
        }
    }
`;

const card_details = [
    {
        number: '3532 3262 8697 0329',
        owner: 'daramola olalekan',
        valid_date: '03/24',
        bank: 'access',
        active: 'active'
    },
    {
        number: '3532 3262 8697 0329',
        owner: 'okafor henry',
        valid_date: '15/22',
        bank: 'gtb'
    },
    {
        number: '3532 3262 8697 0329',
        owner: 'Favour james',
        valid_date: '01/27',
        bank: 'first'
    }
]


      
  

export const AtmCardCarousel = () => {
    return(        
        <Wrapper>            
            <MDBCarousel showIndicators showControls>
                <MDBCarouselInner>
                    {card_details.map((item: any, index: number) => (
                        <MDBCarouselItem className={item.active? 'active': ''}  key={index} id={index}>
                            <AtmCard cardNumber={item.number} cardOwner={item.owner} validDate={item.valid_date} cardIssuer={item.bank} />
                        </MDBCarouselItem> 
                    ))}
                </MDBCarouselInner>
            </MDBCarousel>
        </Wrapper>
    )
}

const AtmCard = (props: any) => {
    const {cardNumber, cardOwner, validDate} = props;
    return(
        <>
            <p className="debit__text">Debit</p>
            <div className="card-details">
                <p className="card-number">{cardNumber.replace(/\d(?=.*\d(?:\s*\d){3}\s*$)/g, '*')}</p> {/* replace all characters except whitespace and last 4 characters with asterisk */}
                <p className="card-owner">{cardOwner}</p>
                <div className="validation__section">
                    <div className="valid-date">
                        <div>   
                            <p className="valid">VALID</p><p className="thru">THRU</p>
                        </div>
                        <p>{validDate}</p>
                    </div>
                    <div className="card-symbols">
                        <div className="red"></div>
                        <div className="yellow"></div>
                    </div>
                </div>
            </div>
        </>
    )
}