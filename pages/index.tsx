import React, { useState } from 'react';
import { Button, Htag, P, Tag, Rating, Input } from '../components';
import { withLayout } from '../layout/Layout';
import axios from 'axios';
import { MenuItem } from '../interfaces/menu.interface';
import { GetStaticProps } from 'next';
import { Textarea } from '../components/Textarea/Textarea';
import { API } from '../helpers/api';

function Home({ menu }: HomeProps): JSX.Element {



  const [rating, setRating] = useState<number>(4);

  return (
    <>
      <Htag tag='h3'>Заголовок</Htag>
      <Button appearance='primary' arrow='right'>Кнопка</Button>
      <Button appearance='ghost' arrow='down'>Кнопка</Button>
      <P size='b'>Большой</P>
      <P>Средний</P>
      <P size='s'>Маленький</P>
      <Tag size='s'>Ghost</Tag>
      <Tag size='m' color='green'>Green</Tag>
      <Tag size='s' color='red'>Red</Tag>
      <Tag color='primary'>Primary</Tag>
      <Rating rating={rating} isEditable setRating={setRating} />
      <Input placeholder='тест' />
      <Textarea placeholder='test area' />




    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {

  const firstCategory = 0;

  const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {

    firstCategory
  });

  return {

    props: {

      menu,
      firstCategory
    }

  };

};

interface HomeProps extends Record<string, unknown> {

  menu: MenuItem[];
  firstCategory: number;
}
