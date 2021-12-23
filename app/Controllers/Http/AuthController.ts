import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Auth from 'App/Models/Auth';

export default class AuthController {
    async register({request, response}: HttpContextContract) {
        const username = request.input("username")
        const email = request.input("email")
        const password = request.input("password")

        let user = new Auth()
        user.username = username
        user.email = email
        user.password = password

        await user.save();
        return response.json({"user": user})
    }
    async login({request, response}: HttpContextContract) {
        const email = request.input("email")
        // const password = request.input("password");
        try {
        // if (await auth.attempt(email, password)) {
            let user = await Auth.findBy('email', email)
            return response.json({"user":user})
        // }
        } catch (e) {
            return response.json({message: 'You first need to register!'})
        }
    }
}
