import React, { Component } from 'react';
import {fetchCountries} from'../../api';
import {FormControl,NativeSelect} from '@material-ui/core';

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
                <FormControl>
                    <NativeSelect defaultValue="" onChange={(e)=>this.props.handleCountryChange(e.target.value)}>
                        <option value=''>Global</option>
                        {this.state.country.map((item,i)=>(<option key={i} value={item}>{item}</option>))}
                    </NativeSelect>
                </FormControl>
            </div>
        );
    }
}

export default CountryPicker;