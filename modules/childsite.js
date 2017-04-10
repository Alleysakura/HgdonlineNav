import React from 'react'

var CHILDSITELISTS = [
    {
      id: 1,
      name: '轻工学部',
      link: 'http://qgxb.hbut.edu.cn/'
    }, {
      id: 2,
      name: '土木工程与环境学院',
      link: 'http://www.hbuttj.com/'
    }, {
      id: 3,
      name: '电器与电子工程学院',
      link: 'http://eee.hbut.edu.cn/'
    }, {
      id: 4,
      name: '计算机学院',
      link: 'http://jsjxy.hbut.edu.cn/'
    }, {
      id: 5,
      name: '马克思主义学院',
      link: 'http://mkszyxy.hbut.edu.cn/'
    }, {
      id: 6,
      name: '理学院',
      link: 'http://lxy.hbut.edu.cn/'
    }, {
      id: 7,
      name: '机械工程学院',
      link: 'http://tsme.hbut.edu.cn/'
    }, {
      id: 8,
      name: '体育部',
      link: 'http://pehg.hbut.edu.cn/'
    }, {
      id: 9,
      name: '艺术与设计学院',
      link: 'http://ads.hbut.edu.cn/'
    }, {
      id: 10,
      name: '材料与化学工程学院',
      link: 'http://smce.hbut.edu.cn/'
    }, {
      id: 11,
      name: '经济与政法学院',
      link: 'http://jjyzfxy.hbut.edu.cn/'
    }, {
      id: 12,
      name: '外国语学院',
      link: 'http://fls.hbut.edu.cn/'
    }, {
      id: 13,
      name: '继续教育学院',
      link: 'http://ce.hbut.edu.cn/'
    }, {
      id: 14,
      name: '经济与管理学院',
      link: 'http://glxy.hbut.edu.cn/'
    }, {
      id: 15,
      name: '工业设计学院',
      link: 'http://ids.hbut.edu.cn/'
    }, {
      id: 16,
      name: '国际学院',
      link: 'http://sie.hbut.edu.cn/'
    }]

export default React.createClass({
  render: function() {
    return (
      <Childsite childsitelists={CHILDSITELISTS} />
    )
  }
})

var Childsite = React.createClass({
  render: function() {
    return (
      <div className="mui-container-fluid">
        <div className="mui-row">
          <ChildSiteLists childsitelists={this.props.childsitelists} />
        </div>
      </div>
    )
  }
});

var ChildSiteLists = React.createClass({
  render: function() {
    var childsitelists = this.props.childsitelists.map(function(childsitelist, i){
      return <ChildSitelist childsitelist={childsitelist} key={i} />
    });

    return (
      <div className="childsitelists">
        {childsitelists}
      </div>

    )
  }
});

var ChildSitelist = React.createClass({
  render: function() {
    var childsitelist = this.props.childsitelist;

    return (
      <div className="mui-col-md-3">
        <div className="mui--text-title">
          <p><a href={childsitelist.link}>{childsitelist.name}</a></p>
          </div>
        <hr />
      </div>
    )
  }
});
