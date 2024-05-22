import { Component } from '@angular/core';

@Component({
  selector: 'app-add-pointment',
  templateUrl: './add-pointment.component.html',
  styleUrls: ['./add-pointment.component.css']
})
export class AddPointmentComponent {
  files: File[] = [];
  maxFileNameLength: number = 20;

  handleFileSelect(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      for (let i = 0; i < input.files.length; i++) {
        this.files.push(input.files.item(i) as File);
      }
    }
  }

  removeFile(index: number): void {
    this.files.splice(index, 1);
    const fileInput = document.getElementById('apptFile') as HTMLInputElement;
    const dataTransfer = new DataTransfer();
    this.files.forEach(file => dataTransfer.items.add(file));
    fileInput.files = dataTransfer.files;
  }

  shortenFileName(fileName: string, maxLength: number): string {
    if (fileName.length <= maxLength) {
      return fileName;
    }
    const extension = fileName.split('.').pop();
    const nameWithoutExtension = fileName.slice(0, fileName.length - extension!.length - 1);
    const shortenedName = nameWithoutExtension.slice(0, maxLength - extension!.length - 3) + '...';
    return `${shortenedName}.${extension}`;
  }
}
