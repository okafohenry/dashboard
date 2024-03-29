import styled from 'styled-components';
import { CurrencyFormatter } from '../utils/currencyFormatter';

const Wrapper = styled.div`
    // min-width: 300px;
    background: #fff;
    height: 100px;
    display: flexbox;
    flex-grow: 1;
    gap: 10px;
    border-radius: 5px;
    padding: 10px 20px 10px 5px;
    margin-top: 10px;

    .icon{
        width: 60px;
        height: 60px;
        margin: auto;
        text-align: center;
        border-radius: 5px;
        font-size: 20px;
        line-height: 50px;
    }
    .texts{
        display: grid;
        h3{            
            font-weight: 400;
            font-size: 20px;
            line-height: 27px;
            color: #656565;
        }
        p {
            font-weight: 700;
            font-size: 32px;
            line-height: 32px;
            color: #222222;
        }
    }
    @media (max-width: 1020px){
        padding: 10px 50px 10px 30px;
        width: 85%;
        min-width: 300px;
        margin: 10px auto;
    }
`;

export const Card = (props: any) => {
    const {icon, headerText, amount, backgroundColor, color} = props;

    return(
        <Wrapper>
            <div className='icon' style={{backgroundColor: backgroundColor, color: color}}>{icon}</div>
            <div className='texts'>
                <h3>{headerText}</h3>
                <p>{CurrencyFormatter.format(amount).replace(/(\.|,)00$/g, '')}</p>
            </div>
        </Wrapper>
    )
}