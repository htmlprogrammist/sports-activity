import React from 'react';
import './App.css';
import ActivityRings from './components/rings';
import WeatherWidget from './components/weatherWidget';
import AdditionalInfo from './components/additionalInfo/additional-info';
import Form from './components/form';
import MainInfo from './components/main-info';

class App extends React.Component {
  constructor(props) {
    super(props);
    // this.lastDataItem = birdsData.length - 1;
    this.clickedItems = [];
    // this.firstStateOfItems = Array(birdsData.length).fill('grey');
    this.state = {
      currentScore: 0,
      scoreIncrement: 5,
      level: '0',
      // rightAnswer: String(randomizer(0, this.lastDataItem)),
      chosenOption: null,
      isAnswerVisible: false,
      isActiveButton: false,
      stateOfItems: this.firstStateOfItems

    }
  }

  render() {
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
            <MainInfo goodJob={true} />
            <Form />
          </section>
        </section>
        <section id="second">
          <AdditionalInfo></AdditionalInfo>
          <WeatherWidget></WeatherWidget>
        </section>
      </div>
    )
  }
}

export default App;
