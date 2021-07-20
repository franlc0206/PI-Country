
var { Country, Activity, country_activity} = require('../db');
const axios = require('axios');
var sequelize = require('sequelize');


async function getAllCountries (req, res, next) {
    var name = req.query.name
    var continent = req.query.continent
    var order = req.query.order
    var alph = req.query.alph
        // console.log(name)
        if(alph){
            if(alph === 'Z-A'){
                var desc = await Country.findAll({
                    order: sequelize.literal('name DESC')
                })
                res.send(desc)
            }
            if(alph === 'A-Z'){
                var asc = await Country.findAll({
                    order: sequelize.literal('name ASC')
                })
                res.send(asc)
            }
        }
        else if (order) {
            if (order === 'Ascendant'){
                var asc = await Country.findAll({
                    order: sequelize.literal('population ASC')
                })
                res.send(asc)
            } 
            if (order === 'Descendant') {
                var desc = await Country.findAll({
                    order: sequelize.literal('population DESC')
                })
                res.send(desc)
            }
        }
        else if (continent) {
            continent = continent.charAt(0).toUpperCase() + continent.slice(1);
            var findOne = await Country.findAll({
                where: {
                    continent: continent,
                }
            })
            if(findOne.length === 0){
                return res.status(404).send('Error: Name of continent is invalid')
            } else return res.json(findOne)
        }
        else if (name){
                name = name.charAt(0).toUpperCase() + name.slice(1);
                var findOne = await Country.findAll({
                    where: {
                        name: name
                    },
                    include: Activity
                })
                if(findOne.length === 0){
                    return res.status(404).send('Error: Name of country is invalid')
                } else return res.json(findOne)
        } else {
            const allCountries = await Country.findAll()
            console.log(allCountries);
            if(allCountries.length === 0){
                const countriesApi = axios.get('https://restcountries.eu/rest/v2/all')
                Promise.all([allCountries, countriesApi])
                .then(async (results) => {
                    const [allCountriesResponse, countriesApiResponse] = results;
                    const response = allCountriesResponse.concat(countriesApiResponse.data);
                    
                    response.forEach( async (country) => {
                        await Country.findOrCreate({
                            where: {
                                id: country.alpha3Code,
                                name: country.name,
                                imgFlag: country.flag,
                                continent: country.region,
                                capital: country.capital,
                                subregion: country.subregion,
                                area: country.area,
                                population: country.population
                            }
                        })
                    });
                    res.status(200).json(await Country.findAll())
                })
                .catch((err) => next(err))
            } else {
                res.status(200).json(await Country.findAll())
            }
        }
}

// async function getByName(req, res, next) {
//     try {
//         var name = req.query.name
//         // console.log(name)
//         if (name){
//             name = name.charAt(0).toUpperCase() + name.slice(1);
//             var findOne = await Country.findAll({
//                 where: {
//                     name: name
//                 }
//             }).then(res.send('hola'))
//             // console.log(findone)
//             return res.json(findOne)
//     }
//  } catch (error) {
//         res.status(404).send('Error: Name is invalid')
//     } 
// }

function getById(req, res, next) {
    const {idPais} = req.params;
    var id = idPais.toUpperCase();
    console.log(id)
    return Country.findByPk(id,{include: Activity})
    .then((country) => res.send(country))
    .catch((err) => next(err))
}


module.exports = {
    getAllCountries,
    getById
}