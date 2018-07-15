import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [MatSidenavModule, MatButtonModule, MatCheckboxModule, MatIconModule],
    exports: [MatSidenavModule, MatButtonModule, MatCheckboxModule, MatIconModule],
})
export class MaterialClass { }