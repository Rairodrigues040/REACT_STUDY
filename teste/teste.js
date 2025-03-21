
const daysOfService = [
    {
        "id": "cb9620c7-c12a-4bff-979a-a45fd604bdab",
        "company_id": "7d6aa33f-59da-47ad-9efa-08ea0353cbff",
        "day": 0,

        "time_off_windows": [],
        "status": 0
    },
    {
        "id": "30440b2c-8a9a-48b6-b88f-8f02c98c10b0",
        "company_id": "7d6aa33f-59da-47ad-9efa-08ea0353cbff",
        "day": 1,
        "hour_open": "14:00",
        "hour_close": "19:00",
        "time_off_windows": [],
        "status": 1
    },
    {
        "id": "9ee85cf4-97aa-4dfd-a37e-4a989aa4cd9c",
        "company_id": "7d6aa33f-59da-47ad-9efa-08ea0353cbff",
        "day": 2,
        "hour_open": "08:00",
        "hour_close": "20:00",
        "time_off_windows": [
            {
                "start": "12:00",
                "end": "14:00"
            }
        ],
        "status": 1
    },
    {
        "id": "1076a2b7-67e0-4424-baf4-57bdde09a9e4",
        "company_id": "7d6aa33f-59da-47ad-9efa-08ea0353cbff",
        "day": 3,
        "hour_open": "08:00",
        "hour_close": "20:00",
        "time_off_windows": [
            {
                "start": "12:00",
                "end": "14:00"
            }
        ],
        "status": 1
    },
    {
        "id": "b07c2f52-5afb-4960-b1e9-0e4a628cfc5b",
        "company_id": "7d6aa33f-59da-47ad-9efa-08ea0353cbff",
        "provider_id": null,
        "day": 4,
        "hour_open": "10:00",
        "hour_close": "19:00",
        "time_off_windows": [
            {
                "start": "12:00",
                "end": "14:00"
            }
        ],
        "status": 1,
        "updated_at": "2025-03-13T06:49:15.885Z"
    },
    {
        "id": "82fde8d6-cbc1-4d13-b547-ef5095c6e73b",
        "company_id": "7d6aa33f-59da-47ad-9efa-08ea0353cbff",
        "day": 5,
        "hour_open": "07:00",
        "hour_close": "20:00",
        "time_off_windows": [
            {
                "start": "13:30",
                "end": "14:30"
            }
        ],
        "status": 1
    },
    {
        "id": "3351f475-3b77-4d37-8b21-d3b72b75730c",
        "company_id": "7d6aa33f-59da-47ad-9efa-08ea0353cbff",
        "day": 6,
        "hour_open": "07:00",
        "hour_close": "20:00",
        "time_off_windows": [
            {
                "start": "12:00",
                "end": "13:00"
            }
        ],
        "status": 1
    }
]




