import React from 'react';

import {Cards,Chart,CountryPicker} from '../index'
import style from './App.module.css';
import {fetchData} from '../../api/index';
import CovidLogo from '../../images/image.png';
import Loading from '../Loading/Loading';

class App extends React.Component{
    state={
        data:{},
        country:"",
        isLoading:false
    }

    async componentDidMount()
    {
        const fetchedData=await fetchData();
        setTimeout(()=>{
            this.setState({ 
                data:fetchedData,
                isLoading:true }) 
        },2000)

    }

    handleCountryChange=async(country)=>{
        this.setState({
            data:await fetchData(country),
            country:country
        })
    }

    render()
    {
        const {data,country,isLoading}=this.state;
        return(
        <div className={style.container}>
         <img className={style.image} src={CovidLogo} alt="Covid-19"/>
                {isLoading?
                <>
                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country}/></>:<Loading className={style.loading}/>}
            </div>
        )
    }
}

export default App;
