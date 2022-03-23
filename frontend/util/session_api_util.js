export const login = user => {
  console.log('UTIL: ', user )
  return $.ajax({
    method: 'POST',
    url: '/api/session',
    data: { user }
  })
}

export const signup = user => {
  return $.ajax({
    method: 'POST',
    url: '/api/users',
    data: { user }
  })
}

export const logout = () => {
  return $.ajax({
    method: 'DELETE',
    url: '/api/session'
  })
}