const providersDaysOff = [
    {
        "id": "0a192497-5535-49d1-9d6e-d8f3914a781c",
        "provider": {
            "id": "92a4bc7e-4778-427d-842a-c55deff4d075",
            "name": "Lucas Oliveira",
            "avatar": "233152d4186e37f06af9-at 11.02.33.jpeg"
        },
        "start_at": "2025-03-18T10:00:00.000Z",
        "end_at": "2025-03-18T12:00:00.000Z",
        "type": 0
    },
    {
        "id": "c3b0d4d5-9d40-49ba-ba2e-edc596ca123c",
        "provider": {
            "id": "92a4bc7e-4778-427d-842a-c55deff4d075",
            "name": "Lucas Oliveira",
            "avatar": "233152d4186e37f06af9-at 11.02.33.jpeg"
        },
        "start_at": "2025-03-05T03:00:00.000Z",
        "end_at": "2025-03-05T03:00:00.000Z",
        "type": 0
    },
    {
        "id": "17112077-664f-4720-af32-af1ae425ec86",
        "provider": {
            "id": "92a4bc7e-4778-427d-842a-c55deff4d075",
            "name": "Lucas Oliveira",
            "avatar": "233152d4186e37f06af9-at 11.02.33.jpeg"
        },
        "start_at": "2025-02-22T08:00:00.000Z",
        "end_at": "2025-02-24T17:00:00.000Z",
        "type": 0
    },
    {
        "id": "ed5f2a07-a6f4-4a3b-8dd2-0d7c7c943d90",
        "provider": {
            "id": "92a4bc7e-4778-427d-842a-c55deff4d075",
            "name": "Lucas Oliveira",
            "avatar": "233152d4186e37f06af9-at 11.02.33.jpeg"
        },
        "start_at": "2025-01-07T11:00:00.000Z",
        "end_at": "2025-01-07T16:30:00.000Z",
        "type": 0
    },
    {
        "id": "c78b9b73-8767-4ca4-8fb7-ab765df69403",
        "provider": {
            "id": "92a4bc7e-4778-427d-842a-c55deff4d075",
            "name": "Lucas Oliveira",
            "avatar": "233152d4186e37f06af9-at 11.02.33.jpeg"
        },
        "start_at": "2025-01-06T03:00:00.000Z",
        "end_at": "2025-01-07T02:59:00.000Z",
        "type": 0
    },
    {
        "id": "b0cdfd78-0fb1-4223-9d0c-3759b93ee03d",
        "provider": {
            "id": "92a4bc7e-4778-427d-842a-c55deff4d075",
            "name": "Lucas Oliveira",
            "avatar": "233152d4186e37f06af9-at 11.02.33.jpeg"
        },
        "start_at": "2025-01-01T03:00:00.000Z",
        "end_at": "2025-01-06T02:59:00.000Z",
        "type": 0
    },
    {
        "id": "b4008665-88a7-439a-8b27-37702f2776cc",
        "provider": {
            "id": "92a4bc7e-4778-427d-842a-c55deff4d075",
            "name": "Lucas Oliveira",
            "avatar": "233152d4186e37f06af9-at 11.02.33.jpeg"
        },
        "start_at": "2024-12-25T03:00:00.000Z",
        "end_at": "2024-12-26T02:59:00.000Z",
        "type": 0
    },
    {
        "id": "4cbf88b9-0281-4df4-89e9-199a577dd36d",
        "provider": {
            "id": "92a4bc7e-4778-427d-842a-c55deff4d075",
            "name": "Lucas Oliveira",
            "avatar": "233152d4186e37f06af9-at 11.02.33.jpeg"
        },
        "start_at": "2024-12-14T16:00:00.000Z",
        "end_at": "2024-12-16T02:59:00.000Z",
        "type": 0
    },
    {
        "id": "654de068-ffa4-4c37-8fcb-9351967697cc",
        "provider": {
            "id": "92a4bc7e-4778-427d-842a-c55deff4d075",
            "name": "Lucas Oliveira",
            "avatar": "233152d4186e37f06af9-at 11.02.33.jpeg"
        },
        "start_at": "2024-12-01T03:00:00.000Z",
        "end_at": "2024-12-02T02:59:00.000Z",
        "type": 0
    },
    {
        "id": "382f5361-079b-4450-bb20-09e51bf1c897",
        "provider": {
            "id": "92a4bc7e-4778-427d-842a-c55deff4d075",
            "name": "Lucas Oliveira",
            "avatar": "233152d4186e37f06af9-at 11.02.33.jpeg"
        },
        "start_at": "2024-11-04T03:00:00.000Z",
        "end_at": "2024-11-05T02:59:00.000Z",
        "type": 0
    },
    {
        "id": "ee853238-d395-4a4c-b4e5-0cb760ab80d5",
        "provider": {
            "id": "92a4bc7e-4778-427d-842a-c55deff4d075",
            "name": "Lucas Oliveira",
            "avatar": "233152d4186e37f06af9-at 11.02.33.jpeg"
        },
        "start_at": "2024-10-28T03:00:00.000Z",
        "end_at": "2024-10-29T02:59:00.000Z",
        "type": 0
    },
    {
        "id": "f3b0db46-b4cb-4c2d-a606-6f9cf06e661a",
        "provider": {
            "id": "92a4bc7e-4778-427d-842a-c55deff4d075",
            "name": "Lucas Oliveira",
            "avatar": "233152d4186e37f06af9-at 11.02.33.jpeg"
        },
        "start_at": "2024-10-21T03:00:00.000Z",
        "end_at": "2024-10-21T20:00:00.000Z",
        "type": 0
    },
    {
        "id": "bc4719ed-7f46-4796-b52e-ad25fb139eba",
        "provider": {
            "id": "92a4bc7e-4778-427d-842a-c55deff4d075",
            "name": "Lucas Oliveira",
            "avatar": "233152d4186e37f06af9-at 11.02.33.jpeg"
        },
        "start_at": "2024-09-17T03:00:00.000Z",
        "end_at": "2024-09-17T16:00:00.000Z",
        "type": 0
    },
    {
        "id": "6304acb2-4b5f-4a42-a171-50244a767dfb",
        "provider": {
            "id": "92a4bc7e-4778-427d-842a-c55deff4d075",
            "name": "Lucas Oliveira",
            "avatar": "233152d4186e37f06af9-at 11.02.33.jpeg"
        },
        "start_at": "2024-09-16T18:00:00.000Z",
        "end_at": "2024-09-17T02:59:00.000Z",
        "type": 0
    },
    {
        "id": "8feb231b-5054-4b58-802b-c5863ff697dc",
        "provider": {
            "id": "92a4bc7e-4778-427d-842a-c55deff4d075",
            "name": "Lucas Oliveira",
            "avatar": "233152d4186e37f06af9-at 11.02.33.jpeg"
        },
        "start_at": "2024-08-19T13:00:00.000Z",
        "end_at": "2024-08-19T19:20:00.000Z",
        "type": 0
    },
    {
        "id": "352f48eb-fba7-46a7-b70a-8955b1831b31",
        "provider": {
            "id": "92a4bc7e-4778-427d-842a-c55deff4d075",
            "name": "Lucas Oliveira",
            "avatar": "233152d4186e37f06af9-at 11.02.33.jpeg"
        },
        "start_at": "2024-08-12T03:00:00.000Z",
        "end_at": "2024-08-13T02:59:00.000Z",
        "type": 0
    },
    {
        "id": "82955a1e-35c9-4349-bd89-ab31232c902f",
        "provider": {
            "id": "92a4bc7e-4778-427d-842a-c55deff4d075",
            "name": "Lucas Oliveira",
            "avatar": "233152d4186e37f06af9-at 11.02.33.jpeg"
        },
        "start_at": "2024-07-24T22:00:00.000Z",
        "end_at": "2024-07-25T02:59:00.000Z",
        "type": 0
    },
    {
        "id": "8769c402-abcc-4900-8085-988851b2317f",
        "provider": {
            "id": "92a4bc7e-4778-427d-842a-c55deff4d075",
            "name": "Lucas Oliveira",
            "avatar": "233152d4186e37f06af9-at 11.02.33.jpeg"
        },
        "start_at": "2024-07-12T15:00:00.000Z",
        "end_at": "2024-07-16T02:59:00.000Z",
        "type": 0
    },
    {
        "id": "a2b86eda-d066-41d9-bdf7-a733e43c5eeb",
        "provider": {
            "id": "92a4bc7e-4778-427d-842a-c55deff4d075",
            "name": "Lucas Oliveira",
            "avatar": "233152d4186e37f06af9-at 11.02.33.jpeg"
        },
        "start_at": "2024-07-02T17:00:00.000Z",
        "end_at": "2024-07-02T18:00:00.000Z",
        "type": 0
    },
    {
        "id": "25d54546-8c46-4f6d-a0b8-f6877424534d",
        "provider": {
            "id": "92a4bc7e-4778-427d-842a-c55deff4d075",
            "name": "Lucas Oliveira",
            "avatar": "233152d4186e37f06af9-at 11.02.33.jpeg"
        },
        "start_at": "2024-06-24T03:00:00.000Z",
        "end_at": "2024-06-24T16:30:00.000Z",
        "type": 0
    },
    {
        "id": "728c8a33-38ec-41e9-b02f-9b2c0e81c1b0",
        "provider": {
            "id": "92a4bc7e-4778-427d-842a-c55deff4d075",
            "name": "Lucas Oliveira",
            "avatar": "233152d4186e37f06af9-at 11.02.33.jpeg"
        },
        "start_at": "2024-04-18T21:30:00.000Z",
        "end_at": "2024-04-18T22:00:00.000Z",
        "type": 0
    },
    {
        "id": "9343c665-ac4d-412d-85cc-12e9ac8981be",
        "provider": {
            "id": "92a4bc7e-4778-427d-842a-c55deff4d075",
            "name": "Lucas Oliveira",
            "avatar": "233152d4186e37f06af9-at 11.02.33.jpeg"
        },
        "start_at": "2024-04-06T00:00:00.000Z",
        "end_at": "2024-04-09T16:30:00.000Z",
        "type": 0
    },
    {
        "id": "02c6db6f-4925-478b-a845-41fe5cafdfe1",
        "provider": {
            "id": "92a4bc7e-4778-427d-842a-c55deff4d075",
            "name": "Lucas Oliveira",
            "avatar": "233152d4186e37f06af9-at 11.02.33.jpeg"
        },
        "start_at": "2024-02-10T21:20:00.000Z",
        "end_at": "2024-02-14T02:59:00.000Z",
        "type": 0
    },
    {
        "id": "43a3a915-de9c-4455-bb2e-96083861efc2",
        "provider": {
            "id": "92a4bc7e-4778-427d-842a-c55deff4d075",
            "name": "Lucas Oliveira",
            "avatar": "233152d4186e37f06af9-at 11.02.33.jpeg"
        },
        "start_at": "2024-02-03T10:00:00.000Z",
        "end_at": "2024-02-03T11:00:00.000Z",
        "type": 0
    },
    {
        "id": "a9184e28-d3e9-41c4-a6f4-ab68f6a0933e",
        "provider": {
            "id": "92a4bc7e-4778-427d-842a-c55deff4d075",
            "name": "Lucas Oliveira",
            "avatar": "233152d4186e37f06af9-at 11.02.33.jpeg"
        },
        "start_at": "2024-01-01T03:00:00.000Z",
        "end_at": "2024-01-05T02:59:00.000Z",
        "type": 0
    },
    {
        "id": "88dee7f6-c5f8-46ff-ba60-f77c0b33db9b",
        "provider": {
            "id": "92a4bc7e-4778-427d-842a-c55deff4d075",
            "name": "Lucas Oliveira",
            "avatar": "233152d4186e37f06af9-at 11.02.33.jpeg"
        },
        "start_at": "2023-12-25T11:00:00.000Z",
        "end_at": "2023-12-26T11:00:00.000Z",
        "type": 0
    },
    {
        "id": "21d320bd-683e-4737-b378-9c66a8adaa42",
        "provider": {
            "id": "92a4bc7e-4778-427d-842a-c55deff4d075",
            "name": "Lucas Oliveira",
            "avatar": "233152d4186e37f06af9-at 11.02.33.jpeg"
        },
        "start_at": "2023-11-03T21:30:00.000Z",
        "end_at": "2023-11-06T10:00:00.000Z",
        "type": 0
    },
    {
        "id": "9382f288-e45a-4aa0-8105-a39e7e9b4d68",
        "provider": {
            "id": "92a4bc7e-4778-427d-842a-c55deff4d075",
            "name": "Lucas Oliveira",
            "avatar": "233152d4186e37f06af9-at 11.02.33.jpeg"
        },
        "start_at": "2023-10-14T21:30:00.000Z",
        "end_at": "2023-10-14T22:00:00.000Z",
        "type": 0
    },
    {
        "id": "783a860f-25c7-49ec-ba02-25dde71ed477",
        "provider": {
            "id": "92a4bc7e-4778-427d-842a-c55deff4d075",
            "name": "Lucas Oliveira",
            "avatar": "233152d4186e37f06af9-at 11.02.33.jpeg"
        },
        "start_at": "2023-09-04T03:00:00.000Z",
        "end_at": "2023-09-05T02:59:00.000Z",
        "type": 0
    },
    {
        "id": "2378a84d-0514-480b-be09-478000aa7c5e",
        "provider": {
            "id": "92a4bc7e-4778-427d-842a-c55deff4d075",
            "name": "Lucas Oliveira",
            "avatar": "233152d4186e37f06af9-at 11.02.33.jpeg"
        },
        "start_at": "2023-08-08T10:00:00.000Z",
        "end_at": "2023-08-08T16:00:00.000Z",
        "type": 0
    },
    {
        "id": "34927389-a5dc-41d5-8140-0b56d9b8776d",
        "provider": {
            "id": "92a4bc7e-4778-427d-842a-c55deff4d075",
            "name": "Lucas Oliveira",
            "avatar": "233152d4186e37f06af9-at 11.02.33.jpeg"
        },
        "start_at": "2023-08-07T17:00:00.000Z",
        "end_at": "2023-08-07T19:00:00.000Z",
        "type": 0
    },
    {
        "id": "6200b96e-8fd2-4537-832f-c27e92a48e0e",
        "provider": {
            "id": "92a4bc7e-4778-427d-842a-c55deff4d075",
            "name": "Lucas Oliveira",
            "avatar": "233152d4186e37f06af9-at 11.02.33.jpeg"
        },
        "start_at": "2023-08-07T13:35:00.000Z",
        "end_at": "2023-08-07T17:00:00.000Z",
        "type": 0
    }
]


