import React from 'react';

import {Cards,Chart,CountryPicker} from './components/index'
import style from './App.module.css';
import {fetchData} from './api';
import CovidLogo from './images/image.png';

class App extends React.Component{
    state={
        data:{},
        country:""
    }

    async componentDidMount()
    {
        const fetchedData=await fetchData();
        this.setState({ data:fetchedData })
    }

    handleCountryChange=async(country)=>{
        this.setState({
            data:await fetchData(country),
            country:country
        })
    }

    render()
    {
        const {data,country}=this.state;
        return(
            <div className={style.container}>
                <img className={style.image} src={CovidLogo} alt="Covid-19"/>
                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country}/>
            </div>
        )
    }
}

export default App;