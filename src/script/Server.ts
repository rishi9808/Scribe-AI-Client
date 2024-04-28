import { ErrorResponse , Model, Patient, Section, Report} from "./types";


const baseUrl: string = "http://localhost:8080/api/v1/doctor";

export  async function check(username: string, password: string): Promise<void> {
    const response: Response = await fetch(`${baseUrl}/auth`, {
        method: "GET",
        headers: {
            Authorization: "Basic " + btoa(`${username}:${password}`),
        }
    })

    if (!response.ok) {
        alert("Invalid credentials");

        throw new Error("Invalid credentials");
    }

    sessionStorage.setItem("username", username);
    sessionStorage.setItem("password", password);
}

export async function addReport(sections: Section[], patientId: string, dob: string, password: string): Promise<void> {
    const response: Response = await fetch(`${baseUrl}/report?` + new URLSearchParams({
        dob: dob,
        password: password
    }), {
        method: "POST",
        headers: {
            Authorization: authorization(),
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            patientId: patientId,
            sections: sections
        })
    })

    await checkResponse(response);
}

export async function addReportMember(sections: Section[], patientId: string, dob: string, memberId: string, password: string): Promise<void> {
    const response: Response = await fetch(`${baseUrl}/report/member/${memberId}?` + new URLSearchParams({
        dob: dob,
        password: password
    }), {
        method: "POST",
        headers: {
            Authorization: authorization(),
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            patientId: patientId,
            sections: sections
        })
    })

    await checkResponse(response);
}

export async function addPatient(patient: Patient): Promise<void> {
    const response: Response = await fetch(`${baseUrl}/patient`, {
        method: "POST",
        headers: {
            Authorization: authorization(),
            "Content-Type": "application/json"
        },
        body: JSON.stringify(patient)
    })

    await checkResponse(response);
}

export async function updateReport(sections: Section[], reportId: string, patientId: string, dob: string, password: string): Promise<void> {
    const response: Response = await fetch(`${baseUrl}/report?` + new URLSearchParams({
        dob: dob,
        password: password
    }), {
        method: "PUT",
        headers: {
            Authorization: authorization(),
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            reportId: reportId,
            patientId: patientId,
            sections: sections
        })
    })

    await checkResponse(response);
}

export async function updateReportMember(sections: Section[], reportId: string, patientId: string, dob: string, memberId: string, password: string): Promise<void> {
    const response: Response = await fetch(`${baseUrl}/report/member/${memberId}?` + new URLSearchParams({
        dob: dob,
        password: password
    }), {
        method: "PUT",
        headers: {
            Authorization: authorization(),
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            reportId: reportId,
            patientId: patientId,
            sections: sections
        })
    })

    await checkResponse(response);
}

export async function checkPatient(patientId: string): Promise<void> {
    const response: Response = await fetch(`${baseUrl}/patient/${patientId}/check`, {
        method: "GET",
        headers: {
            Authorization: authorization()
        }
    })

    await checkResponse(response);
}

export async function getReports(): Promise<Report[]> {
    const response: Response = await fetch(`${baseUrl}/report`, {
        method: "GET",
        headers: {
            Authorization: authorization(),
            "Content-Type": "application/json"
        }
    })

    await checkResponse(response);

    return await response.json()
}

export async function getReportsPatient(patientId: string): Promise<Report[]> {
    const response: Response = await fetch(`${baseUrl}/report/patient/${patientId}`, {
        method: "GET",
        headers: {
            Authorization: authorization(),
            "Content-Type": "application/json"
        }
    })

    await checkResponse(response);

    return await response.json()
}

export async function getReport(reportId: string, password: string, dob: string): Promise<Report> {
    const response: Response = await fetch(`${baseUrl}/report/${reportId}?` + new URLSearchParams({
        dob: dob,
        password: password
    }), {
        method: "GET",
        headers: {
            Authorization: authorization(),
            "Content-Type": "application/json"
        }
    })

    await checkResponse(response);

    return await response.json()
}

export async function getReportMember(reportId: string, memberId: string, dob: string, password: string): Promise<Report> {
    const response: Response = await fetch(`${baseUrl}/report/${reportId}/member/${memberId}?` + new URLSearchParams({
        dob: dob,
        password: password
    }), {
        method: "GET",
        headers: {
            Authorization: authorization(),
            "Content-Type": "application/json"
        }
    })

    await checkResponse(response);

    return await response.json()
}

export async function getModels(): Promise<Model[]> {
    const response: Response = await fetch(`${baseUrl}/model`, {
        method: "GET",
        headers: {
            Authorization: authorization(),
            "Content-Type": "application/json"
        }
    })

    await checkResponse(response);

    return await response.json()
}

function authorization(): string {
    return "Basic " + btoa(`${sessionStorage.getItem("username")}:${sessionStorage.getItem("password")}`)
}

async function checkResponse(response: Response): Promise<void> {
    if (!response.ok) {
        const errorResponse: ErrorResponse = await response.json();

        alert(errorResponse.message);

        throw new Error(errorResponse.message + " | Status: " + errorResponse.status + " | Type: " + errorResponse.type + " | Timestamp: " + errorResponse.timestamp);
    }
}

