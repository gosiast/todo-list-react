## Pair Programming on React To Do List

[Demo App](https://codepen.io/marekdano/pen/bVNYpq) _(Don't bother with the code, reading/using it will just overcomplicate your progress)_

### App Structure

You will have **3 Components:**

#### 1. App.js

Initialize it with the following state:

```
  state = {
    todos: [
      { id: 1, task: 'Walk the dog', done: false },
      { id: 2, task: 'Water the flower', done: true }
    ]
  }
```

#### 2. TodoItem

This is the component for **each todo list item**.

There will be **no state** in this component, so make it a _Stateless Functional Component_.

#### 3. TodoForm

This component will render a form that consist of a _Text Input_ and _Submit Button_.

You will have a state called `text` to store the characters users type into the form input.

```
state = {
  text: ''
}

render() {
  return (
    <form>
      <input type="text" value={this.state.text} />
      <input type="submit" />
    </form>
  )
}
```

---

### App Behavior

1. Users can use the form to add new task.
2. Users can delete a task by pressing a button next to it.
3. Users can mark a task as done by clicking on the task itself.
4. There should be obvious styling that differentiate between completed and incomplete tasks.

---

### Better UIUX

1. Form's text input should get cleared after adding a task
2. Do not allow users to add task with empty string
3. Make it look awesome!

### Contributors

<img src="https://avatars.githubusercontent.com/u/1714040" alt="Agustin" width="120"/>

[Agustin Castiarena](mailto:castiarena@gmail.com)

<img src="https://avatars.githubusercontent.com/u/92160569" alt="Malgorzata" width="120"/>

[Malgorzata Stano](mailto:stano.malgorzata@gmail.com)
