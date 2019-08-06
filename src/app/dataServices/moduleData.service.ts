// Data for each module, usable across app.
import { Injectable } from '@angular/core';

interface Reference {
    description ?: string;          // How reference relates to module
    referenceName ?: string;        // Harvard style, http://www.citethisforme.com/
    link ?: string;                 // URL of reference
}

export interface ModuleMetadata {
    title: string;                              // Title of module
    id: string;                                 // unique id (used as path by router)
    hide?: boolean;                             // Whether module will be hidden
    shortDescription?: string;                  // Description of module
    longDescription?: string;                   // Long description
    references?: Reference[];                   // Reference data
}

const moduleLibrary: ModuleMetadata[] = [
    {   title: 'Lethal Dose',
        id: 'anaesthetics',
        shortDescription: 'Calculate max dose for drugs'
    },
    {
        title: 'Procedure Outcomes',
        id: 'success-rates',
        shortDescription: 'Survival and failure rates of procedures',
        references: [
            {description: 'Resin bonded bridge survival rates',
             referenceName: `Balasubramaniam, G. (2017). Predictability
             of resin bonded bridges – a systematic review. British Dental Journal, 222(11), pp.849-858.`,
            link: 'https://doi.org/10.1038/sj.bdj.2017.497'},
            {description: 'Implant survival rates',
            referenceName: `Howe, M., Keys, W. and Richards, D. (2019). Long-term (10-year) dental implant
            survival: A systematic review and sensitivity meta-analysis. Journal of Dentistry, 84, pp.9-21.`,
            link: 'https://doi.org/10.1016/j.jdent.2019.03.008'},
            {description: 'Autotransplantation survival rates',
             referenceName: `Abela, S., Murtadha, L., Bister, D., Andiappan, M. and Kwok, J. (2019). Survival
             probability of dental autotransplantation of 366 teeth over 34 years within a hospital setting
             in the United Kingdom. European Journal of Orthodontics.`,
            link: 'https://doi.org/10.1093/ejo/cjz012'},
            {description: 'Crown, amalgam, composite, glass ionomer survival rates',
             referenceName: `Burke, F. and Lucarotti, P. (2018). The ultimate guide to restoration longevity
             in England and Wales. Part 5: crowns: time to next intervention and to extraction of the restored
             tooth. British Dental Journal, 225(1), pp.33-48.`,
            link: 'https://doi.org/10.1038/sj.bdj.2018.523'},
        ]
    },
    {
        title: 'Tooth Classification & Prognosis',
        id: 'prognosis',
        shortDescription: 'Individual tooth classification and prognosis',
        longDescription: `Each tooth is evaluated for each of the 4 criteria independently. The level
                        of severity is evaluated both based on the presented condition and with consideration
                        to the foreseen tooth status after caries removal. The single most severe of these
                        criteria determines the tooth’s class.
                        <br /><br />
                        Anatomic risk factors and/or iatrogenic compromising factors may result in a drop of a
                        class for an individual tooth. More than 2 such findings in a tooth may require a
                        further drop in class
                        <br /><br />
                        Patient-level risk factors may result in a decreased prognosis for the dentition.
                        Therefore, a drop of 1 class for all teeth is suggested when considerable patient-level
                        risk factors are diagnosed. Patient-level risk factors are reassessed over time. A decrease
                        in class should be considered when no change in modifiable risk factors is observed, or when
                        significant nonmodifiable factors are present. An increase in class should be considered when
                        an obvious change in modifiable risk factors is observed.
                        `,
        references: [
            {description: 'Classification algorithm',
            referenceName: `Samet, Nachum & Jotkowitz, Anna. (2009). Classification and prognosis evaluation
            of individual teeth – a comprehensive approach. Quintessence international (Berlin, Germany : 1985).
            40. 377-87. `,
            link: 'https://www.researchgate.net/publication/26652014_Classification_and_prognosis_evaluation_of_\
            individual_teeth_-_a_comprehensive_approach'}
        ]
    },
    {   title: 'Testing',
        id: 'test',
        shortDescription: 'Test tools',
        longDescription: `This module serves as documentation for the module viewer. The properties described can be \
accessed by any module that extends the Module class`
    },
    {
        title: 'Warfarin Guidelines',
        id: 'warfarin',
        shortDescription: 'Minor oral surgery guidelines for patients taking warfarin',
        longDescription: `<b>Tranaxemic acid mouthwash protocol</b><br /><br />
                        On the day of surgery:
                        <ul>
                        <li>Check INR (INR must be 2.2 to 4.0).</li>
                        <li>Administer antibiotic prophylaxis if indicated.</li>
                        <li>Obtain a bottle of 4.8% tranexamic acid mouthwash.</li>
                        </ul>
                        During surgery (for extraction of teeth only):
                        <ul>
                        <li>After teeth have been extracted, irrigate sockets with tranexamic acid mouthwash using a
                        disposable syringe.</li>
                        <li>Fill the socket with loosely packed haemostatic agent.</li>
                        <li>Place one suture per socket</li>
                        <li>Ask the patient to bite on a gauze pack soaked in tranexamic acid mouthwash.</li>
                        </ul>
                        After surgery:
                        <ul>
                        <li>Give the patient tranexamic acid mouthwash with instructions on use (10 ml rinsed in mouth
                        for 2 minutes, 4 times daily for 2 to 5 days).</li>
                        <li>Arrange review dental appointment for 2 days after the procedure.</li>
                        </ul>
                        Review appointment (2 days after the procedure):
                        <ul>
                        <li>Check for bleeding, pain, delayed healing or infection, and treat as necessary.</li>
                        </ul>
                        Review the patient again in 1 to 2 weeks to check healing has occurred.<br /><br />
                        <b>INR</b><br /><br />
                        International normalised ratio evaluates the extrinsic pathway of coagulation. A high INR
                        indicates a risk of bleeding while a low INR suggests a risk of developing a clot. <br /><br />
                        The normal range for a healthy person is 0.8–1.2 and for people on warfarin, an INR of 2.0–3.0 is
                        usually targeted. A higher INR may be targeted in particular situations such as those with a mechanical
                        heart valve. <br /><br />`,
        references: [
            {description: 'Warfarin Guidelines',
            referenceName: `Therapeutic Guidelines - Oral and Dental: version 2`,
            link: 'https://tgldcdp.tg.org.au/guideLine?guidelinePage=Oral+and+Dental&frompage=etgcomplete'}
        ]
    },
    {   title: 'Periodontitis Classification',
        id: 'periodontitis-classification',
        shortDescription: 'Staging and grading of periodontitis',
        longDescription: `<b>Periodontitis</b><br /><br />
                        A periodontitis case is defined as either: (1) interdental CAL at ≥2 non-adjacent teeth, or
                        (2) buccal/lingual CAL ≥3 mm with pocketing ≥3 mm at ≥2 teeth. The observed CAL must also not
                        be ascribable to non-periodontal causes.`,
        references: [
            {description: 'Staging and grading framework',
                referenceName: `Tonetti, M., Greenwell, H. and Kornman, K. (2018). Staging and grading of periodontitis:
                Framework and proposal of a new classification and case definition. Journal of Clinical Periodontology,
                45, pp.S149-S161.`,
            link: 'https://doi.org/10.1111/jcpe.12945'}
        ]},
    {   title: 'Periodontal Risk & Recall',
        id: 'periodontal-recall',
        shortDescription: 'Risk and recall calculator for periodontitis patients',
        longDescription: `A low PRA patient has all parameters within the low-risk categories or - at the most - one
                        parameter in themoderate-risk category. <br /><br /> A moderate PRA patient has at least two
                        parameters in the moderate category, but at most one parameter in the high-risk category.
                        <br /><br /> A high PRA patient has at least two parameters in the high-risk category.`,
        references: [
            {description: 'Risk graph and algorithm',
                referenceName: `Lang, N. and Tonetti, M. (2003). Periodontal risk assessment (PRA) for patients in
                supportive periodontal therapy (SPT). Oral Health Prev Dent, 1, pp.7-16.`,
            link: 'https://dx.doi.org/10.3290/j.ohpd.a8216'}
        ]
        },
        {
            title: 'Temporomandibular Disorder',
            id: 'rdctmd',
            shortDescription: 'Diagnostic Criteria for Temporomandibular Disorders',
            longDescription: `The Diagnostic Criteria for Temporomandibular Disorders is intended for use in both
                            clinical settings and applied research settings.
                            `,
            references: [
                {description: 'TMD Assessment/Diagnosis documents',
                referenceName: `Ohrbach R, editor. Diagnostic Criteria for Temporomandibular Disorders: Assessment
                Instruments. Version 15May2016.`,
                link: 'https://ubwp.buffalo.edu/rdc-tmdinternational/tmd-assessmentdiagnosis/dc-tmd/'}
            ]
        },
];

@Injectable({providedIn: 'root'})
export class ModuleDataService {
    constructor() { }

    getModuleMetadata(id: string): ModuleMetadata {
        return(moduleLibrary.filter((module) => module.id === id)[0]);
    }

    getModuleLibrary(): ModuleMetadata[] {
        return moduleLibrary;
    }
  }
