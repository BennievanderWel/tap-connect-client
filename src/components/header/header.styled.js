import styled from 'styled-components'

export const HeaderStyled = styled.div`
  height: 50px;
  width: 100%;
  background-color: ${props => props.theme.colors.red};
  box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.54);
  padding: 1px;
  display: flex;
`

export const HeaderLeftContent = styled.div`
  padding: 12px;
  flex: 1;
`

export const HeaderRightContent = styled.div`
  display: flex;
`

export const UsernameText = styled.div`
  padding-right: 10px;
  margin-top: 14px;
`
