--->How to setup and run:
        1. Download the zip file.
        2. After downloading it extract the zip file.
        3. Open Visual studio code
        4. Go to File -> open folder (select the extracted folder)
        5. Now you can see all your files in VS Code editor.
        6. To Run the code go to terminal and click on the new terminal
        7. Execute the below commands to run the code in the terminal.
                1. npm install react-router-dom
                2. npm install bootstrap
                3. npm start

--->Project Structure:
    1. It is a ToDo list application that allows users to add,edit,delete tasks and mark tasks as completed.
    2. The project has 3 main components namely AddTask,EditTask,and DeleteTask.
    3. The Task List component consists of :
        ->This component displays the tasks with task name description and its status of completion.
                1.It allows users to mark tasks as completed by clicking on the checkbox.
                ![image](https://github.com/kbhargavi333/aulacube/assets/94820947/c9b67358-a722-4ec4-bd7e-a03ca9831537)
                2.It also includes a button to delete the tasks.
                ![image](https://github.com/kbhargavi333/aulacube/assets/94820947/25ced57b-5d73-435b-a2f9-f4983b289fa7)
                3.It provides a visual indication of completed tasks through strike-off.
                ![image](https://github.com/kbhargavi333/aulacube/assets/94820947/6c153c61-a7aa-483c-95ab-665e52de9d2a)
                4.It consists of Edit task page button and Add task page button by clicking on them we will redirect to the respective web page.
   4. The Edit Task component consists of : 
           ->It includes a form to edit existing tasks.
                   1.The fields in the form include Task name, Task description, Priority level.
                   ![image](https://github.com/kbhargavi333/aulacube/assets/94820947/98aec1b2-53de-470e-a48a-cf0fbbf0380a)
                   2.By using edit option we can edit the task, It consists of update task and cancel buttons.
                   ![image](https://github.com/kbhargavi333/aulacube/assets/94820947/0fa7d818-d85a-4f42-8d7b-a2e952dda0ca)
                   3.It also consists of the delete button.
                   ![image](https://github.com/kbhargavi333/aulacube/assets/94820947/bbf02c36-71f4-4f15-8069-96cdc934412e)
   5. The Add Task component consists of :
           -> It includes a form to add a task.
                   1. The fields in the form include Task name, Task description, Priority level.
                   ![image](https://github.com/kbhargavi333/aulacube/assets/94820947/46878670-6dc6-47bb-85a0-e5b01c4c5d72)
                   2.It includes validation that ensures task name and description are required.
                   ![image](https://github.com/kbhargavi333/aulacube/assets/94820947/b370d73f-bac0-40a9-ae75-ded9119f5839)
--->Design Choices and Additional features:
    1. Navbar:
        ->Navigation Icons:
                1.Used clear and recognizable icons for navigation (home, task list, edit task and add task.).
                2.Icons provide a visual clue and save space.
    2.Task List:
        ->Task Representation:
                1.Displayed tasks with a title and additional details.
        ->Strike-Off Animation:
                1.Included a smooth strike-off animation for completed tasks.
                2.Provide a visual indication of completion.
        ->Deletion Confirmation:
                1.Implemented a confirmation modal for task deletion to prevent accidental deletions.
        ->Quick Actions:
                1.Include quick actions like edit and delete buttons for each task.
        ->Navigation Back to Task List:
                1.Included two buttosn  to navigate back to the add task and edit task.
        ->Checkbox Placement:
                1.Position the checkbox within the card, making it easy for users to mark tasks as completed.

    3. Edit List:
        ->Displaying:
                1.Clearly displayed details of the selected task.
                2.Used a clean and organized layout.
        ->Editing:
                1.Providing editable fields for task details.
                2.Implement real-time updates as users edit.
        ->Deleting:
                1.Included a confirmation modal before deleting a task.
                2.Allowing users to go back to the task list without saving changes.
        ->Card:
                1.Individual Task Cards:
                2.Representing each task as a separate card.
                3.Included task name, description, and priority within the card.
        ->Card Styling:
                1.Applied a consistent card design for a neat and organized look.
                2.Used subtle shadows, borders, or background colors to distinguish cards.

   4.Icons for Actions:
        ->Use icons or emojis to represent actions like deleting ,editing within the edit task card.
        ->Confirmation Emojis:
                1.Integrate emojis in confirmation modals to convey feelings.






        
