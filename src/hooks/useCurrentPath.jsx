import { useLocation, matchRoutes } from 'react-router'

export default function useCurrentPath () {
  const routes = [
    { path: '/kanban' },
    { path: '/messages' },
    { path: '/settings' },
    { path: '/users' },
    { path: '/tasks' },
    { path: '/' }
  ]

  const location = useLocation()
  const routesr = matchRoutes(routes, location)
  if (routesr) {
    const [{ route }] = routesr
    return route.path
  }
  return ''
}
