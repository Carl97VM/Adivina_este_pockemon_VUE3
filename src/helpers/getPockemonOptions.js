import pockemonApi from '@/api/pockemonApi';

export const getPockemons = () => {

    const pockemonsArr = Array.from( Array(650) )

    return pockemonsArr.map( ( _ , index) => index + 1  )

}

const getPockemonsOption = async () => {

    const mixedPockemons = getPockemons().sort( () => Math.random() - 0.5 )

    const pockemons = await  getPockemonsNames( mixedPockemons.splice( 0,4 ) )

    // para mostrar en un listado de tablas
    // console.table(pockemons);
    return pockemons 

}

export const getPockemonsNames = async( [a,b,c,d] = [] ) => {

    // Array de promesas para mostrar solo las cuatro opciones
    // const resps = await pockemonApi.get(`/1`)
    const promiseArr = [
        pockemonApi.get(`/${ a }`),
        pockemonApi.get(`/${ b }`),
        pockemonApi.get(`/${ c }`),
        pockemonApi.get(`/${ d }`)
    ]

    // JS tiene esta funcion para realizar n promesas
    const [ p1, p2, p3, p4 ] = await Promise.all( promiseArr )
    // console.log(resps);
    return [
        { name: p1.data.name, id: p1.data.id },
        { name: p2.data.name, id: p2.data.id },
        { name: p3.data.name, id: p3.data.id },
        { name: p4.data.name, id: p4.data.id }
    ]

}

export default getPockemonsOption