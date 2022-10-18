class Task {
    #description
    #isCompleted
    constructor(description, isCompleted = false) {
        this.#description = description
        this.#isCompleted = isCompleted
    }

    get description() {
        return this.#description
    }

    get isCompleted() {
        return this.#isCompleted
    }

    get isCompletedToString() {
        return this.#isCompleted ? 'completa' : 'incompleta'
    }

    toString() {
        return `A tarefa ${this.#description} e está ${this.isCompletedToString}!`
    }

    toObject() {
        return {
            description: this.#description,
            isCompleted: this.#isCompleted
        }
    }

    toggleIsCompleted() {
        this.#isCompleted = !this.#isCompleted
    }

    set isCompleted(value) {
        if (typeof value !== 'boolean') {
            console.log('Invalid data type!')
            return
        }

        this.#isCompleted = value
    }
}