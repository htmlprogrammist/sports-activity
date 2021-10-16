import React from 'react';
import './App.css';
import ActivityRings from './components/rings';
import WeatherWidget from './components/weatherWidget';
import Average from './components/additionalInfo/average';
import Addition from './components/additionalInfo/adiition';
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
            <ActivityRings
              day="Today" 
              series={[55, 80, 55]} 
              steps={3245} 
              kkal={31} 
            />
            <ActivityRings
              day="Not today" 
              series={[10, 15, 20]} 
              steps={9234} 
              kkal={123} 
            />
            <ActivityRings
              day="Not today" 
              series={[25, 30, 35]} 
              steps={8745} 
              kkal={31} 
            />
            <ActivityRings
              day="Not today" 
              series={[40, 45, 50]} 
              steps={2345} 
              kkal={457} 
            />
            <ActivityRings
              day="Not today" 
              series={[55, 110, 65]} 
              steps={4567} 
              kkal={31} 
            />
            <ActivityRings
              day="Not today" 
              series={[70, 75, 80]} 
              steps={1239} 
              kkal={345} 
            />
            <ActivityRings
              day="Not today" 
              series={[100, 90, 85]} 
              steps={3452} 
              kkal={31} 
            />
          </section>
          <section id="main-info">
            <MainInfo goodJob={true} />
            <Form />
          </section>
        </section>
        <section id="second">
          <div id="widgets">
            <Average />
            <Addition />
            <WeatherWidget></WeatherWidget>
          </div>
        </section>
        <Form isGoal={true}/>
      </div>
    )
  }
}

export default App;
