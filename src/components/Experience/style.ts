import styled from "styled-components";

export const Container = styled.section`
  margin-top: 12rem;
  display: grid;
  gap: 2rem;

  .experience-card {
    background-color: rgba(128, 128, 128, 0.2);
    border-radius: 1.2rem;
    padding: 2rem;
    transition: 0.25s;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    &:hover {
      transform: translateY(-5px);
      background-color: var(--pink);
    }
  }
  a {
    color: inherit; /* Inherit the color from the parent element */
    text-decoration: none; /* Optionally remove underline */
  }

  .experience-header {
    margin-bottom: 1rem;
    display:flex;
    justify-content: space-between;
    h3 {
      color: var(--green);
      font-size: 1.8rem;
      margin-bottom: 0.5rem;
    }

    h4 {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
    }
  }

  .duration {
    opacity: 0.6;
    font-size: 1.2rem;
  }

  .experience-overview {
    line-height: 1.6;
    margin-bottom: 1rem;
  }

  .experience-technologies ul {
    list-style: none;
    padding: 0;
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    opacity: 0.6;

    li {
      font-size: 1.2rem;
    }
  }
`;
