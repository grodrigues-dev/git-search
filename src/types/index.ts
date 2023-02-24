export interface User {
    avatar_url: string;
    html_url: string;
    id: number;
    login: string;
}

export interface UserDetails extends User {
    name: string;
    location: string;
    email: string;
    public_repos: number;
}