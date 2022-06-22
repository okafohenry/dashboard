type ButtonProps = {
    onClick?: any;
    buttonStyle: any;
    text: any;
}

export const Button = (props: ButtonProps) => {
    const {onClick, buttonStyle, text} = props;
    return(
        <button onClick={onClick} style={buttonStyle}>{text}</button>
    )
}