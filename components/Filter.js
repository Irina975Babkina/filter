﻿import React from 'react';

import './Filter.css';

class Filter extends React.Component {

  state = {
    list: this.props.arrList,
    selected: false,
    filterText: "",
    
  };

  checkboxChange = eo => {
    this.setState({selected: eo.target.checked}, this.applySorting);
  };

  inputChange = eo => {
    this.setState({filterText: eo.target.value}, this.applySorting);
  };

  reset = eo => {
    this.setState({selected: false, filterText: ""}, this.applySorting);
  };

  applySorting = () => {
    let newList = this.props.arrList.slice(0);
    if (this.state.filterText) {
      newList = newList.filter(word => word.includes(this.state.filterText));
    };
    if (this.state.selected) {
      newList.sort();
    };
    this.setState({list:newList});
  };
  
  render() {
    return (
      <div className='Filter'>
        <input type = "checkbox" className ='Checkbox' checked = {this.state.selected} onChange = {this.checkboxChange} /> 
        <div className='List'>
         <input type = "text" className ='Input-text' value={this.state.filterText} onChange = {this.inputChange} />
         <textarea className ='Textarea' value = {this.state.list.join("\n")} onChange = {this.inputChange}></textarea>
        </div>
        <input type="button" className ='Reset' value = "Reset" onClick={this.reset}/>
      </div>    
    );
  }

}

export default Filter;
