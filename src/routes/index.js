import{ Router } from 'express'

import CharacterController  from '../controllers/charactersController.js'

export const router = Router()


router.get('/characters', CharacterController.getCharacters)
router.get('/characters/:id', CharacterController.getCharactersById)