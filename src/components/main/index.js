import React, {Component} from 'react';
import propTypes from 'prop-types';
import {connect} from 'react-redux';
import logo from '../../assets/logo.png';
import fetchDeck from '../../actions/fetch-deck';
import changeLogoBgColor from '../../actions/change-logo-bg-color';
import Card from '../../components/card';

import {
    Container,
    Cards,
    Button,
    Logo,
    Error,
    Loader,
} from './styles';

export class MainComponent extends Component {
    componentDidMount() {
        this.props.fetchDeck();
    }

    render() {
        return (
            <Container loading={this.props.preloading}>
                <Logo src={logo} alt="logo" logoBgColor={this.props.logoBgColor} />
                <Button onClick={this.props.changeLogoBgColor}>Change Logo Background</Button>
                <Cards loading={this.props.loading}>
                    {this.props.cards && this.props.cards.map((card, index) =>
                        <Card key={index} src={card.image} />)}
                    <Loader visible={this.props.loading} />
                </Cards>

                <Button onClick={this.props.fetchDeck}>Deal</Button>
                <Error>{this.props.error}</Error>
            </Container>
        );
    }
}

const mapStateToProps = (state) => ({
    ...state,
});

const mapDispatchToProps = (dispatch) => ({
    fetchDeck: () => dispatch(fetchDeck()),
    changeLogoBgColor: () => dispatch(changeLogoBgColor()),
});

MainComponent.propTypes = {
    cards: propTypes.instanceOf(Array),
    error: propTypes.string,
    preloading: propTypes.bool,
    loading: propTypes.bool,
    logoBgColor: propTypes.string,
    changeLogoBgColor: propTypes.func,
    fetchDeck: propTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);
