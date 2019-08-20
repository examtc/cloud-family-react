import React, { Component } from 'react';

import {StylesearchFriend} from './StyleSearchFriend'
import TopHeader from 'components/topHeader/'
import { SearchBar,  List } from 'antd-mobile';
import BScroll from 'better-scroll'
import { get } from 'util/http'

import sys from 'assets/image/contacts/sys.png'

const Item = List.Item;

class SearchFriendUI extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            
         }
    }
    async componentDidMount(){
      
        
    }
    
   
    render() { 
        return ( 
            <StylesearchFriend>
                <div className="top">
                    <TopHeader 
                    title="搜索好友"
                    rightEle={<img src={sys} style={{ height:".2rem" }}/>}
                    ></TopHeader>
                    <SearchBar placeholder="手机号搜索/账号搜索" maxLength={8} />
                </div>
            
                    
             
                
                
            </StylesearchFriend>
         );
    }
}
 
export default SearchFriendUI;