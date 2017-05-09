var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { ClasesService } from '../clases.service';
var Clase = (function () {
    function Clase() {
    }
    return Clase;
}());
export var ClasesComponent = (function () {
    function ClasesComponent(clasesService) {
        this.clasesService = clasesService;
        //Obtener el data de ClasesService:
    }
    ClasesComponent.prototype.ngOnInit = function () {
        this.getAllClases();
    };
    ClasesComponent.prototype.getAllClases = function () {
        var _this = this;
        this.clasesService.getClases()
            .subscribe(
        //data => console.log(JSON.stringify(data)),
        function (data) { console.log(data); _this.clases = data["clases"]; }, //this.clases = data["clases"],
        function (//this.clases = data["clases"],
            error) { return console.log('Server Error' + error); });
    };
    ClasesComponent = __decorate([
        Component({
            selector: 'clases',
            templateUrl: './clases.component.html',
            styleUrls: ['./clases.component.css']
        }), 
        __metadata('design:paramtypes', [ClasesService])
    ], ClasesComponent);
    return ClasesComponent;
}());
//# sourceMappingURL=/Applications/MAMP/htdocs/megbot-dashboard/src/app/clases/clases.component.js.map