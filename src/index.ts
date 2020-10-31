interface StyleElement {
    selector: string;
    css: string;
}

class DynamicStylesService {
    private parent: HTMLElement = document.head;
    private tag: HTMLElement = document.createElement('style');
    private elements: {[id: string]: StyleElement} = {};

    constructor() {
        this.parent.appendChild(this.tag);
    }

    public setStyles = ({ id, selector, css }: { id: string, selector: string, css: string }) => {
        this.elements[id] = { selector, css };
        this._updateTag();
    };

    private _updateTag = () => {
        this.tag.innerHTML = Object.keys(this.elements)
            .map(key => `${this.elements[key].selector} { ${this.elements[key].css} }`)
            .join((' '));
    };

    public remove = (id: string) => {
        if (this.elements[id]) {
            delete this.elements[id];
            this._updateTag();
        }
    };
}

export const dynamicStylesService = new DynamicStylesService();
