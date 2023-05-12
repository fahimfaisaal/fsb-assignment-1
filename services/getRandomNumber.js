import { faker } from "@faker-js/faker"

export const getRandomNumber = (start, end) => faker.number.int({ min: start, max: end })
