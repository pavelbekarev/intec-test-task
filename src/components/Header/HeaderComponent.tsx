import HeaderContentComponent from "./HeaderContentComponent";
import HeaderButtonComponent from "./HeaderButtonComponent";
import "../../styles/HeaderComponent/HeaderComponent.scss";


export const HeaderComponent = (): JSX.Element => {
    return (
        <div className="header__wrapper">
            <HeaderButtonComponent />
            <HeaderContentComponent />
        </div>

    )
}

