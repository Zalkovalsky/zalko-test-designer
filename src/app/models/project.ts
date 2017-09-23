import { BaseElement } from './base-element';

export class Project {
    projectId: number;
    createdAt: Date;
    lastUpdatedAt: Date;

    title: string;
    headerLine1: string;
    headerLine2: string;

    useTwoColumns: boolean;
    elementsFontSize = 18;
    headerFontSize = 24;
}

export default Project;

