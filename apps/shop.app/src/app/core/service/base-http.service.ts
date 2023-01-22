import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class BaseHttpService {

}

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';
