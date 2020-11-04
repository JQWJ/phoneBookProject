import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import AddUser from './components/common/AddUser'

import PhoneBookList from './components/common/PhoneBookList'
// import Add from './components/common/Add';

const Styled = {
	Body: styled.div`
    display : flex;
    width : 100%;
    flex-direction : column;
  `,
	Container: styled.div`
    display : flex;
    width : 1000px;
    min-height : 1000px;
    margin : auto;
    flex-direction : column;
    background-color : white;
	text-align: center
  `,
	Wrapper: styled.div`
    display : flex;
    width : 100%;
  `,
	Add: styled.div`
	display: flex;
	width: 35%;
	height: 50px;
	align-items: center;
	justify-content: center;
	border: 1px solid black;
	margin : auto;

	`
}

function App() {


	const [phoneBookInfos, setPhoneBookInfos] = useState([
		{
			id: 1,
			isEditing: false,
			infos: [
				{
					title: '이름',
					name: 'hello',
					value: '',
					type: 'text',
				},
				{
					title: '전화번호',
					name: 'phoneNumber',
					value: '',
					type: 'number',
				},
			]
		},
		{
			id: 2,
			isEditing: false,
			infos: [
				{
					title: '이름',
					name: 'hello',
					value: '',
					type: 'text',
				},
				{
					title: '전화번호',
					name: 'phoneNumber',
					value: '',
					type: 'number',
				},
			]
		},
	])

	const nextId = useRef(4);
	const onCreate = () => {
		nextId.current += 1;
	}

	const handleOnChangePhoneBookInfo = (e, id) => {
		setPhoneBookInfos((prevState) => {
			return prevState.map((res) => {
				if (res.id === id) {
					return {
						...res,
						infos: res.infos.map((inRes) => {
							if (e.target.name === inRes.name) {
								return {
									...inRes,
									value: e.target.value
								}
							}
							return inRes
						})
					}
				}
				return res
			})
		})
	}

	const handleOnClickPhoneBookInfoEditButton = (id) => {
		setPhoneBookInfos((prevState) => {
			return prevState.map((res) => {
				if (id === res.id) {
					return {
						...res,
						isEditing: !res.isEditing
					}
				}
				return res
			})
		})
	}

	return (
		<Styled.Body>
			<Styled.Add>
				<AddUser />
				</Styled.Add>
			<Styled.Container>
				<Styled.Wrapper>

					<PhoneBookList
						infos={phoneBookInfos}
						onChange={handleOnChangePhoneBookInfo}
						onClickEditButton={handleOnClickPhoneBookInfoEditButton}
					/>

				</Styled.Wrapper>
			</Styled.Container>
		</Styled.Body>
	);
}

export default App;
