export class User{

    constructor(
        private login: string,
        private id: number,
        private node_id: string,
        private avatar_url: string,
        private gravatar_id: number,
        private url: string,
        private html_url: string,
        private followers_url: string,
        private following_url: string,
        private gists_url: string,
        private starred_url: string,
        private subscriptions_url: string,
        private organizations_url: string,
        private repos_url: string,
        private events_url: string,
        private received_events_url: string,
        private type: User,
        private site_admin: false
    ){}
}