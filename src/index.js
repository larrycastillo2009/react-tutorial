import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Table from './Table'
import Form from './Form'
import * as serviceWorker from './serviceWorker';


class App1 extends React.Component {
    state = {
        characters: [],
    }

    removeCharacter = (index) => {
        const {characters} = this.state

        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index
            }),
        })
    }

    handleSubmit = (character) => {
        this.setState({characters: [...this.state.characters, character]})
    }

    render() {
        const{ characters } = this.state
        return (
            <div className="container">
                <Table characterData={characters}
                       removeCharacter={this.removeCharacter}/>
                <Form handleSubmit={this.handleSubmit} />
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
