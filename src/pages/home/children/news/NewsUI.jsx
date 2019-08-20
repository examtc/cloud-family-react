import React, { Component } from 'react';

import {StyleNews} from './StyleNews'
import TopHeader from 'components/topHeader/'
import newsBg from 'assets/image/home/newsBg.png'
class NewsUI extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <StyleNews>
               <TopHeader></TopHeader>
               <div className="text">
               <h1>
               【夜读】有一种智慧，叫学会“转弯”直道可跑马，曲径能通幽。
               </h1>
               <div>
               人生像一本书，翻过这一页才能书写下一页，事过境迁再去读，才有超然物外的洒脱。
               </div>
               <img className="newsBg" src={newsBg} alt="" />
               <div>
               听过一个故事：老师父和小徒弟一同下山，路上老师父问道：如果你进一步则死，退一步则亡，那你准备怎么做？小徒弟毫不犹豫地回答说：“我往旁边去。
               </div>
               <div>
               往旁边去！多么智慧的回答，道理也许人人都懂，但真正在生活中遇到问题时，却极少有人悟出这个理。
               </div>
               </div>
               
            </StyleNews>
         );
    }
}
 
export default NewsUI;