import { RouterModule } from '@angular/router';
import { ClasesComponent } from './clases/clases.component';
import { DashboardComponent } from './dashboard/dashboard.component';
var appRoutes = [
    {
        path: '',
        component: DashboardComponent
    },
    {
        path: 'horario',
        component: ClasesComponent
    }
];
export var routing = RouterModule.forRoot(appRoutes);
//# sourceMappingURL=/Applications/MAMP/htdocs/megbot-dashboard/src/app/app.routing.js.map