import { Component, OnInit, DoCheck } from '@angular/core';
import { Module } from '../module';

@Component({
  selector: 'app-rdctmd',
  templateUrl: './rdctmd.page.html',
  styleUrls: ['./rdctmd.page.scss'],
})

export class RdctmdPage extends Module implements OnInit, DoCheck {
  sq1: string;
  sq3: string;
  sq4: string;
  sq5: string;
  sq7: string;
  sq8: string;
  sq9: string;
  sq10: string;
  sq11: string;
  sq12: string;
  sq13: string;
  sq14: string;

  e1a: string;
  e4: string;
  e4c: string;
  e5: string;
  e6: string;
  e7: string;
  e8: string;
  e9: string;
  e9extension: string;
  headachetmd: string;
  crepitus: string;

  diagnoses: Set<'Myalgia' | 'Local myalgia' | 'Myofascial pain' | 'Myofascial pain with referral' | 'Arthralgia' |
  'Headache attributed to TMD' | 'Disc displacement with reduction' | 'Disc displacement with reduction, with intermittent locking' |
  'Disc displacement without reduction, with limited opening' | 'Disc displacement without reduction, without limited opening' |
  'Degenerative joint disease'> = new Set();

  constructor() {
    super('rdctmd');
  }

  ngOnInit() {
  }

  ngDoCheck() {
    this.diagnoses.clear();
    this.displayedResultDescription = '';

    // Pain-related TMD and headache
    if (this.sq3 === '1' && this.sq4 === '1') {
      // Myalgia and subtypes
      if (this.e1a === 'mm' && (this.e4 === 'mm' || this.e9 === 'mm')) {
        this.diagnoses.add('Myalgia');
        if (this.e9extension === '0') {
          this.diagnoses.add('Local myalgia');
        } else if (this.e9extension === 'beyondMuscle') {
          this.diagnoses.add('Myofascial pain with referral');
        } else if (this.e9extension === 'beyondStimulation') {
          this.diagnoses.add('Myofascial pain');
        }
      }
      // Arthralgia
      if (this.e1a === 'tmj' && (this.e4 === 'tmj' || this.e5 === 'tmj' || this.e9 === 'tmj')) {
        this.diagnoses.add('Arthralgia')
      }
      // Headache attributed to TMD
      if (this.headachetmd === '1') {
        this.diagnoses.add('Headache attributed to TMD');
      }
    }

    // Intra-articular Joint Disorders
    if (this.sq9 === '1' && this.sq10 === '1') {
      if (this.e4c === '0') {
        this.diagnoses.add('Disc displacement without reduction, without limited opening')
      } else if (this.e4c === '1') {
        this.diagnoses.add('Disc displacement without reduction, with limited opening')
      }
    } else if (this.e6 === '1') {
      if (this.sq11 === '0') {
        this.diagnoses.add('Disc displacement with reduction');
      } else if (this.sq11 === '1' && (this.sq12 === '0' || (this.sq12 === '1' && this.e8 === '1'))) {
        this.diagnoses.add('Disc displacement with reduction, with intermittent locking');
      } else if (this.sq11 === '1' && this.sq12 === '1' && this.e8 === '0') {
        this.diagnoses.add('Disc displacement without reduction, with limited opening');
      }
    }

    // Degenerative Joint Disorder
    if ((this.sq8 === '1' || this.e6 === '1' || this.e7 === '1') && this.crepitus === '1') {
      this.diagnoses.add('Degenerative joint disease');
    }

    // Display first diagnosis as result
    this.displayedResult = this.diagnoses.values().next().value;
    if (this.diagnoses.size >= 2) {
      this.displayedResult += '*';
    }

    // Generate result description
    if (this.diagnoses.has('Myalgia')) {
      this.displayedResultDescription += 'Myalgia: ';
      if (this.diagnoses.has('Local myalgia')) {
        this.displayedResultDescription += 'local myalgia';
      } else if (this.diagnoses.has('Myofascial pain')) {
        this.displayedResultDescription += 'myofascial pain';
      } else if (this.diagnoses.has('Myofascial pain with referral')) {
        this.displayedResultDescription += 'myofascial pain with referral';
      } else {
        this.displayedResultDescription += 'examine "Extension of pain" to assess subtype';
      }
      this.displayedResultDescription += '<br />';
    }
    if (this.diagnoses.has('Myalgia')) {
      this.displayedResultDescription += 'Arthralgia';
      this.displayedResultDescription += '<br />';
    }
    if (this.diagnoses.has('Headache attributed to TMD')) {
      this.displayedResultDescription += 'Headache attributed to TMD';
      this.displayedResultDescription += '<br />';
    }

    if (this.diagnoses.has('Disc displacement with reduction')) {
      this.displayedResultDescription += 'Disc displacement with reduction: confirm by MRI when indicated';
      this.displayedResultDescription += '<br />';
    } else if (this.diagnoses.has('Disc displacement with reduction, with intermittent locking')) {
      this.displayedResultDescription += 'Disc displacement with reduction, with intermittent locking: confirm by MRI when indicated';
      this.displayedResultDescription += '<br />';
    } else if (this.diagnoses.has('Disc displacement without reduction, with limited opening')) {
      this.displayedResultDescription += 'Disc displacement without reduction, with limited opening: confirm by MRI when indicated';
      this.displayedResultDescription += '<br />';
    } else if (this.diagnoses.has('Disc displacement without reduction, without limited opening')) {
      this.displayedResultDescription += 'Disc displacement without reduction, without limited opening: confirm by MRI when indicated';
      this.displayedResultDescription += '<br />';
    }

    if (this.diagnoses.has('Degenerative joint disease')) {
      this.displayedResultDescription += 'Degenerative joint disease: confirm by CT when indicated';
      this.displayedResultDescription += '<br />';
    }
  }
}
