import { faker } from '@faker-js/faker';

export const generateFakePerson = (props) => {
  const [firstName, lastName] = faker.person.fullName().split(/\s/);

  const person = {
    firstName,
    lastName,
    email: faker.internet.email(),
    avatar: faker.internet.avatar(),
    age: faker.number.int({ min: 15, max: 80 }),
    address: faker.location.state()
  }

  return props.reduce((personMap, prop) => {
    if (prop in person) {
      personMap[prop] = person[prop]
    }
    return personMap
  }, {})
}
