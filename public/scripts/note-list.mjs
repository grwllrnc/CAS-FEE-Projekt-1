/*
 * Note list
 */

class NoteList {
    constructor(model, node) {
        this.node = node;
        this.notes = model.find();
    }

    render() {
        return `
            <ul>
            ${this.notes.map((note) => `*
                <div class="note-title">
                    <h3>${note.title}</h3>
                </div>
                <div class="note-body">
                    <p>${note.note}</p>
                </div>
                <div class="note-meta">
                    <div class="note-date">Fälligkeit: ${note.date}</div>
                    <div class="note-importance">Priorität: ${note.importance}</div>
                </div>
            `)}
        `;
    }

    // render() {
    //     this.notes.forEach((note) => {
    //         const wrapper = document.createElement('div');
    //         wrapper.setAttribute('class', 'note-wrapper');
    //         wrapper.innerHTML = note;
    //         this.node.appendChild(wrapper);
    //     });
    // }
}

// eslint-disable-next-line import/prefer-default-export
export { NoteList };
