type InputStyle = {
    placeholder: string;
    inputStyle: any;
}

export const Input = (props: InputStyle) => {
    const {placeholder, inputStyle} = props;
    return(
        <input placeholder={placeholder} style={inputStyle} />
    )
}