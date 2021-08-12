import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Table from './Table'
import * as serviceWorker from './serviceWorker';


class App1 extends React.Component {
    state = {
        characters: [
            {
                name: 'Charlie',
                job: 'Janitor'
            },
            {
                name: 'Mac',
                job: 'Bouncer',
            },
            {
                name: 'Dee',
                job: 'Aspiring actress',
            },
            {
                name: 'Dennis',
                job: 'Bartender',
            },
        ],
    }

    removeCharacter = (index) => {
        const {characters} = this.state

        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index
            }),
        })
    }

    render() {
        return (
            <div className="container">
                <h1>Hello, React!</h1>
                <Table characterData={this.state.characters} removeCharacter={this.removeCharacter}/>
            </div>
        )
    }
}

ReactDOM.render(<App1/>, document.getElementById('root'))

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
