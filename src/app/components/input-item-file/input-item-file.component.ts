import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-item-file',
  templateUrl: './input-item-file.component.html',
  styleUrls: ['./input-item-file.component.css']
})
export class InputItemFileComponent {

  @Input() title: string = 'Uplaod File';
  @Input() desc: string = 'Files must be in PDF, JPG, PNG, or ZIP format.';
  @Input() name: string = 'files';
  @Input() id: string = 'files';
  @Input() uploadedFilesTitle: string = 'Uploaded Files:';
  @Input() maxFileNameLength: number = 20;
  @Input() multiple: boolean = true;
  @Input() accept: string = '';

  files: File[] = [];

  handleFileSelect(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      this.files = [];

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
