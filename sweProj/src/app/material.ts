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
        MatDialogModule
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
        MatDialogModule
    ],
})
export class MaterialClass { }