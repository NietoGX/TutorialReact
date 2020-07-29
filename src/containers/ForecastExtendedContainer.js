import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastExtended from './../components/ForecastExtended'
import {connect} from 'react-redux';

class ForecastExtendedContainer extends Component {
    render() {
        return (
            <div>
                <ForecastExtended city={this.props.city} />
            </div>
        );
    }
}

ForecastExtendedContainer.propTypes = {
    city: PropTypes.string.isRequired,
};

const mapStateToProps = ({city}) => ({city});

export default connect(mapStateToProps, null)(ForecastExtendedContainer);