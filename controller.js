import { getRandomNumber, generateFakePerson, countCharsV2 } from './services';

export const countCharsController = (req, res) => {
  try {
    const { string } = req.query

    if (string === undefined) {
      const error = new Error('"string" query is missing!')
      error.statusCode = 400;
      throw error
    }

    res.status(200).json(countCharsV2(string))
  } catch (e) {
    const status = e.statusCode || 500
    res.status(status).json({
      status,
      message: e.message
    })
  }
}

export const generateFakePersonController = (req, res) => {
  try {
    let { properties } = req.query

    properties = properties?.split(',');

    if (properties === undefined) {
      const error = new Error('"properties" query is invalid!')
      error.statusCode = 400;
      throw error
    }

    res.status(200).json(generateFakePerson(properties))
  } catch (e) {
    const status = e.statusCode || 500
    res.status(status).json({
      status,
      message: e.message
    })
  }
}

export const generateRandomNumberController = (req, res) => {
  try {
    let { start, end } = req.query

    if (Number.isInteger(+start) && Number.isInteger(+end)) {
      return res.status(200).json(getRandomNumber(+start, +end))
    }

    const error = new Error('"start" or "end" query is invalid!')
    error.statusCode = 400;
    throw error
  } catch (e) {
    const status = e.statusCode || 500
    res.status(status).json({
      status,
      message: e.message
    })
  }
}
