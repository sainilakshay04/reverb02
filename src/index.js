import React from 'react';
import { render } from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Header from './components/Header';
import CardList from './components/CardList';
class App extends React.Component{
    render(){
        return(
            <div>
                <Header homeName={"Reverb 2"}/>
                <CardList />
            </div>

        );
    }
}
render (<App />, window.document.getElementById("root"));
registerServiceWorker();
