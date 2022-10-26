import { StyledButton, ButtonGroup } from "./style";

const RecommendedTopics: React.FC<{ topics: string[] }> = ({ topics }) => {
  return (
    <>
      <ButtonGroup>
        {topics.map((item, index) => (
          <StyledButton key={index} variant="contained">
            {item}
          </StyledButton>
        ))}
      </ButtonGroup>
    </>
  );
};

export default RecommendedTopics;
