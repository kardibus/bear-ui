import fetch from 'node-fetch';

type ProgramGet = {
    id: number;
    email: string;
    first_name: string;
};

type GetProgramResponse = {
    data: ProgramGet[];
};

async function getProgram() {
    try {
        // 👇️ const response: Response
        const response = await fetch('https://localhost:8081/beer', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`Error! status: ${response.status}`);
        }

        // 👇️ const result: GetUsersResponse
        const result = (await response.json()) as GetProgramResponse;

        console.log('result is: ', JSON.stringify(result, null, 4));

        return result;
    } catch (error) {
        if (error instanceof Error) {
            console.log('error message: ', error.message);
            return error.message;
        } else {
            console.log('unexpected error: ', error);
            return 'An unexpected error occurred';
        }
    }
}

getProgram();