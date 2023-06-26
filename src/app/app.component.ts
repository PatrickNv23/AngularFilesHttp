import { Component } from '@angular/core';
import { FileService } from './services/file.service';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private fileService: FileService) {

  }

  getFile(event: Event) {
    const target = event.target as HTMLInputElement;

    const files: FileList | null = target.files;

    if (files!.length > 0 && files != null) {
      const formData = new FormData();

      Array.prototype.forEach.call(files, (file: File) => {
        formData.append("files", file);
      });

      this.fileService.upload(formData).subscribe({
        next: (result: HttpResponse<FileList>) => {
          console.log(result);
        },
        error: (err: HttpErrorResponse) => {
          console.log(err);
        },
        complete: () => {
          console.log("Se completó la tarea");
        }
      })
    }

  }
}
