import { BaseElement } from './base-element';

export class Project {
    projectId: number;
    createdAt: Date;
    lastUpdatedAt: Date;

    title: string;
    headerLine1: string;
    headerLine2: string;

    useTwoColumns: boolean;
    
    headerFontSize = 24;
    subHeaderFontSize = 18;
    elementsFontSize = 14;
}

export default Project;

