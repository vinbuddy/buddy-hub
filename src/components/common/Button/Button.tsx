import "./Button.css";

type ButtonProps = {
    children?: any;
    type?: string;
    size?: string;
    className?: string;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    icon?: React.ReactNode;
    shape?: string;
    iconSize?: number;
    props?: any;
};

function Button({
    children,
    leftIcon,
    rightIcon,
    icon,
    type = "type-default",
    size,
    shape = "shape-default",
    iconSize,
    className,
    ...props
}: ButtonProps) {
    return (
        <button
            className={`button-wrapper ${type} ${size} ${shape} ${className}`}
            {...props}
        >
            {leftIcon && (
                <span style={{ fontSize: iconSize }} className="icon">
                    {leftIcon}
                </span>
            )}
            {children && <span className="title">{children}</span>}

            {rightIcon && (
                <span style={{ fontSize: iconSize }} className="icon">
                    {rightIcon}
                </span>
            )}
            {icon && (
                <span style={{ fontSize: iconSize }} className="icon">
                    {icon}
                </span>
            )}
        </button>
    );
}

export default Button;
