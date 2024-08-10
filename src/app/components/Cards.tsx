import { ReactElement } from "react";

interface CardsProps {
    title: string;
    content?: string;
    icon: ReactElement;
    className: string;
    contentExtra?: string
}

export const Cards: React.FC<CardsProps> = ({ title, icon, content, className, contentExtra }) => {
    return (
        <div className={className} >
            <div>
                {icon} {contentExtra}
            </div>
            <h3>{title}</h3>
            <p style={{ margin: 0 }} >{content} </p>
        </div>
    )
}