import "../../styles/HowWeWorkComponent/main.scss";
import { BottomContent } from "./BottomContent";
import { UpperContent } from "./UpperContent";

export const HowWeWorkComponent = (): JSX.Element => {


    return (
        <div className="content__wrapper">
            <UpperContent />
            <BottomContent />
        </div>
    );
}