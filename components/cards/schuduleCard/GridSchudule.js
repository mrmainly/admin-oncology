import React, {useState} from 'react'
import {Row, Col, Typography, Button} from 'antd'
import ColSchudule from './Col'
const { Title, Text } = Typography;
const GridSchudule = () => {
    const [col, setCol] = useState({ num: "10:25" });
    return(
    <>
        <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <Button>Сохранить изменения</Button>
        <Text style={{ marginLeft: 10 }}>
          *Поля обязатедбные для заполнения
        </Text>
      </div>
      <Title level={5} style={{ marginTop: 20 }}>
        Сетка расписаний
      </Title>
      <Row justify="space-between">
        {/* {col ? col.map(e => (
                         <ColSchudule title={e.num} />
                     )) : null} */}
        <Col span={1}>
          <Button>10:25</Button>
        </Col>
      </Row>
    </>
    )
}

export default GridSchudule