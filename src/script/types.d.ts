export interface User {
    userId: string;
    name: string;
    password: string;
}

export interface Patient {
    userId: string;
    name: string;
    phone: string;
    location: string;
    dob: string;
    password: string;
    family: Family[]
}

export interface Family {
    userId: string;
    memberId: string;
}

export interface Model {
    usage: number;
    modelId: number;
    name: string;
    description: string;
    researcherId: string;
    cost: number;
    server: string;
}

export interface Report {
    reportId: string;
    patientId: string;
    doctorId: string;
    createdAt: string;
    modifiedAt: string;
    sections: Section[];
}

export interface Section {
    reportId: string;
    question: string;
    answer: string;
    position: number;
}

export interface ErrorResponse {
    status: number;
    message: string;
    type: string;
    timestamp: string;
}