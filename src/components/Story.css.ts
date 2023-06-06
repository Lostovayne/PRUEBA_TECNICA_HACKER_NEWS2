import { style } from '@vanilla-extract/css'

export const story = style({
  color: '#374151'
})

export const storyHeader = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  marginBottom: '0.3rem',
  lineHeight: '1.5rem'
})

export const storyFooter = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  lineHeight: '1.5rem',
  fontSize: '0.8rem'
})

export const storysmallLink = style({
  color: '#888',
  textDecoration: 'none',
  ':hover': {
    textDecoration: 'underline'
  }
})

export const storyTitle = style({
  textDecoration: 'none',
  color: '#111',
  fontSize: '1.1rem'
})
