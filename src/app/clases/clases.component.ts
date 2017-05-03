import { Component, OnInit } from '@angular/core';
import { ClasesService } from '../clases.service';

class Clase{
  _id: string;
  name: string;
}

@Component({
  selector: 'clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.css']
})

export class ClasesComponent implements OnInit {

  clases: Array<Clase>;

  ngOnInit() {
    this.getAllClases();
  }

  constructor (private clasesService: ClasesService) {
    //Obtener el data de ClasesService:
  }
  getAllClases(){
    this.clasesService.getClases()
      .subscribe(
        //data => console.log(JSON.stringify(data)),
        data => {console.log(data);this.clases = data["clases"];}, //this.clases = data["clases"],
        error => console.log('Server Error' + error)
      );
  }

  /*createClase(newClasCode : string, newName : string) {
    this.clasesService.createClase(newClasCode, newName).subscribe();
    location.reload();
  }*/
}
