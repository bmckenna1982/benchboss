import React from 'react'
import { format as formatDate, parseISO } from 'date-fns'

export function NiceDate({ date, format = 'MMMM do yyyy h:mm a' }) {
  const parseDate = parseISO(date)
  return formatDate(parseDate, format)
}

export function NiceMonth({ date, format = 'MMM' }) {
  const parseDate = parseISO(date)  
  return formatDate(parseDate, format)
}

export function NiceDay({ date, format = 'do' }) {
  const parseDate = parseISO(date)  
  return formatDate(parseDate, format)
}

export function NiceTime({ date, format = 'h:mm a' }) {  
  const parseDate = parseISO(date)
  return formatDate(parseDate, format)
}