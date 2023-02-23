import { mocker } from 'mocker-data-generator';
import { faker } from '@faker-js/faker';

export let getUserData = () => {

    let countryMap = new Map([
       ['US' , 'USA (+1)'],
       ['GB', 'UK (+44)'],
       ['DZ','Algeria (+213)'],
       ['AD','Andorra (+376)'],
       ['AO','Angola (+244)'],
       ['AI','Anguilla (+1264)'],
       ['AG', 'Antigua & Barbuda (+1268)'],
       ['AR', 'Argentina (+54)'],
       ['AM','Armenia (+374)']
    ]);

    return {
        firstname: faker.name.firstName(),
        lastname: faker.name.lastName(),
        email: faker.internet.email(),
        phone: faker.phone.number('###-###-###') ,
        address1: faker.address.street(),
        address2: faker.address.buildingNumber(),
        state: faker.address.state(),
        postalcode: faker.address.zipCode(),
        countrycode: faker.address.countryCode('alpha-2'),
        gender: faker.datatype.number({ min: 1, max: 3, precision: 0})
    }
}