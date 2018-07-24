import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';

@NgModule({
    imports: 
    [
        MatSidenavModule, 
        MatButtonModule, 
        MatCheckboxModule, 
        MatIconModule, 
        MatDividerModule, 
        MatListModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        MatExpansionModule,
        MatDialogModule,
        MatCardModule,
        MatTableModule,
        MatChipsModule,
        MatDatepickerModule,
        MatNativeDateModule
    ],
    exports: 
    [
        MatSidenavModule, 
        MatButtonModule, 
        MatCheckboxModule, 
        MatIconModule, 
        MatDividerModule, 
        MatListModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        MatExpansionModule,
        MatDialogModule,
        MatCardModule,
        MatTableModule,
        MatChipsModule,
        MatDatepickerModule,
        MatNativeDateModule
    ],
})
export class MaterialClass { }