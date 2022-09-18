import { TmplAstVariable } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
   title:any="suriya"
   show:any="hello"
   isdisabled:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }
press(){
   console.log('tamil');
   this.isdisabled=true;  
 
  

 }  
 tamil(){
  this.isdisabled=false;
 }

   

onclick(event:any){
  this.title=event.target.value

}
}
