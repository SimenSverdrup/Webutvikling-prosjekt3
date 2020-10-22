import { Middleware } from 'redux'
import { State } from './index'

export const exampleMiddleware: Middleware<
    {}, // legacy type parameter added to satisfy interface signature
    State
    > = store => next => action => {  }