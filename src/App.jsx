import Navigator from './components/navigator/Navigator';
import Topics from './components/topics/Topics';
import Articles from './components/articles/Articles';
import Banner from './components/banner/Banner';

function App() {
  return (
    <div className="app">
      <Navigator />
      <Topics title={'Tutti i temi'} />
      <Articles />
      <Banner />
    </div>
  );
}

export default App;
