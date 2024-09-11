import Navigator from './components/navigator/Navigator';
import Topics from './components/topics/Topics';

function App() {
  return (
    <div className="app">
      <Navigator />
      <Topics title={'Tutti i temi'} />
    </div>
  );
}

export default App;
