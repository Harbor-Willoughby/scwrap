import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { Button, Welcome } from '@storybook/react/demo';

import Layout from './Layout';

storiesOf('Welcome', module)
  .add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>)
  .add('with Button', () => <Button onClick={action('clicked')}>ddddd</Button>)
  .add('with Button1', () => <Layout onClick={action('clicked')}>ddddd</Layout>);

storiesOf('Trip', module)
.add('to Storybook', () => <Layout />);
