import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import * as fileSaver from 'file-saver';
import { Screen1Service } from '../screen-one/screen1.service';

@Component({
  selector: 'app-screen1-nav',
  templateUrl: './screen1-nav.component.html',
  styleUrls: ['./screen1-nav.component.scss'],
})
export class Screen1NavComponent implements OnInit {
  form: FormGroup;
  safetyFormArray: FormGroup[] = [];
  final: any[] = [];
  privacyFormArray: FormGroup[] = [];
  fairnessFormArray: FormGroup[] = [];
  developmentFormArray: FormGroup[] = [];
  transparencyFormArray: FormGroup[] = [];
  securityFormArray: FormGroup[] = [];
  legalFormArray: FormGroup[] = [];

  safetyQuestions: any[] = [
    {
      id: 0,
      type: 0,
      question:
        'Is there any safety issue such as adverse effects on the mind and body of individuals?',
    },
    {
      id: 1,
      type: 0,
      question:
        'Is ther any risk or consequences in using of the AI model output for the safety of individuals?',
    },
    {
      id: 2,
      type: 0,
      question:
        'Is it possible to intevene to prevent danger? Does human intervnetion cause any safety issue?',
    },
    {
      id: 3,
      type: 0,
      question:
        'Is there any preefined safety level of decistion making by the customer/ethical values that should not happen? What is the risk of this to happen?',
    },
  ];
  privacyQuestions: any[] = [
    {
      id: 4,
      type: 1,
      question: 'Is any privacy preverence method is applied on personl data?',
    },
    {
      id: 5,
      type: 1,
      question:
        'Is it possible to identify personal information from AI models output and reverse engineer the output to access personal information ',
    },
    {
      id: 6,
      type: 1,
      question:
        'Have you implement any strategy to limit the misusage of AI output/input to endanger privacy?',
    },
    {
      id: 7,
      type: 1,
      question: 'Have users are aware of how their data is going to be used?',
    },
  ];
  fairnessQuestions: any[] = [
    {
      id: 8,
      type: 2,
      question:
        'How likely is that the AI model lead to discrimination, inequality, or prejudice?',
    },
    {
      id: 9,
      type: 2,
      question:
        'Is there any mechanism to elimnate unfairness during model develoment and depolyment?',
    },
    {
      id: 10,
      type: 2,
      question: 'How much human intervention is needed to prevent unfairness? ',
    },
  ];
  developmentQuestions: any[] = [
    {
      id: 11,
      type: 3,
      question:
        'Would model deployment lead to undermine social values, environmental values, or economical values?',
    },
    {
      id: 12,
      type: 3,
      question:
        'Is it clear that how the AI model is going to be used and not going to be utilized for harmful use cases?',
    },
    {
      id: 13,
      type: 3,
      question:
        'How likely is that the AI model lead to improper use cases when used within/with another system or context?',
    },
    {
      id: 14,
      type: 3,
      question:
        'Have you considered any mainatanence system AI for proper utilization during the model life cycle?',
    },
  ];
  transparencyQuestions: any[] = [
    {
      id: 15,
      type: 4,
      question:
        'How much explainability and transparency of AI model is important?',
    },
    {
      id: 16,
      type: 4,
      question:
        'If explainability/transparency is necessary, do you have any mechanism to provide the requirements?  ',
    },
    {
      id: 17,
      type: 4,
      question:
        'Have users been given informed consent and subjects have a clear understanding of the usage of their data? ',
    },
    {
      id: 18,
      type: 4,
      question:
        'Do we have a mechanism through which an individual can request their personal information be removed?',
    },
    {
      id: 19,
      type: 4,
      question:
        'Is the process of generating the analysis well documented and reproducible if we discover issues in the future?',
    },
    {
      id: 20,
      type: 4,
      question:
        'Is there a plan to delete the data after it is no longer needed or asked by users/regilations?',
    },
  ];
  securtiyQuestions: any[] = [
    {
      id: 21,
      type: 5,
      question:
        'Have you taken or will take necessary measures to prevent and minimize unauthorized tampering, additions, electronic destruction, analogy, and damage to the data?',
    },
    {
      id: 22,
      type: 5,
      question:
        'Have you considered necessary actions to prevent AI model from degration,  hesitation, or overload state?',
    },
    {
      id: 23,
      type: 5,
      question:
        'Have you taken ecessary steps to prevent and minimize the usage of inappropriate data?',
    },
    {
      id: 24,
      type: 5,
      question:
        'Have we ensured that data is not used or shared unless necessary for the analysis?',
    },
  ];
  legalQuestions: any[] = [
    {
      id: 25,
      type: 6,
      question:
        'Have we considered relevant regulations and integrity with local laws?',
    },
    {
      id: 26,
      type: 6,
      question:
        'if needed, is there any mechanism to elimnate illegal input/output data through out the model life cycle?',
    },
    {
      id: 27,
      type: 6,
      question:
        "Is it needed to continously check wether AI's behavoir is not in violation of the law after model deployment?",
    },
  ];

