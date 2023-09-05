import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Dashboard");
    }

    async getHtml(){
        return `
         <h2>dsads</h2> 
         <p>ddddddddddddddddddddddddddddddddddddddd</p>
         <p>
          <a href="/posts" data-link>view posts</a>.
         </p>
        `;
    }
}
