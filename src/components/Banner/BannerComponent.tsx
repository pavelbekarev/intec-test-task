import "../../styles/Banner/BannerComponent.scss";
import "../../styles/Banner/ImageBlock.scss";
import { TextBlockComponent } from "./TextBlockComponent";



export const BannerComponent = (): JSX.Element => {
    return (
        <div className="banner__wrapper">
            <div className="imageBlock"></div>
            <TextBlockComponent />
        </div>
    );
}