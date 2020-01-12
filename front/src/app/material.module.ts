import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';

@NgModule({
    exports: [
        MatFormFieldModule,
        MatInputModule,
        MatListModule,
        MatButtonModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatTableModule
    ],
})
export class MaterialUIModule { }
