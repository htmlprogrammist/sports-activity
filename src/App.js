import './App.css';
import ActivityRings from './components/rings'
import WeatherWidget from './components/weather';
import AdditionalInfo from './components/additional-info';

function App() {
  return (
    <div className="App">
      <section id="first">
        <section id="activity_rings_container">
          <ActivityRings></ActivityRings>
          <ActivityRings></ActivityRings>
          <ActivityRings></ActivityRings>
          <ActivityRings></ActivityRings>
          <ActivityRings></ActivityRings>
          <ActivityRings></ActivityRings>
          <ActivityRings></ActivityRings>
        </section>
        <section id="main-info"></section>
      </section>
      <section id="second">
        <AdditionalInfo></AdditionalInfo>
        <WeatherWidget></WeatherWidget>
      </section>
    </div>
  );
}

export default App;
