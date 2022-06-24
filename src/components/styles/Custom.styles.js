import styled from 'styled-components';
import Title from '../Title';

// eslint-disable-next-line import/prefer-default-export
export const StyledTitle = styled(Title)`
    color: ${(props) => props.color};
`;

export const StyledButton = styled(Title)`
    color: ${(props) => props.color};
    position:absolute;
    right:-19rem;
    top:-3rem;
    font-size: 1rem;
    curson:pointer;
`;