import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import * as exchangeAction from '../../../actions/exchangeAction';
import { HeaderText } from '../../molecules/StyledComponents';
import TableHeader from '../../molecules/TableHeader';
import TableRow from '../../molecules/TableRow';

const desiredCurr = [ "CAD", "JPY", "GBP", "USD", "EUR", "MXN", "AUD", "ZAR", "NZD", "RUB", "CHF" ];

class ExchangePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usExchangeData : [],
            cadExchangeData : [],
            mxnExchangeData : [],
            gbpExchangeData : [],
            eurExchangeData : [],
            chfExchangeData : [],
            rubExchangeData : [],

        }
        this.getExchangeData();
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.usExcRateData !== nextProps.usExcRateData) {
            this.setState({
                usExchangeData: desiredCurr.map(item => {return nextProps.usExcRateData[item];}),
                });
        }
        if (this.props.cadExcRateData !== nextProps.cadExcRateData) {
            this.setState({
                cadExchangeData: desiredCurr.map(item => {return nextProps.cadExcRateData[item];})
            });
        }
        if (this.props.mxnExcRateData !== nextProps.mxnExcRateData) {
            this.setState({
                mxnExchangeData: desiredCurr.map(item => {return nextProps.mxnExcRateData[item];})
            });
        }
        if (this.props.gbpExcRateData !== nextProps.gbpExcRateData) {
            this.setState({
                gbpExchangeData: desiredCurr.map(item => {return nextProps.gbpExcRateData[item];}),
                });
        }
        if (this.props.eurExcRateData !== nextProps.eurExcRateData) {
            this.setState({
                eurExchangeData: desiredCurr.map(item => {return nextProps.eurExcRateData[item];})
            });
        }
        if (this.props.chfExcRateData !== nextProps.chfExcRateData) {
            this.setState({
                chfExchangeData: desiredCurr.map(item => {return nextProps.chfExcRateData[item];})
            });
        }
        if (this.props.rubExcRateData !== nextProps.rubExcRateData) {
            this.setState({
                rubExchangeData: desiredCurr.map(item => {return nextProps.rubExcRateData[item];})
            });
        }

    }


    getExchangeData() {
        console.log('Inside getExchangeData ');
        this.props.init();
    }
    render() {
        if(this.state.usExchangeData) {
            console.log('this.state.usExchangeData ', this.state.usExchangeData);
        }
        return (
            <Fragment>
                <HeaderText>
                    Live Exchange Rates
                    </HeaderText>
                <table>
                    <thead><TableHeader headerData={desiredCurr} /></thead>
                    <tbody>
                        {this.state.usExchangeData && <TableRow forCountry="USD" exchData={this.state.usExchangeData} />}
                        {this.state.cadExchangeData && <TableRow forCountry="CAD" exchData={this.state.cadExchangeData} />}
                        {this.state.mxnExchangeData && <TableRow forCountry="MXN" exchData={this.state.mxnExchangeData} />}
                        {this.state.gbpExchangeData && <TableRow forCountry="GBP" exchData={this.state.gbpExchangeData} />}
                        {this.state.eurExchangeData && <TableRow forCountry="EUR" exchData={this.state.eurExchangeData} />}
                        {this.state.chfExchangeData && <TableRow forCountry="CHF" exchData={this.state.chfExchangeData} />}
                        {this.state.rubExchangeData && <TableRow forCountry="RUB" exchData={this.state.rubExchangeData} />}
                   
                    </tbody>
                </table>
            </Fragment>
        )
    }
}

const mapStateToProps = ({ exchangeReducer }) => ({
    usExcRateData: exchangeReducer.usExcRateData,
    cadExcRateData: exchangeReducer.cadExcRateData,
    mxnExcRateData: exchangeReducer.mxnExcRateData,
    gbpExcRateData: exchangeReducer.gbpExcRateData,
    eurExcRateData: exchangeReducer.eurExcRateData,
    chfExcRateData: exchangeReducer.chfExcRateData,
    rubExcRateData: exchangeReducer.rubExcRateData
});

const mapDispatchToProps = dispatch => ({
    init: () => {
        dispatch(exchangeAction.getUSDrates());
        dispatch(exchangeAction.getCADrates());
        dispatch(exchangeAction.getMXNrates());
        dispatch(exchangeAction.getGBPrates());
        dispatch(exchangeAction.getEURrates());
        dispatch(exchangeAction.getCHFrates());
        dispatch(exchangeAction.getRUBrates());
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ExchangePage);
