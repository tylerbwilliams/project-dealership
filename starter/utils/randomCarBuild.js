
import _ from 'lodash';

export default function randomCarBuild() {
    const make = _.sample(Object.keys(DATA));
    const model = _.sample(Object.keys(DATA[make]));
    const price = DATA[make][model];
    return { make, model, price };
}

// Data.<MAKE>.<MODEL>.<PRICE>
const DATA = {
    "Audi": {
        'A4': 30000,
        'TT': 30000,
        'Q3': 30000
    },
    "BMW": {
        '3 Series': 30000,
        'X5': 30000,
        'Z4': 30000
    },
    "Chevrolet": {
        'Tahoe': 30000,
        'Camero': 30000,
        'Corvette': 30000
    },
    "Ford": {
        'Mustang': 30000,
        'Focus': 30000,
        'Bronco': 30000
    },
    "Honda": {
        'Accord': 30000,
        'Civic': 30000,
        'Ridgeline': 30000
    },
    "Hyundai": {
        'Accent': 30000,
        'Elantra': 30000,
        'Tuscon': 30000
    },
    "Jeep": {
        'Wrangler': 30000,
        'Cherokee': 30000,
        'Renegade': 30000
    },
    "Mazda": {
        'MX-5 Miata': 30000,
        'Mazda 3': 30000,
        'CX-5': 30000
    },
    "Tesla": {
        'Model 3': 30000,
        'Model S': 30000,
        'Model X': 30000
    },
    "Toyota": {
        'Camry': 30000,
        'Corolla': 30000,
        'Prius': 30000
    },
    "Volkswagen": {
        'Golf': 30000,
        'Jetta': 30000,
        'Tiguan': 30000
    }
};
