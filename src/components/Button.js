function Button({
    tailwindButton,
    tailwindWrapper,
    children,
    ...rest
}){
    return (
        <div className={tailwindWrapper}>
            <button className={tailwindButton} {...rest}>{ children }</button>
        </div> 
    );
}

export default Button;