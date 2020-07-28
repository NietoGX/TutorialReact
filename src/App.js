import React from 'react';
import LocationList from './components/LocationList'
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import ToolBar from '@material-ui/core/Toolbar';
import ForecastExtended from './components/ForecastExtended';


import {Grid, Col, Row} from 'react-flexbox-grid';
import './App.css';

const cities= [
  "Bangkok,th",
  "Nules,es",
  "Paris,fr",
  "Lima, pe",
];

class App extends React.Component {

  constructor(){
    super();

    this.state={
      city:"Nueva ciudsssad"
    };
  }

  handleSelectedLocation =  city => {

    console.log(`handleSelectedLocationApp  ${city}`);
    this.setState({city});
    
  }
  

  render() {
    const {city}=this.state;
    return (
      
      <Grid>
        <Row>
          <AppBar position='sticky'>
            <ToolBar>
              <Typography variant='title' color='inherit'>WeatherApp</Typography>
            </ToolBar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationList cities ={cities}
            onSelectedLocation={this.handleSelectedLocation}/>
          </Col>

          <Col xs={12} md={6}>
            <Paper elevation="4">
              <div className="details"> 
                <ForecastExtended city={city}/>
              </div>
              </Paper>
          </Col>
        </Row>
        
        
      </Grid>
    );
  };

}

export default App;
