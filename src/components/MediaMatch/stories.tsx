import { Story, Meta } from '@storybook/react'
import MediaMatch, { MediaMatchProps } from '.'

export default {
  title: 'MediaMatch',
  component: MediaMatch
} as Meta

export const Desktop: Story<MediaMatchProps> = (args) => (
  <MediaMatch {...args}>
    <h1>Only on desktop</h1>
  </MediaMatch>
)

Desktop.args = {
  greaterThan: 'medium'
}

export const Mobile: Story<MediaMatchProps> = (args) => (
  <MediaMatch {...args}>
    <h1>Only on Mobile</h1>
  </MediaMatch>
)

Mobile.args = {
  lessThan: 'medium'
}

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1'
  }
}
