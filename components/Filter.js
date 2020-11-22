import React, { useState, useEffect , useContext} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import {ContextFilter} from '../contextFilter'
const ContFilter = styled.div`
    display: flex;
    width: 25%;
    flex-direction: column;
    background-color: #dfdfdf;
    margin-bottom: 20px;
    align-content: flex-end;
    border-radius: 5px;
`
const TitleBlock = styled.div`
    width: 100%;
    background-color: #176887;
    font-size: 18px;
    color: white;
    padding-left: 10px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
`
const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
`
const ItemGroup = styled.span`
    color: #a8a8a8;
    font-size: 14px;
    padding-left: 10px;
`
const Item = styled.span`
    cursor: pointer;
    font-family: sans-serif;
    transition-duration: 0.4s;
    padding-left: 10px;
    padding-bottom: 5px;
    &:hover {
    background-color: gray;
    color: white;
    padding-left: 5px;
    border-radius: 5px;
  }
`

const Filter = () => {
    const { filterFalse } = useContext(ContextFilter);
    return (
        <ContFilter>
            <TitleBlock>Фильтр</TitleBlock>
            <ItemGroup>РЕЗУЛЬТАТ</ItemGroup>
            <MainDiv>
                <Item >ВСЕ</Item>
                <Item >Положительные</Item>
                <Item onClick={() => {
                    filterFalse()
                }}>Отрицательные</Item>
            </MainDiv>
        </ContFilter>
    )
}

export default Filter