  constructor(private screen1: Screen1Service, private fb: FormBuilder) {
    this.form = fb.group({
    });
  }



  ngOnInit(): void {
    this.privacy(),
      this.safety(),
      this.fairness(),
      this.development(),
      this.transparency(),
      this.security(),
      this.legal();
  }

  onSubmit(user: any) {
    this.screen1.postUser(this.final).subscribe((res) => {
      console.log(this.final);
      alert('User Generated report Successfully');
    });
    this.form.reset();
  }

  safety() {
    this.safetyQuestions.map((item) => {
      this.safetyFormArray.push(
        this.fb.group({
          question: [item.question, Validators.required],
          type: [item.type, Validators.required],
          id: [item.id, Validators.required],
          datacollection: [null, Validators.required],
          datastorage: [null, Validators.required],
          datapreparation: [null, Validators.required],
          modeldevelopment: [null, Validators.required],
          modeldeployment: [null, Validators.required],
          comments: [null, Validators.required],
        })
      );
    });
  }

  privacy() {
    this.privacyQuestions.map((item) => {
      this.privacyFormArray.push(
        this.fb.group({
          question: [item.question, Validators.required],
          type: [item.type, Validators.required],
          id: [item.id, Validators.required],
          datacollection: [null, Validators.required],
          datastorage: [null, Validators.required],
          datapreparation: [null, Validators.required],
          modeldevelopment: [null, Validators.required],
          modeldeployment: [null, Validators.required],
          comments: [null, Validators.required],
        })
      );
    });
  }
  fairness() {
    this.fairnessQuestions.map((item) => {
      this.fairnessFormArray.push(
        this.fb.group({
          question: [item.question, Validators.required],
          type: [item.type, Validators.required],
          id: [item.id, Validators.required],
          datacollection: [null, Validators.required],
          datastorage: [null, Validators.required],
          datapreparation: [null, Validators.required],
          modeldevelopment: [null, Validators.required],
          modeldeployment: [null, Validators.required],
          comments: [null, Validators.required],
        })
      );
    });
  }
  development() {
    this.developmentQuestions.map((item) => {
      this.developmentFormArray.push(
        this.fb.group({
          question: [item.question, Validators.required],
          type: [item.type, Validators.required],
          id: [item.id, Validators.required],
          datacollection: [null, Validators.required],
          datastorage: [null, Validators.required],
          datapreparation: [null, Validators.required],
          modeldevelopment: [null, Validators.required],
          modeldeployment: [null, Validators.required],
          comments: [null, Validators.required],
        })
      );
    });
  }
  transparency() {
    this.transparencyQuestions.map((item) => {
      this.transparencyFormArray.push(
        this.fb.group({
          question: [item.question, Validators.required],
          type: [item.type, Validators.required],
          id: [item.id, Validators.required],
          datacollection: [null, Validators.required],
          datastorage: [null, Validators.required],
          datapreparation: [null, Validators.required],
          modeldevelopment: [null, Validators.required],
          modeldeployment: [null, Validators.required],
          comments: [null, Validators.required],
        })
      );
    });
  }
  security() {
    this.securtiyQuestions.map((item) => {
      this.securityFormArray.push(
        this.fb.group({
          question: [item.question, Validators.required],
          type: [item.type, Validators.required],
          id: [item.id, Validators.required],
          datacollection: [null, Validators.required],
          datastorage: [null, Validators.required],
          datapreparation: [null, Validators.required],
          modeldevelopment: [null, Validators.required],
          modeldeployment: [null, Validators.required],
          comments: [null, Validators.required],
        })
      );
    });
  }
  legal() {
    this.legalQuestions.map((item) => {
      this.legalFormArray.push(
        this.fb.group({
          question: [item.question, Validators.required],
          type: [item.type, Validators.required],
          id: [item.id, Validators.required],
          datacollection: [null, Validators.required],
          datastorage: [null, Validators.required],
          datapreparation: [null, Validators.required],
          modeldevelopment: [null, Validators.required],
          modeldeployment: [null, Validators.required],
          comments: [null, Validators.required],
        })
      );
    });
  }

