import { Story, Meta } from '@storybook/react'
import Ribbon, { RibbonProps } from '.'

export default {
  title: 'Ribbon',
  component: Ribbon,
  args: {
    children: 'Best Seller'
  }
} as Meta<RibbonProps>

export const Default: Story<RibbonProps> = (props) => <Ribbon {...props} />
