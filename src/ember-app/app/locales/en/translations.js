import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISOLogДоговорLForm from './forms/i-i-s-o-log-договор-l';
import IISOLogДолжностиLForm from './forms/i-i-s-o-log-должности-l';
import IISOLogЖурналУчетаLForm from './forms/i-i-s-o-log-журнал-учета-l';
import IISOLogКонтрагентLForm from './forms/i-i-s-o-log-контрагент-l';
import IISOLogОрганизацияLForm from './forms/i-i-s-o-log-организация-l';
import IISOLogПерсоналLForm from './forms/i-i-s-o-log-персонал-l';
import IISOLogПутевойЛистLForm from './forms/i-i-s-o-log-путевой-лист-l';
import IISOLogРукОтдЛогLForm from './forms/i-i-s-o-log-рук-отд-лог-l';
import IISOLogТЧВодительLForm from './forms/i-i-s-o-log-т-ч-водитель-l';
import IISOLogТЧЗаданВодLForm from './forms/i-i-s-o-log-т-ч-задан-вод-l';
import IISOLogТранспСрLForm from './forms/i-i-s-o-log-трансп-ср-l';
import IISOLogТчДвижГСМLForm from './forms/i-i-s-o-log-тч-движ-г-с-м-l';
import IISOLogТчРабВодАвтоLForm from './forms/i-i-s-o-log-тч-раб-вод-авто-l';
import IISOLogДоговорEForm from './forms/i-i-s-o-log-договор-e';
import IISOLogДолжностиEForm from './forms/i-i-s-o-log-должности-e';
import IISOLogЖурналУчетаEForm from './forms/i-i-s-o-log-журнал-учета-e';
import IISOLogКонтрагентEForm from './forms/i-i-s-o-log-контрагент-e';
import IISOLogОрганизацияEForm from './forms/i-i-s-o-log-организация-e';
import IISOLogПерсоналEForm from './forms/i-i-s-o-log-персонал-e';
import IISOLogПутевойЛистEForm from './forms/i-i-s-o-log-путевой-лист-e';
import IISOLogРукОтдЛогEForm from './forms/i-i-s-o-log-рук-отд-лог-e';
import IISOLogТЧВодительEForm from './forms/i-i-s-o-log-т-ч-водитель-e';
import IISOLogТЧЗаданВодEForm from './forms/i-i-s-o-log-т-ч-задан-вод-e';
import IISOLogТранспСрEForm from './forms/i-i-s-o-log-трансп-ср-e';
import IISOLogТчДвижГСМEForm from './forms/i-i-s-o-log-тч-движ-г-с-м-e';
import IISOLogТчРабВодАвтоEForm from './forms/i-i-s-o-log-тч-раб-вод-авто-e';
import IISOLogДоговорModel from './models/i-i-s-o-log-договор';
import IISOLogДолжностиModel from './models/i-i-s-o-log-должности';
import IISOLogЖурналУчетаModel from './models/i-i-s-o-log-журнал-учета';
import IISOLogКонтрагентModel from './models/i-i-s-o-log-контрагент';
import IISOLogОрганизацияModel from './models/i-i-s-o-log-организация';
import IISOLogПерсоналModel from './models/i-i-s-o-log-персонал';
import IISOLogПутевойЛистModel from './models/i-i-s-o-log-путевой-лист';
import IISOLogРукОтдЛогModel from './models/i-i-s-o-log-рук-отд-лог';
import IISOLogТЧВодительModel from './models/i-i-s-o-log-т-ч-водитель';
import IISOLogТЧЗаданВодModel from './models/i-i-s-o-log-т-ч-задан-вод';
import IISOLogТранспСрModel from './models/i-i-s-o-log-трансп-ср';
import IISOLogТчДвижГСМModel from './models/i-i-s-o-log-тч-движ-г-с-м';
import IISOLogТчРабВодАвтоModel from './models/i-i-s-o-log-тч-раб-вод-авто';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-o-log-договор': IISOLogДоговорModel,
    'i-i-s-o-log-должности': IISOLogДолжностиModel,
    'i-i-s-o-log-журнал-учета': IISOLogЖурналУчетаModel,
    'i-i-s-o-log-контрагент': IISOLogКонтрагентModel,
    'i-i-s-o-log-организация': IISOLogОрганизацияModel,
    'i-i-s-o-log-персонал': IISOLogПерсоналModel,
    'i-i-s-o-log-путевой-лист': IISOLogПутевойЛистModel,
    'i-i-s-o-log-рук-отд-лог': IISOLogРукОтдЛогModel,
    'i-i-s-o-log-т-ч-водитель': IISOLogТЧВодительModel,
    'i-i-s-o-log-т-ч-задан-вод': IISOLogТЧЗаданВодModel,
    'i-i-s-o-log-трансп-ср': IISOLogТранспСрModel,
    'i-i-s-o-log-тч-движ-г-с-м': IISOLogТчДвижГСМModel,
    'i-i-s-o-log-тч-раб-вод-авто': IISOLogТчРабВодАвтоModel
  },

  'application-name': 'O log',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'O log',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'O log',
          title: 'O log'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'o-log': {
          caption: 'OLog',
          title: 'OLog',
          'i-i-s-o-log-персонал-l': {
            caption: 'Персонал',
            title: ''
          },
          'i-i-s-o-log-договор-l': {
            caption: 'Договор',
            title: ''
          },
          'i-i-s-o-log-трансп-ср-l': {
            caption: 'Трансп ср',
            title: ''
          },
          'i-i-s-o-log-должности-l': {
            caption: 'Должности',
            title: ''
          },
          'i-i-s-o-log-организация-l': {
            caption: 'Организация',
            title: ''
          },
          'i-i-s-o-log-тч-раб-вод-авто-l': {
            caption: 'Тч раб вод авто',
            title: ''
          },
          'i-i-s-o-log-рук-отд-лог-l': {
            caption: 'Рук отд лог',
            title: ''
          },
          'i-i-s-o-log-тч-движ-г-с-м-l': {
            caption: 'Тч движ ГСМ',
            title: ''
          },
          'i-i-s-o-log-путевой-лист-l': {
            caption: 'Путевой лист',
            title: ''
          },
          'i-i-s-o-log-т-ч-задан-вод-l': {
            caption: 'Т ч задан вод',
            title: ''
          },
          'i-i-s-o-log-контрагент-l': {
            caption: 'Контрагент',
            title: ''
          },
          'i-i-s-o-log-т-ч-водитель-l': {
            caption: 'Т ч водитель',
            title: ''
          },
          'i-i-s-o-log-журнал-учета-l': {
            caption: 'Журнал учета',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-o-log-договор-l': IISOLogДоговорLForm,
    'i-i-s-o-log-должности-l': IISOLogДолжностиLForm,
    'i-i-s-o-log-журнал-учета-l': IISOLogЖурналУчетаLForm,
    'i-i-s-o-log-контрагент-l': IISOLogКонтрагентLForm,
    'i-i-s-o-log-организация-l': IISOLogОрганизацияLForm,
    'i-i-s-o-log-персонал-l': IISOLogПерсоналLForm,
    'i-i-s-o-log-путевой-лист-l': IISOLogПутевойЛистLForm,
    'i-i-s-o-log-рук-отд-лог-l': IISOLogРукОтдЛогLForm,
    'i-i-s-o-log-т-ч-водитель-l': IISOLogТЧВодительLForm,
    'i-i-s-o-log-т-ч-задан-вод-l': IISOLogТЧЗаданВодLForm,
    'i-i-s-o-log-трансп-ср-l': IISOLogТранспСрLForm,
    'i-i-s-o-log-тч-движ-г-с-м-l': IISOLogТчДвижГСМLForm,
    'i-i-s-o-log-тч-раб-вод-авто-l': IISOLogТчРабВодАвтоLForm,
    'i-i-s-o-log-договор-e': IISOLogДоговорEForm,
    'i-i-s-o-log-должности-e': IISOLogДолжностиEForm,
    'i-i-s-o-log-журнал-учета-e': IISOLogЖурналУчетаEForm,
    'i-i-s-o-log-контрагент-e': IISOLogКонтрагентEForm,
    'i-i-s-o-log-организация-e': IISOLogОрганизацияEForm,
    'i-i-s-o-log-персонал-e': IISOLogПерсоналEForm,
    'i-i-s-o-log-путевой-лист-e': IISOLogПутевойЛистEForm,
    'i-i-s-o-log-рук-отд-лог-e': IISOLogРукОтдЛогEForm,
    'i-i-s-o-log-т-ч-водитель-e': IISOLogТЧВодительEForm,
    'i-i-s-o-log-т-ч-задан-вод-e': IISOLogТЧЗаданВодEForm,
    'i-i-s-o-log-трансп-ср-e': IISOLogТранспСрEForm,
    'i-i-s-o-log-тч-движ-г-с-м-e': IISOLogТчДвижГСМEForm,
    'i-i-s-o-log-тч-раб-вод-авто-e': IISOLogТчРабВодАвтоEForm
  },

});

export default translations;
