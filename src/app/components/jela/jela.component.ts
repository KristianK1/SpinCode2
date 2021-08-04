import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'; //problems sometimes


@Component({
  selector: 'app-jela',
  templateUrl: './jela.component.html',
  styleUrls: ['./jela.component.scss']
})
export class JelaComponent implements OnInit {


  @Input() jelo: any;
  @Output() event = new EventEmitter<string>();
  
  
  
  constructor() { }

  ngOnInit(): void {
    console.log("usao");
    this.event.emit("emitano");
  }

}