const appointments = [
    {
        "id": "3cd47a2e-00f3-4b4e-82e8-d4bb7a84edc1",
        "date": "2025-03-15T14:00:00.000Z",
        "provider": {
            "id": "92a4bc7e-4778-427d-842a-c55deff4d075",
            "company_id": "7d6aa33f-59da-47ad-9efa-08ea0353cbff",
            "name": "Lucas Oliveira",
            "description": null,
            "email": "lucassooliveiraa881@gmail.com",
            "phone": "(88) 9 9339-6738",
            "type": 0,
            "hasCustomDaysOfService": false,
            "data": {
                "commission_percent": "100.0"
            },
            "created_at": "2024-07-08T04:05:20.925Z",
            "updated_at": "2024-07-08T04:05:20.925Z",
            "avatar_url": "https://agendei-bucket.s3.amazonaws.com/233152d4186e37f06af9-at 11.02.33.jpeg"
        },
        "company": {
            "id": "7d6aa33f-59da-47ad-9efa-08ea0353cbff",
            "config": {
                "provider_type": 0,
                "timezone": "America/Sao_Paulo"
            },
            "name": "Barber Shop Lucas Oliveira",
            "avatar_url": "https://agendei-bucket.s3.amazonaws.com/050bd380fd6fe65213fb-thumbnail.png"
        },
        "service": {
            "id": "f7f65595-8035-47a4-ba27-fbd4fe66d073",
            "company_id": "7d6aa33f-59da-47ad-9efa-08ea0353cbff",
            "name": "Corte degradê",
            "description": "Corte degradê",
            "duration": 40,
            "service_time_type": 0,
            "value": "23.00",
            "min_units": null,
            "variable_value": false,
            "status": 1,
            "created_at": "2023-06-17T00:05:53.988Z",
            "updated_at": "2024-08-01T02:49:10.068Z"
        },
        "customer": {
            "id": "bfd308b9-a2be-402a-bdec-da6fed63d335",
            "name": "Gustavo Teixeira ",
            "email": null,
            "phone": "88996148018",
            "canceled_appointments": 0,
            "total_appointments": 2,
            "missed_appointments": 0,
            "avatar_url": null
        },
        "coupon": null,
        "recurrence_id": null,
        "next_appointment_id": null,
        "payment_methods": [],
        "canceled_at": null,
        "rejected_at": null,
        "status": 1,
        "duration": 40,
        "reminder_sent": false,
        "is_fitting": false,
        "totalValue": "23.00",
        "canceled_by": null,
        "cancel_reason": null,
        "customer_name": null,
        "manual": false,
        "created_at": "2025-03-13T01:16:42.187Z"
    },
    {
        "id": "4bd30e1e-7f93-405c-86ed-7825a22e13b5",
        "date": "2025-03-13T17:00:00.000Z",
        "provider": {
            "id": "92a4bc7e-4778-427d-842a-c55deff4d075",
            "company_id": "7d6aa33f-59da-47ad-9efa-08ea0353cbff",
            "name": "Lucas Oliveira",
            "description": null,
            "email": "lucassooliveiraa881@gmail.com",
            "phone": "(88) 9 9339-6738",
            "type": 0,
            "hasCustomDaysOfService": false,
            "data": {
                "commission_percent": "100.0"
            },
            "created_at": "2024-07-08T04:05:20.925Z",
            "updated_at": "2024-07-08T04:05:20.925Z",
            "avatar_url": "https://agendei-bucket.s3.amazonaws.com/233152d4186e37f06af9-at 11.02.33.jpeg"
        },
        "company": {
            "id": "7d6aa33f-59da-47ad-9efa-08ea0353cbff",
            "config": {
                "provider_type": 0,
                "timezone": "America/Sao_Paulo"
            },
            "name": "Barber Shop Lucas Oliveira",
            "avatar_url": "https://agendei-bucket.s3.amazonaws.com/050bd380fd6fe65213fb-thumbnail.png"
        },
        "service": {
            "id": "f7f65595-8035-47a4-ba27-fbd4fe66d073",
            "company_id": "7d6aa33f-59da-47ad-9efa-08ea0353cbff",
            "name": "Corte degradê",
            "description": "Corte degradê",
            "duration": 40,
            "service_time_type": 0,
            "value": "23.00",
            "min_units": null,
            "variable_value": false,
            "status": 1,
            "created_at": "2023-06-17T00:05:53.988Z",
            "updated_at": "2024-08-01T02:49:10.068Z"
        },
        "customer": {
            "id": "3da6e4a4-89a5-4ea2-b69b-e9db8caf8c95",
            "name": "Jefferson Araujo Oliveira ",
            "email": "jefinhoaraujo500@gmail.com",
            "phone": "88992041309",
            "canceled_appointments": 0,
            "total_appointments": 40,
            "missed_appointments": 0,
            "avatar_url": null
        },
        "coupon": null,
        "recurrence_id": null,
        "next_appointment_id": null,
        "payment_methods": [],
        "canceled_at": null,
        "rejected_at": null,
        "status": 1,
        "duration": 40,
        "reminder_sent": false,
        "is_fitting": false,
        "totalValue": "23.00",
        "canceled_by": null,
        "cancel_reason": null,
        "customer_name": null,
        "manual": false,
        "created_at": "2025-03-12T21:10:14.683Z"
    },
    {
        "id": "3805be47-3b9b-4466-9d6d-4fec7a069ecb",
        "date": "2025-03-13T17:40:00.000Z",
        "provider": {
            "id": "92a4bc7e-4778-427d-842a-c55deff4d075",
            "company_id": "7d6aa33f-59da-47ad-9efa-08ea0353cbff",
            "name": "Lucas Oliveira",
            "description": null,
            "email": "lucassooliveiraa881@gmail.com",
            "phone": "(88) 9 9339-6738",
            "type": 0,
            "hasCustomDaysOfService": false,
            "data": {
                "commission_percent": "100.0"
            },
            "created_at": "2024-07-08T04:05:20.925Z",
            "updated_at": "2024-07-08T04:05:20.925Z",
            "avatar_url": "https://agendei-bucket.s3.amazonaws.com/233152d4186e37f06af9-at 11.02.33.jpeg"
        },
        "company": {
            "id": "7d6aa33f-59da-47ad-9efa-08ea0353cbff",
            "config": {
                "provider_type": 0,
                "timezone": "America/Sao_Paulo"
            },
            "name": "Barber Shop Lucas Oliveira",
            "avatar_url": "https://agendei-bucket.s3.amazonaws.com/050bd380fd6fe65213fb-thumbnail.png"
        },
        "service": {
            "id": "34b0b418-87e2-4a4c-8f24-ef4c3c7caca3",
            "company_id": "7d6aa33f-59da-47ad-9efa-08ea0353cbff",
            "name": "Combo: Degradê + Sobrancelha ",
            "description": "Combo: Degradê + Sobrancelha ",
            "duration": 45,
            "service_time_type": 0,
            "value": "28.00",
            "min_units": null,
            "variable_value": false,
            "status": 1,
            "created_at": "2023-06-17T00:15:46.392Z",
            "updated_at": "2024-08-01T02:44:27.628Z"
        },
        "customer": {
            "id": "6e325804-8b8b-48f7-9e33-96fbe276c8ee",
            "name": "BRUNO DE PAIVA SILVA ",
            "email": "bruninhopaiva01@gmail.com",
            "phone": "88994446720",
            "canceled_appointments": 0,
            "total_appointments": 5,
            "missed_appointments": 0,
            "avatar_url": "https://agendei-bucket.s3.amazonaws.com/4b42513298de6f8bd4bc-360524904283.jpg"
        },
        "coupon": null,
        "recurrence_id": null,
        "next_appointment_id": null,
        "payment_methods": [],
        "canceled_at": null,
        "rejected_at": null,
        "status": 1,
        "duration": 45,
        "reminder_sent": false,
        "is_fitting": false,
        "totalValue": "28.00",
        "canceled_by": null,
        "cancel_reason": null,
        "customer_name": null,
        "manual": false,
        "created_at": "2025-03-13T00:24:01.691Z"
    },
    {
        "id": "850a0507-d04e-4f28-97b0-edd930091da7",
        "date": "2025-03-13T18:30:00.000Z",
        "provider": {
            "id": "92a4bc7e-4778-427d-842a-c55deff4d075",
            "company_id": "7d6aa33f-59da-47ad-9efa-08ea0353cbff",
            "name": "Lucas Oliveira",
            "description": null,
            "email": "lucassooliveiraa881@gmail.com",
            "phone": "(88) 9 9339-6738",
            "type": 0,
            "hasCustomDaysOfService": false,
            "data": {
                "commission_percent": "100.0"
            },
            "created_at": "2024-07-08T04:05:20.925Z",
            "updated_at": "2024-07-08T04:05:20.925Z",
            "avatar_url": "https://agendei-bucket.s3.amazonaws.com/233152d4186e37f06af9-at 11.02.33.jpeg"
        },
        "company": {
            "id": "7d6aa33f-59da-47ad-9efa-08ea0353cbff",
            "config": {
                "provider_type": 0,
                "timezone": "America/Sao_Paulo"
            },
            "name": "Barber Shop Lucas Oliveira",
            "avatar_url": "https://agendei-bucket.s3.amazonaws.com/050bd380fd6fe65213fb-thumbnail.png"
        },
        "service": {
            "id": "f7f65595-8035-47a4-ba27-fbd4fe66d073",
            "company_id": "7d6aa33f-59da-47ad-9efa-08ea0353cbff",
            "name": "Corte degradê",
            "description": "Corte degradê",
            "duration": 40,
            "service_time_type": 0,
            "value": "23.00",
            "min_units": null,
            "variable_value": false,
            "status": 1,
            "created_at": "2023-06-17T00:05:53.988Z",
            "updated_at": "2024-08-01T02:49:10.068Z"
        },
        "customer": {
            "id": "fbf23b81-aaeb-40e3-80e7-a46eba2c5b90",
            "name": "Caio Raphael Ripardo Gomes",
            "email": "caiorafaelripardo123@gmail.com",
            "phone": "88996266842",
            "canceled_appointments": 2,
            "total_appointments": 54,
            "missed_appointments": 0,
            "avatar_url": null
        },
        "coupon": null,
        "recurrence_id": null,
        "next_appointment_id": null,
        "payment_methods": [],
        "canceled_at": null,
        "rejected_at": null,
        "status": 1,
        "duration": 40,
        "reminder_sent": false,
        "is_fitting": false,
        "totalValue": "23.00",
        "canceled_by": null,
        "cancel_reason": null,
        "customer_name": null,
        "manual": false,
        "created_at": "2025-03-11T10:09:37.090Z"
    },
    {
        "id": "dfe1dbe8-b4ca-402e-86aa-378c7822b14f",
        "date": "2025-03-13T19:10:00.000Z",
        "provider": {
            "id": "92a4bc7e-4778-427d-842a-c55deff4d075",
            "company_id": "7d6aa33f-59da-47ad-9efa-08ea0353cbff",
            "name": "Lucas Oliveira",
            "description": null,
            "email": "lucassooliveiraa881@gmail.com",
            "phone": "(88) 9 9339-6738",
            "type": 0,
            "hasCustomDaysOfService": false,
            "data": {
                "commission_percent": "100.0"
            },
            "created_at": "2024-07-08T04:05:20.925Z",
            "updated_at": "2024-07-08T04:05:20.925Z",
            "avatar_url": "https://agendei-bucket.s3.amazonaws.com/233152d4186e37f06af9-at 11.02.33.jpeg"
        },
        "company": {
            "id": "7d6aa33f-59da-47ad-9efa-08ea0353cbff",
            "config": {
                "provider_type": 0,
                "timezone": "America/Sao_Paulo"
            },
            "name": "Barber Shop Lucas Oliveira",
            "avatar_url": "https://agendei-bucket.s3.amazonaws.com/050bd380fd6fe65213fb-thumbnail.png"
        },
        "service": {
            "id": "f7f65595-8035-47a4-ba27-fbd4fe66d073",
            "company_id": "7d6aa33f-59da-47ad-9efa-08ea0353cbff",
            "name": "Corte degradê",
            "description": "Corte degradê",
            "duration": 40,
            "service_time_type": 0,
            "value": "23.00",
            "min_units": null,
            "variable_value": false,
            "status": 1,
            "created_at": "2023-06-17T00:05:53.988Z",
            "updated_at": "2024-08-01T02:49:10.068Z"
        },
        "customer": {
            "id": "b2169fc0-34ba-44b3-823f-45f75dc72958",
            "name": "Ravi Henrique",
            "email": "ravihenrique752@gmail.com",
            "phone": "88997285279",
            "canceled_appointments": 2,
            "total_appointments": 63,
            "missed_appointments": 0,
            "avatar_url": "https://agendei-bucket.s3.amazonaws.com/63e6b9062a833bdbbba5-1000085980.jpg"
        },
        "coupon": null,
        "recurrence_id": null,
        "next_appointment_id": null,
        "payment_methods": [],
        "canceled_at": null,
        "rejected_at": null,
        "status": 1,
        "duration": 40,
        "reminder_sent": false,
        "is_fitting": false,
        "totalValue": "23.00",
        "canceled_by": null,
        "cancel_reason": null,
        "customer_name": null,
        "manual": false,
        "created_at": "2025-03-06T02:08:58.302Z"
    },
    {
        "id": "fef53649-2cd1-4616-a6ec-82ff97817b16",
        "date": "2025-03-13T20:20:00.000Z",
        "provider": {
            "id": "92a4bc7e-4778-427d-842a-c55deff4d075",
            "company_id": "7d6aa33f-59da-47ad-9efa-08ea0353cbff",
            "name": "Lucas Oliveira",
            "description": null,
            "email": "lucassooliveiraa881@gmail.com",
            "phone": "(88) 9 9339-6738",
            "type": 0,
            "hasCustomDaysOfService": false,
            "data": {
                "commission_percent": "100.0"
            },
            "created_at": "2024-07-08T04:05:20.925Z",
            "updated_at": "2024-07-08T04:05:20.925Z",
            "avatar_url": "https://agendei-bucket.s3.amazonaws.com/233152d4186e37f06af9-at 11.02.33.jpeg"
        },
        "company": {
            "id": "7d6aa33f-59da-47ad-9efa-08ea0353cbff",
            "config": {
                "provider_type": 0,
                "timezone": "America/Sao_Paulo"
            },
            "name": "Barber Shop Lucas Oliveira",
            "avatar_url": "https://agendei-bucket.s3.amazonaws.com/050bd380fd6fe65213fb-thumbnail.png"
        },
        "service": {
            "id": "f7f65595-8035-47a4-ba27-fbd4fe66d073",
            "company_id": "7d6aa33f-59da-47ad-9efa-08ea0353cbff",
            "name": "Corte degradê",
            "description": "Corte degradê",
            "duration": 40,
            "service_time_type": 0,
            "value": "23.00",
            "min_units": null,
            "variable_value": false,
            "status": 1,
            "created_at": "2023-06-17T00:05:53.988Z",
            "updated_at": "2024-08-01T02:49:10.068Z"
        },
        "customer": null,
        "coupon": null,
        "recurrence_id": null,
        "next_appointment_id": null,
        "payment_methods": [],
        "canceled_at": null,
        "rejected_at": null,
        "status": 1,
        "duration": 40,
        "reminder_sent": false,
        "is_fitting": false,
        "totalValue": "23.00",
        "canceled_by": null,
        "cancel_reason": null,
        "customer_name": "Deivin ",
        "manual": true,
        "created_at": "2025-03-10T20:22:19.299Z"
    },
    {
        "id": "0b9b610c-5743-44f5-a49f-f51c14d34795",
        "date": "2025-03-13T21:20:00.000Z",
        "provider": {
            "id": "92a4bc7e-4778-427d-842a-c55deff4d075",
            "company_id": "7d6aa33f-59da-47ad-9efa-08ea0353cbff",
            "name": "Lucas Oliveira",
            "description": null,
            "email": "lucassooliveiraa881@gmail.com",
            "phone": "(88) 9 9339-6738",
            "type": 0,
            "hasCustomDaysOfService": false,
            "data": {
                "commission_percent": "100.0"
            },
            "created_at": "2024-07-08T04:05:20.925Z",
            "updated_at": "2024-07-08T04:05:20.925Z",
            "avatar_url": "https://agendei-bucket.s3.amazonaws.com/233152d4186e37f06af9-at 11.02.33.jpeg"
        },
        "company": {
            "id": "7d6aa33f-59da-47ad-9efa-08ea0353cbff",
            "config": {
                "provider_type": 0,
                "timezone": "America/Sao_Paulo"
            },
            "name": "Barber Shop Lucas Oliveira",
            "avatar_url": "https://agendei-bucket.s3.amazonaws.com/050bd380fd6fe65213fb-thumbnail.png"
        },
        "service": {
            "id": "7f118fe1-fac0-4a35-8979-4d302eefa4f1",
            "company_id": "7d6aa33f-59da-47ad-9efa-08ea0353cbff",
            "name": "Corte social",
            "description": "Corte social simples",
            "duration": 30,
            "service_time_type": 0,
            "value": "20.00",
            "min_units": null,
            "variable_value": false,
            "status": 1,
            "created_at": "2023-06-16T20:12:50.527Z",
            "updated_at": "2024-08-01T02:48:57.380Z"
        },
        "customer": null,
        "coupon": null,
        "recurrence_id": null,
        "next_appointment_id": null,
        "payment_methods": [],
        "canceled_at": null,
        "rejected_at": null,
        "status": 1,
        "duration": 30,
        "reminder_sent": false,
        "is_fitting": false,
        "totalValue": "20.00",
        "canceled_by": null,
        "cancel_reason": null,
        "customer_name": "Ninguém ",
        "manual": true,
        "created_at": "2025-03-09T22:17:06.886Z"
    }
]





