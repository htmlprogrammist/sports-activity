import './App.css';
import ActivityRings from './components/rings'

function App() {
  return (
    <div className="App">
      <section id="#first">
        <section id="activity_rings_container">
          <ActivityRings></ActivityRings>
          <ActivityRings></ActivityRings>
          <ActivityRings></ActivityRings>
          <ActivityRings></ActivityRings>
          <ActivityRings></ActivityRings>
          <ActivityRings></ActivityRings>
          <ActivityRings></ActivityRings>
        </section>
        <section id="#main-info"></section>
      </section>
      <section id="#second">
        
      </section>
    </div>
  );
}

export default App;
