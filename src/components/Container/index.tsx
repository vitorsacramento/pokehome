import styled from "styled-components";

type ContainerProps = {
    justifyContent?: string;
    flexDirection?: string;
    alignItem?: string;
}

export const Container = styled.div<ContainerProps>`
    display: flex;
    flex-direction: ${props => props.flexDirection};
    justify-content: ${props => props.justifyContent};
    align-items: ${props => props.alignItem};
    width: 100%;
    max-width: 1200px;
    margin: 0 20px;
`;