  submitData(data: any) {
    if (data == this.safety) {
      this.safetyFormArray.map((sfty) => {
        const payload = {
          question: sfty.get('question')?.value,
          type: sfty.get('type')?.value,
          id: sfty.get('id')?.value,
          datacollection: sfty.get('datacollection')?.value,
          datastorage: sfty.get('datastorage')?.value,
          datapreparation: sfty.get('datapreparation')?.value,
          modeldevelopment: sfty.get('modeldevelopment')?.value,
          modeldeployment: sfty.get('modeldeployment')?.value,
          comments: sfty.get('comments')?.value,
        };
        this.final.push(payload);
      });

      // console.log(this.final);
    }
    if (data == this.privacy) {
      this.privacyFormArray.map((sfty) => {
        const payload = {
          question: sfty.get('question')?.value,
          type: sfty.get('type')?.value,
          id: sfty.get('id')?.value,
          datacollection: sfty.get('datacollection')?.value,
          datastorage: sfty.get('datastorage')?.value,
          datapreparation: sfty.get('datapreparation')?.value,
          modeldevelopment: sfty.get('modeldevelopment')?.value,
          modeldeployment: sfty.get('modeldeployment')?.value,
          comments: sfty.get('comments')?.value,
        };
        this.final.push(payload);
      });

      console.log(this.final);
    }
    if (data == this.fairness) {
      this.fairnessFormArray.map((sfty) => {
        const payload = {
          question: sfty.get('question')?.value,
          type: sfty.get('type')?.value,
          id: sfty.get('id')?.value,
          datacollection: sfty.get('datacollection')?.value,
          datastorage: sfty.get('datastorage')?.value,
          datapreparation: sfty.get('datapreparation')?.value,
          modeldevelopment: sfty.get('modeldevelopment')?.value,
          modeldeployment: sfty.get('modeldeployment')?.value,
          comments: sfty.get('comments')?.value,
        };
        this.final.push(payload);
      });

      console.log(this.final);
    }
    if (data == this.development) {
      this.developmentFormArray.map((sfty) => {
        const payload = {
          question: sfty.get('question')?.value,
          type: sfty.get('type')?.value,
          id: sfty.get('id')?.value,
          datacollection: sfty.get('datacollection')?.value,
          datastorage: sfty.get('datastorage')?.value,
          datapreparation: sfty.get('datapreparation')?.value,
          modeldevelopment: sfty.get('modeldevelopment')?.value,
          modeldeployment: sfty.get('modeldeployment')?.value,
          comments: sfty.get('comments')?.value,
        };
        this.final.push(payload);
      });

      console.log(this.final);
    }
    if (data == this.transparency) {
      this.transparencyFormArray.map((sfty) => {
        const payload = {
          question: sfty.get('question')?.value,
          type: sfty.get('type')?.value,
          id: sfty.get('id')?.value,
          datacollection: sfty.get('datacollection')?.value,
          datastorage: sfty.get('datastorage')?.value,
          datapreparation: sfty.get('datapreparation')?.value,
          modeldevelopment: sfty.get('modeldevelopment')?.value,
          modeldeployment: sfty.get('modeldeployment')?.value,
          comments: sfty.get('comments')?.value,
        };
        this.final.push(payload);
      });

      console.log(this.final);
    }
    if (data == this.security) {
      this.securityFormArray.map((sfty) => {
        const payload = {
          question: sfty.get('question')?.value,
          type: sfty.get('type')?.value,
          id: sfty.get('id')?.value,
          datacollection: sfty.get('datacollection')?.value,
          datastorage: sfty.get('datastorage')?.value,
          datapreparation: sfty.get('datapreparation')?.value,
          modeldevelopment: sfty.get('modeldevelopment')?.value,
          modeldeployment: sfty.get('modeldeployment')?.value,
          comments: sfty.get('comments')?.value,
        };
        this.final.push(payload);
      });

      console.log(this.final);
    }
    if (data == this.legal) {
      this.legalFormArray.map((sfty) => {
        const payload = {
          question: sfty.get('question')?.value,
          type: sfty.get('type')?.value,
          id: sfty.get('id')?.value,
          datacollection: sfty.get('datacollection')?.value,
          datastorage: sfty.get('datastorage')?.value,
          datapreparation: sfty.get('datapreparation')?.value,
          modeldevelopment: sfty.get('modeldevelopment')?.value,
          modeldeployment: sfty.get('modeldeployment')?.value,
          comments: sfty.get('comments')?.value,
        };
        this.final.push(payload);
      });

      console.log(this.final);
    }
  }

  download() {
    this.screen1.downloadFile().subscribe((response: any) => {
      let blob: any = new Blob([response], { type: 'text/csv; charset=utf-8' });
      const url = window.URL.createObjectURL(blob);
      fileSaver.saveAs(blob, 'user.csv');
    }),
      (error: any) => console.log('Error downloading the file'),
      () => console.info('File downloaded successfully')
  }
}
