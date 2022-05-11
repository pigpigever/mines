import styled from 'styled-components';
import {Button} from '../../components/Button';

const HomeWrapper = styled.div`
  height: 50%;
  margin: 100px auto;
  width: 50%;
`;

const Title = styled.div` 
  color: #2980B9;
  font-family: 'Pacifico';
  font-size: 40px;
  font-weight: normal;
  line-height: 1.4;
  text-align: center;
`;


export const Home = () => {
    return (
        <HomeWrapper>
            <Title>Welcome to play mines.</Title>
            {/* <button>click here</button>*/}
            <Button text="Easy" hoverText="Enter" />
        </HomeWrapper>
    );
};
