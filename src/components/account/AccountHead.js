import React from 'react';
import styled from "styled-components";
import {H4, Title} from "@/style/TextTags";
import {COLOR} from "@/style/variables";
import ExperienceBar from "@/components/account/ExperienceBar";

const AccountHead = ({img, exp, name, slug, info}) => {
  return (
    <HeadWrapper>
      <Section>
        <ImageAvatar src={img} alt={`avatar_${slug}`}/>
        <ExperienceBar exp={Number(exp)}/>
      </Section>

      <Section>
        <NameSlug>
          <Title>{name}</Title>
          <H4>@{slug}</H4>
        </NameSlug>

      </Section>
    </HeadWrapper>
  );
};
const HeadWrapper = styled.div`
  margin-top: 8px;
  display: flex;
  gap: 8px;
`
const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 8px;
`
const ImageAvatar = styled.img`
  width: 228px;
  height: 228px;
`
const NameSlug = styled.div`
  display: flex;
  flex-direction: column;  
  h5 {
    color: ${COLOR.text[1]};
    margin-top: -8px;
  }
`

export default AccountHead;