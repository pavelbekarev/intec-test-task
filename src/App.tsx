import React from 'react';
import "./styles/App.scss";
import { HeaderComponent } from './components/Header/HeaderComponent';
import { HowWeWorkComponent } from './components/HowWeWork/HowWeWorkComponent';
import { BannerComponent } from './components/Banner/BannerComponent';
import { AdvantagesComponent } from './components/Advantages/AdvantagesComponent';
import { StatisticComponent } from './components/Statistic/StatisticComponent';
import { TechnologiesComponent } from './components/Technologies/TechnologiesComponent';
import { AIComponent } from './components/AI/AIComponent';


function App() {
  return (
    <>
      <header>
        <section>
          <HeaderComponent />
        </section>
      </header>
      <main>
        <section>
          <div className='container'> {/*App.scss*/}
            <HowWeWorkComponent />
          </div>
        </section>
        <section>
          <BannerComponent />
        </section>
        <section>
          <div className='container'>
            <AdvantagesComponent />
          </div>
        </section>

        <section>
          <StatisticComponent />
        </section>

        <section>
          <div className="container">
            <TechnologiesComponent />
            <AIComponent />
          </div>
        </section>
      </main>
      <footer>

      </footer>
    </>
  );
}

export default App;
