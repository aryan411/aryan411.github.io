import styled from "styled-components";

export const Container = styled.section`
  margin-top: 15rem;

  h1 {
    text-align: center;
    margin-bottom: 3rem;
  }
  .projects {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: 2rem;
    padding: 1rem;
    overflow: hidden;

    .project {
      padding: 2rem;
      background-color: rgba(128, 128, 128, 0.2);
      border-radius: 1.2rem;
      transition: 0.25s;
      display: flex;
      flex-direction: column;
      height: 100%;

      &:hover {
        transform: translateY(-5px);
        background-color: var(--pink);
      }

      header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: var(--blue);
        margin-bottom: 3.6rem;
        .project-links {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        a > img {
          width: 5rem;
        }
      }

      h3 {
        margin-bottom: 2rem;
      }

      p {
        letter-spacing: 0.12rem;
        margin-bottom: 2rem;
        a {
          color: #ffff;
          border-bottom: 1px solid var(--green);
          transition: color 0.25s;
          &:hover {
            color: var(--green);
          }
        }
      }

      footer {
        margin-top: auto;
        .tech-list {
          display: flex;
          align-items: center;
          gap: 2rem;
          opacity: 0.6;
          li {
            padding: 0.5rem 1rem;
            font-size: 1.2rem;
          }
        }
      }
    }
  }

  @media (max-width: 960px) {
    .projects {
      grid-template-columns: repeat(2, 1fr);
      padding: 0.5rem;
    }
    .project {
      padding: 1.5rem;
    }
  }

  @media (max-width: 740px) {
    .projects {
      grid-template-columns: minmax(200px, 1fr)
    }
  }
`;
