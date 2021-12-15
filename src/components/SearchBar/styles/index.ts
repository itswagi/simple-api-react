import  styled  from 'styled-components';
import { breakpoints } from '../../../utils/constants';

export const SearchBarContainer = styled.div`
  position: absolute;
  display: flex;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 50px;
  align-items: center;
  width: 80%;
  max-width: 500px;
  box-shadow: 3px 4px 9px 2px #0000001c;
  padding: 5px 10px;

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