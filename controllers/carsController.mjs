import { validationResult } from 'express-validator'
import Car from '../models/Car.mjs'
import { deleteFileFromFS } from '../utils/someFunctions.mjs'
class CarsController {
	static carsList(req, res) {
		const cars = Car.getCarsList()
		res.render('cars/carsList', {
			cars,
		})
	}
	static carsCreate(req, res) {
		res.render('cars/carsCreate', {
			errors: [],
			car: {},
		})
	}
	static addCar(req, res) {
		const errors = validationResult(req)
		if (!errors.isEmpty()) {
			const car = req.body
			if (req.params.id) car.id = req.params.id
			return res.status(400).render('cars/carsCreate', {
				errors: errors.array(),
				car
			})
		}
		const data = { image: req.file.filename, ...req.body }
		Car.addNewCar(data)
		res.redirect('/cars')
	}
	static carInfo(req, res) {
		const car = Car.getCarById(req.params.id)
		res.render('cars/carInfo', {
			car,
		})
	}
	static editCar(req, res) {
		const car = Car.getCarById(req.params.id)
		res.render('cars/carsCreate', {
			car,
		})
	}
	static async updateCar(req, res) {
		const car = await Car.getCarById(req.params.id)
		const data = req.file ? { image: req.file.filename, ...req.body } : { ...req.body }
		if (req.file) {
			deleteFileFromFS('uploads/images/', car.image)
		}
		Car.updateCar(req.params.id, data)
		res.redirect('/cars')
	}
	static async deleteCar(req, res) {
		const car = await Car.getCarById(req.body.id)
		if (car.image) {
			deleteFileFromFS('uploads/images/', car.image)
			Car.deleteCarById(req.body.id)
		}
		res.sendStatus(200)
	}
}

export default CarsController
