import React from 'react'

var INQUIRELISTS = [
      {
        id: 1,
        name: '湖工大教学管理平台',
        description: '查分选课课表评教',
        link: 'http://run.hbut.edu.cn/'
      }, {
        id: 2,
        name: '工程教学管理平台',
        description: '查分选课课表评教',
        link: 'http://202.114.177.68/jiaowu/'
      }, {
        id: 3,
        name: '湖工大个人信息门户',
        description: '官方网站 政策文件',
        link: 'http://portal.hbut.edu.cn/'
      }, {
        id: 4,
        name: '工程图书馆',
        description: '多泡泡我，我好寂寞',
        link: 'http://lib.hbut.edu.cn/v13/index.asp'
      }, {
        id: 5,
        name: '湖工大语言学习中心',
        description: '让挂机充实你的时间吧',
        link: 'http://10.215.27.233/LSC/'
      }, {
        id: 6,
        name: '一卡通自助查询',
        description: '查询查询',
        link: 'http://ecard.hbut.edu.cn/SelfSearch/'
      }, {
        id: 7,
        name: '湖工大图书馆',
        description: '高大上的图书馆快来',
        link: 'http://lib.hbut.edu.cn/'
      }, {
        id: 8,
        name: '大学物理实验',
        description: '实验预约',
        link: 'http://dxwlsy.hbut.edu.cn/'
      }]

      export default React.createClass({
        render: function() {
          return (
            <Inquire inquirelists={INQUIRELISTS} />
          )
        }
      })

      var Inquire = React.createClass({
        render: function() {
          return (
            <div className="mui-container-fluid">
              <div className="mui-row">
                <InquireLists inquirelists={this.props.inquirelists} />
              </div>
            </div>
          )
        }
      });

      var InquireLists = React.createClass({
        render: function() {
          var inquirelists = this.props.inquirelists.map(function(inquirelist, i){
            return <Inquirelist inquirelist={inquirelist} key={i} />
          });

          return (
            <div className="inquirelists">
              {inquirelists}
            </div>

          )
        }
      });

      var Inquirelist = React.createClass({
        render: function() {
          var inquirelist = this.props.inquirelist;

          return (
            <div className="mui-col-md-6">
              <div className="mui--text-title">
                <a href={inquirelist.link}>{inquirelist.name}</a>
                </div>
              <p>{inquirelist.description}</p>
              <hr />
            </div>
          )
        }
      });
