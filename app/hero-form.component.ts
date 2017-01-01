import { Component} from '@angular/core';

import { Hero } from './hero';

@Component({
    moduleId: module.id.replace("/dist/","/"),
    selector: 'hero-form',
    templateUrl: 'hero-form.component.html'
})

export class HeroFormComponent {
    powers = ['eally Smart', 'Super Flexible',
            'Super Hot', 'Weathr Changer'];

    model = new Hero(10, 'Vtp', this.powers[0], 'chuck overstreet');

    submitted = false;

    onSubmit(){this.submitted =true}

    get disagnotic(){ return JSON.stringify(this.model)}
    
    newHero() {
        this.model = new Hero(42, '', '');
    }

}