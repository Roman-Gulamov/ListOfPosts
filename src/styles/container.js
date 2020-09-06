import styled from 'styled-components';

export const Container = styled.div`
    padding: 0 15px;

    @media (min-width: 575.98px){
        padding: 0 calc(50% - 200px);
    }
    @media (min-width: 767.98px){
        padding: 0 calc(50% - 260px);
    }

    @media (min-width: 991.98px) {
        padding: 0 calc(50% - 380px);
    }

    @media (min-width: 1199.98px){
        padding: 0 calc(50% - 490px);
    }
`