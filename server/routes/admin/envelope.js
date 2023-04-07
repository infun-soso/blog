module.exports = (app, plugin, model) => {
	const express = require('express');
	const router = express.Router();

	let { Envelope } = model
	let { GetPage, RequestResult } = plugin

	router.get('/envelope', async (req, res) => {
		const data = await GetPage(Envelope, req.query.page)
		res.send(RequestResult({
			status: 'success',
			data
		}))
	})

	router.post('/envelope', (req, res) => {
		Envelope.create(req.body, (err, doc) => {
			if (!err) {
				res.send(RequestResult({
					status: 'success',
					data: doc
				}))
			} else {
				res.send(RequestResult({
					status: 'error',
					data: err
				}))
			}
		})
	})

	router.post('/envelope/:id', (req, res) => {
		Envelope.findByIdAndUpdate(
			req.params.id,
			req.body,
			(err, doc) => {
				if (!err) {
					res.send(RequestResult({
						status: 'success',
						data: doc
					}))
				} else {
					res.send(RequestResult({
						status: 'error',
						data: err
					}))
				}
			})
	})

	router.get('/envelope/:id', (req, res) => {
		Envelope.findById(
			req.params.id,
			(err, doc) => {
				if (!err) {
					res.send(RequestResult({
						status: 'success',
						data: doc
					}))
				} else {
					res.send(RequestResult({
						status: 'error',
						data: err
					}))
				}
			})
	})

	router.delete('/envelope/:id', (req, res) => {
		Envelope.findByIdAndDelete(
			req.params.id,
			(err, doc) => {
				if (!err) {
					res.send(RequestResult({
						status: 'success',
						data: doc
					}))
				} else {
					res.send(RequestResult({
						status: 'error',
						data: err
					}))
				}
			})
	})

	app.use('/admin/api', router)
}