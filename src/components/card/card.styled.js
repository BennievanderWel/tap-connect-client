import styled from 'styled-components'

const Card = styled.div`
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  background-color: ${props => props.theme.colors.offwhite};
  border-radius: 4px;
  padding: 24px;
`

export default Card
