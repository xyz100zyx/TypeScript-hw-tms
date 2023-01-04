import React from 'react';
import './App.scss';
import {TaskLayout} from "./components/layouts/TaskLayout";
import {Layout} from 'antd';

const {Header} = Layout;

function App() {
    return (
        <div className="App">
            <Header/>
            <TaskLayout/>
        </div>
    );
}

export default App;
