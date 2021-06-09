import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { ItemsService } from "../../Services/items.service";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: "app-item-list",
  templateUrl: "./item-list.component.html",
  styleUrls: ["./item-list.component.css"]
})
export class ItemListComponent implements OnInit {
  constructor(private itemsService: ItemsService, private modalService: NgbModal) { }
  
  @ViewChild('itemDetail',{static: true}) itemDetail: ElementRef;
  public items = [];
  itemTypes = ['Weapon', 'Armor', 'Jewel', 'Accessory'];
  selectedType = 'All Items';
  public modalReference: any = null;
  selectedId: any;
  servers = ['Innadril Essence', 'Talking Island Official', 'L2 Dex Interlude 50x'];
  selectedServer = 'All Servers';

  ngOnInit() {
    this.getItems();
  }

  getItems = () =>
    this.itemsService
      .getItems()
      .subscribe(res => (this.items = res));
      
  public viewItemDetail(id: string){

    this.modalReference = this.modalService.open(this.itemDetail);
    console.log(id);
    console.log(this.itemsService.returnById(id));
    this.selectedId = id;
  }

  public closeModal(){
  	this.modalReference.close();
  }
}