// отримати пости та вивести їх використовуючи класові копмоненти
// отримати коментарі та вивести їх використовуючи класові копмоненти

import React, {Component} from 'react';

import {Comments, Posts} from "./components";

class App extends Component {
    render() {
        return (
            <div>
                <Posts/>

                <hr/>
                <Comments/>
            </div>
        );
    }
}

export default App;