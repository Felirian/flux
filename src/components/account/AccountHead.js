import React from 'react';
import styled from "styled-components";
import {H4, T3, Title} from "@/style/TextTags";
import {COLOR} from "@/style/variables";
import ExperienceBar from "@/components/account/ExperienceBar";
import {LiveBorders} from "@/components/LiveBorders";
import Link from "next/link";
import SvgSelector from "@/components/SvgSelector";
import {logOut} from "@/supabase/services";

const AccountHead = ({img, exp, name, slug, info}) => {

  return (
    <HeadWrapper>
      <Section>
        <ImageAvatar src={img} alt={`avatar_${slug}`}/>
        <ExperienceBar exp={Number(exp)}/>

        <ButtonWrapper>
          <LiveBorders width={'45%'} color={COLOR.accent.pink}>
            <ExitButton onClick={() => logOut()}>
              <SvgSelector svg={'Exit'}/>
              <T3>Выйти</T3>
            </ExitButton>
          </LiveBorders>
          <LiveBorders width={'55%'} color={COLOR.accent.green}>
            <SettingsLink href={'/account/settings'} >
              <SvgSelector svg={'Settings-Account'}/>
              <T3>Настройки</T3>
            </SettingsLink>
          </LiveBorders>
        </ButtonWrapper>

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
  ${H4} {
    color: ${COLOR.text[1]};
    margin-top: -8px;
  }
`

const ButtonWrapper = styled.div`
  display: flex;
  gap: 0;
  width: 100%;
`
const ExitButton = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  p {
    color: ${COLOR.accent.pink};
  }  
`
const SettingsLink = styled(Link)`
  display: flex;
  align-items: center;
  width: 100%;
  ${T3} {    
    color: ${COLOR.accent.green};    
  }
  
`

export default AccountHead;