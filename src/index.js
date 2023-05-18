import './style.css';
import TaskList from './modules/Taskslist.js';

const tasklist = new TaskList();
function loadTasks() {
  const tasks = document.querySelector('.tasks');
  tasks.innerHTML = '';
  tasklist.tasklist.forEach((task) => {
    const containertask = document.createElement('div');
    const tasklabel = document.createElement('div');
    const taskinput = document.createElement('input');
    const taskdescription = document.createElement('input');
    const trashicon = document.createElement('i');
    containertask.setAttribute('class', 'task-container');
    tasklabel.setAttribute('class', 'currenttask');
    taskinput.setAttribute('type', 'checkbox');
    taskinput.setAttribute('class', 'check-box');
    taskdescription.setAttribute('type', 'input');
    taskdescription.setAttribute('class', 'taskfield');
    trashicon.setAttribute('class', 'fa-solid fa-trash-can delete-icon');
    trashicon.setAttribute('id', `removetask${task.index}`);
    taskdescription.value = task.description;
    taskinput.checked = task.completed;
    tasklabel.appendChild(taskinput);
    tasklabel.appendChild(taskdescription);
    tasklabel.appendChild(trashicon);
    containertask.appendChild(tasklabel);
    tasks.appendChild(containertask);
  });
}

function onPageLoad() {
  if (localStorage) {
    const localStorageItem = localStorage.getItem('tasklists');
    tasklist.readTasks(JSON.parse(localStorageItem));
    loadTasks();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.onload = onPageLoad();

  window.addEventListener('beforeunload', () => {
    localStorage.setItem('tasklists', JSON.stringify(tasklist));
  });

  document.querySelector('#addtask').addEventListener('click', () => {
    if (document.querySelector('#taskdescription').value !== '') {
      const index = tasklist.tasklist.length;
      tasklist.addTask(document.querySelector('#taskdescription').value, false, index);
      document.querySelector('#taskdescription').value = '';
      loadTasks();
    }
  });

  document.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
      if (document.querySelector('#taskdescription').value !== '') {
        const index = tasklist.tasklist.length;
        tasklist.addTask(document.querySelector('#taskdescription').value, false, index);
        document.querySelector('#taskdescription').value = '';
        loadTasks();
      }
    }
  });

  document.addEventListener('click', (event) => {
    const icons = document.querySelectorAll('.delete-icon');
    icons.forEach((button, index) => {
      if (event.target === button) {
        tasklist.removeTask(index);
        loadTasks();
      }
    });
  });

  document.addEventListener('change', (event) => {
    if (event.target.matches('.taskfield')) {
      const alltasks = document.querySelectorAll('.taskfield');
      alltasks.forEach((description, index) => {
        if (event.target === description) {
          tasklist.updateDescription(description, index);
        }
      });
    }

    if (event.target.matches('.check-box')) {
      const allcheckboxes = document.querySelectorAll('.check-box');
      allcheckboxes.forEach((status, index) => {
        if (event.target === status) {
          tasklist.updateStatus(index, status.checked);
        }
      });
    }
  });

  document.querySelector('.clear-button').addEventListener('click', () => {
    for (let i = 0; i < tasklist.tasklist.length; i += 1) {
      if (tasklist.tasklist[i].completed) {
        tasklist.removeTask(i);
        i -= 1;
      }
    }
    loadTasks();
  });
});