function getDayAvailability() {
    const currentDate = new Date();
    const currentDay = currentDate.getDay();
    const todaySchedule = daysOfService.find(schedule => schedule.day === currentDay);

    if (!todaySchedule || !todaySchedule.hour_open || !todaySchedule.hour_close) {
        return 0;
    }

    const [openHour, openMinute] = todaySchedule.hour_open.split(":").map(Number);
    const [closeHour, closeMinute] = todaySchedule.hour_close.split(":").map(Number);

    const start = new Date(currentDate);
    start.setHours(openHour, openMinute);

    const end = new Date(currentDate);
    end.setHours(closeHour, closeMinute);

    let finalTime = (end - start) / (1000 * 60);

    if (todaySchedule.time_off_windows && todaySchedule.time_off_windows.length > 0) {
        todaySchedule.time_off_windows.forEach(interval => {
            const [startHour, startMinute] = interval.start.split(":").map(Number);
            const [endHour, endMinute] = interval.end.split(":").map(Number);

            const timeOffStart = new Date(currentDate);
            timeOffStart.setHours(startHour, startMinute);

            const timeOffEnd = new Date(currentDate);
            timeOffEnd.setHours(endHour, endMinute);

            finalTime -= (timeOffEnd - timeOffStart) / (1000 * 60);
        });
    }

    return finalTime;
}

