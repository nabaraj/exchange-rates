import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import * as exchangeAction from '../../../actions/exchangeAction';
import { HeaderText } from '../../molecules/StyledComponents';
import TableHeader from '../../molecules/TableHeader';
import TableRow from '../../molecules/TableRow';

const desiredCurr = ["CAD", "JPY", "GBP", "USD", "EUR", "MXN", "AUD", "ZAR", "NZD", "RUB", "CHF"];
const desiredCurrwFlags = [ "CAD 🇨🇦", "JPY 🇯🇵", "GBP 🇬🇧", "USD 🇺🇸", "EUR 🇪🇺", "MXN 🇲🇽", "AUD 🇦🇺", "ZAR 🇿🇦", "NZD 🇳🇿", "RUB 🇷🇺", "CHF 🇨🇭" ];

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
            jpyExchangeData : [],
            audExchangeData : [],
            nzdExchangeData : [],
            zarExchangeData : [],
            inrExchangeData : [],

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
        if (this.props.jpyExcRateData !== nextProps.jpyExcRateData) {
            this.setState({
                jpyExchangeData: desiredCurr.map(item => {return nextProps.jpyExcRateData[item];})
            });
        }
        if (this.props.audExcRateData !== nextProps.audExcRateData) {
            this.setState({
                audExchangeData: desiredCurr.map(item => {return nextProps.audExcRateData[item];}),
            });
        }
        if (this.props.nzdExcRateData !== nextProps.nzdExcRateData) {
            this.setState({
                nzdExchangeData: desiredCurr.map(item => {return nextProps.nzdExcRateData[item];})
            });
        }
        if (this.props.zarExcRateData !== nextProps.zarExcRateData) {
            this.setState({
                zarExchangeData: desiredCurr.map(item => {return nextProps.zarExcRateData[item];})
            });
        }
        if (this.props.inrExcRateData !== nextProps.inrExcRateData) {
            this.setState({
                inrExchangeData: desiredCurr.map(item => {return nextProps.inrExcRateData[item];})
            });
        }

    }


    getExchangeData() {
        this.props.init();
    }
    render() {
        return (
            <Fragment>
                <HeaderText>
                    Live Exchange Rates
                    </HeaderText>
                <table>
                    <thead><TableHeader headerData={desiredCurrwFlags} /></thead>
                    <tbody>
                        {this.state.usExchangeData && <TableRow forCountry="USD 🇺🇸" exchData={this.state.usExchangeData} />}
                        {this.state.cadExchangeData && <TableRow forCountry="CAD 🇨🇦" exchData={this.state.cadExchangeData} />}
                        {this.state.mxnExchangeData && <TableRow forCountry="MXN 🇲🇽" exchData={this.state.mxnExchangeData} />}
                        {this.state.gbpExchangeData && <TableRow forCountry="GBP 🇬🇧" exchData={this.state.gbpExchangeData} />}
                        {this.state.eurExchangeData && <TableRow forCountry="EUR 🇪🇺" exchData={this.state.eurExchangeData} />}
                        {this.state.chfExchangeData && <TableRow forCountry="CHF 🇨🇭" exchData={this.state.chfExchangeData} />}
                        {this.state.rubExchangeData && <TableRow forCountry="RUB 🇷🇺" exchData={this.state.rubExchangeData} />}
                        {this.state.jpyExchangeData && <TableRow forCountry="JPY 🇯🇵" exchData={this.state.jpyExchangeData} />}
                        {this.state.audExchangeData && <TableRow forCountry="AUD 🇦🇺" exchData={this.state.audExchangeData} />}
                        {this.state.nzdExchangeData && <TableRow forCountry="NZD 🇳🇿" exchData={this.state.nzdExchangeData} />}
                        {this.state.zarExchangeData && <TableRow forCountry="ZAR 🇿🇦" exchData={this.state.zarExchangeData} />}
                        {this.state.inrExchangeData && <TableRow forCountry="INR 🇮🇳" exchData={this.state.inrExchangeData} />}                   
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
    rubExcRateData: exchangeReducer.rubExcRateData,
    jpyExcRateData: exchangeReducer.jpyExcRateData,
    audExcRateData: exchangeReducer.audExcRateData,
    nzdExcRateData: exchangeReducer.nzdExcRateData,
    zarExcRateData: exchangeReducer.zarExcRateData,
    inrExcRateData: exchangeReducer.inrExcRateData,
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
        dispatch(exchangeAction.getJPYrates());
        dispatch(exchangeAction.getAUDrates());
        dispatch(exchangeAction.getNZDrates());
        dispatch(exchangeAction.getZARrates());
        dispatch(exchangeAction.getINRrates());
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ExchangePage);
