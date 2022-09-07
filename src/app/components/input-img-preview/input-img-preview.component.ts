import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-img-preview',
  templateUrl: './input-img-preview.component.html',
  styleUrls: ['./input-img-preview.component.css']
})
export class InputImgPreviewComponent implements OnInit {
  // Emit an event when a file has been picked. Here we return the file itself
  @Output() onChange: EventEmitter<File> = new EventEmitter<File>();

  constructor() { }

  ngOnInit(): void {
  }

  // If the input has changed(file picked) we project the file into the img previewer
  updateSource($event: Event) {
    // We access he file with $event.target['files'][0]
    const element = $event.currentTarget as HTMLInputElement;
    let fileList: FileList | null = element.files;
    if (fileList) {
      this.projectImage(fileList[0]);
    }
  }

  // Uses FileReader to read the file from the input
  source: string = '';
  projectImage(file: File) {
    let reader = new FileReader;
    reader.onload = (e: any) => {
      // Simply set e.target.result as our <img> src in the layout
      this.source = e.target.result;
      this.onChange.emit(file);
    };
    // This will process our file and get it's attributes/data
    reader.readAsDataURL(file);
  }
}
