import styled from 'styled-components';
import Link from 'next/link';

const AssessmentCompletedPage = () => {
  return (
    <Container>
      <Icon>
        <img src="/path/to/icon.png" alt="Thank you icon" />
      </Icon>
      <Title>Thank You</Title>
      <Description>
        Your information was submitted to our team of immigration attorneys. Expect an email from hello@tryalma.ai.
      </Description>
      <Link href="/" passHref>
        <Button>Go Back to Homepage</Button>
      </Link>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f9fafb;
  text-align: center;
`;

const Icon = styled.div`
  margin-bottom: 2rem;
  /* Add styles for the icon, or you can use an img tag for the icon */
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1rem;
  margin-bottom: 2rem;
`;

const Button = styled.button`
  padding: 1rem 2rem;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #333;
  }
`;

export default AssessmentCompletedPage;
