module.exports = (app, plugin, model) => {
	const express = require("express")
	const router = express.Router()

	let { User, Info } = model
	let { RequestResult, Email } = plugin

	const crypto = require("crypto")
	const jwt = require("jsonwebtoken")

	// 修改密码
	router.post("/password", (req, res) => {
		const [password, passwords] = ["p1", "p2"].map((i) => {
			return crypto.createHash("sha256").update(req.body[i]).digest("hex")
		})
		User.findOne({ password }, (err, docs) => {
			if (docs) {
				User.findOneAndUpdate(
					{
						password,
					},
					{
						$set: {
							password: passwords,
						},
					},
					(err, doc) => {
						res.send(RequestResult(1, "密码修改成功"))
					}
				)
			} else {
				res.send(RequestResult(2, "原密码输入错误"))
			}
		})
	})

	// 登录
	router.post("/login", async (req, res) => {
		if (Object.keys(req.body).length != 2) {
			res.send(RequestResult({
				status: 'success',
				data: '请填写完整的信息！'
			}))
			return
		}
		const password = crypto
			.createHash("sha256")
			.update(req.body.password)
			.digest("hex")
		const info = {
			username: req.body.username,
			password,
		}
		User.find(info, (err, docs) => {
			if (docs.length != 0) {
				const token = jwt.sign(info, "Libai", {
					expiresIn: 60 * 60 * 24,
				})
				res.send(
					RequestResult({
						status: 'success',
						data: {
							message: "登录成功",
							token
						}
					})
				)
			} else {
				res.send(RequestResult({
					status: 'error',
					data: '用户名或密码错误！'
				}))
			}
		})
	})

	// 创建账号
	router.post("/user", async (req, res) => {
		const len = await User.find().countDocuments()
		const pwd = crypto
			.createHash("sha256")
			.update(req.body.password)
			.digest("hex")
		const user = {
			username: req.body.name,
			password: pwd,
		}
		const info = {
			base: {
				emailPass: req.body.pass,
				emailType: req.body.emailType,
			},
			website: { email: req.body.email },
		}
		if (len) {
			res.send(
				RequestResult({
					status: 'error',
					data: '请勿重复注册账号，如忘记密码请点击找回密码！'
				})
			)
		} else {
			// 创建账号
			User.create(user, (err, docs) => {
				if (docs.length != 0) {
					res.send(RequestResult({
						status: 'success',
						data: { message: "注册成功" }
					}))
				} else {
					res.send(RequestResult({
						status: 'error',
						data: '注册失败，服务器或数据库出错！'
					}))
				}
			})
			Info.create(info)
		}
	})

	// 忘记密码
	router.post("/forgotPassword", (req, res) => {
		const email = req.body.email
		Info.findOne((err, doc) => {
			if (doc) {
				if (email.trim() === doc.website.email) {
					Email({
						type: 'Forgot Password',
						adminInfo: doc
					}).then(data => {
						res.send(RequestResult({
							status: 'success',
							data
						}))
					}).catch(err => {
						res.send(RequestResult({
							status: 'error',
							data: err
						}))
					})
				} else {
					res.send(RequestResult({
						status: 'error',
						data: '请输入正确的邮箱！'
					}))
				}
			} else {
			}
		})
	})

	app.use("/admin/api", router)
}
