import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HomeComponent } from './home/home.component';
import { StudentListComponent } from './studentComponents/student-list/student-list.component';
import { StudentFormComponent } from './studentComponents/student-form/student-form.component';
import { StudentDetailsComponent } from './studentComponents/student-details/student-details.component';
import { StudentService } from './studentService/student.service';  // Certifique-se de que este caminho está correto
import { HttpClientModule } from '@angular/common/http';

// Importando módulos do Angular Material
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentListComponent,
    StudentFormComponent,
    StudentDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,  // Importando o módulo da tabela
    MatButtonModule,  // Importando o módulo dos botões
    MatDialogModule,  // Importando o módulo de diálogo
    MatInputModule,  // Importando o módulo de input
    MatSnackBarModule,  // Importando o módulo de snack-bar
    HttpClientModule,
    MatListModule,
    MatDividerModule,  
    FormsModule
  ],
  providers: [
    StudentService,
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
