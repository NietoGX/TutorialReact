import React from 'react';

class ForecastExtended extends React.Component{

    render(){
        const {city} = this.props;
        return (
            <div>HOLA {city}</div>
        );
    }
}

export default ForecastExtended;