import { Component, OnInit } from '@angular/core';
import  { ClasesService } from '../clases.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  clases: string[];

  constructor (private clasesService: ClasesService) {

  }
  getAllClases(){
    this.clasesService.getClasesAPI()
      .subscribe(
        data => this.clases = data,
        error => console.log('Server Error')
      );
  }

  createClase(newClasCode : string, newName : string) {
    this.clasesService.createClase(newClasCode, newName).subscribe();
    location.reload();
  }

  ngOnInit() {
    this.getAllClases();
  }

}
