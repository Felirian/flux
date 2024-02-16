import React from 'react';
import styled from "styled-components";
import {H3, T2, T4} from "@/style/TextTags";
import {COLOR} from "@/style/variables";
import {LEVEL_NAMES} from "@/shared/dataVariables";

const ExperienceBar = ({exp}) => {

  const calculateLevel = Math.floor(Math.sqrt(exp) / 10);
  const nextLevelExp = (calculateLevel+1) * (calculateLevel+1) * 100;
  const levelProgress = (exp - (calculateLevel * calculateLevel * 100)) / (nextLevelExp-(calculateLevel * calculateLevel * 100)) ;

  console.log(levelProgress);

  return (
    <ExperienceBarWrapper>
      <Row>
        <H3>Уровень</H3>
        <T2>{nextLevelExp}</T2>
      </Row>
      <FullLine progress={100} clr={COLOR.bg[2]}/>
      <FullLine progress={levelProgress * 100} clr={COLOR.bg[4]}/>
      <Row>
        <H3 style={{color: COLOR.text[1]}}>
          {LEVEL_NAMES[calculateLevel] ? LEVEL_NAMES[calculateLevel] : 'Dofiga'}
        </H3>
        <T4 style={{color: COLOR.text[1]}}>{exp}</T4>
      </Row>

    </ExperienceBarWrapper>
  );
};
const ExperienceBarWrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  flex-direction: column;
  gap: 16px;
  padding: 8px;
`
const Row = styled.div`
  display: flex;  
  align-items: center;
  justify-content: space-between;
`
const FullLine = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  width: ${(props)=>props.progress ? props.progress : 0}%;
  height: 1px;
  background-color: ${(props)=>props.clr} ;
`

export default ExperienceBar;