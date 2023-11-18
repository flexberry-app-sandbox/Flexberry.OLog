import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-o-log-договор-l');
  this.route('i-i-s-o-log-договор-e',
  { path: 'i-i-s-o-log-договор-e/:id' });
  this.route('i-i-s-o-log-договор-e.new',
  { path: 'i-i-s-o-log-договор-e/new' });
  this.route('i-i-s-o-log-должности-l');
  this.route('i-i-s-o-log-должности-e',
  { path: 'i-i-s-o-log-должности-e/:id' });
  this.route('i-i-s-o-log-должности-e.new',
  { path: 'i-i-s-o-log-должности-e/new' });
  this.route('i-i-s-o-log-журнал-учета-l');
  this.route('i-i-s-o-log-журнал-учета-e',
  { path: 'i-i-s-o-log-журнал-учета-e/:id' });
  this.route('i-i-s-o-log-журнал-учета-e.new',
  { path: 'i-i-s-o-log-журнал-учета-e/new' });
  this.route('i-i-s-o-log-контрагент-l');
  this.route('i-i-s-o-log-контрагент-e',
  { path: 'i-i-s-o-log-контрагент-e/:id' });
  this.route('i-i-s-o-log-контрагент-e.new',
  { path: 'i-i-s-o-log-контрагент-e/new' });
  this.route('i-i-s-o-log-организация-l');
  this.route('i-i-s-o-log-организация-e',
  { path: 'i-i-s-o-log-организация-e/:id' });
  this.route('i-i-s-o-log-организация-e.new',
  { path: 'i-i-s-o-log-организация-e/new' });
  this.route('i-i-s-o-log-персонал-l');
  this.route('i-i-s-o-log-персонал-e',
  { path: 'i-i-s-o-log-персонал-e/:id' });
  this.route('i-i-s-o-log-персонал-e.new',
  { path: 'i-i-s-o-log-персонал-e/new' });
  this.route('i-i-s-o-log-путевой-лист-l');
  this.route('i-i-s-o-log-путевой-лист-e',
  { path: 'i-i-s-o-log-путевой-лист-e/:id' });
  this.route('i-i-s-o-log-путевой-лист-e.new',
  { path: 'i-i-s-o-log-путевой-лист-e/new' });
  this.route('i-i-s-o-log-рук-отд-лог-l');
  this.route('i-i-s-o-log-рук-отд-лог-e',
  { path: 'i-i-s-o-log-рук-отд-лог-e/:id' });
  this.route('i-i-s-o-log-рук-отд-лог-e.new',
  { path: 'i-i-s-o-log-рук-отд-лог-e/new' });
  this.route('i-i-s-o-log-т-ч-водитель-l');
  this.route('i-i-s-o-log-т-ч-водитель-e',
  { path: 'i-i-s-o-log-т-ч-водитель-e/:id' });
  this.route('i-i-s-o-log-т-ч-водитель-e.new',
  { path: 'i-i-s-o-log-т-ч-водитель-e/new' });
  this.route('i-i-s-o-log-т-ч-задан-вод-l');
  this.route('i-i-s-o-log-т-ч-задан-вод-e',
  { path: 'i-i-s-o-log-т-ч-задан-вод-e/:id' });
  this.route('i-i-s-o-log-т-ч-задан-вод-e.new',
  { path: 'i-i-s-o-log-т-ч-задан-вод-e/new' });
  this.route('i-i-s-o-log-трансп-ср-l');
  this.route('i-i-s-o-log-трансп-ср-e',
  { path: 'i-i-s-o-log-трансп-ср-e/:id' });
  this.route('i-i-s-o-log-трансп-ср-e.new',
  { path: 'i-i-s-o-log-трансп-ср-e/new' });
  this.route('i-i-s-o-log-тч-движ-г-с-м-l');
  this.route('i-i-s-o-log-тч-движ-г-с-м-e',
  { path: 'i-i-s-o-log-тч-движ-г-с-м-e/:id' });
  this.route('i-i-s-o-log-тч-движ-г-с-м-e.new',
  { path: 'i-i-s-o-log-тч-движ-г-с-м-e/new' });
  this.route('i-i-s-o-log-тч-раб-вод-авто-l');
  this.route('i-i-s-o-log-тч-раб-вод-авто-e',
  { path: 'i-i-s-o-log-тч-раб-вод-авто-e/:id' });
  this.route('i-i-s-o-log-тч-раб-вод-авто-e.new',
  { path: 'i-i-s-o-log-тч-раб-вод-авто-e/new' });
});

export default Router;
