import React from 'react'

export default React.createClass({
  render() {
    return (<div>
              <header className="mui-appbar mui--z1">
                <div className="mui-container">
                  <table width="100%">
                    <tr className="mui--appbar-height">
                      <td class="mui--text-title">湖工大在线</td>
                      <td align="right">
                        <ul class="mui-list--inline mui--text-body2">
                          <li><a class="mui--color-white" href="/#/">首页</a></li>
                          <li><a class="mui--color-white" href="https://bbs.hgdonline.net">南湖呓语论坛</a></li>
                          <li><a class="mui--color-white" href="https://open.hgdonline.net">开源社区</a></li>
                          <li><a class="mui--color-white" href="/about/">关于我们</a></li>
                        </ul>
                      </td>
                    </tr>
                  </table>
                </div>
              </header>
            </div>
        )
  }
});
