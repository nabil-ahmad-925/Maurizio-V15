import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableDemoComponent } from './tabledemo.component';
import { TableDemoRoutingModule } from './tabledemo-routing.module';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { RippleModule } from 'primeng/ripple';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';
import { SliderModule } from 'primeng/slider';
import { RatingModule } from 'primeng/rating';
import { PanelsDemoModule } from '../panels/panelsdemo.module';
import { PanelsDemoComponent } from '../panels/panelsdemo.component';
import { PanelsComponent } from './panels/panels.component';
import { AccordionModule } from 'primeng/accordion';
import { DividerModule } from 'primeng/divider';
import { FieldsetModule } from 'primeng/fieldset';
import { MenuModule } from 'primeng/menu';
import { PanelModule } from 'primeng/panel';
import { SplitButtonModule } from 'primeng/splitbutton';
import { SplitterModule } from 'primeng/splitter';
import { TabViewModule } from 'primeng/tabview';
import { ToolbarModule } from 'primeng/toolbar';
import { PanelsDemoRoutingModule } from '../panels/panelsdemo-routing.module';
import {DialogModule} from 'primeng/dialog';
@NgModule({
	imports: [
		CommonModule,
		DialogModule,
		TableDemoRoutingModule,
		FormsModule,
		TableModule,
		RatingModule,
		ButtonModule,
		SliderModule,
		InputTextModule,
		ToggleButtonModule,
		RippleModule,
		MultiSelectModule,
		DropdownModule,
		ProgressBarModule,
		ToastModule,	CommonModule,
		FormsModule,
		PanelsDemoRoutingModule,
		ToolbarModule,
		ButtonModule,
		RippleModule,
		SplitButtonModule,
		AccordionModule,
		TabViewModule,
		FieldsetModule,
		MenuModule,
		InputTextModule,
		DividerModule,
		SplitterModule,
		PanelModule
	],
	declarations: [TableDemoComponent, PanelsComponent]
})
export class TableDemoModule { }
