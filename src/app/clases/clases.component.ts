import { Component, OnInit } from '@angular/core';
import { ClasesService } from '../clases.service';

@Component({
  selector: 'clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.css']
})
export class ClasesComponent implements OnInit {
  titulo= 'Mis clases son:';
  showClases= true;
  market= 'NYSE';

  //clases= ['Algebra', 'Programación', 'ASE3', 'Mercadotécnia'];
  clases;

  constructor(private clasesService : ClasesService) {
    //Obtener el data de ClasesService:
    this.clases = clasesService.getClases();
  }
  getAllClases(){
    this.clasesService.getClasesAPI()
      .subscribe(
        data => this.clases = data,
        error => console.log('Server Error' + error)
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
