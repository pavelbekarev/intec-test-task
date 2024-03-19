import "../../styles/Technologies/TechnologiesComponent.scss";

export const TechnologiesComponent = (): JSX.Element => {
    return (
        <div className="tech__wrapper">
            <div className="tech__top">
                <p className="tech__question bottom__title">На чем мы больше всего зарабатываем</p>
                <h2 className="tech__title content__title">Стартапы и технологии</h2>
            </div>
            <div className="tech__bottom">
                <div className="card card1">
                    <img src="" alt="" />
                    <h2>Стартапы из сферы:</h2>
                    <p>Криптовалюты</p>
                </div>
                <div className="card card2">
                    <img src="" alt="" />
                    <h2>Технология из сферы:</h2>
                    <p>ИИ в сфере беттинга</p>
                </div>
                <div className="card card3">
                    <img src="" alt="" />
                    <h2>Стартапы из сферы</h2>
                    <p>Блокчейн и ICO</p>
                </div>
                <div className="card card4">
                    <img src="" alt="" />
                    <h2>Стартапы из сферы</h2>
                    <p>VR- технологии</p>
                </div>
                <div className="card card5">
                    <img src="" alt="" />
                    <h2>Стартапы из сферы</h2>
                    <p>Внедрение сетей 5G</p>
                </div>
            </div>
        </div>
    );
}