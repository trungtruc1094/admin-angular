import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    $(document).ready(function(){
      console.log('jQuery dashboard ready');

      // Click add more to add new row
      var i = 1;
      $('#add').click(function(){
        i++;
        $('#dynamicList').append('<div class="form-row mb-1" id="row_' + i + '"><div class="col-md-5"><input type="text" class="form-control" id="inputIngredientName" aria-describedby="emailHelp" placeholder=""></div><div class="col-md-5"><input type="text" class="form-control" id="inputIngredientAmount" aria-describedby="emailHelp" placeholder=""></div><div class="col-md-1"><select id="inputIngredientsUnit" class="form-control"><option selected>Kg(s)</option><option>Gram(s)</option></select></div><div class="col-md-1"><button name="remove" id="' + i + '" class="btn btn-danger btn_remove">Remove</button></div></div>');
        $(document).on('click', '.btn_remove', function(){
          var button_id = $(this).attr("id");
          $('#row_' + button_id).remove();
          
        });
      })
    });
  }
}