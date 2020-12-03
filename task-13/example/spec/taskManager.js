describe('TaskManager', () => {
  describe('#constructor', () => {
    describe('when initializing a new TaskManager', () => {
      it('should create an empty tasks array', () => {
        const taskManager = new TaskManager(1);

        expect(taskManager.tasks).toEqual([]);
      });

      it('should set the currentId to the passed in number', () => {
        const taskManager = new TaskManager(1);

        expect(taskManager.currentId).toBe(1);
      });
    });
  });

  describe('#addTask', () => {
    describe('passing new task data as parameters', () => {
      it('should add the task to the tasks array', () => {
        const taskManager = new TaskManager(10);

        const task = {
          id: taskManager.currentId,
          name: 'test',
          description: 'test',
          assignedTo: 'test',
          dueDate: Date.now(),
          status: 'TODO'
        };

        taskManager.addTask(task.name, task.description, task.assignedTo, task.dueDate);

        expect(taskManager.tasks[0]).toEqual(task);
      });

      it('should increment the currentId property', () => {
        const taskManager = new TaskManager(10);

        const task = {
          id: taskManager.currentId,
          name: 'test',
          description: 'test',
          assignedTo: 'test',
          dueDate: Date.now(),
          status: 'TODO'
        };

        taskManager.addTask(task.name, task.description, task.assignedTo, task.dueDate);

        expect(taskManager.currentId).toBe(11);
      });
    });
  });

  describe('#deleteTask', () => {
    describe('when passed an existing taskId', () => {
      it('should remove the task from the tasks array', () => {
        const taskManager = new TaskManager();

        const taskToDelete = {
          id: taskManager.currentId,
          name: 'test',
          description: 'test',
          assignedTo: 'test',
          dueDate: Date.now(),
          status: 'TODO'
        };

        taskManager.addTask(taskToDelete.name, taskToDelete.description, taskToDelete.assignedTom, taskToDelete.dueDate);
        taskManager.addTask('feed puppy', 'feed the puppy a heathy meal', 'nick', Date.now());

        taskManager.deleteTask(taskToDelete.id);

        expect(taskManager.tasks).not.toContain(taskToDelete);
      });
    });
  });

  describe('#getTaskById', () => {
    describe('when passed an existing taskId', () => {
      it('should return the task', () => {
        const taskManager = new TaskManager();

        const task = {
          id: taskManager.currentId,
          name: 'test',
          description: 'test',
          assignedTo: 'test',
          dueDate: Date.now(),
          status: 'TODO'
        };

        taskManager.addTask(task.name, task.description, task.assignedTo, task.dueDate);

        const result = taskManager.getTaskById(task.id);

        expect(result).toEqual(task);
      });
    });
  });

  describe('#render', () => {
    describe('when tasks exist in the task manager', () => {
      it('should render the test in the innerHTML of the tasksList', () => {
        const taskManager = new TaskManager();

        const task = {
          id: taskManager.currentId,
          name: 'test',
          description: 'test',
          assignedTo: 'test',
          // use a specific date to make it easier to check html
          dueDate: 1601451685812,
          status: 'TODO'
        };

        taskManager.addTask(task.name, task.description, task.assignedTo, task.dueDate);

        const tasksList = { innerHTML: '' };

        // spy on querySelector so we can check the taskList innerHTML later
        spyOn(document, 'querySelector').and.returnValue(tasksList);

        taskManager.render();

        // test taskList html has rendered correctly
        expect(tasksList.innerHTML).toContain('<li class="list-group-item" data-task-id=0>');
        expect(tasksList.innerHTML).toContain('<h5>test</h5>');
        expect(tasksList.innerHTML).toContain('<span class="badge badge-danger">TODO</span>');
        expect(tasksList.innerHTML).toContain('<small>Assigned To: test</small>');
        expect(tasksList.innerHTML).toContain('<small>Due: 30/9/2020</small>');
        expect(tasksList.innerHTML).toContain('<p>test</p>');
        expect(tasksList.innerHTML).toContain('<button class="btn btn-outline-success done-button mr-1 visible">Mark As Done</button>');
        expect(tasksList.innerHTML).toContain('<button class="btn btn-outline-danger delete-button">Delete</button>');
      });
    });
  });

  describe('#save', () => {
    describe('when tasks exist in the task manager', () => {
      it('should store the tasks in local storage', () => {
        const taskManager = new TaskManager();

        const task = {
          id: taskManager.currentId,
          name: 'test',
          description: 'test',
          assignedTo: 'test',
          dueDate: Date.now(),
          status: 'TODO'
        };

        taskManager.addTask(task.name, task.description, task.assignedTo, task.dueDate);

        // create JSON of the task in an array
        const tasksJson = JSON.stringify([task]);

        // spy on the localStorage
        const localStorageSpy = spyOn(localStorage, 'setItem');

        // call save
        taskManager.save();

        // check if localStorage was called first with the tasks key and the json
        expect(localStorageSpy.calls.first().args).toEqual(['tasks', tasksJson]);
      });

      it('should store the currentId in local storage', () => {
        const taskManager = new TaskManager();

        taskManager.addTask('test', 'test', 'test', Date.now());

        // spy on the localStorage
        const localStorageSpy = spyOn(localStorage, 'setItem');

        // call save
        taskManager.save();

        // create string of the currentId
        const currentId = String(taskManager.currentId);

        // check if localStorage was called last with the currentId key and the currentId
        expect(localStorageSpy.calls.mostRecent().args).toEqual(['currentId', currentId]);
      });
    });
  });

  describe('#load', () => {
    describe('when tasks are saved in localStorage', () => {
      it('should set the tasks array to the saved tasks', () => {
        const taskManager = new TaskManager();

        const task = {
          id: taskManager.currentId,
          name: 'test',
          description: 'test',
          assignedTo: 'test',
          dueDate: Date.now(),
          status: 'TODO'
        };

        // create a tasks array
        const tasks = [task];

        // create JSON of the tasks array
        const tasksJson = JSON.stringify(tasks);

        // spy on localStorage.getItem() and return the tasksJson.
        spyOn(localStorage, 'getItem').and.returnValue(tasksJson);

        // call load
        taskManager.load();

        expect(taskManager.tasks).toEqual(tasks);
      });
    });

    describe('when the currentId is saved in localStorage', () => {
      it('should set the currentId to the saved currentId', () => {
        const taskManager = new TaskManager();

        // spy on localStorage.getItem() and return a currentId as a string.
        spyOn(localStorage, 'getItem').and.returnValue('1');

        // call load
        taskManager.load();

        expect(taskManager.currentId).toBe(1);
      });
    });
  });

})