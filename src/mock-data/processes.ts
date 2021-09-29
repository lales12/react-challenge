
type ProcessMetadata = {
  description: string;
  title: string;
  bannerUrl: string;
}

type ProcessQuestionsChoices = {
  title: string;
  value: number;
}

type ProcessQuestions = {
  description: string;
  title: string;
  choices: ProcessQuestionsChoices[];
}

type Process = {
  id: string;
  address: string;
  accountId: string;
  startBlock: number;
  endBlock: number;
  meta: ProcessMetadata,
  questions: ProcessQuestions[],
}

export const Processes: Process[] = [
  {
    id: 'process-1',
    address: '0x0000000000000000000000000000000000000001',
    accountId: 'account-1',
    startBlock: 1,
    endBlock: 40,
    meta: {
      description: 'This is a process',
      title: 'Process 1',
      bannerUrl: 'https://i.pinimg.com/originals/55/d2/45/55d245356ad79e122e54a254249ff488.jpg'
    },
    questions: [
      {
        description: 'This is a question',
        title: 'Question 1',
        choices: [
          {
            title: 'Choice 1',
            value: 1,
          },
          {
            title: 'Choice 2',
            value: 2,
          },
        ],
      },
      {
        description: 'This is a question',
        title: 'Question 2',
        choices: [
          {
            title: 'Choice 1',
            value: 1,
          },
          {
            title: 'Choice 2',
            value: 2,
          },
        ],
      },
    ],
  },
  {
    id: 'process-2',
    address: '0x0000000000000000000000000000000000000002',
    accountId: 'account-1',
    startBlock: 1,
    endBlock: 9,
    meta: {
      description: 'This is a process',
      title: 'Process 2',
      bannerUrl: 'https://i.pinimg.com/originals/55/d2/45/55d245356ad79e122e54a254249ff488.jpg'
    },
    questions: [
      {
        description: 'This is a question',
        title: 'Question 1',
        choices: [
          {
            title: 'Choice 1',
            value: 1,
          },
          {
            title: 'Choice 2',
            value: 2,
          },
        ],
      },
      {
        description: 'This is a question',
        title: 'Question 2',
        choices: [
          {
            title: 'Choice 1',
            value: 1,
          },
          {
            title: 'Choice 2',
            value: 2,
          },
        ],
      },
    ],
  },
  {
    id: 'process-3',
    address: '0x0000000000000000000000000000000000000003',
    accountId: 'account-2',
    startBlock: 10,
    endBlock: 20,
    meta: {
      description: 'This is a process',
      title: 'Process 3',
      bannerUrl: 'https://i.pinimg.com/originals/55/d2/45/55d245356ad79e122e54a254249ff488.jpg'
    },
    questions: [
      {
        description: 'This is a question',
        title: 'Question 1',
        choices: [
          {
            title: 'Choice 1',
            value: 1,
          },
          {
            title: 'Choice 2',
            value: 2,
          },
        ],
      },
      {
        description: 'This is a question',
        title: 'Question 2',
        choices: [
          {
            title: 'Choice 1',
            value: 1,
          },
          {
            title: 'Choice 2',
            value: 2,
          },
        ],
      },
    ],
  },
  {
    id: 'process-4',
    address: '0x0000000000000000000000000000000000000004',
    accountId: 'account-2',
    startBlock: 1,
    endBlock: 100,
    meta: {
      description: 'This is a process',
      title: 'Process 4',
      bannerUrl: 'https://i.pinimg.com/originals/55/d2/45/55d245356ad79e122e54a254249ff488.jpg'
    },
    questions: [
      {
        description: 'This is a question',
        title: 'Question 1',
        choices: [
          {
            title: 'Choice 1',
            value: 1,
          },
          {
            title: 'Choice 2',
            value: 2,
          },
        ],
      },
      {
        description: 'This is a question',
        title: 'Question 2',
        choices: [
          {
            title: 'Choice 1',
            value: 1,
          },
          {
            title: 'Choice 2',
            value: 2,
          },
        ],
      },
    ],
  },
  {
    id: 'process-5',
    address: '0x0000000000000000000000000000000000000005',
    accountId: 'account-2',
    startBlock: 0,
    endBlock: 2,
    meta: {
      description: 'This is a process',
      title: 'Process 5',
      bannerUrl: 'https://i.pinimg.com/originals/55/d2/45/55d245356ad79e122e54a254249ff488.jpg'
    },
    questions: [
      {
        description: 'This is a question',
        title: 'Question 1',
        choices: [
          {
            title: 'Choice 1',
            value: 1,
          },
          {
            title: 'Choice 2',
            value: 2,
          },
        ],
      },
      {
        description: 'This is a question',
        title: 'Question 2',
        choices: [
          {
            title: 'Choice 1',
            value: 1,
          },
          {
            title: 'Choice 2',
            value: 2,
          },
        ],
      },
    ],
  },
  {
    id: 'process-6',
    address: '0x0000000000000000000000000000000000000006',
    accountId: 'account-3',
    startBlock: 50,
    endBlock: 200,
    meta: {
      description: 'This is a process',
      title: 'Process 6',
      bannerUrl: 'https://i.pinimg.com/originals/55/d2/45/55d245356ad79e122e54a254249ff488.jpg'
    },
    questions: [
      {
        description: 'This is a question',
        title: 'Question 1',
        choices: [
          {
            title: 'Choice 1',
            value: 1,
          },
          {
            title: 'Choice 2',
            value: 2,
          },
        ],
      },
      {
        description: 'This is a question',
        title: 'Question 2',
        choices: [
          {
            title: 'Choice 1',
            value: 1,
          },
          {
            title: 'Choice 2',
            value: 2,
          },
        ],
      },
    ],
  },
];
