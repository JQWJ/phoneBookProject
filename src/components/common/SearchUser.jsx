import React from 'react';
import styled from 'styled-components';

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

const SearchUser = (props) => {

    const { value } = props
    
    const userSearch = (e) => {
        console.log(e.target.value)
    }

    return (
        <Styled.Body>
            <input 
                type='text'
                size='25'
                value = {value}
                onChange = {userSearch}
            />
        </Styled.Body>
    )
}

export default SearchUser;