import { ReactElement } from "react";

interface CardsProps {
    title: string;
    content: string;
    icon: ReactElement
}

export const ServicesCards: React.FC<CardsProps> = ({ title, icon, content }) => {
    return (
        <div className="cardServices">
            {icon}
            <h3>{title}</h3>
            <p>{content} </p>
        </div>
    )
}