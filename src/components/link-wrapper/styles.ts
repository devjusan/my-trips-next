import styled from "styled-components"

export const Wrapper = styled.div`
  top: var(--medium);
  right: var(--medium);
  color: var(--white);
  cursor: pointer;
  position: fixed;
  z-index: 1100; // bigger than leaflet

  svg {
    transition: color 0.3s ease-in-out;
  }
`
