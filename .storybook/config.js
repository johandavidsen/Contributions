import { configure } from '@kadira/storybook'

function loadStories () {
  require('../story')
}

configure(loadStories, module)
