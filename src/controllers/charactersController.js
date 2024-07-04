import charactersService from "../services/characterService.js"
import { catchAsync } from "../utils/cachedAsync.js"

export const getCharacters = async (req, res, ) => {
  const characters = await charactersService.getAllCharacters()
  res.status(200).json(characters)
}

export const getCharactersById = async (req, res) => {
  const { id } = req.params

  const character = await charactersService.getCharactersById(id)
  res.status(200).json(character)
}

export default {
  getCharacters: catchAsync(getCharacters),
  getCharactersById: catchAsync(getCharactersById),
}