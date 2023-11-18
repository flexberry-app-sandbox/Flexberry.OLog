import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.o-log.caption'),
          title: i18n.t('forms.application.sitemap.o-log.title'),
          children: [{
            link: 'i-i-s-o-log-персонал-l',
            caption: i18n.t('forms.application.sitemap.o-log.i-i-s-o-log-персонал-l.caption'),
            title: i18n.t('forms.application.sitemap.o-log.i-i-s-o-log-персонал-l.title'),
            icon: 'folder',
            children: null
          }, {
            link: 'i-i-s-o-log-договор-l',
            caption: i18n.t('forms.application.sitemap.o-log.i-i-s-o-log-договор-l.caption'),
            title: i18n.t('forms.application.sitemap.o-log.i-i-s-o-log-договор-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-o-log-трансп-ср-l',
            caption: i18n.t('forms.application.sitemap.o-log.i-i-s-o-log-трансп-ср-l.caption'),
            title: i18n.t('forms.application.sitemap.o-log.i-i-s-o-log-трансп-ср-l.title'),
            icon: 'paperclip',
            children: null
          }, {
            link: 'i-i-s-o-log-должности-l',
            caption: i18n.t('forms.application.sitemap.o-log.i-i-s-o-log-должности-l.caption'),
            title: i18n.t('forms.application.sitemap.o-log.i-i-s-o-log-должности-l.title'),
            icon: 'address card',
            children: null
          }, {
            link: 'i-i-s-o-log-организация-l',
            caption: i18n.t('forms.application.sitemap.o-log.i-i-s-o-log-организация-l.caption'),
            title: i18n.t('forms.application.sitemap.o-log.i-i-s-o-log-организация-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-o-log-тч-раб-вод-авто-l',
            caption: i18n.t('forms.application.sitemap.o-log.i-i-s-o-log-тч-раб-вод-авто-l.caption'),
            title: i18n.t('forms.application.sitemap.o-log.i-i-s-o-log-тч-раб-вод-авто-l.title'),
            icon: 'folder',
            children: null
          }, {
            link: 'i-i-s-o-log-рук-отд-лог-l',
            caption: i18n.t('forms.application.sitemap.o-log.i-i-s-o-log-рук-отд-лог-l.caption'),
            title: i18n.t('forms.application.sitemap.o-log.i-i-s-o-log-рук-отд-лог-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-o-log-тч-движ-г-с-м-l',
            caption: i18n.t('forms.application.sitemap.o-log.i-i-s-o-log-тч-движ-г-с-м-l.caption'),
            title: i18n.t('forms.application.sitemap.o-log.i-i-s-o-log-тч-движ-г-с-м-l.title'),
            icon: 'paperclip',
            children: null
          }, {
            link: 'i-i-s-o-log-путевой-лист-l',
            caption: i18n.t('forms.application.sitemap.o-log.i-i-s-o-log-путевой-лист-l.caption'),
            title: i18n.t('forms.application.sitemap.o-log.i-i-s-o-log-путевой-лист-l.title'),
            icon: 'list',
            children: null
          }, {
            link: 'i-i-s-o-log-т-ч-задан-вод-l',
            caption: i18n.t('forms.application.sitemap.o-log.i-i-s-o-log-т-ч-задан-вод-l.caption'),
            title: i18n.t('forms.application.sitemap.o-log.i-i-s-o-log-т-ч-задан-вод-l.title'),
            icon: 'book',
            children: null
          }, {
            link: 'i-i-s-o-log-контрагент-l',
            caption: i18n.t('forms.application.sitemap.o-log.i-i-s-o-log-контрагент-l.caption'),
            title: i18n.t('forms.application.sitemap.o-log.i-i-s-o-log-контрагент-l.title'),
            icon: 'list',
            children: null
          }, {
            link: 'i-i-s-o-log-т-ч-водитель-l',
            caption: i18n.t('forms.application.sitemap.o-log.i-i-s-o-log-т-ч-водитель-l.caption'),
            title: i18n.t('forms.application.sitemap.o-log.i-i-s-o-log-т-ч-водитель-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-o-log-журнал-учета-l',
            caption: i18n.t('forms.application.sitemap.o-log.i-i-s-o-log-журнал-учета-l.caption'),
            title: i18n.t('forms.application.sitemap.o-log.i-i-s-o-log-журнал-учета-l.title'),
            icon: 'list',
            children: null
          }]
        }
      ]
    };
  }),
})