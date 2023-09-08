import { styled } from "styled-components";

export const Heading = styled.h1`
    font-size: ${({ theme: { fontSize }}) => fontSize.small};
`;