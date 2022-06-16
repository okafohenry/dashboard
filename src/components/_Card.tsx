import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    background: #fff;
    display: flexbox;
    justify-content: space-around;

    .icon{
        padding: 30px;
        border-radius: 5px;
        font-size: 20px;
    }
    .texts{
        display: grid;
        gap: 10px;
        h3{            
            font-weight: 400;
            font-size: 20px;
            line-height: 27px;
            color: #656565;
        }
        p {
            font-weight: 900;
            font-size: 32px;
            line-height: 44px;
            color: #222222;
        }
    }
`;

export const Card = (props: any) => {
    const {icon, headerText, amount} = props;

    return(
        <Wrapper>
            <div className='icon'>{icon}</div>
            <div className='texts'>
                <h3>{headerText}</h3>
                <p>{amount}</p>
            </div>
        </Wrapper>
    )
}