import Navigator from './components/navigator/Navigator';
import Topics from './components/topics/Topics';
import Articles from './components/articles/Articles';

function App() {
  return (
    <div className="app">
      <Navigator />
      <Topics title={'Tutti i temi'} />
      <Articles />
    </div>
  );
}

export default App;
