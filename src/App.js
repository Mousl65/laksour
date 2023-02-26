import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Evenements from './components/Evenements';
import Photos from './components/Photos';
import Videos from './components/Videos';
import Sport from './components/Sport';
import Contact from './components/Contact';
import Culture from './components/Culture';
import Sociale from './components/Sociale';
import FemmesEnfants from './components/FemmesEnfants';
import Communication from './components/Communication'
import Navigationbar from './components/Navigationbar';
import  Footer from './components/Footer';
import "./App.css"

function App() {
  return (
    <div className="App">
        <Router>
            <Navigationbar />
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/evenement' component={Evenements}/>
                <Route path='/photos' component={Photos}/>
                <Route path='/videos' component={Videos}/>
                <Route path='/contact' component={Contact}/>
                <Route path='/sport' component={Sport}/>
                <Route path='/culture' component={Culture}/>
                <Route path='/sociale' component={Sociale}/>
                <Route path='/femmesenfants' component={FemmesEnfants}/>
                <Route path='/media' component={Communication}/>
            </Switch>
        </Router>
         <Footer />
    </div>
  );
}

export default App;
