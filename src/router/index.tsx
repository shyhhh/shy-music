import type { RouteObject } from 'react-router-dom'
import { Discover } from '@/views/discover'

export const routes: RouteObject[] = [
  { path: '/discover', element: <Discover /> }
]