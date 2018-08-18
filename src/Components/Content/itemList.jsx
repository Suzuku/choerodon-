import React, { Component } from 'react';
import './itemList.css'





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

export default class List extends Component
{
    constructor(props)
    {
        super(props);
    }
    render()
    {
       
        const { title, sorts } = this.props;
        return(
        <div className={'assign'}>

        <div className={'list-title'}>
        {title}
        </div>
        <div className={'group'}>
          {sorts.map((item, index) => (
            <div key={index} className={'card'}>
              <img src={item.url} className={'icon'} />
              <div className={'cardTitle'}>
              {item.title}
              </div>
              <div className={'list-content'}>
              {item.text}
              </div>
            </div>
          ))}
        </div>
      </div>
        )
    }
}