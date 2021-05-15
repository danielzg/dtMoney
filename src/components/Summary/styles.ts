import styled from 'styled-components'

export const Container = styled.div`
    color: black;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: -7rem;

    div {
        background: var(--shape);
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;
        color: var(--text-title);

        &.highligth-background{
        background: var(--green);
        color: #FFF;
        }
    }

   

    header{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    strong {
        margin-top: 1rem;
        font-size: 2rem;
        font-weight: normal;
        line-height: 3rem;
        display: block;
    }
`;