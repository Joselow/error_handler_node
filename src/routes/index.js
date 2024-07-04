import{ Router } from 'express'

import CharacterController  from '../controllers/charactersController.js'

export const router = Router()


router.get('/', CharacterController.getCharacters)
router.get('/:id', CharacterController.getCharactersById)