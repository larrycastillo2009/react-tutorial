import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Table from './Table'
import * as serviceWorker from './serviceWorker';

class App1 extends React.Component{
    render(){
        return(
            <div className={App1}>
                <h1>Hello, React!</h1>
                <Table/>
            </div>
        )
    }
}

ReactDOM.render(<App1 />, document.getElementById('root'))

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
