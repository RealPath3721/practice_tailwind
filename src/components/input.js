const Input = (props) => {
    const {
        placeholder,
        className,
        value,
        ...rest
    } = props;
    return (
        <input placeholder={placeholder} className={`border border-bcustom border-opacity-20 text-sm h-[53px] mb-3 px-3 py-[18px] ${className}`} value={value}/>
    )
}

export default Input;
