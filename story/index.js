import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Contributions from '../src/Contributions'

storiesOf('Contributions', module)
  .add('Default view', () => (
    <Contributions />
  ))
