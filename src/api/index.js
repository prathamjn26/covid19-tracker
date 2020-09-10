import axios from 'axios';

const url='https://covid19.mathdro.id/api';
const newsurl='http://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=4ac1d839a83d473687420da23a5dbb17';

export const fetchData =async (country)=>{
    let changeAbleUrl=url;
    if(country)
    {
        changeAbleUrl=`${url}/countries/${country}`;
    }
    try{
       const {data:{confirmed,recovered,deaths,lastUpdate}}= await axios.get(changeAbleUrl);
       return {confirmed,recovered,deaths,lastUpdate};
    }catch(err)
    {
        console.log(err);
    }
}

export const fetchDailyData=async ()=>{
    try{
        const {data}=await axios.get(`${url}/daily`);
        const modifiedData=data.map(item=>({
            confirmed:item.confirmed.total,
            deaths:item.deaths.total,
            date:item.reportDate
        }));
        return modifiedData;
    }
    catch(err)
    {
        console.log(err);
    }
}

export const fetchCountries =async ()=>{
    try{
       const {data:{countries}}=await axios.get(`${url}/countries`);
       return countries.map((country)=>(country.name));
    }catch(err)
    {
        console.log(err);
    }
}

export const fetchNewsData =async ()=>{
    try{
       const {data:{articles}}=await axios.get(newsurl);
       return {articles};
    }catch(err)
    {
        console.log(err);
    }
}