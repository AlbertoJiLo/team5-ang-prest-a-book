import { Component, OnInit } from '@angular/core';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-adminpanel-books',
  templateUrl: './adminpanel-books.component.html',
  styleUrls: ['./adminpanel-books.component.css']
})
export class AdminpanelBooksComponent implements OnInit {

  libros:any = null
  estasSeguro: any = false;

  constructor(private books: BooksService){}

  ngOnInit(): void{
    this.books.getAll().subscribe
    (res => this.libros = res);
    
  }
  borrarLibro(libro_id:number){
    this.estasSeguro = window.confirm("¿Estás seguro?");
    console.log(libro_id)
    if(this.estasSeguro){
          this.books.delete(libro_id).subscribe();
          window.alert("Libro borrado correctamente");
    }
  }
}
