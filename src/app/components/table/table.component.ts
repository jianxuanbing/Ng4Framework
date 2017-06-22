import { TableRowComponent } from './body/tableRow.component';
import { TCheckboxComponent } from './checkbox/tableCheckbox.component';
import { Component, OnInit, AfterViewInit, Input, ViewChild, ElementRef, ViewChildren, QueryList, Renderer2 } from '@angular/core';
import { TableHeadComponent } from './head/tableHead.component';
import { TableBodyComponent } from './body/tableBody.component';
@Component({
    selector:'bg-table',
    templateUrl:'./table.component.html',
    styleUrls:['./table.component.scss']
})
export class TableComponent implements OnInit,AfterViewInit{
    @Input() pagination:boolean;
    @Input() selection:boolean;
    @Input() striped:boolean;
    @Input() border:boolean;
    @Input() hover:boolean;
    @ViewChild('container') container:ElementRef;
    @ViewChildren(TCheckboxComponent) checkboxs:QueryList<TCheckboxComponent>;
    @ViewChild('checkbox') checkbox:TCheckboxComponent;
    heads:TableHeadComponent[]=[];
    bodys:TableBodyComponent[]=[];
    selected:any[]=[];

    constructor(private renderer2:Renderer2){}
    ngOnInit() {        
    }

    ngAfterViewInit() {
        const _container=this.container.nativeElement;
        if(this.striped){
            this.renderer2.addClass(_container,'bg-table-striped');
        }
        if(this.border){
            this.renderer2.addClass(_container,'bg-table-bordered');
        }
        if(this.hover||this.selection){
            this.renderer2.addClass(_container,'bg-table-hover');
        }
    }
    
    addHead(value:TableHeadComponent){
        this.heads.push(value);
    }

    addBody(value:TableBodyComponent){
        this.bodys.push(value);
    }

    optionClick($event:any){
        if(this.selection){
            const checkboxs=this.checkboxs.toArray();
            checkboxs.shift();
            for(const checkbox of checkboxs){
                checkbox.checked=$event.checked;
            }
            for(const body of this.bodys){
                for(const row of body.rows){
                    row.selected=!row.selected;
                }
            }
        }
    }

    itemClick($event:any,row:TableRowComponent,i:number){
        if(this.selected){
            row.selected=!row.selected;
            const checkboxs=this.checkboxs.toArray();
            checkboxs.shift();
            checkboxs[i].checked=row.selected;
            if($event.checked){
                this.selected.push($event);
            }
            this.checkbox.checked=this.checkOfSelect();
        }
    }

    onSelect(row:TableRowComponent,i:number){
        if(this.selection){
            row.selected=!row.selected;
            const checkboxs=this.checkboxs.toArray();
            checkboxs.shift();
            checkboxs[i].checked=row.selected;
            this.checkbox.checked=this.checkOfSelect();
        }
    }

    checkOfSelect(){
        let num=0;
        let rowNum=0;
        for(const body of this.bodys){
            rowNum+=body.rows.length;
            for(const row of body.rows){
                if(row.selected){
                    num++;
                }
            }
        }

        if(rowNum===num){
            return true;
        }
        return false;
    }
}