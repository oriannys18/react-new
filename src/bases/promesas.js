import { getHeroesById } from './bases/08-imp-expor';


//const promesa = new Promise((resolve, reject) => {

//    setTimeout(() => {

//        const heroe = getHeroesById(2);
//        console.log(heroe);
//
//         }, 2000);
//});

//promesa.then(() => {
//    console.log('then de la promesa')
//})

const getHeroesByIdAsync = (id) => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            const p1 = getHeroesById(id);
            if (p1) {
                resolve(p1);
            } else {
                //console.log(p1);

                reject('No se pudo encontrar el héroe');
            }

        }, 2000);
    });

}

getHeroesByIdAsync(10)
    .then( console.log)
    .catch(err => console.warn(err));





