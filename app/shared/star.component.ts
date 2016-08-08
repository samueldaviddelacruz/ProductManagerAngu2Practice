import {Component, OnChanges,Input
          ,Output,EventEmitter} from 'angular2/core'
@Component({
    selector: 'ai-star',
    templateUrl: 'app/shared/star.component.html',
    styleUrls: ['app/shared/star.component.css']
})
export class StarComponent implements OnChanges {
   
    @Input() 
    rating: number;
    
    startWidth: number;
    
    @Output()
    ratingClicked:EventEmitter<string> = new EventEmitter<string>();



    ngOnChanges(): void {
        this.startWidth = this.rating * 86 / 5
    }

    onClick(){
        this.ratingClicked.emit(`The Rating ${this.rating} was clicked!`)
    }

}