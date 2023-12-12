import { render } from '../render.js';
import SortView from '../view/sort-view.js';
import CreateForm from '../view/create-form-view.js';
import ListView from '../view/list-view.js';
import EditForm from '../view/edit-form-view.js';
import PointView from '../view/point-view.js';

const POINTS_MAX = 3;

export default class TripPresenter {
  sortViewComponent = new SortView();
  createViewFormComponent = new CreateForm();
  listViewComponent = new ListView();

  constructor({container}) {
    this.container = container;
  }

  init() {
    render(this.sortViewComponent, this.container);
    render(this.listViewComponent, this.container);
    render(new EditForm(), this.listViewComponent.getElement());

    for (let i = 0; i < POINTS_MAX; i++) {
      render (new PointView, this.listViewComponent.getElement());
    }
  }
}
