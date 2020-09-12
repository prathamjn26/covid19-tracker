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
                    backgroundColor:['#149f84cc','#fd9f17cc','#ec293acc'],
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
                borderColor:'#00158a',
                backgroundColor:'#00083594',
                fil:true
            },{
                data:dailyData.map(item=>(item.deaths)),
                label:'Deaths',
                borderColor:'#ec293a',
                backgroundColor:'rgba(236,41,58,0.95)',
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
