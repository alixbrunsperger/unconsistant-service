export class CallResult {
    constructor (
        message
    ) {
        this.message = message;
    }
}

const errors = [
    {
        status: 500,
        error: 'This is a server error',
    },
    {
        status: 400,
        error: 'Invalid input',
    },
    {
        status: 404,
        error: 'The call is not found',
    },
    {
        status: 403,
        error: 'The operation is forbidden!',
    },
];

function isSuccessful() {
    return Math.random() < 0.7;
}

function createSuccessResult() {
    return new Response(JSON.stringify(new CallResult('Success!')), {
        ok: true,
        bodyUsed: true,
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

function createRejectResult() {
    const errorIndex = Math.floor(Math.random() * errors.length);
    const error = errors[errorIndex];
    return new Response(error.error, {
        ok: false,
        bodyUsed: true,
        status: error.status
    });
}

export class BackendService {
    getData() {
        return new Promise((resolve, reject) => {
            const duration = Math.pow(Math.random(), 2) * 2000;
            setTimeout(() => {
                if (isSuccessful()) {
                    resolve(createSuccessResult());
                } else {
                    reject(createRejectResult());
                }
            }, duration);
        });
    }
}
  
  export default BackendService;