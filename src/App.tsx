import React from 'react';
import "./styles/App.scss";
import { HeaderComponent } from './components/Header/HeaderComponent';
import { HowWeWorkComponent } from './components/HowWeWork/HowWeWorkComponent';


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
          <div className='container'>
            <HowWeWorkComponent />
          </div>
        </section>
      </main>
      <footer>

      </footer>
    </>
  );
}

export default App;
