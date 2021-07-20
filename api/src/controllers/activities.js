var { Country, Activity, country_activity} = require('../db');
const axios = require('axios');


async function postActivities (req, res, next) {
    try {
        const {name, difficulty, duration, season, countries} = req.body
        console.log(name)
        const activity = await Activity.create({
                name,
                difficulty,
                duration,
                season
        })
        console.log(countries)
        countries.forEach( async (el) => {
            let actCountry = await Country.findOne({
                where: {
                    name: el
                }
            })
            await activity.addCountry(actCountry)
        });
        res.send('Successfully activity assigned')
    } catch (error) {
        console.log(error)
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

async function getActivites(req, res, next) {
    let act = await Activity.findAll()

	res.json(act)
}

async function getActById(req, res, next) {
    let countriesWithAct = await Country.findAll({
        include: {
            model: Activity,
            where:{
                id: req.params.id
            }
        }
    })
    res.json(countriesWithAct)
}


module.exports = {
    postActivities,
    getActivites,
    getActById
}