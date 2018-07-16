import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

@NgModule({
    imports: [MatSidenavModule, MatButtonModule, MatCheckboxModule, MatIconModule, MatDividerModule, MatListModule],
    exports: [MatSidenavModule, MatButtonModule, MatCheckboxModule, MatIconModule, MatDividerModule, MatListModule],
})
export class MaterialClass { }