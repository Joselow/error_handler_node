import{ Router } from 'express'

import CharacterRouter from './characterRouter.js'

export const router = Router()

router.use('/characters', CharacterRouter)