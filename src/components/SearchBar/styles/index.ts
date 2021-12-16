import  styled  from 'styled-components';
import { breakpoints } from '../../../utils/constants';

interface FormProps {
  readonly error: boolean
}

export const SearchBarContainer = styled.form<FormProps>`
  display: flex;
  height: 50px;
  align-items: center;
  box-shadow: 3px 4px 9px 2px #0000001c;
  padding: 5px 10px;
  border: ${props => props?.error ? '1px solid red' : 'none'};

  @media ${breakpoints.sm} {
    width: 500px;
  }
`

export const SearchBarInput = styled.input`
  border: none;
  outline: none;
  flex-grow: 1;
`

export const SearchIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const SearchButton = styled.button`
  background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
`