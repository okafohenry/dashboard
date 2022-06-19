import styled from "styled-components";

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

const card_details = {
    number: '3532 3262 8697 0329',
    owner: 'daramola olalekan',
    valid_date: '03/24'
}

export const AtmCard = () => {
    return(
        <Wrapper>
            <p className="debit__text">Debit</p>
            <div className="card-details">
                <p className="card-number">{card_details.number.replace(/\d(?=.*\d(?:\s*\d){3}\s*$)/g, '*')}</p> {/* replace all characters except whitespace and last 4 characters with asterisk */}
                <p className="card-owner">{card_details.owner}</p>
                <div className="validation__section">
                    <div className="valid-date">
                        <div>   
                            <p className="valid">VALID</p><p className="thru">THRU</p>
                        </div>
                        <p>{card_details.valid_date}</p>
                    </div>
                    <div className="card-symbols">
                        <div className="red"></div>
                        <div className="yellow"></div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}