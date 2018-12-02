import React from 'react'
import styled from 'styled-components'

const EmptyViewStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: ${props => props.theme.colors.grey};
  font-style: italic;
`

const EmptyView = () => {
  return (
    <EmptyViewStyled>
      <span>Selecteer een chat of voeg een nieuwe chat toe</span>
      <br />
      <span>Veel plezier! :)</span>
    </EmptyViewStyled>
  )
}

export default EmptyView
