import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { flaskLink } from './flaskLink';
import { Medic } from './medic.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '';

  dataFrame: Observable<Medic[]>| undefined;
  dati:Medic[] = undefined!;

  dataFrame1: Observable<Medic[]>| undefined;
  dati1:Medic[] = undefined!;
  
  constructor(private http: HttpClient){
  
  }
  ngOnInit(): void {
    
  }
  fati = (data: Medic[]) => {
    this.dati = data;
    console.log(data);
  }

  ciao = (datan: Medic[]) => {
    this.dati1 = datan;
    console.log(datan);
  }
  find(medico : HTMLInputElement){
   let m = medico.value;
   this.dataFrame = this.http.get<Medic[]>(flaskLink._API + "medic/" + m);
   this.dataFrame.subscribe(this.fati)
  }

  findd(nil : HTMLInputElement){
    let n = nil.value;
    this.dataFrame1 = this.http.get<Medic[]>(flaskLink._API + "nil/" + n);
    this.dataFrame1.subscribe(this.ciao)
   }
}
