import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { Observable, of } from "rxjs";

const departments = ['Marketing','Sales','Recursos Humanos','Other'];

@Injectable({providedIn:'root'})
export class DataResolverService implements Resolve<any>{
    resolve(): Observable<any>{
        // To do : Call Service
        return of(departments);
    }
 }