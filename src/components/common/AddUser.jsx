import React from 'react';
import styled from 'styled-components';
import Input from './Input';

const Styled = {
    Body: styled.div`
        display : flex;
        align-items: center;
        justify-content: center;
        width : 100%;
    `,
    Col: styled.div`
        display : flex;
        align-items: center;
        justify-content: center;
        width : ${props => props.width}%;
    `,
}



const AddUser = () => {
    const AddClick = (e) => {
        
    }
    return (
        <Styled.Body>
            <button
                onClick={
                    AddClick
                }
            >추가</button>
        </Styled.Body>
    )
}

export default AddUser;