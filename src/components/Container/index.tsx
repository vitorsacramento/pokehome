import styled from "styled-components";

type ContainerProps = {
    justifyContent?: string;
}

export const Container = styled.div<ContainerProps>`
    display: flex;
    justify-content: ${props => props.justifyContent};
    width: 100%;
    max-width: 1200px;
`;
