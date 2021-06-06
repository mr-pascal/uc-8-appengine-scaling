
import http from 'k6/http';
import { sleep } from 'k6';

const url = 'YOUR_SERVER_URL_HERE';

export let options = {
    discardResponseBodies: true,
    scenarios: {
        normal: {
            executor: 'ramping-arrival-rate',
            preAllocatedVUs: 250,
            maxVUs: 1000,
            stages: [
                { duration: '0s', target: 2 },
                { duration: '2m', target: 2 },
                { duration: '2m', target: 5 },
                { duration: '2m', target: 10 },
                { duration: '2m', target: 10 },
                { duration: '2m', target: 5 },
                { duration: '2m', target: 2 },
            ],
            tags: { example_tag: 'normal-tag' },
        },
    },


};

export default function () {
    // Hits the URL once per second
    http.get(url);
    sleep(1);
}