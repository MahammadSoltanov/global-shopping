import React, { Component } from 'react'
import './SearchBox.css';
import { connect } from 'react-redux';
import searchRequestToApi from '../../helpers/searchRequestToApi';
class SearchBox extends Component {

    state = {
        searchValue: '',
    }

    handleSearchChange = (e) => {
        this.setState({ searchValue: e.target.value });
    }

    handleSearchRequest = (e) => {
        if (e === null || e.key === "Enter") {
            this.props.makeSearchRequest(this.state.searchValue);
        }
    }

    render() {
        return (
            <div className='search-box-container'>
                <input className='search-input' value={this.state.searchValue}
                    onKeyUp={(e) => this.handleSearchRequest(e)}
                    onChange={this.handleSearchChange} />
                <div className='search-button' onClick={() => this.handleSearchRequest(null)}>Search</div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    makeSearchRequest: (searchedText) => {
        console.log("Dispatched UPDATE_ON_SEARCH_REQUEST action");
        searchRequestToApi(searchedText, dispatch);
    }
})

export default connect(null, mapDispatchToProps)(SearchBox);