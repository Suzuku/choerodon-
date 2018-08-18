import React, { Component } from 'react';
import './index.css'
import List from './itemList.jsx'
const learn=[
  {
      url:'../../assets/1.svg',
      title:'创建一个项目',
      text:'从创建项目、定义环境、资源等方面介绍Choerodon项目，让读者能够了解项目的基本概念'
  },
  {
      url:'../../assets/2.svg',
      title:'创建一个前端应用',
      text:'从创建项目、定义环境、资源等方面介绍Choerodon项目，让读者能够了解项目的基本概念'
  },
  {
      url:'../../assets/3.svg',
      title:'创建一个后端应用',
      text:'从创建项目、定义环境、资源等方面介绍Choerodon项目，让读者能够了解项目的基本概念'
  },
  {
      url:'../../assets/4.svg',
      title:'创建一个Java库',
      text:'从创建项目、定义环境、资源等方面介绍Choerodon项目，让读者能够了解项目的基本概念'
  }
]

const main=[
  {
      url:'../../assets/5.svg',
      title:'系统配置',
      text:'从创建项目、定义环境、资源等方面介绍Choerodon项目，让读者能够了解项目的基本概念'
  },
  {
      url:'../../assets/6.svg',
      title:'敏捷管理',
      text:'从创建项目、定义环境、资源等方面介绍Choerodon项目，让读者能够了解项目的基本概念'
  },
  {
      url:'../../assets/7.svg',
      title:'持续交付',
      text:'从创建项目、定义环境、资源等方面介绍Choerodon项目，让读者能够了解项目的基本概念'
  },
]

const dev=[
  {
      url:'../../assets/8.svg',
      title:'前端开发',
      text:'从创建项目、定义环境、资源等方面介绍Choerodon项目'
  },
  {
      url:'../../assets/9.svg',
      title:'后端开发',
      text:'从创建项目、定义环境、资源等方面介绍Choerodon项目'
  },
  {
      url:'../../assets/10.svg',
      title:'平台开发',
      text:'从创建项目、定义环境、资源等方面介绍Choerodon项目'
  },
]

const install=[
  {
      url:'../../assets/11.svg',
      title:'Gitlab安装',
      text:'从创建项目、定义环境、'
  },
  {
      url:'../../assets/12.svg',
      title:'Redis安装',
      text:'从创建项目、定义环境、'
  },
  {
      url:'../../assets/13.svg',
      title:'Kubernate安装',
      text:'从创建项目、定义环境、'
  },
  {
      url:'../../assets/14.svg',
      title:'Kafaka安装',
      text:'从创建项目、定义环境、'
  },
]

export default class Content extends Component {
  render() {
    return (
      <div className={'content'}>
        <List title="快速入门" sorts={learn} />
        <List title="主要功能" sorts={main} />
        <List title="开发手册" sorts={dev} />
        <List title="安装与配置" sorts={install} />
        </div>
    );
  }
}
