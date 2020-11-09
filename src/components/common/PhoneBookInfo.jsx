import React from 'react';
import styled from 'styled-components';
import Input from './Input';
import moment from 'moment'
import 'moment/locale/ko'
moment.locale('ko')

const Styled = {
    Body: styled.div`
        display : flex;
        align-items: center;
        justify-content: center;
        width : 100%;
        border : 2px solid #000000;
        padding : 24px;
        flex-direction : column;
        font-weight: bold;
    `,
    Row: styled.div`
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        width : 100%;
        margin-bottom : ${props => props.bottom}px;
    `,
    Col: styled.div`
        display : flex;
        align-items: center;
        justify-content: center;
        width : ${props => props.width}%;
    `
}

const PhoneBookInfo = (props) => {
    
    const { info, onChange, onClickEditButton, remove, date } = props
    
    const { id, isEditing, infos, isStaic } = info
    
    const handleChangeInput = (e) => {
        onChange(e, id)
    }
    
    const handleRemove = () => {
        remove(id)
    }

    const isDate = () => {
        date(isStaic)
    }

    const inputList = infos.map((res) => {
        return (
            <Styled.Row key={res.name} bottom="30">
                <Input
                    info={res}
                    isEditing={isEditing}
                    onChange={handleChangeInput}
                />
            </Styled.Row>

        )
    })

    return (
        <Styled.Body>
            {inputList}
            <Styled.Row>
                <button
                    onClick={e => {
                        e.preventDefault()
                        onClickEditButton(id)
                    }}
                >
                    {isEditing ? '저장하기' : '수정하기'}
                </button>
                <button
                    onClick={
                        handleRemove
                    }
                >삭제하기</button>
            </Styled.Row>
        </Styled.Body>
    );
};

PhoneBookInfo.defaultProps = {
    info: {
        title: '-',
    }
}

export default PhoneBookInfo;