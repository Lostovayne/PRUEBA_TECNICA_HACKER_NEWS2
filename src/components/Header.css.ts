import { style } from '@vanilla-extract/css'

export const header = style({
  alignItems: 'center',
  display: 'flex',
  gap: '1rem',
  borderBottom: '1px solid #eee',
  padding: '1rem 2rem'
})

export const link = style({
  textDecoration: 'none',
  color: '#374151',
  fontSize: '1.1rem',
  margin: 0,
  textDecorationColor: 'none',
  textDecorationStyle: 'initial'
})
