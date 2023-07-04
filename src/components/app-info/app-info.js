import { Component } from 'react';

import './app-info.css';

class AppInfo extends Component  {

    increaseEmp = (data) => {
        const num = data.filter(item => item.increase === true).length;
        return num
    }

    render() {
        const {currEmp} = this.props;
        return(
            <div className="app-info">
                <h1>Учет сотрудников в компании N</h1>
                <h2>Общее число сотрудников: {currEmp.length}</h2>
                <h2>Премию получат: {this.increaseEmp(currEmp)}</h2>
            </div>
        );
    }
}

export default AppInfo