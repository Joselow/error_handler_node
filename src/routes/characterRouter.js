import{ Router } from 'express'

import CharacterController  from '../controllers/charactersController.js'
import { validateName } from '../midlewares/validateName.js'

const router = Router()

router.get('/', validateName ,CharacterController.getCharacters)
router.get('/:id', CharacterController.getCharactersById)

export default router