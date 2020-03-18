import { HttpClient } from '@angular/common/http';
import { Images } from '../models/placeholder.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class CrudService {
	constructor(private http: HtppClient) { }
	public getFotos(): Observable<Images> {
		this.http.get
	}
}