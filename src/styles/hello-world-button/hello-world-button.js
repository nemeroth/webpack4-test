import './hello-world-button.scss';


class helloWorldButton {
    buttonCssClass = "hello-world-text";

    render() {
        const button = document.createElement('button');
        const body = document.querySelector('body');

        button.innerHTML = 'Hello World';
        button.classList.add('hello-world-button');

        button.onclick = function () {
            const p = document.createElement('p');
            p.innerHTML = "Hello World";
            console.log(this.buttonCssClass);
            p.classList.add(this.buttonCssClass);
            body.appendChild(p);
        }
        body.appendChild(button);
    };



};

export default helloWorldButton