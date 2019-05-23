import React from 'react';

class SearchBar extends React.Component{
    state={term:'Search Your Video !!!'};
    onInputChange =( event) =>{
        this.setState({term: event.target.value});
    }; 
    onFromSubmit=(event)=>{
        event.preventDefault();
        this.props.onFormSubmit(this.state.term)
    }
    render(){
        return(
            <div>
                <div className='search-bar ui segment'>
                    <form onSubmit={this.onFromSubmit} className='ui form'>
                        <div className="field">
                            <label><h3>Vedio Search</h3></label>
                            <input type='text' 
                                value={this.state.term}
                                onChange={this.onInputChange}
                            />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
export default SearchBar;