import React from 'react';
import styled from "styled-components";
import {H1} from "@/style/TextTags";
import Markdown from "react-markdown";
import GroupTitle from "@/components/GroupTitle";
import {COLOR} from "@/style/variables";

const GameDescription = ({gameData}) => {

  console.log(gameData);
  return (
    <Wrapper>
      <GameInfo>
        <GroupTitle><H1>Об игре</H1></GroupTitle>
        <GameMarkdown>
          {gameData.info}
        </GameMarkdown>

        <GroupTitle><H1>Характеристики</H1></GroupTitle>
        <GameMarkdown>
          {gameData.pc_characteristics}
        </GameMarkdown>
      </GameInfo>

      <GameTitle>
        <LogoImg
          src={`https://cdn.cloudflare.steamstatic.com/steam/apps/${gameData.steamId}/logo.png`}
          alt={`logo_${gameData.name}`}
        />
      </GameTitle>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  
  margin-top: -200px;

  //padding-top: 400px;
  position: relative;

  background: linear-gradient(180deg, rgba(255,255,255,0) 0vw, ${COLOR.bg[0]} 10vw);
`

const GameInfo = styled.div`
  width: 600px;
  flex-shrink: 0;
  
  
`

const GameTitle = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  position: sticky;
  top: 40vh;
  left: 0;
`

const LogoImg = styled.img`
  width: 100%;
  height: auto;
  
  max-width: 400px;
  max-height: 400px;
`

const GameMarkdown = styled(Markdown)`
  display: flex;
  flex-direction: column;

  gap: 20px;

  width: 100%;

  h1, h2 {
    font-family: 'Jost', sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 30px;
    margin-top: 20px;
  }

  p {
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
  }

  img {
    width: 600px;
    height: auto;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 20px;
    //background-color: gray;

    li {
      font-family: 'Jost', sans-serif;
      font-size: 16px;
      font-style: normal;
      font-weight: 200;
      line-height: 18px;
      margin-left: 30px;

      &::marker {
        font-size: 10px;
        color: ${COLOR.text[1]};
      }

      &:nth-child(even) {
        p {
          color: ${COLOR.text[1]};
        }

      }

      &:nth-child(odd) {
        text-align: left;
      }
    }


  }
`

export default GameDescription;