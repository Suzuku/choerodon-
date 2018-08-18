import React, { Component } from 'react';

import { Button,Icon } from 'choerodon-ui';
import 'choerodon-ui/dist/choerodon-ui.css'
import './index.css'

export default class Header  extends Component {
  render() {
    return (
        <div className={'top-div'}>
       
          <div className={'cloud'}>
            <Icon type="wb_cloudy" style={{ fontSize: 30,width:40 }} />
            Hand Cloud Platform
          </div>
          <div >
            <Button type="primary"  style={{
              color:'#ffffff',
              width:'200px',
              
              }}>
              <Icon type="widgets" style={{}}/>销售项目A
              <Icon type="baseline-arrow_drop_down" style={{}}/>
            </Button>
            <Button type="primary" style={{
              color:'#ffffff',
            padding:'10px'
            }}>
              设置<Icon type="settings" style={{}}/>
            </Button>
          </div>

        <Button shape="circle"
          style={{
            backgroundColor: "rgba(255,255,255,0.70)",
             marginTop:'15px',
            color: "#3F51B5",
            marginLeft: '65%'
          }}
        >
          M
        </Button>
      </div>
    );
  }
}