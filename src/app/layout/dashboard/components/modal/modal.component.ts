import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from '../../../../shared/services/data.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() deleteObject: any;

  constructor(public modal: NgbActiveModal, private dataService: DataService) { }

  ngOnInit(): void {
  }

  confirmDelete(id: string) {
    if(!id) return this.modal.dismiss();

    this.dataService.deleteProject(id).then(() => {
      this.modal.dismiss()
    })
  }

}
