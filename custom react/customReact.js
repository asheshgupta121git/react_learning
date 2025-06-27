function customRender(reactElement,container){
   
   /* const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.targer)

    container.appendChild(domElement)
    */
   let domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;

    for (const p in reactElement.props) {
        domElement.setAttribute(p,reactElement.props[p]);
    }
    container.appendChild(domElement);
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com/',
        targer: '_blank'
    },
    children: 'click me to google'
}

let root = document.querySelector('#root');

customRender(reactElement,root);