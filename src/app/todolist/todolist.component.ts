import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {


  task=[{taskName:" going to shoping" , isChecked:false}]
  
  constructor(){

  }
 ngOnInit(): void {

 }
   onSubmit(form: NgForm){  //template driven forms
    console.log(form);
    this.task.push({
      taskName:form.controls['task'].value,  //two way binding
      isChecked:false
    })
    form.reset()
   }

   onDelete(index:number){
     this.task.splice(index,1);
   }

   onCheck(index:number){
    console.log(this.task);
    
    this.task[index].isChecked=! this.task[index].isChecked;
   }
}