import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import User from 'App/Models/User';

export default class UsersController {
    public async postsByUser({ auth }: HttpContextContract) {
        const user = await auth.authenticate();
        await user.preload("posts");
        const posts = user.posts;
        return posts;
    }

    public async forumsByUser({ auth }: HttpContextContract) {
        const authUser = await auth.authenticate();
        const user = await User.find(authUser.id);

        if(user){
            await user.preload("forums");
            return user;
        }

        return user;
    }
}
