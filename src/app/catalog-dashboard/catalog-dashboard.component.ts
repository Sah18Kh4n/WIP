import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import fileSaver from 'file-saver';
import { Screen1Service } from '../screen-one/screen1.service';

@Component({
	selector: 'app-catalog-dashboard',
	templateUrl: './catalog-dashboard.component.html',
	styleUrls: ['./catalog-dashboard.component.scss']
})
export class CatalogDashboardComponent implements OnInit {

	myForm: FormGroup;
	images: string[] = [];
	 status: string="factsAboutData";
  formBuilder: any;
  final: any[] = [];


	constructor(private httpClient: HttpClient, private fb: FormBuilder, private screen1: Screen1Service) {
		this.myForm = fb.group({})
	}

	ngOnInit(): void {
		this.factsAboutData()
	}

	factsAboutData() {
		this.myForm = this.fb.group({
			dataDescription: new FormControl('', [Validators.required, Validators.maxLength(1500)]),
			possibleDiscrimination: new FormControl('', [Validators.required, Validators.maxLength(1500)]),
			intendedUse: new FormControl('', [Validators.required, Validators.maxLength(1500)]),
			trainingData: new FormControl('', [Validators.required, Validators.maxLength(1500)]),
			evaluationData: new FormControl('', [Validators.required, Validators.maxLength(1500)]),
		})
	}

	factsAboutTrainedData() {
		this.myForm = this.fb.group({
			generalDescription: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      text_input: ['', Validators.required],
      photos: this.fb.array([]),
			factors: new FormControl('', [Validators.required, Validators.maxLength(1500)]),
			metrics: new FormControl('', [Validators.required, Validators.maxLength(1500)]),
			modelDetail: new FormControl('', [Validators.required, Validators.maxLength(1500)]),
			explainability: new FormControl('', [Validators.required, Validators.maxLength(1500)]),
		})

	}


  get photos(): FormArray {
    return this.myForm.get('photos') as FormArray;
   }

   detectFiles(event:any) {
     let files = event.target.files;
     if (files) {
       for (let file of files) {
         let reader = new FileReader();
         reader.onload = (e: any) => {
          this.photos.push(
             this.fb.group({
               fileUrl:[e.target.result],
               fileDescription:[null, Validators.required]
             })
           );
           console.log( e.target.result)
         };
         reader.readAsDataURL(file);
       }
     }
     console.log(this.myForm)

   }

   removePhoto(i:number) {
    this.photos.removeAt(i);
  }

	ehticalEffects() {
		this.myForm = this.fb.group({
			effects: new FormControl('', [Validators.required, Validators.maxLength(1500)]),
			economical: new FormControl('', [Validators.required, Validators.maxLength(1500)]),
			environmental: new FormControl('', [Validators.required, Validators.maxLength(1500)]),
			pitfalls: new FormControl('', [Validators.required, Validators.maxLength(1500)]),
			social: new FormControl('', [Validators.required, Validators.maxLength(1500)]),
		})

	}

	ethicalImpact() {
		this.myForm = this.fb.group({
			micro: new FormControl('', [Validators.required, Validators.maxLength(1500)]),
			uncontrollableAspects: new FormControl('', [Validators.required, Validators.maxLength(1500)]),
			safety: new FormControl('', [Validators.required, Validators.maxLength(1500)]),
			macro: new FormControl('', [Validators.required, Validators.maxLength(1500)]),
			fairness: new FormControl('', [Validators.required, Validators.maxLength(1500)]),
			privacy: new FormControl('', [Validators.required, Validators.maxLength(1500)]),
		})

	}
	recommendation() {
		this.myForm = this.fb.group({
			ethicalRecommendation: new FormControl('', [Validators.required, Validators.maxLength(1500)]),
			exception: new FormControl('', [Validators.required, Validators.maxLength(1500)]),
			policyDevelopment: new FormControl('', [Validators.required, Validators.maxLength(1500)]),
			needsOfRegulation: new FormControl('', [Validators.required, Validators.maxLength(1500)]),
		})

	}

	tabsData(factsAboutData: string) {
		if (factsAboutData === 'factsAboutData') {
			this.status = factsAboutData
			console.log(this.status)
			this.factsAboutData()
		}
		if (factsAboutData === 'factsAboutTrainedData') {
			this.status =factsAboutData
			this.factsAboutTrainedData()
		}
		if (factsAboutData === 'ethicalEffects') {
			this.status = factsAboutData
			this.ehticalEffects()
		}
		if (factsAboutData === 'ethicalImpact') {
			this.status = factsAboutData
			this.ethicalImpact()
		}
    if (factsAboutData === 'recommendation') {
			this.status = factsAboutData
			console.log(this.status)
			this.recommendation()
			}

	}
	get f() {
		return this.myForm.controls;
	}

  urls: any[] = [];

  onSelectFile(event: any) {
    if (event.target.files && event.target.files[0]) {
        var filesAmount = event.target.files.length;
        for (let i = 0; i < filesAmount; i++) {
                var reader = new FileReader();
                reader.onload = (event:any) => {
                  console.log(event.target.result);
                   this.urls.push(event.target.result);
                }

                reader.readAsDataURL(event.target.files[i]);
        }
    }
  }

	onUpload() {
		console.log(this.myForm.value);
		this.httpClient.post('http://localhost:3000/images', this.myForm.value)
			.subscribe(res => {
				console.log(res);
				alert('Uploaded Successfully.');
			})
	}

  onSave() {
		this.final.push(this.myForm.value)
		console.log(this.final)
	}

  onSubmit(user: any) {
    this.screen1.cataloguePost(this.final).subscribe((res) => {
      console.log(this.final);
      alert('User Generated report Successfully');
    });
    this.myForm.reset();
  }


  download() {
    this.screen1.downloadPdf().subscribe((response: any) => {
      let blob: any = new Blob([response], { type: 'application/pdf; charset=utf-8' });
      const url = window.URL.createObjectURL(blob);
      fileSaver.saveAs(blob, 'report.pdf');
    }),
      (error: any) => console.log('Error downloading the file'),
      () => console.info('File downloaded successfully')
  }

}
