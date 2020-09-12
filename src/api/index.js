import axios from 'axios';

const url='https://covid19.mathdro.id/api';
const newsurl='https://saurav.tech/NewsAPI/top-headlines/category/health/in.json';
const imageurl='https://api.unsplash.com/search/photos?per_page=45&query=';

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
       console.log(articles);
       return {articles};
    }catch(err)
    {
        console.log(err);
    }
}

export const fetchImagesData =async (country='india')=>{
    let changeAbleUrl=imageurl;
    if(country.toLowerCase())
    {
        changeAbleUrl=`${imageurl}${country}&client_id=r2N4ELuiL1yHCFWc0FMjHEE2SyaADmJFlCsGYTiclHU`;
    }
    try{
       const {data:{results}}=await axios.get(changeAbleUrl);
       const modifiedImageData=results.map(item=>({
           url:item.urls.regular,
           alt:item.alt_description,
           user:item.user.name,
           link:item.links.html
       }))
       return modifiedImageData;
    }catch(err)
    {
        console.log("hey");
    }
}