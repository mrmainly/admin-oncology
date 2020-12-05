import React, {useState} from 'react'
import {Button, Checkbox, Typography} from 'antd'

const {Title} = Typography

const Week = () => {


    // const [checked, setChecked] = useState(false)
    // const typer = () => {
    //     let type
    //     if(checked == false) {
    //         type = "primal"
    //     } else if(checked == true) {
    //         type = "danger"
    //     }
    //     return(type)
    // }
    return(
        <div>
            <Title level={5}> Дни активация</Title>
            <Button><Checkbox >Понедельник</Checkbox></Button>
            <Button><Checkbox >Вторник</Checkbox></Button>
            <Button><Checkbox >Cреда</Checkbox></Button>
            <Button><Checkbox >Четверг</Checkbox></Button>
            <Button><Checkbox >Пятница</Checkbox></Button>
            <Button><Checkbox >Субота</Checkbox></Button>
            <Button><Checkbox >Воскресенье</Checkbox></Button>
            <Button><Checkbox >Предпраздник</Checkbox></Button>
            <Button><Checkbox >Праздник</Checkbox></Button>
        </div>
    )
}

export default Week