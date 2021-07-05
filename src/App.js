import './App.css';
import ActivityRings from './components/rings';
import WeatherWidget from './components/weatherWidget';
import AdditionalInfo from './components/additionalInfo/additional-info';
import Form from './components/form';
import MainInfo from './components/main-info';

function App() {
  return (
    <div className="App">
      <section id="first">
        <section id="activity_rings_container">
          <ActivityRings day="Today" series={[55, 80, 55]}></ActivityRings>
          <ActivityRings day="Not today" series={[10, 15, 20]}></ActivityRings>
          <ActivityRings day="Not today" series={[25, 30, 35]}></ActivityRings>
          <ActivityRings day="Not today" series={[40, 45, 50]}></ActivityRings>
          <ActivityRings day="Not today" series={[55, 110, 65]}></ActivityRings>
          <ActivityRings day="Not today" series={[70, 75, 80]}></ActivityRings>
          <ActivityRings day="Not today" series={[100, 90, 85]}></ActivityRings>
        </section>
        <section id="main-info">
          <Form />
          <MainInfo goodJob={true}/>
        </section>
      </section>
      <section id="second">
        <AdditionalInfo></AdditionalInfo>
        <WeatherWidget></WeatherWidget>
      </section>
    </div>
  );
}

export default App;
