import User from '../models/User';

/*

index: list all sessions
store: create a session
show: list one specific session
update: update a session
destroy: delete a session

*/

class SessionController {
    async store(req, res) {
        const { email } = req.body;

        let user = await User.findOne({ email });

        if(!user) {
            user = await User.create({ email });
        }

        return res.json(user);
    }
}


export default new SessionController()