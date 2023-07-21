
    let form = document.querySelector('#form');
    let input = document.querySelector('#inp');
    let button = document.querySelector('#btn');
    let ul = document.querySelector('#ul');

    function deleteTask(event) {
      let Li_Itself = event.target.closest('li');
      if (Li_Itself) {
        ul.removeChild(Li_Itself);
      }
    }

    function editTask(event) {
      let Li_Itself = event.target.closest('li');
      if (Li_Itself) {
        let span_text = Li_Itself.querySelector('span');
        let New_Input = document.createElement('input');
        New_Input.type = 'text';
        New_Input.value = span_text.textContent;

        let saveBtn = document.createElement('button');
        saveBtn.className = 'save';
        saveBtn.textContent = 'Save';

        let cancelBtn = document.createElement('button');
        cancelBtn.className = 'cancel';
        cancelBtn.textContent = 'Cancel';

        saveBtn.addEventListener('click', () => {
          span_text.textContent = New_Input.value;
          Li_Itself.removeChild(New_Input);
          Li_Itself.removeChild(saveBtn);
          Li_Itself.removeChild(cancelBtn);
          span_text.style.display = 'inline';
          Li_Itself.querySelector('.edit').style.display = 'inline';
        });

        cancelBtn.addEventListener('click', () => {
          Li_Itself.removeChild(New_Input);
          Li_Itself.removeChild(saveBtn);
          Li_Itself.removeChild(cancelBtn);
          span_text.style.display = 'inline'; // Show the <span> element again
          Li_Itself.querySelector('.edit').style.display = 'inline';
        });

        Li_Itself.appendChild(New_Input);
        Li_Itself.appendChild(saveBtn);
        Li_Itself.appendChild(cancelBtn);
        span_text.style.display = 'none';
        Li_Itself.querySelector('.edit').style.display = 'none';
      }
    }

    function addTask() {
      let span_text = input.value.trim();
      if (span_text !== '') {
        let li = document.createElement('li');
        let span = document.createElement('span');
        span.textContent = span_text;

        let delBtn = document.createElement('button');
        delBtn.className = 'delete';
        delBtn.textContent = 'Delete';
        delBtn.addEventListener('click', deleteTask);

        let editBtn = document.createElement('button');
        editBtn.className = 'edit';
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click', editTask);

        li.appendChild(span);
        li.appendChild(delBtn);
        li.appendChild(editBtn);
        ul.appendChild(li);
        input.value = '';
      }
    }

    form.addEventListener('submit', (eve) => {
      eve.preventDefault();
      addTask();
    });

    button.addEventListener('click', addTask);
