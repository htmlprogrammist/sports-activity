import './App.css';
import ActivityRings from './components/rings'
import WeatherWidget from './components/weather';
// import AdditionalInfo from './components/additional-info';

function App() {
  return (
    <div className="App">
      <section id="first">
        <section id="activity_rings_container">
          <ActivityRings series={[50, 80, 20]}></ActivityRings>
          <ActivityRings series={[10, 15, 20]}></ActivityRings>
          <ActivityRings series={[25, 30, 35]}></ActivityRings>
          <ActivityRings series={[40, 45, 50]}></ActivityRings>
          <ActivityRings series={[55, 110, 65]}></ActivityRings>
          <ActivityRings series={[70, 75, 80]}></ActivityRings>
          <ActivityRings series={[100, 90, 85]}></ActivityRings>
        </section>
        <section id="main-info">
          <div id="inputs">
            <input placeholder="Подвижность" id="mobility"/>
            <input placeholder="Упражнения" id="exercises"/>
            <input placeholder="Активность" id="activity"/>
            <input placeholder="Шаги" id="steps"/>
            <button>Submit</button>
          </div>
        </section>
      </section>
      <section id="second">
        {/* <AdditionalInfo></AdditionalInfo> */}
        {/* <WeatherWidget></WeatherWidget> */}
      </section>
    </div>
  );
}

export default App;