console.log(getDayAvailability());

function getDaysOff() {
    const now = new Date();
    const diaAtual = now.getDay();
    const todaySchedule = daysOfService.find(schedule => schedule.day === diaAtual);

    const [openHour, openMinute] = todaySchedule.hour_open.split(":").map(Number);
    const [closeHour, closeMinute] = todaySchedule.hour_close.split(":").map(Number);


    const start = new Date(now);
    start.setHours(openHour, openMinute, 0, 0);

    const end = new Date(now);
    end.setHours(closeHour, closeMinute, 0, 0);

    let totalDaysOff = 0;

    providersDaysOff.forEach(dayOff => {
        const startDate = new Date(dayOff.start_at);
        const endDate = new Date(dayOff.end_at);

        if (
            startDate.toDateString() === now.toDateString() ||
            endDate.toDateString() === now.toDateString()
        ) {

            if (startDate >= start && endDate <= end) {
                totalDaysOff += (endDate - startDate) / (1000 * 60);
            }

            if (startDate < start && endDate > start && endDate <= end) {
                totalDaysOff += (endDate - start) / (1000 * 60);
            }
            if (startDate >= start && startDate < end && endDate > end) {
                totalDaysOff += (end - startDate) / (1000 * 60);
            }
        }
    });

    return totalDaysOff;
}


console.log(getDaysOff());

function getAppointments() {
    const now = new Date();
    let blockedTime = 0;

    appointments.forEach((appointment) => {
        const appointmentDate = new Date(appointment.date);

        if (appointmentDate.toDateString() === now.toDateString()) {
            blockedTime += appointment.duration;
        }
    });

    return blockedTime;
}

console.log(getAppointments());

function calculateAvailability() {
    const totalAvailableTime = getDayAvailability();
    const totalDaysOff = getDaysOff();
    const totalBlockedTime = getAppointments();

    const AVAILABLE_TIME = totalAvailableTime - totalDaysOff;
    let TOTAL_BOOKED_TIME;

    if (AVAILABLE_TIME === 0) {
        TOTAL_BOOKED_TIME = 0;
    } else {
        TOTAL_BOOKED_TIME = Number(((totalBlockedTime / AVAILABLE_TIME) * 100).toFixed(2));
    }

    return { AVAILABLE_TIME, TOTAL_BOOKED_TIME };
}

console.log(calculateAvailability());
