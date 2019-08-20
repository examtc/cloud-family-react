import React, { Component } from 'react';
import CategoryUI from './CategoryUI'
class CategoryContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <CategoryUI></CategoryUI> );
    }
}
 
export default CategoryContainer;