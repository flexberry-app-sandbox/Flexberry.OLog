import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-o-log-персонал', 'Unit | Serializer | i-i-s-o-log-персонал', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-o-log-персонал',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'model:i-i-s-o-log-договор',
    'model:i-i-s-o-log-должности',
    'model:i-i-s-o-log-журнал-учета',
    'model:i-i-s-o-log-контрагент',
    'model:i-i-s-o-log-организация',
    'model:i-i-s-o-log-персонал',
    'model:i-i-s-o-log-путевой-лист',
    'model:i-i-s-o-log-рук-отд-лог',
    'model:i-i-s-o-log-т-ч-водитель',
    'model:i-i-s-o-log-т-ч-задан-вод',
    'model:i-i-s-o-log-трансп-ср',
    'model:i-i-s-o-log-тч-движ-г-с-м',
    'model:i-i-s-o-log-тч-раб-вод-авто',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
