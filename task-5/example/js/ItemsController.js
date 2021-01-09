
// Create a ItemsController class
class ItemsController {
    // Set up the tasks and currentId property in the contructor
    constructor(currentId = 0) {
        this.items = [];
        this.currentId = currentId;
    }

    // Create the addTask method
    addItem(name, description, createdAt) {
        const item = {
            // Increment the currentId property
            id: this.currentId++,
            name: name,
            description: description,
            createdAt: createdAt
        };

        // Push the task to the tasks property
        this.items.push(item);
    }    

    loadItemsFromLocalStorage() {
        const storageItems = localStorage.getItem("items")
        if (storageItems) {
            const items = JSON.parse(storageItems)
            for (var i = 0, size = items.length; i < size; i++) {
                const item = items[i];
                this.items.push(item);
            }
        }
    }
}

