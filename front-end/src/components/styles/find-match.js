import styled from "styled-components";

export const FilterIcon = styled.i`
    transform: rotate(0deg);
    transition: all 0.4s ease-out;
    transform: ${(props) => (props.displayFilters ? `rotate(180deg)` : "")};
`;

export const FilterSectionHeading = styled.div`
    display: flex;
    justify-content: center;
`;
