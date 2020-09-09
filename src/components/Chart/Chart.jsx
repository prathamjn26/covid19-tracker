import React, { Component } from 'react';

import {fetchDailyData} from '../../api';
import {Line,Bar} from 'react-chartjs-2';
import style from './Chart.module.css';

class Chart extends Component {
    state={
        dailyData:[]
    }

    async componentDidMount()
    {
        this.setState({dailyData:await fetchDailyData()})
    }

    render(props) 
    {

        const {data,country}=this.props;
        const {dailyData}=this.state;
        const barChart=(
            data.confirmed?
            <Bar
            data={{
                labels:['Infected','Recovered','Deaths'],
                datasets:[{
                    backgroundColor:['rgba(0,0,255,0.5)','rgba(0,255,0,0.5)','rgba(255,0,0,0.5)'],
                    label:'People',
                    data:[data.confirmed.value,data.recovered.value,data.deaths.value]
                }]
            }}
            options={{
                legend:{display:false},
                title:{display:true,text:`Current state in ${country}`}
            }}
            />
            :null
        )

        const lineChart=(
        dailyData.length?
        <Line
        data={{
            labels:dailyData.map(item=>(item.date)),
            datasets:[{
                data:dailyData.map(item=>(item.confirmed)),
                label:'Infected',
                borderColor:'#3333ff',
                fil:true
            },{
                data:dailyData.map(item=>(item.deaths)),
                label:'Deaths',
                borderColor:'red',
                backgroundColor:'rgba(255,0,0,0.5)',
                fill:true
            }]
        }}
        />:null);
        return (
            <div className={style.container}>
                {country?barChart:lineChart}
            </div>
        );
    }
}

export default Chart;
