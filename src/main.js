import { RenderPosition, render } from './render.js';
import InfoTripView from './view/info-trip-view.js';
import FilterView from './view/filter-view.js';
import TripPresenter from './presenter/presenter.js';

const tripInfoElement = document.querySelector('.trip-main');
const filterElement = document.querySelector('.trip-controls__filters');
const contentTripElement = document.querySelector('.trip-events');
const boardPresenter = new TripPresenter({container: contentTripElement});

render(new InfoTripView(), tripInfoElement, RenderPosition.AFTERBEGIN);
render(new FilterView(), filterElement);

boardPresenter.init();
