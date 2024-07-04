import charactersService from "../services/characterService.js"
import { catchAsync } from "../utils/cachedAsync.js"
import { response } from "../utils/requestResponse.js"

export const getCharacters = async (req, res, ) => {
  const { name } = req.query

  let characters = [];
  if (name) {
    characters = await charactersService.getCharactersByName(name)
  }
  else {
    characters = await charactersService.getAllCharacters()
  }
  response(res, 200, characters);
}

export const getCharactersById = async (req, res) => {
  const { id } = req.params

  const character = await charactersService.getCharactersById(id)
  response(res, 200, character)
}

export default {
  getCharacters: catchAsync(getCharacters),
  getCharactersById: catchAsync(getCharactersById),
}