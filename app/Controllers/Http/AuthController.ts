import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Auth from 'App/Models/Auth';
import UserValidator from 'App/Validators/UserValidator';
// import { validator } from '@ioc:Adonis/Core/Validator'

export default class AuthController {
    async register({request, response}: HttpContextContract) {
        const username = request.input("username")
        const email = request.input("email")
        const password = request.input("password")
        try {
            // await validator.validate({
            //     schema: new UserValidator().schema,
            //     data: {
            //         username: username,
            //         email: email,
            //         password: password
            //     }
            // });
            await request.validate(UserValidator);

            let user = new Auth()
            user.username = username
            user.email = email
            user.password = password
            await user.save();
            return response.json({"user": user});
        } catch(err) {
            return response.json({"Err": err});
        }

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
