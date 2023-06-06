import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
function Section(props) {
    return (
        <Wrap bgImage={props.backgroundImg}>
            <Fade bottom>
                <ItemText>
                    <h1>{props.title}</h1>
                    <p>{props.description}</p>
                </ItemText>
            </Fade>
            <Fade bottom>
                <ButtonGroup>
                    <LeftButton>
                        {props.leftBtnText}
                    </LeftButton>
                    {props.rightBtnText &&
                        <RightButton>
                            {props.rightBtnText}
                        </RightButton>
                    }
                </ButtonGroup>
            </Fade>
            <DownArrow src='/Tesla images/down-arrow.svg' />
        </Wrap>
    )
}

export default Section;


const Wrap = styled.div`
z-index: 10;
width: 100vw;
height: 100vh;
background-size: cover;
background-position: center;
background-repeat: no-repeat;
background-image: url('/Tesla images/model-3.jpg');
display: flex;
flex-direction: column;
justify-content: space-between; //vertical alignment for pushing two button to bottom
align-items: center;
background-image: ${props => `url("/Tesla Images/${props.bgImage}")`}
`

const ItemText = styled.div`
padding-top: 15vh;
text-align: center;
`

const ButtonGroup = styled.div`
display: flex;
padding-top: 49%;
gap: 10px;
@media (max-width: 768px){
    flex-direction: column;
}
`

const LeftButton = styled.div`
background-color: rgba(23,26,32,0.8);
height: 40px;
width: 256px;
color: white;
display: flex;
justify-content: center;
align-items: center;
border-radius: 100px;
opacity: 0.85;
text-transform: uppercase;
font-size: 12px;
cursor: pointer;
&:hover{
    color: yellow;            
}
`

const RightButton = styled(LeftButton)`
background: white;
opacity: 0.65;
color: black;
`
const DownArrow = styled.img`
margin-top: 20px;
height: 40px;
animation: animationDown infinite 1.5s;
overflow-x: hidden;
`