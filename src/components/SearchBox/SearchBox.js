import React, { Component } from 'react'
import './SearchBox.css';
import { connect } from 'react-redux';

class SearchBox extends Component {

    state = {
        searchValue: '',
    }

    handleSearchChange = (e) => {
        this.setState({ searchValue: e.target.value });
    }

    handleSearchRequest = (e) => {
        if (e === null || e.key === "Enter") {

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

const mapStateToProps = (state) => {
    console.log("mapStateToProps in SearchBox");

    return {
    }
}

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);