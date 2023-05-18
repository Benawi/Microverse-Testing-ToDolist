import TaskList from '../modules/Taskslist.js';

describe('TaskList Functions', () => {
  let tasklist;
  const MockStorage = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    clear: jest.fn(),
  };
  global.localStorage = MockStorage;

  beforeEach(() => {
    tasklist = new TaskList();
  });

});