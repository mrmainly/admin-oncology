import React, {useState} from 'react'
import styled from 'styled-components'
import { Card, Layout } from 'antd';
import SchuduleCard from '../../components/cards/SchuduleCard'
import ActivationCard from '../../components/cards/ActivationCard'
import InformationCard from '../../components/cards/InformationCard'
const {Content} = Layout

const tabListNoTitle = [
    {
      key: 'article',
      tab: 'информация',
    },
    {
      key: 'app',
      tab: 'рассписание',
    },
    {
      key: 'project',
      tab: 'локация',
    },
  ];

  const contentListNoTitle = {
    article: <ActivationCard />,
    app: <SchuduleCard />,
    project: <InformationCard />,
  };

const Schudule = () => {
    const [content, setContent] = useState({noTitleKey:'app', key:'tab2'})
    const onTabChange = (key, type) => { 
        setContent({ [type]: key });
      };
    return(
        <Content>
            <Card
          style={{ width: '100%' }}
          tabList={tabListNoTitle}
          activeTabKey={content.key}
          onTabChange={key => {
            onTabChange(key, 'noTitleKey');
          }}
        >
          {contentListNoTitle[content.noTitleKey]}
          </Card>
        </Content>
    )
}

export default Schudule