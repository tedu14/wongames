import { ReactNode } from 'react'
import { FlattenSimpleInterpolation } from 'styled-components'

type Children = ReactNode | JSX.Element

type Modifier<T> = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [P in keyof T]: (...args: any[]) => FlattenSimpleInterpolation
}
