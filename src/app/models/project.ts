import { BaseElement } from './base-element';

export class Project {
    projectId: number;
    createdAt: Date;
    lastUpdatedAt: Date;

    title: string;
    headerLine1: string;
    headerLine2: string;

    elementsFontSize: number;
    headerFontSize: number;

    static clone(project: Project): Project {
        return {
            projectId: project.projectId,
            title: project.title,
            createdAt: project.createdAt,
            lastUpdatedAt: project.lastUpdatedAt,
            headerLine1: project.headerLine1,
            headerLine2: project.headerLine2,
            elementsFontSize: project.elementsFontSize,
            headerFontSize: project.headerFontSize
        };
    }
}

export default Project;

