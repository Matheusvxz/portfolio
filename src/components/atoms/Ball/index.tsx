
export interface BallProps {
    children?: string;
    color?: string;
}

export const Ball = (props:BallProps) => {


    return (
        <div
            style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                background: props.color ? props.color : "#c8c8c8",
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            {props.children}
        </div>
    )
}