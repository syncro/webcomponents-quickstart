



export class MyElement extends HTMLElement {

    constructor() {
        super();
        this.insertAdjacentHTML('afterbegin', '<h1>Hello</h1>');
    }
}