import React, { Component } from 'react';
import {fetchCountries} from'../../api';
import {FormControl,NativeSelect, Card} from '@material-ui/core';

class CountryPicker extends Component {
    state={
        country:[]
    }

    async componentDidMount()
    {
        this.setState({country:await fetchCountries()})
    }
    
    render(props) 
    {
        return (
            <div>
                <Card style={{padding:"10px",backgroundColor:"#d9fffe",margin:"20px 0 60px 0"}}>
                <FormControl>
                    <NativeSelect  defaultValue="" onChange={(e)=>this.props.handleCountryChange(e.target.value)}>
                        <option value=''>Global</option>
                        {this.state.country.map((item,i)=>(<option key={i} value={item}>{item}</option>))}
                    </NativeSelect>
                </FormControl>
                </Card>
            </div>
        );
    }
}

export default CountryPicker;