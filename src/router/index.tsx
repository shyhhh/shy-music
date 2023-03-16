import { lazy } from 'react'
import type { RouteObject } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

const Discover = lazy(() => import('@/views/discover'))
const Download = lazy(() => import('@/views/download'))
const Mine = lazy(() => import('@/views/mine'))
const Focus = lazy(() => import('@/views/focus'))

export const routes: RouteObject[] = [
  { path: '/', element: <Navigate to={'/discover'} /> },
  { path: '/discover', element: <Discover /> },
  { path: '/download', element: <Download /> },
  { path: '/focus', element: <Focus /> },
  { path: '/mine', element: <Mine /> },
]
