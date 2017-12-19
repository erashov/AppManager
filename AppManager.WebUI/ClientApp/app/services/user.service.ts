import { Injectable, Inject } from "@angular/core";
import { Http, Headers, RequestOptions, Response } from "@angular/http";
import { User } from "../models/user";
import { map } from 'rxjs/operators';

@Injectable()
export class UserService {

    constructor(private http: Http, @Inject('BASE_URL') private originUrl: string) {
        
    }

    getAll() {
        return this.http.get(this.originUrl + "/api/users", this.jwt()).pipe(map((response: Response) => response.json()));
    }

    getById(id: number) {
        return this.http.get(this.originUrl + "/api/users/" + id, this.jwt()).pipe(map((response: Response) => response.json()));
    }

    create(user: User) {
        return this.http.post(this.originUrl + "/api/Account", user, this.jwt()).pipe(map((response: Response) => response.json()));
    }

    update(user: User) {
        return this.http.put(this.originUrl + "/api/users/" + user.id, user, this.jwt()).pipe(map((response: Response) => response.json()));
    }

    delete(id: number) {
        return this.http.delete(this.originUrl + "/api/users/" + id, this.jwt()).pipe(map((response: Response) => response.json()));
    }

    // private helper methods
    private jwt() {
        // create authorization header with jwt token
        let headers = new Headers();
        headers.append("Content-Type", "application/json");

        let currentUser = JSON.parse(localStorage.getItem("currentUser")|| '{}');
        if (currentUser && currentUser.token) {

            headers.append("Authorization", "Bearer " + currentUser.token);
        }
        return new RequestOptions({ headers: headers });
    }
}