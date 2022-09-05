import style from './App.module.scss';
import Card from './components/Card';
import Form from './components/Form';
import Calendar from './components/Calendar';
import EventList from './components/EventList';
import { RecoilRoot } from 'recoil';
import { Suspense } from 'react';

function App() {
  return (
    <RecoilRoot>
      {/* Como os dados estão sendo carregados de forma assíncrona é necessário envolver os componentes que utilizaram essa resposta pelo suspense */}
      <Suspense fallback='Carregando...'>
        <div className={style.App}>
          <div className={style.column}>
            <Card>
              <Form />
            </Card>
            <hr />
            <Card>
              <EventList />
            </Card>
          </div>
          <div className={style.column}>
            <Calendar />
          </div>
        </div>
      </Suspense>
    </RecoilRoot>
  );
}

export default App;
