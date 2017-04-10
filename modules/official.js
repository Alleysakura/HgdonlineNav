import React from 'react'

var SITELISTS = [
    {
      id: 1,
      name: '湖北工业大学官网',
      description: '学校官方网站',
      link: 'http://www.hbut.edu.cn/'
    }, {
      id: 2,
      name: '工程技术学院官网',
      description: '工程官方网站',
      link: 'http://gcxy.hbut.edu.cn/'
    }, {
      id: 3,
      name: '湖工大教务处',
      description: '考试放假补考清考，全在这里',
      link: 'http://dean.hbut.edu.cn/'
    }, {
      id: 4,
      name: '工程教务处',
      description: '考试放假补考清考，全在这里',
      link: 'http://202.114.177.212/jwb/'
    }, {
      id: 5,
      name: '湖北工业大学招生信息网',
      description: '新生毕业生都要来这里',
      link: 'http://www.hbut.edu.cn/zhaosheng/index.html'
    }, {
      id: 6,
      name: '研究生院',
      description: '研究生的一切',
      link: 'http://yjs.hbut.edu.cn/'
    }, {
      id: 7,
      name: '工程招生网',
      description: '招生信息一切打尽',
      link: 'http://zs.hgdgcxy.com/'
    }, {
      id: 8,
      name: '工程就业网',
      description: '就业信息全在这里',
      link: 'http://hggc.91wllm.com/'
    }]

export default React.createClass({
  render: function() {
    return (
      <Official sitelists={SITELISTS} />
    )
  }
})

var Official = React.createClass({
  render: function() {
    return (
      <div className="mui-container-fluid">
        <div className="mui-row">
          <SiteLists sitelists={this.props.sitelists} />
        </div>
      </div>
    )
  }
});

var SiteLists = React.createClass({
  render: function() {
    var sitelists = this.props.sitelists.map(function(sitelist, i){
      return <Sitelist sitelist={sitelist} key={i} />
    });

    return (
      <div className="sitelists">
        {sitelists}
      </div>

    )
  }
});

var Sitelist = React.createClass({
  render: function() {
    var sitelist = this.props.sitelist;

    return (
      <div className="mui-col-md-6">
        <div className="mui--text-title">
          <a href={sitelist.link}>{sitelist.name}</a>
          </div>
        <p>{sitelist.description}</p>
        <hr />
      </div>
    )
  }
});
