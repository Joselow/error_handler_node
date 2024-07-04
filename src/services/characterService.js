import { ClientError } from "../errors/ClientError.js";

const characters = [
  { id: 1, name: 'John Doe', role: 'Warrior', level: 20 },
  { id: 2, name: 'Jane Smith', role: 'Mage', level: 18 },
  { id: 3, name: 'Samuel Johnson', role: 'Rogue', level: 15 },
  { id: 4, name: 'Emily White', role: 'Cleric', level: 17 },
  { id: 5, name: 'Michael Brown', role: 'Ranger', level: 19 }
];

const getAllCharacters = async () => {
  return characters
}

const getCharactersById = async (characterId) => {
  const character = characters.find(({ id }) => id === Number(characterId))

  if (!character) {    
    throw new ClientError('Not found character with this id', 400)
  }

  return character
}

const getCharactersByName = async (characterName) => {
  const charactersData = characters.filter(({ name }) => name.includes(characterName))
  return charactersData 
}

export default {
  getAllCharacters,
  getCharactersById,
  getCharactersByName
}