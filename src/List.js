class List {
    constructor(dataStore = [], listsize = 0, pos = 0) {
        this.dataStore = dataStore;
        this.listsize = listsize;
        this.pos = pos
    }

    clear() {
        this.dataStore = [];
        this.listsize = 0;
        this.listsize = 0;
    }

    find(element) {
        return this.dataStore.findIndex(e => e == element);
    }

    insert(element, after) {
        let afterElementPosition = this.find(after);
        this.dataStore.splice(afterElementPosition + 1, 0, element);
        this.listsize++;
        return true;
    }

    append(element) {
        this.dataStore = [...this.dataStore, element];
        this.listsize++
    }

    remove(element) {
        let elementRemoveSize = this.find(element);
        this.dataStore.splice(elementRemoveSize, 1);
        this.listsize--;
    }


    displayList() {
        this.dataStore.forEach((element, index) => {
            console.log(`${element} : ${index}`)
        });
    }

}