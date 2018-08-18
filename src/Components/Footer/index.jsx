import React, { Component } from 'react';
import './index.css'

export default class Footer extends Component {
  render() {
    return (
      <div className={'footer'}>
      <div className={'interact'}>
      <h3 style={{fontWeight:600}}>互动</h3>
      <br></br>
      <a href='#' className={'a-text'}>博客</a>
      <br></br>
      <a href='#'className={'a-text'}>社区</a>
      </div>
      <div className={'link'}>
      <h3 style={{fontWeight:600}}>快捷链接</h3>
      <br></br>
      <a href='#' className={'a-text'}>文档</a>
      <br></br>
    <a href='#' className={'a-text'}>案例</a>
      </div>

      </div>
    );
  }
}